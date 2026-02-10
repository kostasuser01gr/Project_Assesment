import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Sun, Moon } from 'lucide-react'

export type ThemeMode = 'daylight' | 'sunset'

interface DarkSolarModeToggleProps {
  onChange?: (mode: ThemeMode) => void
}

export const DarkSolarModeToggle = ({ onChange }: DarkSolarModeToggleProps) => {
  const [mode, setMode] = useState<ThemeMode>('daylight')

  useEffect(() => {
    // Load saved preference
    const saved = localStorage.getItem('sun-ninja-theme') as ThemeMode
    if (saved) {
      setMode(saved)
      applyTheme(saved)
    }
  }, [])

  const applyTheme = (newMode: ThemeMode) => {
    const root = document.documentElement

    if (newMode === 'sunset') {
      root.style.setProperty('--theme-primary', '139 92 246') // purple-500
      root.style.setProperty('--theme-secondary', '251 146 60') // orange-400
      root.style.setProperty('--theme-accent', '236 72 153') // pink-500
      root.style.setProperty('--theme-bg', '17 24 39') // gray-900
      root.setAttribute('data-theme', 'sunset')
    } else {
      root.style.setProperty('--theme-primary', '6 182 212') // cyan-500
      root.style.setProperty('--theme-secondary', '251 146 60') // coral-400
      root.style.setProperty('--theme-accent', '234 179 8') // gold-500
      root.style.setProperty('--theme-bg', '255 255 255') // white
      root.setAttribute('data-theme', 'daylight')
    }
  }

  const toggleMode = () => {
    const newMode: ThemeMode = mode === 'daylight' ? 'sunset' : 'daylight'
    setMode(newMode)
    applyTheme(newMode)
    localStorage.setItem('sun-ninja-theme', newMode)
    onChange?.(newMode)
  }

  return (
    <motion.button
      onClick={toggleMode}
      className="fixed top-24 right-6 z-50 p-4 quantum-glass-dark rounded-full shadow-2xl hover:scale-110 transition-transform"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title={`Switch to ${mode === 'daylight' ? 'Sunset' : 'Daylight'} mode`}
    >
      <div className="relative w-12 h-12">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            rotate: mode === 'daylight' ? 0 : 180,
            scale: mode === 'daylight' ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <Sun className="w-8 h-8 text-gold-400" />
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            rotate: mode === 'sunset' ? 0 : -180,
            scale: mode === 'sunset' ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <Moon className="w-8 h-8 text-purple-400" />
        </motion.div>
      </div>

      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-full blur-xl -z-10 ${
          mode === 'daylight' ? 'bg-gold-500/30' : 'bg-purple-500/30'
        }`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.button>
  )
}
