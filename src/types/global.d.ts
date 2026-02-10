// Global type definitions for Sun Ninja project

// Google Analytics gtag types
interface GtagEvent {
  (command: 'event', eventName: string, eventParams?: Record<string, unknown>): void
  (command: 'config', targetId: string, config?: Record<string, unknown>): void
}

declare global {
  interface Window {
    gtag?: GtagEvent
    dataLayer?: unknown[]
  }
}

export {}
