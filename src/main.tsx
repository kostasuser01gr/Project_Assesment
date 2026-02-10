import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import './styles/index.css'
import { initAnalytics } from './utils/analytics.ts'
import { initErrorTracking } from './utils/errorTracking.ts'
import { AppProvider } from './utils/store'
import { initWebVitals, observePerformance } from './utils/webVitals.ts'

// Initialize monitoring and analytics
initErrorTracking()
initAnalytics()
initWebVitals()
observePerformance()

// Register service worker for PWA (only if sw.js exists)
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    fetch('/sw.js', { method: 'HEAD' })
      .then((response) => {
        if (response.ok) {
          navigator.serviceWorker.register('/sw.js').catch(() => {
            // Service worker registration failed silently
          })
        }
      })
      .catch(() => {
        // No service worker available
      })
  })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
)
