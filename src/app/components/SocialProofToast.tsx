import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  socialProofService,
  PurchaseNotification,
} from '../../services/social-proof/SocialProofService'

export const SocialProofToast = () => {
  const [visible, setVisible] = useState(false)
  const [notification, setNotification] = useState<PurchaseNotification | null>(null)
  const hideTimerRef = useRef<ReturnType<typeof setTimeout>>()
  const nextTimerRef = useRef<ReturnType<typeof setTimeout>>()

  const clearAllTimers = useCallback(() => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
    if (nextTimerRef.current) clearTimeout(nextTimerRef.current)
  }, [])

  const showNextNotification = useCallback(() => {
    const next = socialProofService.getNextNotification()
    if (!next) return

    setNotification(next)
    setVisible(true)

    // Hide after 4 seconds
    hideTimerRef.current = setTimeout(() => {
      setVisible(false)
    }, 4000)

    // Show next notification after 15 seconds
    nextTimerRef.current = setTimeout(() => {
      showNextNotification()
    }, 15000)
  }, [])

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      showNextNotification()
    }, 5000)

    return () => {
      clearTimeout(initialDelay)
      clearAllTimers()
    }
  }, [showNextNotification, clearAllTimers])

  const handleClose = () => {
    setVisible(false)
  }

  if (!notification) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 left-6 z-50 bg-white rounded-xl shadow-2xl max-w-sm pointer-events-auto"
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -400, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="flex items-start gap-3 p-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-rose-500 flex items-center justify-center text-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-normal text-gray-900 leading-snug">
                <strong className="font-semibold text-cyan-600">{notification.name}</strong> from{' '}
                <strong className="font-semibold text-gray-700">{notification.location}</strong>
              </p>
              <p className="text-xs text-gray-600 mt-1">purchased {notification.product}</p>
              <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
            </div>

            <button
              className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded text-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              onClick={handleClose}
              aria-label="Close notification"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
