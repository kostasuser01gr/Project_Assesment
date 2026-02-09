// Analytics utility for Google Analytics and custom events
type GtagCommand = 'config' | 'event' | 'js' | 'set'
type GtagParams = Record<string, unknown>

declare global {
  interface Window {
    gtag?: (command: GtagCommand, ...args: (string | Date | GtagParams)[]) => void
    dataLayer?: unknown[]
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID
const ENABLE_ANALYTICS = import.meta.env.VITE_ENABLE_ANALYTICS === 'true'

export function initAnalytics() {
  if (!ENABLE_ANALYTICS || !GA_MEASUREMENT_ID) {
    console.log('Analytics disabled or GA Measurement ID not configured')
    return
  }

  // Load Google Analytics script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  // Initialize gtag
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(command: GtagCommand, ...args: (string | Date | Record<string, unknown>)[]) {
    window.dataLayer!.push([command, ...args])
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false, // We'll handle page views manually
  })
}

export function trackPageView(path: string, title?: string) {
  if (!ENABLE_ANALYTICS || !window.gtag) return

  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title || document.title,
  })
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | unknown>
) {
  if (!ENABLE_ANALYTICS || !window.gtag) {
    console.log('Event:', eventName, params)
    return
  }

  if (params) {
    window.gtag('event', eventName, params)
  } else {
    window.gtag('event', eventName)
  }
}

export function trackClick(elementName: string, additionalData?: Record<string, unknown>) {
  trackEvent('click', {
    category: 'engagement',
    label: elementName,
    ...additionalData,
  })
}

export function trackPurchase(transactionId: string, value: number, items: Array<Record<string, unknown>>) {
  trackEvent('purchase', {
    transaction_id: transactionId,
    value,
    currency: 'USD',
    items,
  })
}

export function trackAddToCart(item: {
  id: string
  name: string
  price: number
  quantity: number
}) {
  trackEvent('add_to_cart', {
    currency: 'USD',
    value: item.price * item.quantity,
    items: [item],
  })
}

export function trackSearch(searchTerm: string) {
  trackEvent('search', {
    search_term: searchTerm,
  })
}
