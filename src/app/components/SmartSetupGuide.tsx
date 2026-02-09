import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, Clock } from 'lucide-react'

interface SetupStep {
  image: string
  title: string
  description: string
  duration: number // seconds for this step
}

interface SmartSetupGuideProps {
  steps: SetupStep[]
}

export const SmartSetupGuide = ({ steps }: SmartSetupGuideProps) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [sandLevel, setSandLevel] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef<number>(0)

  const totalDuration = steps.reduce((acc, step) => acc + step.duration, 0)

  const startAutoplay = () => {
    setIsPlaying(true)
    startTimeRef.current = Date.now()
    playStep(currentStep)
  }

  const playStep = (stepIndex: number) => {
    if (stepIndex >= steps.length) {
      setIsPlaying(false)
      setProgress(100)
      setSandLevel(100)
      return
    }

    const step = steps[stepIndex]
    const stepDuration = step.duration * 1000

    // Animate progress
    const startTime = Date.now()
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const stepProgress = Math.min((elapsed / stepDuration) * 100, 100)
      
      setProgress((stepIndex / steps.length) * 100 + (stepProgress / steps.length))
      setSandLevel((stepIndex / steps.length) * 100 + (stepProgress / steps.length))

      if (stepProgress >= 100) {
        clearInterval(interval)
        if (stepIndex < steps.length - 1) {
          setCurrentStep(stepIndex + 1)
          playStep(stepIndex + 1)
        } else {
          setIsPlaying(false)
        }
      }
    }, 50)

    timeoutRef.current = setTimeout(() => {
      clearInterval(interval)
    }, stepDuration) as unknown as NodeJS.Timeout
  }

  const stopAutoplay = () => {
    setIsPlaying(false)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const reset = () => {
    stopAutoplay()
    setCurrentStep(0)
    setProgress(0)
    setSandLevel(0)
  }

  const goToStep = (index: number) => {
    stopAutoplay()
    setCurrentStep(index)
    setProgress((index / steps.length) * 100)
    setSandLevel((index / steps.length) * 100)
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      goToStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      goToStep(currentStep - 1)
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Main Image Viewer */}
      <div className="relative aspect-video rounded-2xl overflow-hidden quantum-glass mb-6">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentStep}
            src={steps[currentStep].image}
            alt={steps[currentStep].title}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>

        {/* Overlay Controls */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Step Info */}
        <motion.div
          className="absolute bottom-6 left-6 right-6 pointer-events-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          key={currentStep}
        >
          <div className="text-cyan-400 text-sm font-semibold mb-2">
            Step {currentStep + 1} of {steps.length}
          </div>
          <h3 className="text-white text-2xl font-bold mb-2">
            {steps[currentStep].title}
          </h3>
          <p className="text-white/80 text-sm max-w-xl">
            {steps[currentStep].description}
          </p>
        </motion.div>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
          <motion.button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="p-3 quantum-glass-dark rounded-full text-white disabled:opacity-30 pointer-events-auto"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="p-3 quantum-glass-dark rounded-full text-white disabled:opacity-30 pointer-events-auto"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>

      {/* Sand Pouring Progress */}
      <div className="relative h-24 quantum-glass rounded-2xl overflow-hidden mb-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-20 relative">
            {/* Hourglass Top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-8 border-t-4 border-l-4 border-r-4 border-white/30 rounded-t-lg overflow-hidden">
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-500 to-amber-300"
                style={{ height: `${100 - sandLevel}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            
            {/* Hourglass Bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-8 border-b-4 border-l-4 border-r-4 border-white/30 rounded-b-lg overflow-hidden">
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-amber-500 to-amber-300"
                style={{ height: `${sandLevel}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Sand Stream */}
            {isPlaying && (
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-amber-400"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            )}
          </div>
        </div>

        {/* Progress Bar Background */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Timer */}
        <div className="absolute top-4 right-4 flex items-center gap-2 text-white/60 text-sm">
          <Clock className="w-4 h-4" />
          <span>{Math.round((progress / 100) * totalDuration)}s / {totalDuration}s</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <motion.button
          onClick={reset}
          className="p-4 quantum-glass rounded-full text-white hover:quantum-glass-dark"
          whileHover={{ scale: 1.1, rotate: -180 }}
          whileTap={{ scale: 0.95 }}
        >
          <RotateCcw className="w-5 h-5" />
        </motion.button>

        <motion.button
          onClick={isPlaying ? stopAutoplay : startAutoplay}
          className="px-8 py-4 quantum-button text-lg font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? (
            <>
              <Pause className="w-6 h-6 mr-2" />
              Pause
            </>
          ) : (
            <>
              <Play className="w-6 h-6 mr-2" />
              {progress === 0 ? 'Watch Setup' : 'Resume'}
            </>
          )}
        </motion.button>
      </div>

      {/* Step Thumbnails */}
      <div className="grid grid-cols-3 gap-4">
        {steps.map((step, index) => (
          <motion.button
            key={index}
            onClick={() => goToStep(index)}
            className={`relative aspect-video rounded-lg overflow-hidden ${
              currentStep === index
                ? 'ring-4 ring-cyan-400'
                : 'opacity-60 hover:opacity-100'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-2 left-2 right-2">
              <div className="text-white text-xs font-semibold">
                {index + 1}. {step.title}
              </div>
            </div>
            {currentStep === index && (
              <motion.div
                layoutId="activeStep"
                className="absolute inset-0 ring-4 ring-cyan-400 rounded-lg"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
