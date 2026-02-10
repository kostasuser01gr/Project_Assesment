// ============================================================================
// ERROR BOUNDARY & ERROR STATES
// ============================================================================

import { AlertTriangle, RefreshCw, Home, WifiOff, Search, FileX } from 'lucide-react'
import { motion } from 'motion/react'
import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Link } from 'react-router'

// ==========================================
// ERROR BOUNDARY (Class Component)
// ==========================================

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    // In production, send to error tracking service
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback
      return <ErrorPage500 onRetry={() => this.setState({ hasError: false, error: null })} />
    }
    return this.props.children
  }
}

// ==========================================
// 404 PAGE
// ==========================================

export function ErrorPage404() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
          className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#FFD700]/10 mb-6"
        >
          <Search className="w-10 h-10 text-[#FFD700]" />
        </motion.div>

        <h1 className="text-6xl font-bold text-foreground mb-3">404</h1>
        <h2 className="text-xl font-semibold mb-3">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0EA5E9] text-white font-semibold text-sm hover:bg-[#0284C7] transition-colors"
          >
            <Home className="w-4 h-4" /> Go Home
          </Link>
          <Link
            to="/products/sun-ninja-tents"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border font-semibold text-sm hover:bg-neutral-50 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

// ==========================================
// 500 ERROR PAGE
// ==========================================

export function ErrorPage500({ onRetry }: { onRetry?: () => void }) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
          className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-50 mb-6"
        >
          <AlertTriangle className="w-10 h-10 text-red-500" />
        </motion.div>

        <h1 className="text-4xl font-bold text-foreground mb-3">Something went wrong</h1>
        <p className="text-muted-foreground mb-8">
          We encountered an unexpected error. Our team has been notified and is working on a fix.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onRetry || (() => window.location.reload())}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0EA5E9] text-white font-semibold text-sm hover:bg-[#0284C7] transition-colors"
          >
            <RefreshCw className="w-4 h-4" /> Try Again
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border font-semibold text-sm hover:bg-neutral-50 transition-colors"
          >
            <Home className="w-4 h-4" /> Go Home
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

// ==========================================
// OFFLINE STATE
// ==========================================

export function OfflineState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-amber-500 text-white px-4 py-2 flex items-center justify-center gap-2 text-sm font-medium"
    >
      <WifiOff className="w-4 h-4" />
      <span>You're offline. Some features may not be available.</span>
    </motion.div>
  )
}

// ==========================================
// EMPTY STATE
// ==========================================

export function EmptyState({
  icon: Icon = FileX,
  title = 'No results found',
  description = 'Try adjusting your search or filters.',
  actionLabel,
  onAction,
}: {
  icon?: typeof FileX
  title?: string
  description?: string
  actionLabel?: string
  onAction?: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16 text-center"
    >
      <div className="w-20 h-20 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-neutral-400" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-sm mb-6">{description}</p>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="px-6 py-2.5 rounded-xl bg-[#0EA5E9] text-white font-semibold text-sm hover:bg-[#0284C7] transition-colors"
        >
          {actionLabel}
        </button>
      )}
    </motion.div>
  )
}

// ==========================================
// NETWORK ERROR INLINE
// ==========================================

export function NetworkError({ onRetry }: { onRetry: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-6 rounded-2xl border border-red-200 bg-red-50 text-center"
    >
      <WifiOff className="w-8 h-8 text-red-400 mx-auto mb-3" />
      <h4 className="font-semibold text-red-800 mb-1">Connection error</h4>
      <p className="text-sm text-red-600 mb-4">
        Unable to load data. Please check your connection and try again.
      </p>
      <button
        onClick={onRetry}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-100 text-red-700 text-sm font-medium hover:bg-red-200 transition-colors"
      >
        <RefreshCw className="w-3.5 h-3.5" /> Retry
      </button>
    </motion.div>
  )
}
