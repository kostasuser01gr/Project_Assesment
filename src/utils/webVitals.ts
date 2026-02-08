// Web Vitals monitoring for Core Web Vitals
import { onCLS, onFID, onFCP, onLCP, onTTFB, onINP, type Metric } from 'web-vitals'

const WEB_VITALS_ENDPOINT = import.meta.env.VITE_WEB_VITALS_ENDPOINT

export function initWebVitals() {
  const sendToAnalytics = (metric: Metric) => {
    // Log to console in development
    if (import.meta.env.DEV) {
      console.log(`[Web Vitals] ${metric.name}:`, metric.value, metric)
    }

    // Send to analytics if gtag is available
    if (window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      })
    }

    // Send to custom endpoint if configured
    if (WEB_VITALS_ENDPOINT) {
      const body = JSON.stringify({
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
        navigationType: metric.navigationType,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: Date.now(),
      })

      // Use sendBeacon if available
      if (navigator.sendBeacon) {
        navigator.sendBeacon(WEB_VITALS_ENDPOINT, body)
      } else {
        fetch(WEB_VITALS_ENDPOINT, {
          body,
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          keepalive: true,
        }).catch(console.error)
      }
    }
  }

  // Register all Web Vitals
  onCLS(sendToAnalytics)
  onFID(sendToAnalytics)
  onFCP(sendToAnalytics)
  onLCP(sendToAnalytics)
  onTTFB(sendToAnalytics)
  onINP(sendToAnalytics)
}

// Performance observer for custom metrics
export function observePerformance() {
  if ('PerformanceObserver' in window) {
    // Long tasks
    try {
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.warn('Long task detected:', entry.duration, entry)
          
          if (window.gtag) {
            window.gtag('event', 'long_task', {
              value: Math.round(entry.duration),
              event_category: 'Performance',
              non_interaction: true,
            })
          }
        }
      })
      longTaskObserver.observe({ entryTypes: ['longtask'] })
    } catch (e) {
      console.log('Long task observer not supported')
    }

    // Layout shifts
    try {
      const layoutShiftObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            console.warn('Layout shift detected:', entry)
          }
        }
      })
      layoutShiftObserver.observe({ entryTypes: ['layout-shift'] })
    } catch (e) {
      console.log('Layout shift observer not supported')
    }
  }
}
