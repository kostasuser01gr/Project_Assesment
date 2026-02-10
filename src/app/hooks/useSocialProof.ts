import { useState, useEffect } from 'react'
import { socialProofService } from '../../services/social-proof/SocialProofService'

/**
 * Hook to get current viewer count
 * Updates every 10 seconds
 */
export function useViewerCount() {
  const [viewers, setViewers] = useState(() => socialProofService.getCurrentViewers())

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(socialProofService.getCurrentViewers())
    }, 10000) // Update every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return viewers
}

/**
 * Hook to get inventory status
 * Updates every 30 seconds
 */
export function useInventoryStatus() {
  const [inventory, setInventory] = useState(() => socialProofService.getInventoryStatus())

  useEffect(() => {
    const interval = setInterval(() => {
      setInventory(socialProofService.getInventoryStatus())
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  return inventory
}

/**
 * Hook to get recent reviews
 * @param count - Number of reviews to fetch
 */
export function useRecentReviews(count = 5) {
  const [reviews, setReviews] = useState(() => socialProofService.getRecentReviews(count))

  useEffect(() => {
    setReviews(socialProofService.getRecentReviews(count))
  }, [count])

  return reviews
}

/**
 * Hook to get trust statistics
 */
export function useTrustStats() {
  const [stats, setStats] = useState(() => socialProofService.getTrustStats())

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(socialProofService.getTrustStats())
    }, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  return stats
}

/**
 * Combined hook for all social proof data
 * Useful for dashboard/overview pages
 */
export function useSocialProof() {
  const viewers = useViewerCount()
  const inventory = useInventoryStatus()
  const reviews = useRecentReviews(5)
  const stats = useTrustStats()

  return {
    viewers,
    inventory,
    reviews,
    stats,
  }
}
