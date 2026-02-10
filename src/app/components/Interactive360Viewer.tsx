import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Maximize2, Minimize2, RotateCw, Palette, Ruler, Sparkles } from 'lucide-react'

interface Interactive360ViewerProps {
  images: string[]
  alt: string
  colors?: { name: string; hex: string; images: string[] }[]
  sizes?: { name: string; dimensions: string }[]
}

export const Interactive360Viewer = ({
  images,
  alt,
  colors = [
    { name: 'Ocean Blue', hex: '#0EA5E9', images },
    { name: 'Coral Sunset', hex: '#FB923C', images },
    { name: 'Sandy Beige', hex: '#F5E6D3', images },
  ],
  sizes = [
    { name: 'Standard', dimensions: '8ft × 8ft' },
    { name: 'Large', dimensions: '10ft × 10ft' },
    { name: 'XL Family', dimensions: '12ft × 12ft' },
  ],
}: Interactive360ViewerProps) => {
  const [currentFrame, setCurrentFrame] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedSize, setSelectedSize] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStartX, setDragStartX] = useState(0)
  const [rotation, setRotation] = useState(0)
  const [isSpinning, setIsSpinning] = useState(false)

  const activeImages = colors[selectedColor]?.images || images
  const totalFrames = activeImages.length

  // Auto-spin on mount
  useEffect(() => {
    setIsSpinning(true)
    const autoSpin = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % totalFrames)
    }, 100)

    setTimeout(() => {
      clearInterval(autoSpin)
      setIsSpinning(false)
    }, 2000)

    return () => clearInterval(autoSpin)
  }, [selectedColor, totalFrames])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStartX(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const deltaX = e.clientX - dragStartX
    const frameDelta = Math.floor(deltaX / 20)

    if (frameDelta !== 0) {
      setCurrentFrame((prev) => (prev + frameDelta + totalFrames) % totalFrames)
      setDragStartX(e.clientX)
      setRotation(rotation + frameDelta * 15)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <div
      className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black/95 flex items-center justify-center' : ''}`}
    >
      <div
        className={`relative ${isFullscreen ? 'w-full max-w-6xl h-full max-h-screen p-8' : 'w-full aspect-square'}`}
      >
        {/* Main 360 Viewer */}
        <motion.div
          className="relative w-full h-full rounded-2xl overflow-hidden quantum-glass cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          whileHover={{ scale: isFullscreen ? 1 : 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Magnetic Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-cyan-500/20 via-transparent to-transparent opacity-0 hover:opacity-100 pointer-events-none"
            animate={{
              background: [
                'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
                'radial-gradient(circle at 60% 40%, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
                'radial-gradient(circle at 40% 60%, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Product Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={currentFrame}
              src={activeImages[currentFrame]}
              alt={`${alt} - View ${currentFrame + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            />
          </AnimatePresence>

          {/* Shimmer Highlights */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: 'easeInOut',
            }}
          />

          {/* Spin Indicator */}
          {(isDragging || isSpinning) && (
            <motion.div
              className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 quantum-glass-dark rounded-full text-white"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <RotateCw className="w-4 h-4 animate-spin" />
              <span className="text-sm font-medium">
                {isDragging ? 'Drag to rotate' : 'Auto-spinning...'}
              </span>
            </motion.div>
          )}

          {/* Frame Counter */}
          <div className="absolute bottom-4 left-4 px-3 py-1.5 quantum-glass-dark rounded-full text-white text-sm">
            {currentFrame + 1} / {totalFrames}
          </div>

          {/* Fullscreen Toggle */}
          <motion.button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="absolute top-4 right-4 p-3 quantum-glass-dark hover:quantum-glass rounded-full text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </motion.button>
        </motion.div>

        {/* Customization Panel */}
        <motion.div
          className="mt-6 p-6 quantum-glass rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* Color Selector */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Palette className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-semibold text-white">Choose Color</h3>
            </div>
            <div className="flex gap-3">
              {colors.map((color, index) => (
                <motion.button
                  key={color.name}
                  onClick={() => setSelectedColor(index)}
                  className={`relative flex-1 p-4 rounded-xl border-2 transition-all ${
                    selectedColor === index
                      ? 'border-cyan-400 bg-cyan-500/10'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className="w-8 h-8 rounded-full mx-auto mb-2 border-2 border-white/20"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-sm text-white block">{color.name}</span>
                  {selectedColor === index && (
                    <motion.div
                      layoutId="colorSelector"
                      className="absolute inset-0 rounded-xl quantum-glow"
                      transition={{ type: 'spring', duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Ruler className="w-5 h-5 text-coral-400" />
              <h3 className="text-lg font-semibold text-white">Select Size</h3>
            </div>
            <div className="flex gap-3">
              {sizes.map((size, index) => (
                <motion.button
                  key={size.name}
                  onClick={() => setSelectedSize(index)}
                  className={`relative flex-1 p-4 rounded-xl border-2 transition-all ${
                    selectedSize === index
                      ? 'border-coral-400 bg-coral-500/10'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm font-semibold text-white block mb-1">{size.name}</span>
                  <span className="text-xs text-white/60 block">{size.dimensions}</span>
                  {selectedSize === index && (
                    <motion.div
                      layoutId="sizeSelector"
                      className="absolute inset-0 rounded-xl quantum-glow-coral"
                      transition={{ type: 'spring', duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Share/Save Configuration */}
          <motion.button
            className="mt-6 w-full quantum-button group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            <span>Save My Configuration</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
