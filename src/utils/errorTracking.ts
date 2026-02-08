// Error Tracking with Sentry
import * as Sentry from '@sentry/react'

const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN
const ENVIRONMENT = import.meta.env.VITE_SENTRY_ENVIRONMENT || 'development'
const ENABLE_ERROR_TRACKING = import.meta.env.VITE_ENABLE_ERROR_TRACKING === 'true'

export function initErrorTracking() {
  if (!ENABLE_ERROR_TRACKING || !SENTRY_DSN) {
    console.log('Error tracking disabled or Sentry DSN not configured')
    return
  }

  Sentry.init({
    dsn: SENTRY_DSN,
    environment: ENVIRONMENT,
    integrations: [
      // Note: BrowserTracing and Replay require separate imports in newer Sentry versions
      // Temporarily disabled for build compatibility
      // new Sentry.BrowserTracing({
      //   tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
      // }),
      // new Sentry.Replay({
      //   maskAllText: false,
      //   blockAllMedia: false,
      // }),
    ],
    tracesSampleRate: parseFloat(import.meta.env.VITE_SENTRY_TRACES_SAMPLE_RATE || '1.0'),
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    beforeSend(event, hint) {
      // Filter out development errors or add custom logic
      if (ENVIRONMENT === 'development') {
        console.error('Sentry Event:', event, hint)
      }
      return event
    },
  })
}

export function captureException(error: Error, context?: Record<string, any>) {
  if (ENABLE_ERROR_TRACKING) {
    Sentry.captureException(error, { extra: context })
  } else {
    console.error('Error:', error, context)
  }
}

export function captureMessage(message: string, level: Sentry.SeverityLevel = 'info') {
  if (ENABLE_ERROR_TRACKING) {
    Sentry.captureMessage(message, level)
  } else {
    console.log(`[${level}] ${message}`)
  }
}

export function setUserContext(user: { id: string; email?: string; username?: string }) {
  if (ENABLE_ERROR_TRACKING) {
    Sentry.setUser(user)
  }
}

export function clearUserContext() {
  if (ENABLE_ERROR_TRACKING) {
    Sentry.setUser(null)
  }
}
