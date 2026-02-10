// ============================================================================
// LOADING STATES - Skeleton screens, spinners, and loading indicators
// ============================================================================

import { motion } from 'motion/react'
import { Sun } from 'lucide-react'

// ==========================================
// SKELETON PRIMITIVES
// ==========================================

export function Skeleton({
  className = '',
  width,
  height,
}: {
  className?: string
  width?: string | number
  height?: string | number
}) {
  return (
    <div
      className={`skeleton-premium rounded-md ${className}`}
      style={{ width, height }}
      aria-hidden
    />
  )
}

// ==========================================
// PAGE SKELETON
// ==========================================

export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-background animate-pulse" aria-label="Loading page">
      {/* Header skeleton */}
      <div className="h-16 bg-white border-b border-border">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <Skeleton width={120} height={24} />
          <div className="flex gap-6">
            <Skeleton width={60} height={16} />
            <Skeleton width={60} height={16} />
            <Skeleton width={60} height={16} />
          </div>
          <Skeleton width={40} height={40} className="rounded-full" />
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="h-[70vh] bg-neutral-100 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <Skeleton width={300} height={48} className="mx-auto" />
            <Skeleton width={400} height={24} className="mx-auto" />
            <Skeleton width={160} height={48} className="mx-auto rounded-full" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="container mx-auto px-4 py-16 space-y-16">
        <div className="text-center space-y-4">
          <Skeleton width={200} height={32} className="mx-auto" />
          <Skeleton width={400} height={16} className="mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4">
              <Skeleton height={200} className="w-full rounded-xl" />
              <Skeleton width="80%" height={20} />
              <Skeleton width="60%" height={16} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ==========================================
// PRODUCT CARD SKELETON
// ==========================================

export function ProductCardSkeleton() {
  return (
    <div
      className="rounded-2xl overflow-hidden border border-border bg-white"
      aria-label="Loading product"
    >
      <Skeleton height={280} className="w-full" />
      <div className="p-5 space-y-3">
        <Skeleton height={20} width="75%" />
        <Skeleton height={14} width="100%" />
        <Skeleton height={14} width="60%" />
        <div className="flex items-center justify-between pt-2">
          <Skeleton height={24} width={80} />
          <Skeleton height={36} width={100} className="rounded-full" />
        </div>
      </div>
    </div>
  )
}

// ==========================================
// REVIEW SKELETON
// ==========================================

export function ReviewSkeleton() {
  return (
    <div className="p-6 rounded-2xl border border-border bg-white" aria-label="Loading review">
      <div className="flex items-center gap-3 mb-4">
        <Skeleton width={40} height={40} className="rounded-full" />
        <div className="space-y-1.5">
          <Skeleton width={120} height={14} />
          <Skeleton width={80} height={12} />
        </div>
      </div>
      <Skeleton height={14} width="100%" className="mb-2" />
      <Skeleton height={14} width="90%" className="mb-2" />
      <Skeleton height={14} width="60%" />
    </div>
  )
}

// ==========================================
// BRANDED SPINNER
// ==========================================

export function SunNinjaSpinner({ size = 48, text }: { size?: number; text?: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-3"
      role="status"
      aria-label="Loading"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
      >
        <Sun className="text-[#FFD700]" style={{ width: size, height: size }} />
      </motion.div>
      {text && <p className="text-sm text-muted-foreground animate-pulse">{text}</p>}
      <span className="sr-only">Loading...</span>
    </div>
  )
}

// ==========================================
// FULL PAGE LOADER
// ==========================================

export function FullPageLoader({ message = 'Loading...' }: { message?: string }) {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <SunNinjaSpinner size={56} />
        <p className="text-sm font-medium text-muted-foreground">{message}</p>
      </motion.div>
    </div>
  )
}

// ==========================================
// INLINE LOADING BAR
// ==========================================

export function LoadingBar({ progress }: { progress?: number }) {
  return (
    <div className="w-full h-1 bg-neutral-100 overflow-hidden rounded-full">
      {progress !== undefined ? (
        <motion.div
          className="h-full bg-gradient-to-r from-[#0EA5E9] to-[#FF6B6B] rounded-full"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      ) : (
        <motion.div
          className="h-full w-1/3 bg-gradient-to-r from-[#0EA5E9] to-[#FF6B6B] rounded-full"
          animate={{ x: ['-100%', '400%'] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        />
      )}
    </div>
  )
}

// ==========================================
// BUTTON LOADING STATE
// ==========================================

export function ButtonSpinner({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
      className={`w-4 h-4 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
      <path
        d="M12 2a10 10 0 0 1 10 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </motion.svg>
  )
}
