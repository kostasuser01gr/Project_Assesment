import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX, Music, Waves, Wind, Mic } from 'lucide-react'

type SoundType = 'waves' | 'breeze' | 'seagulls' | 'ambient'

interface AmbientAudioSystemProps {
  autoplayVoiceover?: boolean
}

export const AmbientAudioSystem = ({ autoplayVoiceover = false }: AmbientAudioSystemProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSound, setActiveSound] = useState<SoundType | null>(null)
  const [volume, setVolume] = useState(0.5)
  const [voiceoverPlayed, setVoiceoverPlayed] = useState(false)
  const audioRef = useRef<HTMLAudioElement | { pause: () => void } | null>(null)
  const voiceoverRef = useRef<HTMLAudioElement | null>(null)

  // Sound library (in production, use actual audio files)
  const sounds = {
    waves: {
      name: 'Ocean Waves',
      icon: Waves,
      color: 'text-cyan-400',
      description: 'Gentle waves lapping on the shore',
    },
    breeze: {
      name: 'Beach Breeze',
      icon: Wind,
      color: 'text-blue-400',
      description: 'Soft coastal wind sounds',
    },
    seagulls: {
      name: 'Seagulls',
      icon: Music,
      color: 'text-coral-400',
      description: 'Distant calls of seabirds',
    },
    ambient: {
      name: 'Beach Ambience',
      icon: Volume2,
      color: 'text-purple-400',
      description: 'Complete beach soundscape',
    },
  }

  const playVoiceover = useCallback(() => {
    // In production, use actual recorded voiceover
    // For now, use Speech Synthesis API
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(
        'Welcome to Sun Ninja. Where innovation meets the perfect beach day. Discover the tent that sets up in sixty seconds, and memories that last forever.'
      )
      utterance.rate = 0.9
      utterance.pitch = 1.0
      utterance.volume = volume

      window.speechSynthesis.speak(utterance)
    }
  }, [volume])

  useEffect(() => {
    // Play voiceover on first visit
    if (autoplayVoiceover && !voiceoverPlayed) {
      const hasVisited = localStorage.getItem('sun-ninja-voiceover-played')
      if (!hasVisited) {
        setTimeout(() => {
          playVoiceover()
          localStorage.setItem('sun-ninja-voiceover-played', 'true')
          setVoiceoverPlayed(true)
        }, 2000)
      }
    }
  }, [autoplayVoiceover, voiceoverPlayed, playVoiceover])

  const playSound = (soundType: SoundType) => {
    // In production, load actual audio files
    if (audioRef.current) {
      audioRef.current.pause()
    }

    if (activeSound === soundType) {
      setActiveSound(null)
      return
    }

    // Create Web Audio API context for ambient sounds
    interface WindowWithWebkit extends Window {
      webkitAudioContext?: typeof AudioContext
    }
    const AudioContextClass = window.AudioContext || (window as WindowWithWebkit).webkitAudioContext
    const audioContext = new (AudioContextClass as typeof AudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    // Different frequencies for different sounds
    const frequencies: Record<SoundType, number> = {
      waves: 220,
      breeze: 330,
      seagulls: 440,
      ambient: 165,
    }

    oscillator.type = 'sine'
    oscillator.frequency.value = frequencies[soundType]
    gainNode.gain.value = volume * 0.3 // Gentle volume

    oscillator.start()

    // Store reference to stop later
    audioRef.current = { pause: () => oscillator.stop() }

    setActiveSound(soundType)
  }

  const stopAllSounds = () => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
    if (voiceoverRef.current) {
      voiceoverRef.current.pause()
    }
    setActiveSound(null)
  }

  return (
    <>
      {/* Floating Audio Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 quantum-glass-dark rounded-full shadow-2xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Ambient Audio"
      >
        {activeSound ? (
          <Volume2 className="w-6 h-6 text-cyan-400" />
        ) : (
          <VolumeX className="w-6 h-6 text-white/60" />
        )}

        {/* Active indicator */}
        {activeSound && (
          <motion.div
            className="absolute inset-0 rounded-full bg-cyan-500/20"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* Audio Control Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-80 quantum-glass-dark rounded-2xl p-6 shadow-2xl"
          >
            <div className="mb-6">
              <h3 className="text-white text-lg font-bold mb-2">Ambient Soundscape</h3>
              <p className="text-white/60 text-sm">
                Enhance your experience with relaxing beach sounds
              </p>
            </div>

            {/* Sound Options */}
            <div className="space-y-3 mb-6">
              {Object.entries(sounds).map(([key, sound]) => {
                const Icon = sound.icon
                const soundType = key as SoundType
                const isActive = activeSound === soundType

                return (
                  <motion.button
                    key={key}
                    onClick={() => playSound(soundType)}
                    className={`w-full p-4 rounded-xl border-2 transition-all ${
                      isActive
                        ? 'border-cyan-400 bg-cyan-500/10'
                        : 'border-white/20 hover:border-white/40'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-6 h-6 ${sound.color}`} />
                      <div className="flex-1 text-left">
                        <div className="text-white font-semibold text-sm">{sound.name}</div>
                        <div className="text-white/60 text-xs">{sound.description}</div>
                      </div>
                      {isActive && (
                        <motion.div
                          className="flex gap-0.5"
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-1 h-4 bg-cyan-400 rounded-full"
                              animate={{ scaleY: [0.5, 1, 0.5] }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: i * 0.2,
                              }}
                            />
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                )
              })}
            </div>

            {/* Volume Control */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white text-sm font-semibold">Volume</span>
                <span className="text-white/60 text-sm">{Math.round(volume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={volume * 100}
                onChange={(e) => setVolume(Number(e.target.value) / 100)}
                className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-4
                  [&::-webkit-slider-thumb]:h-4
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-cyan-400
                  [&::-webkit-slider-thumb]:cursor-pointer"
              />
            </div>

            {/* Voiceover */}
            <motion.button
              onClick={playVoiceover}
              className="w-full quantum-glass hover:quantum-glass-dark p-4 rounded-xl flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mic className="w-5 h-5 text-purple-400" />
              <span className="text-white font-semibold">Play Brand Voiceover</span>
            </motion.button>

            {/* Stop All */}
            {activeSound && (
              <motion.button
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                onClick={stopAllSounds}
                className="w-full mt-3 p-3 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-400 font-semibold transition-colors"
              >
                Stop All Sounds
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
