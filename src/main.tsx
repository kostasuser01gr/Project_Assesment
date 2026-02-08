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

// Register service worker for PWA
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('SW registered:', registration)
      })
      .catch((error) => {
        console.log('SW registration failed:', error)
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
