import { motion, useScroll, useTransform } from 'motion/react'
import { Shield, Truck, RotateCcw, Award, Heart, Zap } from 'lucide-react'

const trustBadges = [
  { icon: Shield, text: 'UPF 50+ Protection', color: 'from-emerald-400 to-emerald-600' },
  { icon: Truck, text: 'Free Shipping', color: 'from-blue-400 to-blue-600' },
  { icon: RotateCcw, text: '30-Day Returns', color: 'from-purple-400 to-purple-600' },
  { icon: Award, text: '1-Year Warranty', color: 'from-yellow-400 to-yellow-600' },
  { icon: Heart, text: '10K+ Happy Families', color: 'from-rose-400 to-rose-600' },
  { icon: Zap, text: '60-Second Setup', color: 'from-cyan-400 to-cyan-600' },
]

export const StickyTrustRibbon = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [100, 200], [0, 1])
  const y = useTransform(scrollY, [100, 200], [100, 0])

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none hidden md:block"
      style={{ opacity, y }}
    >
      <div className="relative overflow-hidden">
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-2xl border-t border-white/20" />

        {/* Holographic gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-rose-400/10"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          style={{ backgroundSize: '200% 100%' }}
        />

        {/* Content */}
        <div className="relative px-6 py-4 pointer-events-auto">
          <div className="max-w-7xl mx-auto">
            {/* Trust badges carousel */}
            <div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 flex-shrink-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Animated icon container */}
                  <motion.div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center shadow-lg`}
                    animate={{
                      boxShadow: [
                        '0 4px 12px rgba(0,0,0,0.15)',
                        '0 6px 20px rgba(0,0,0,0.25)',
                        '0 4px 12px rgba(0,0,0,0.15)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <badge.icon className="w-5 h-5 text-white" />
                  </motion.div>

                  {/* Text */}
                  <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">
                    {badge.text}
                  </span>

                  {/* Separator */}
                  {index < trustBadges.length - 1 && <div className="w-px h-6 bg-slate-200" />}
                </motion.div>
              ))}
            </div>

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
            />
          </div>
        </div>

        {/* Top edge glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      </div>
    </motion.div>
  )
}
