// Performance monitoring component
import { useEffect } from 'react'
import { onCLS, onFCP, onFID, onLCP, onTTFB, type Metric } from 'web-vitals'

interface PerformanceMonitorProps {
  onMetric?: (metric: Metric) => void
  debug?: boolean
}

export function PerformanceMonitor({ onMetric, debug = false }: PerformanceMonitorProps) {
  useEffect(() => {
    const sendMetric = (metric: Metric) => {
      if (debug) {
        console.log(`[Performance] ${metric.name}:`, {
          value: metric.value,
          rating: metric.rating,
          delta: metric.delta,
        })
      }

      // Call custom handler
      onMetric?.(metric)

      // Send to analytics if available
      if (window.gtag) {
        window.gtag('event', metric.name, {
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_category: 'Web Vitals',
          event_label: metric.id,
          non_interaction: true,
        })
      }
    }

    // Register all web vitals
    onCLS(sendMetric)
    onFID(sendMetric)
    onFCP(sendMetric)
    onLCP(sendMetric)
    onTTFB(sendMetric)
  }, [onMetric, debug])

  return null
}

// Error Boundary component
import { captureException } from '@/utils/errorTracking'
import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log to error tracking service
    captureException(error, {
      componentStack: errorInfo.componentStack,
    })

    // Call custom error handler
    this.props.onError?.(error, errorInfo)

    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Something went wrong</h2>
              <p className="mb-6 text-gray-600">
                We're sorry for the inconvenience. Please try refreshing the page.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Refresh Page
              </button>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
}
