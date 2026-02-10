import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { socialProofService } from '../../services/social-proof/SocialProofService'

export const LiveViewerCounter = () => {
  const [viewerCount, setViewerCount] = useState(socialProofService.getCurrentViewers())

  useEffect(() => {
    // Update viewer count every 10-15 seconds with slight variation
    const interval = setInterval(
      () => {
        setViewerCount(socialProofService.getCurrentViewers())
      },
      10000 + Math.random() * 5000
    )

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md text-sm"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="relative">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
      </div>
      <span className="text-gray-700 font-medium">
        <motion.span
          key={viewerCount}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {viewerCount}
        </motion.span>{' '}
        people viewing now
      </span>
    </motion.div>
  )
}

export const InventoryStatus = ({ variant = 'premium' }: { variant?: string }) => {
  const [status, setStatus] = useState(socialProofService.getInventoryStatus(variant))

  useEffect(() => {
    // Refresh inventory status every 30 seconds
    const interval = setInterval(() => {
      setStatus(socialProofService.getInventoryStatus(variant))
    }, 30000)

    return () => clearInterval(interval)
  }, [variant])

  if (!status.showUrgency) return null

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-900"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
    >
      <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
      <span className="font-medium">{status.message}</span>
    </motion.div>
  )
}

export const TrustBadge = ({ icon, text }: { icon: string; text: string }) => {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-green-50 border border-green-200 rounded-lg text-sm">
      <span className="text-green-600 text-base">{icon}</span>
      <span className="text-green-900 font-medium">{text}</span>
    </div>
  )
}

export const SocialProofBar = () => {
  const stats = socialProofService.getTrustStats()

  return (
    <div className="flex flex-wrap items-center gap-6 py-4">
      <div className="flex items-center gap-2">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-gray-900 font-semibold">{stats.averageRating}</span>
        <span className="text-gray-600">({stats.totalReviews.toLocaleString()} reviews)</span>
      </div>

      <div className="h-6 w-px bg-gray-300"></div>

      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-gray-900 font-medium">
          {stats.fiveStarPercentage}% 5-star reviews
        </span>
      </div>
    </div>
  )
}
