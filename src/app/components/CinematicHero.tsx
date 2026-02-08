import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Star, ShoppingCart, Shield, Truck, RotateCcw } from 'lucide-react'

interface CinematicHeroProps {
  title: string
  subtitle: string
  price: string
  rating: number
  reviews: number
  images: string[]
  onCTAClick?: () => void
}

export const CinematicHero = ({
  title,
  subtitle,
  price,
  rating,
  reviews,
  images,
  onCTAClick
}: CinematicHeroProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400/90 via-sky-500/85 to-rose-400/90 animate-gradient-shift" />
        
        {/* Hero image carousel */}
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <motion.div
              key={image}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
              transition={{ duration: 1.5 }}
            />
          ))}
        </div>

        {/* Particle effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: -10 
              }}
              animate={{
                y: window.innerHeight + 10,
                x: Math.random() * window.innerWidth
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>

        {/* Aurora gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-cyan-500/20"
          animate={{
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 h-full flex items-center justify-center"
        style={{ opacity }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Glassy badge container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-6 mb-8 px-8 py-4 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl"
          >
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
              <span className="text-white font-semibold">{rating} Rating</span>
            </div>
            <div className="w-px h-6 bg-white/30" />
            <span className="text-white/90">{reviews.toLocaleString()}+ Reviews</span>
            <div className="w-px h-6 bg-white/30" />
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-white" />
              <span className="text-white/90">Free Shipping</span>
            </div>
          </motion.div>

          {/* Holographic title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent drop-shadow-2xl"
            style={{
              textShadow: '0 0 40px rgba(255,255,255,0.5), 0 0 80px rgba(14,165,233,0.3)'
            }}
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-2xl md:text-3xl text-white/90 mb-8 font-light tracking-wide"
          >
            {subtitle}
          </motion.p>

          {/* Price with shimmer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            className="mb-10"
          >
            <div className="inline-block relative">
              <div className="text-6xl font-bold text-white mb-2">
                {price}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>
            <div className="text-white/70 text-lg">Limited Time Offer - Save 25%</div>
          </motion.div>

          {/* Quantum CTA */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            onClick={onCTAClick}
            className="group relative px-12 py-6 text-xl font-bold rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Magnetic background */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-rose-500" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Holographic sweep */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />

            {/* Button content */}
            <span className="relative z-10 flex items-center gap-3 text-white">
              <ShoppingCart className="w-6 h-6" />
              Add to Cart - Transform Your Beach Days
            </span>

            {/* Diamond particles */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </motion.button>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-white/80"
          >
            {[
              { icon: Shield, text: '1-Year Warranty' },
              { icon: RotateCcw, text: '30-Day Returns' },
              { icon: Star, text: 'UPF 50+ Protection' }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  )
}
