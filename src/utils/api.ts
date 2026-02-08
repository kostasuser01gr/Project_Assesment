// API utility with error handling and retry logic

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api'

export class APIError extends Error {
  constructor(
    public status: number,
    message: string,
    public data?: any
  ) {
    super(message)
    this.name = 'APIError'
  }
}

interface RequestConfig extends RequestInit {
  retries?: number
  retryDelay?: number
}

async function fetchWithRetry(url: string, config: RequestConfig = {}): Promise<Response> {
  const { retries = 3, retryDelay = 1000, ...fetchConfig } = config
  let lastError: Error | null = null

  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, fetchConfig)

      // Don't retry on client errors (4xx)
      if (response.status >= 400 && response.status < 500) {
        return response
      }

      // Retry on server errors (5xx) or network errors
      if (response.ok || i === retries - 1) {
        return response
      }
    } catch (error) {
      lastError = error as Error
      if (i === retries - 1) break
      await new Promise((resolve) => setTimeout(resolve, retryDelay * (i + 1)))
    }
  }

  throw lastError || new Error('Request failed after retries')
}

async function request<T>(endpoint: string, config: RequestConfig = {}): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`

  const defaultConfig: RequestConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
    retries: 3,
    retryDelay: 1000,
  }

  const response = await fetchWithRetry(url, { ...defaultConfig, ...config })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new APIError(
      response.status,
      error.message || `HTTP ${response.status}: ${response.statusText}`,
      error
    )
  }

  return response.json()
}

export const api = {
  get: <T>(endpoint: string, config?: RequestConfig) =>
    request<T>(endpoint, { ...config, method: 'GET' }),

  post: <T>(endpoint: string, data?: any, config?: RequestConfig) =>
    request<T>(endpoint, {
      ...config,
      method: 'POST',
      body: JSON.stringify(data),
    }),

  put: <T>(endpoint: string, data?: any, config?: RequestConfig) =>
    request<T>(endpoint, {
      ...config,
      method: 'PUT',
      body: JSON.stringify(data),
    }),

  patch: <T>(endpoint: string, data?: any, config?: RequestConfig) =>
    request<T>(endpoint, {
      ...config,
      method: 'PATCH',
      body: JSON.stringify(data),
    }),

  delete: <T>(endpoint: string, config?: RequestConfig) =>
    request<T>(endpoint, { ...config, method: 'DELETE' }),
}

// Example usage:
/*
try {
  const products = await api.get<Product[]>('/products')
  const newProduct = await api.post<Product>('/products', { name: 'Test' })
} catch (error) {
  if (error instanceof APIError) {
    console.error(`API Error ${error.status}:`, error.message)
  }
}
*/
