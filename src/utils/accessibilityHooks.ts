import { useState, useEffect, useCallback } from 'react'

/**
 * Hook to programmatically announce messages to screen readers
 */
export function useAnnounce() {
  const [announcement, setAnnouncement] = useState('')

  const announce = useCallback((message: string) => {
    setAnnouncement('')
    requestAnimationFrame(() => setAnnouncement(message))
  }, [])

  return { announce, announcement }
}

/**
 * Hook to detect user's prefers-reduced-motion setting
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return prefersReducedMotion
}

/**
 * Hook to detect user's prefers-contrast setting
 */
export function useHighContrast(): boolean {
  const [highContrast, setHighContrast] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-contrast: more)')
    setHighContrast(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setHighContrast(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return highContrast
}

/**
 * Hook for controlling page font scale
 */
export function useFontScale() {
  const [scale, setScale] = useState(1)

  const increase = useCallback(() => setScale((prev) => Math.min(prev + 0.1, 1.5)), [])
  const decrease = useCallback(() => setScale((prev) => Math.max(prev - 0.1, 0.8)), [])
  const reset = useCallback(() => setScale(1), [])

  useEffect(() => {
    document.documentElement.style.fontSize = `${scale * 16}px`
    return () => {
      document.documentElement.style.fontSize = ''
    }
  }, [scale])

  return { scale, increase, decrease, reset }
}
