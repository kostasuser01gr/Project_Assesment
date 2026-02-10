// ============================================================================
// UV INDEX WIDGET - Real-time UV index display with color-coded severity
// ============================================================================

import { AlertTriangle, Cloud, Shield, Sun, SunMedium } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect, useCallback, useRef } from 'react'

interface UVData {
  index: number
  level: 'low' | 'moderate' | 'high' | 'very-high' | 'extreme'
  label: string
  description: string
  color: string
  bgColor: string
  recommendation: string
  spfRecommendation: number
  icon: typeof Sun
  hourlyForecast: { hour: string; uv: number }[]
}

const UV_LEVELS: Record<string, Omit<UVData, 'index' | 'hourlyForecast'>> = {
  low: {
    level: 'low',
    label: 'Low',
    description: 'No danger for the average person',
    color: '#22C55E',
    bgColor: 'bg-green-50',
    recommendation: 'Enjoy outdoor activities freely. Minimal protection needed.',
    spfRecommendation: 15,
    icon: Cloud,
  },
  moderate: {
    level: 'moderate',
    label: 'Moderate',
    description: 'Some risk of harm from unprotected sun exposure',
    color: '#F59E0B',
    bgColor: 'bg-yellow-50',
    recommendation: 'Wear SPF 30+ sunscreen. Seek shade during midday.',
    spfRecommendation: 30,
    icon: SunMedium,
  },
  high: {
    level: 'high',
    label: 'High',
    description: 'High risk of harm from unprotected sun exposure',
    color: '#F97316',
    bgColor: 'bg-orange-50',
    recommendation: 'Wear SPF 50 sunscreen. Use Sun Ninja tent for shade.',
    spfRecommendation: 50,
    icon: Sun,
  },
  'very-high': {
    level: 'very-high',
    label: 'Very High',
    description: 'Very high risk of harm from unprotected sun exposure',
    color: '#EF4444',
    bgColor: 'bg-red-50',
    recommendation: 'Minimize sun exposure. SPF 50+ required. Sun Ninja tent essential!',
    spfRecommendation: 50,
    icon: AlertTriangle,
  },
  extreme: {
    level: 'extreme',
    label: 'Extreme',
    description: 'Extreme risk. Take all precautions!',
    color: '#7C3AED',
    bgColor: 'bg-purple-50',
    recommendation: 'Avoid outdoor exposure. If outside, full coverage + Sun Ninja tent.',
    spfRecommendation: 50,
    icon: AlertTriangle,
  },
}

function getUVLevel(index: number): string {
  if (index <= 2) return 'low'
  if (index <= 5) return 'moderate'
  if (index <= 7) return 'high'
  if (index <= 10) return 'very-high'
  return 'extreme'
}

function generateHourlyForecast(baseUV: number): { hour: string; uv: number }[] {
  const hours = ['6AM', '8AM', '10AM', '12PM', '2PM', '4PM', '6PM', '8PM']
  const multipliers = [0.1, 0.3, 0.7, 1.0, 0.9, 0.6, 0.3, 0.05]
  return hours.map((hour, i) => ({
    hour,
    uv: Math.round(baseUV * multipliers[i] * 10) / 10,
  }))
}

