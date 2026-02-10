import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Thermometer, Cloud, Sun, CloudRain, Wind } from 'lucide-react'

interface WeatherData {
  location: string
  temperature: number
  condition: 'sunny' | 'cloudy' | 'rainy' | 'windy'
  timestamp: number
}

interface WeatherAwareHeroProps {
  children: React.ReactNode
  fallbackLocation?: string
}

export const WeatherAwareHero = ({
  children,
  fallbackLocation = 'Beach Paradise',
}: WeatherAwareHeroProps) => {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get user location and weather
    const fetchWeatherData = async () => {
      try {
        // Try to get user's location
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords

              // Mock weather data (in production, use OpenWeatherMap or similar API)
              const mockWeather: WeatherData = {
                location: await getLocationName(latitude, longitude),
                temperature: Math.round(20 + Math.random() * 15), // 20-35°C
                condition: ['sunny', 'cloudy', 'windy'][
                  Math.floor(Math.random() * 3)
                ] as WeatherData['condition'],
                timestamp: Date.now(),
              }

              setWeather(mockWeather)
              setIsLoading(false)
            },
            () => {
              // Location denied - use fallback
              setWeather({
                location: fallbackLocation,
                temperature: 28,
                condition: 'sunny',
                timestamp: Date.now(),
              })
              setIsLoading(false)
            }
          )
        } else {
          // Geolocation not supported
          setWeather({
            location: fallbackLocation,
            temperature: 28,
            condition: 'sunny',
            timestamp: Date.now(),
          })
          setIsLoading(false)
        }
      } catch (error) {
        console.error('Weather fetch error:', error)
        setIsLoading(false)
      }
    }

    fetchWeatherData()
  }, [fallbackLocation])

  const getLocationName = async (_lat: number, _lon: number): Promise<string> => {
    // Mock location name (in production, use reverse geocoding)
    const cities = ['Athens', 'Santorini', 'Mykonos', 'Crete', 'Rhodes', 'Corfu']
    return cities[Math.floor(Math.random() * cities.length)]
  }

  const getWeatherIcon = (condition: WeatherData['condition']) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="w-5 h-5" />
      case 'cloudy':
        return <Cloud className="w-5 h-5" />
      case 'rainy':
        return <CloudRain className="w-5 h-5" />
      case 'windy':
        return <Wind className="w-5 h-5" />
    }
  }

  const getWeatherMessage = () => {
    if (!weather) return null

    const { temperature, condition, location } = weather

    const messages = {
      sunny:
        temperature > 30
          ? `${temperature}°C in ${location} today—stay cool under Sun Ninja! ☀️`
          : `Perfect ${temperature}°C beach weather in ${location}! 🏖️`,
      cloudy: `${temperature}°C and cloudy in ${location}—still perfect for the beach! ⛅`,
      rainy: `Rainy in ${location}? Our tent keeps you dry between showers! 🌧️`,
      windy: `Windy day in ${location}—good thing Sun Ninja stays anchored! 💨`,
    }

    return messages[condition]
  }

  const getBackgroundGradient = () => {
    if (!weather) return 'from-cyan-500 via-blue-500 to-purple-600'

    const { condition, temperature } = weather

    // Adjust gradient based on weather
    if (condition === 'sunny' && temperature > 30) {
      return 'from-orange-400 via-coral-500 to-pink-600' // Hot day
    } else if (condition === 'sunny') {
      return 'from-cyan-400 via-blue-500 to-indigo-600' // Nice day
    } else if (condition === 'cloudy') {
      return 'from-slate-400 via-blue-400 to-indigo-500' // Cloudy
    } else if (condition === 'rainy') {
      return 'from-slate-500 via-blue-600 to-indigo-700' // Rainy
    } else {
      return 'from-teal-400 via-cyan-500 to-blue-600' // Windy
    }
  }

  return (
    <div
      className={`relative bg-gradient-to-br ${getBackgroundGradient()} transition-all duration-1000`}
    >
      {/* Weather Badge */}
      {!isLoading && weather && (
        <motion.div
          className="absolute top-4 right-4 z-30 quantum-glass-dark rounded-full px-4 py-2 flex items-center gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <MapPin className="w-4 h-4 text-cyan-400" />
          <span className="text-white/80 text-sm">{weather.location}</span>

          <div className="w-px h-4 bg-white/20" />

          <Thermometer className="w-4 h-4 text-coral-400" />
          <span className="text-white font-semibold">{weather.temperature}°C</span>

          <div className="w-px h-4 bg-white/20" />

          <span className="text-white/60">{getWeatherIcon(weather.condition)}</span>
        </motion.div>
      )}

      {/* Personalized Message */}
      {!isLoading && weather && (
        <motion.div
          className="absolute top-20 left-1/2 -translate-x-1/2 z-30 quantum-glass-dark rounded-2xl px-6 py-3 max-w-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-white text-center font-medium">{getWeatherMessage()}</p>
        </motion.div>
      )}

      {/* Animated Weather Particles */}
      {weather?.condition === 'rainy' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-8 bg-white/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: -20,
              }}
              animate={{
                y: ['0vh', '110vh'],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 1 + Math.random() * 0.5,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      )}

      {weather?.condition === 'windy' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl opacity-20"
              style={{
                left: -50,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: ['0vw', '110vw'],
                y: [0, Math.random() * 40 - 20],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: 'linear',
              }}
            >
              💨
            </motion.div>
          ))}
        </div>
      )}

      {/* Original children */}
      {children}
    </div>
  )
}
