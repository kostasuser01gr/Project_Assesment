import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { LucideIcon } from 'lucide-react'

interface StoryStep {
  icon: LucideIcon
  title: string
  description: string
  illustration: string
  color: string
}

interface ScrollStorytellingProps {
  steps: StoryStep[]
}

export const ScrollStorytelling = ({ steps }: ScrollStorytellingProps) => {
  return (
    <div className="relative py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Floating elements background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, Math.random() * 360, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
          >
            <div
              className={`w-${Math.floor(Math.random() * 20 + 10)} h-${Math.floor(Math.random() * 20 + 10)} opacity-10`}
            >
              {i % 3 === 0 ? '🐚' : i % 3 === 1 ? '⭐' : '🌊'}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Story steps */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {steps.map((step, index) => (
          <StoryStepSection key={index} step={step} index={index} />
        ))}
      </div>
    </div>
  )
}

const StoryStepSection = ({ step, index }: { step: StoryStep; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-20% 0px -20% 0px' })

  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 mb-32 last:mb-0`}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Content */}
      <div className="flex-1 space-y-6">
        {/* Icon with pulse */}
        <motion.div
          className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${step.color} shadow-2xl`}
          animate={
            isInView
              ? {
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    '0 10px 40px rgba(0,0,0,0.2)',
                    '0 15px 50px rgba(0,0,0,0.3)',
                    '0 10px 40px rgba(0,0,0,0.2)',
                  ],
                }
              : {}
          }
          transition={{ duration: 2, repeat: Infinity }}
        >
          <step.icon className="w-10 h-10 text-white" />
        </motion.div>

        {/* Step number */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          className="text-8xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent opacity-20"
        >
          {String(index + 1).padStart(2, '0')}
        </motion.div>

        {/* Title with gradient */}
        <motion.h3
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent"
        >
          {step.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-slate-600 leading-relaxed"
        >
          {step.description}
        </motion.p>

        {/* Animated line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className={`h-1 w-32 bg-gradient-to-r ${step.color} origin-left rounded-full`}
        />
      </div>

      {/* Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: isEven ? -10 : 10 }}
        animate={
          isInView
            ? { opacity: 1, scale: 1, rotate: 0 }
            : { opacity: 0, scale: 0.8, rotate: isEven ? -10 : 10 }
        }
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex-1 relative"
      >
        {/* Glowing orb background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20 blur-3xl`}
          animate={
            isInView
              ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }
              : {}
          }
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Image container with glass effect */}
        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-xl">
          <img src={step.illustration} alt={step.title} className="w-full h-full object-cover" />

          {/* Holographic overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-purple-400/10" />

          {/* Edge glow */}
          <div className={`absolute inset-0 shadow-inner-glow-${step.color}`} />
        </div>

        {/* Floating card effect */}
        <motion.div
          className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center`}
            >
              <step.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-semibold text-slate-800">Step {index + 1}</div>
              <div className="text-sm text-slate-500">In Progress</div>
            </div>
          </div>

          {/* Progress bar */}
          <motion.div className="mt-4 h-2 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${step.color}`}
              initial={{ width: '0%' }}
              animate={isInView ? { width: '100%' } : { width: '0%' }}
              transition={{ delay: 1, duration: 2 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
