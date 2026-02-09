import { useState, useEffect } from 'react'

export type ThemeMode = 'daylight' | 'sunset'

/**
 * Hook to get current theme mode
 * Observes changes to data-theme attribute
 */
export const useThemeMode = () => {
  const [mode, setMode] = useState<ThemeMode>('daylight')

  useEffect(() => {
    const saved = localStorage.getItem('sun-ninja-theme') as ThemeMode
    if (saved) {
      setMode(saved)
    }

    const observer = new MutationObserver(() => {
      const current = document.documentElement.getAttribute('data-theme') as ThemeMode
      if (current) {
        setMode(current)
      }
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    })

    return () => observer.disconnect()
  }, [])

  return mode
}
