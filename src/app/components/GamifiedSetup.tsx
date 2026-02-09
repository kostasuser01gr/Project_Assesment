import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Timer, Target, Zap, RotateCcw, Share2 } from 'lucide-react'

interface GamifiedSetupProps {
  onComplete?: (time: number) => void
}

interface DragItem {
  id: string
  label: string
  icon: string
  correctSlot: number
}

const SETUP_ITEMS: DragItem[] = [
  { id: 'frame', label: 'Frame', icon: '🏗️', correctSlot: 0 },
  { id: 'fabric', label: 'Fabric', icon: '⛺', correctSlot: 1 },
  { id: 'stakes', label: 'Stakes', icon: '⚓', correctSlot: 2 },
  { id: 'sandbags', label: 'Sand Pockets', icon: '⏳', correctSlot: 3 }
]

const AVERAGE_TIME = 47 // seconds
const REWARD_THRESHOLD = 45 // seconds

export const GamifiedSetup = ({ onComplete }: GamifiedSetupProps) => {
  const [items, setItems] = useState<DragItem[]>([...SETUP_ITEMS].sort(() => Math.random() - 0.5))
  const [slots, setSlots] = useState<(DragItem | null)[]>([null, null, null, null])
  const [draggedItem, setDraggedItem] = useState<DragItem | null>(null)
  const [isActive, setIsActive] = useState(false)
  const [time, setTime] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [earnedReward, setEarnedReward] = useState(false)
  const [bestTime, setBestTime] = useState<number | null>(null)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isActive && !isComplete) {
      interval = setInterval(() => {
        setTime((prev) => prev + 0.1)
      }, 100)
    }
    return () => clearInterval(interval)
  }, [isActive, isComplete])

  useEffect(() => {
    // Check if all slots are filled correctly
    const allCorrect = slots.every((slot, index) => slot?.correctSlot === index)
    if (allCorrect && slots.every((slot) => slot !== null)) {
      setIsComplete(true)
      setIsActive(false)
      
      const finalTime = Number(time.toFixed(1))
      if (finalTime < REWARD_THRESHOLD) {
        setEarnedReward(true)
      }
      
      if (bestTime === null || finalTime < bestTime) {
        setBestTime(finalTime)
      }
      
      onComplete?.(finalTime)
    }
  }, [slots, time, bestTime, onComplete])

  const startGame = () => {
    setIsActive(true)
    setIsComplete(false)
    setTime(0)
    setEarnedReward(false)
    setSlots([null, null, null, null])
    setItems([...SETUP_ITEMS].sort(() => Math.random() - 0.5))
  }

  const handleDragStart = (item: DragItem) => {
    if (!isActive) startGame()
    setDraggedItem(item)
  }

  const handleDragOver = (e: React.DragEvent, _slotIndex: number) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent, slotIndex: number) => {
    e.preventDefault()
    if (!draggedItem) return

    // Place item in slot
    const newSlots = [...slots]
    const newItems = items.filter((item) => item.id !== draggedItem.id)
    
    // Remove item from its current slot if exists
    const currentSlotIndex = slots.findIndex((slot) => slot?.id === draggedItem.id)
    if (currentSlotIndex !== -1) {
      newSlots[currentSlotIndex] = null
    }
    
    // If there's an item in the target slot, return it to items
    if (newSlots[slotIndex]) {
      newItems.push(newSlots[slotIndex]!)
    }
    
    newSlots[slotIndex] = draggedItem
    setSlots(newSlots)
    setItems(newItems)
    setDraggedItem(null)
  }

  const getDiscountCode = () => {
    return `NINJA${Math.floor(time * 10)}`
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-8 quantum-glass rounded-3xl">
      
      {/* Header */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="inline-block"
        >
          <Target className="w-16 h-16 text-cyan-400 mb-4 mx-auto" />
        </motion.div>
        <h2 className="text-3xl font-bold text-white mb-2">Setup Speed Challenge</h2>
        <p className="text-white/60">
          Drag items in the correct order. Beat {REWARD_THRESHOLD}s for a special reward! 🎁
        </p>
      </div>

      {/* Timer */}
      <motion.div
        className="text-center mb-8"
        animate={{ scale: isActive ? [1, 1.05, 1] : 1 }}
        transition={{ duration: 1, repeat: isActive ? Infinity : 0 }}
      >
        <div className="inline-flex items-center gap-3 quantum-glass-dark px-6 py-3 rounded-full">
          <Timer className="w-6 h-6 text-coral-400" />
          <span className="text-4xl font-bold text-white font-mono">
            {time.toFixed(1)}s
          </span>
        </div>
        <div className="mt-2 text-sm text-white/60">
          Average: {AVERAGE_TIME}s {bestTime && `• Best: ${bestTime}s`}
        </div>
      </motion.div>

      {/* Drop Slots */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {slots.map((slot, index) => (
          <motion.div
            key={index}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            className={`aspect-square rounded-2xl border-4 border-dashed flex flex-col items-center justify-center transition-all ${
              slot
                ? slot.correctSlot === index
                  ? 'border-green-500 bg-green-500/10'
                  : 'border-red-500 bg-red-500/10'
                : 'border-white/20 hover:border-cyan-400/50'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            {slot ? (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                className="text-center"
              >
                <div className="text-6xl mb-2">{slot.icon}</div>
                <div className="text-white text-sm font-semibold">{slot.label}</div>
              </motion.div>
            ) : (
              <div className="text-white/30 text-sm">Step {index + 1}</div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Draggable Items */}
      <div className="flex flex-wrap gap-4 justify-center mb-8 min-h-[100px]">
        {items.map((item) => (
          <motion.div
            key={item.id}
            draggable
            onDragStart={() => handleDragStart(item)}
            className="quantum-glass hover:quantum-glass-dark cursor-move px-6 py-4 rounded-xl flex items-center gap-3"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-4xl">{item.icon}</span>
            <span className="text-white font-semibold">{item.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex gap-4 justify-center">
        <motion.button
          onClick={startGame}
          className="quantum-button px-8 py-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          {isComplete ? 'Try Again' : 'Reset'}
        </motion.button>
      </div>

      {/* Completion Modal */}
      <AnimatePresence>
        {isComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setIsComplete(false)}
          >
            <motion.div
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.5, rotate: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="quantum-glass-dark p-12 rounded-3xl max-w-md text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <Trophy className="w-24 h-24 text-gold-400 mb-6 mx-auto" />
              </motion.div>
              
              <h3 className="text-4xl font-bold text-white mb-4">
                {earnedReward ? '🎉 Amazing!' : 'Great Job!'}
              </h3>
              
              <p className="text-2xl text-cyan-400 font-bold mb-4">
                {time.toFixed(1)} seconds
              </p>

              {earnedReward ? (
                <>
                  <p className="text-white/80 mb-6">
                    You beat the average time! Here's your reward:
                  </p>
                  <div className="quantum-glass p-6 rounded-2xl mb-6">
                    <Zap className="w-12 h-12 text-gold-400 mb-3 mx-auto" />
                    <div className="text-gold-400 text-3xl font-bold mb-2">
                      {getDiscountCode()}
                    </div>
                    <div className="text-white/60 text-sm">
                      Save 10% on your order!
                    </div>
                  </div>
                </>
              ) : (
                <p className="text-white/60 mb-6">
                  Try to beat {REWARD_THRESHOLD}s for a special discount!
                </p>
              )}

              <div className="flex gap-4 justify-center">
                <motion.button
                  onClick={startGame}
                  className="quantum-button px-6 py-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Play Again
                </motion.button>
                
                {earnedReward && (
                  <motion.button
                    onClick={() => {
                      navigator.clipboard.writeText(getDiscountCode())
                      alert('Code copied!')
                    }}
                    className="quantum-glass-dark hover:quantum-glass px-6 py-3 rounded-xl text-white flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Share2 className="w-5 h-5 mr-2" />
                    Copy Code
                  </motion.button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