export function UVIndexWidget({ compact = false }: { compact?: boolean }) {
  const [uvData, setUvData] = useState<UVData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showForecast, setShowForecast] = useState(false)
  const fetchTimeoutRef = useRef<ReturnType<typeof setTimeout>>()

  const fetchUVData = useCallback(() => {
    // Simulated UV data - in production would use OpenUV API
    fetchTimeoutRef.current = setTimeout(() => {
      const simulatedIndex = Math.floor(Math.random() * 8) + 2 // 2-10
      const level = getUVLevel(simulatedIndex)
      const levelData = UV_LEVELS[level]

      setUvData({
        index: simulatedIndex,
        ...levelData,
        hourlyForecast: generateHourlyForecast(simulatedIndex),
      })
      setIsLoading(false)
    }, 800)
  }, [])

  useEffect(() => {
    fetchUVData()
    const interval = setInterval(fetchUVData, 300000) // refresh every 5 min
    return () => {
      clearInterval(interval)
      if (fetchTimeoutRef.current) clearTimeout(fetchTimeoutRef.current)
    }
  }, [fetchUVData])

  if (isLoading) {
    return (
      <div
        className={`rounded-2xl p-6 ${compact ? 'w-full' : 'max-w-md'} bg-white/80 backdrop-blur-sm border border-border animate-pulse`}
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-neutral-200" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-neutral-200 rounded w-24" />
            <div className="h-3 bg-neutral-200 rounded w-40" />
          </div>
        </div>
      </div>
    )
  }

  if (!uvData) return null

  const IconComponent = uvData.icon
  const maxForecastUV = Math.max(...uvData.hourlyForecast.map((h) => h.uv))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-2xl overflow-hidden ${compact ? 'w-full' : 'max-w-md'} bg-white border border-border shadow-lg`}
    >
      {/* Main UV Display */}
      <div
        className="p-6 text-white relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${uvData.color}, ${uvData.color}dd)` }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative z-10 flex items-center justify-between">
          <div>
            <p className="text-white/80 text-sm font-medium mb-1">Current UV Index</p>
            <div className="flex items-baseline gap-2">
              <motion.span
                key={uvData.index}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-5xl font-bold"
              >
                {uvData.index}
              </motion.span>
              <span className="text-lg font-semibold text-white/90">{uvData.label}</span>
            </div>
            <p className="text-white/70 text-sm mt-1">{uvData.description}</p>
          </div>

          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          >
            <IconComponent className="w-12 h-12 text-white/80" />
          </motion.div>
        </div>

        {/* SPF Recommendation */}
        <div className="relative z-10 mt-4 flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
          <Shield className="w-4 h-4" />
          <span className="text-sm font-medium">Recommended: SPF {uvData.spfRecommendation}+</span>
        </div>
      </div>

      {/* Recommendation */}
      <div className="px-6 py-4 border-b border-border">
        <p className="text-sm text-muted-foreground">{uvData.recommendation}</p>
      </div>

      {/* Hourly Forecast Toggle */}
      <div className="px-6 py-3">
        <button
          onClick={() => setShowForecast(!showForecast)}
          aria-expanded={showForecast}
          aria-label="Toggle hourly UV forecast"
          className="w-full flex items-center justify-between text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          <span>Hourly Forecast</span>
          <motion.span animate={{ rotate: showForecast ? 180 : 0 }} aria-hidden="true">
            ▾
          </motion.span>
        </button>

        <AnimatePresence>
          {showForecast && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 pb-2 flex items-end justify-between gap-1">
                {uvData.hourlyForecast.map((point, i) => {
                  const height = maxForecastUV > 0 ? (point.uv / maxForecastUV) * 80 : 0
                  const barColor = UV_LEVELS[getUVLevel(point.uv)]?.color || '#D4D4D4'

                  return (
                    <div key={i} className="flex flex-col items-center gap-1 flex-1">
                      <span className="text-[10px] font-medium text-muted-foreground">
                        {point.uv}
                      </span>
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: Math.max(height, 4) }}
                        transition={{ delay: i * 0.05, duration: 0.4 }}
                        className="w-full max-w-[20px] rounded-t-sm"
                        style={{ backgroundColor: barColor }}
                      />
                      <span className="text-[10px] text-muted-foreground">{point.hour}</span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

// ============================================================================
// SUN EXPOSURE TIMER
// ============================================================================

interface SkinType {
  type: number
  label: string
  description: string
  baseMED: number // Minimal Erythemal Dose in minutes at UV=1
}

const SKIN_TYPES: SkinType[] = [
  { type: 1, label: 'Type I', description: 'Very fair, always burns', baseMED: 67 },
  { type: 2, label: 'Type II', description: 'Fair, burns easily', baseMED: 100 },
  { type: 3, label: 'Type III', description: 'Medium, sometimes burns', baseMED: 200 },
  { type: 4, label: 'Type IV', description: 'Olive, rarely burns', baseMED: 300 },
  { type: 5, label: 'Type V', description: 'Brown, very rarely burns', baseMED: 400 },
  { type: 6, label: 'Type VI', description: 'Dark brown/black, never burns', baseMED: 500 },
]

export function SunExposureTimer() {
  const [selectedSkinType, setSelectedSkinType] = useState<SkinType>(SKIN_TYPES[1])
  const [spf, setSpf] = useState(30)
  const [uvIndex, setUvIndex] = useState(7)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [elapsedMinutes, setElapsedMinutes] = useState(0)

  const safeDuration = Math.round((selectedSkinType.baseMED / uvIndex) * (spf / 10))
  const remainingMinutes = Math.max(0, safeDuration - elapsedMinutes)
  const progress = safeDuration > 0 ? Math.min((elapsedMinutes / safeDuration) * 100, 100) : 0

  useEffect(() => {
    if (!isTimerRunning) return
    const interval = setInterval(() => {
      setElapsedMinutes((prev) => prev + 1)
    }, 60000) // real minute
    return () => clearInterval(interval)
  }, [isTimerRunning])

  const getProgressColor = () => {
    if (progress < 50) return '#22C55E'
    if (progress < 75) return '#F59E0B'
    if (progress < 90) return '#F97316'
    return '#EF4444'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md rounded-2xl bg-white border border-border shadow-lg overflow-hidden"
    >
      <div className="p-6 bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] text-white">
        <h3 className="text-lg font-bold mb-1">☀️ Sun Exposure Timer</h3>
        <p className="text-white/70 text-sm">Know when to reapply or seek shade</p>
      </div>

      <div className="p-6 space-y-5">
        {/* Skin Type Selector */}
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Skin Type</label>
          <div className="grid grid-cols-3 gap-2">
            {SKIN_TYPES.map((skin) => (
              <button
                key={skin.type}
                onClick={() => setSelectedSkinType(skin)}
                className={`p-2 rounded-lg border text-xs text-center transition-all ${
                  selectedSkinType.type === skin.type
                    ? 'border-[#0EA5E9] bg-[#0EA5E9]/5 text-[#0EA5E9] font-semibold'
                    : 'border-border hover:border-[#0EA5E9]/30'
                }`}
              >
                <div className="font-medium">{skin.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* SPF & UV Controls */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">SPF Level</label>
            <select
              value={spf}
              onChange={(e) => setSpf(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-lg border border-border text-sm"
            >
              {[15, 30, 50, 70, 100].map((v) => (
                <option key={v} value={v}>
                  SPF {v}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">UV Index</label>
            <select
              value={uvIndex}
              onChange={(e) => setUvIndex(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-lg border border-border text-sm"
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map((v) => (
                <option key={v} value={v}>
                  {v} - {getUVLevel(v).replace('-', ' ')}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Timer Display */}
        <div className="text-center py-4">
          <div className="relative w-32 h-32 mx-auto">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="#E5E5E5" strokeWidth="8" />
              <motion.circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke={getProgressColor()}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${progress * 2.64} ${264 - progress * 2.64}`}
                animate={{ strokeDasharray: `${progress * 2.64} ${264 - progress * 2.64}` }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">{remainingMinutes}</span>
              <span className="text-xs text-muted-foreground">min left</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            Safe exposure: <strong>{safeDuration} minutes</strong>
          </p>
        </div>

        {/* Timer Controls */}
        <div className="flex gap-3">
          <button
            onClick={() => {
              setIsTimerRunning(!isTimerRunning)
            }}
            className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-all ${
              isTimerRunning
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-[#0EA5E9] text-white hover:bg-[#0284C7]'
            }`}
          >
            {isTimerRunning ? 'Pause' : 'Start Timer'}
          </button>
          <button
            onClick={() => {
              setIsTimerRunning(false)
              setElapsedMinutes(0)
            }}
            className="px-4 py-3 rounded-xl border border-border text-sm font-medium hover:bg-neutral-50 transition-all"
          >
            Reset
          </button>
        </div>
      </div>
    </motion.div>
  )
}
