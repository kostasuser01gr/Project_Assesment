import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import { RotateCw, ZoomIn, ZoomOut } from 'lucide-react'

interface Product3DViewerProps {
  images: string[]
  alt: string
  colors?: { name: string; value: string }[]
}

export const Product3DViewer = ({ images, alt, colors }: Product3DViewerProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [selectedColor, setSelectedColor] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  const handleDrag = (_event: MouseEvent | TouchEvent | PointerEvent, info: { offset: { x: number; y: number } }) => {
    const deltaX = info.offset.x
    const imageChange = Math.floor(Math.abs(deltaX) / 50)
    
    if (deltaX > 0) {
      setCurrentImageIndex((prev) => Math.min(images.length - 1, prev + imageChange))
    } else {
      setCurrentImageIndex((prev) => Math.max(0, prev - imageChange))
    }
  }

  return (
    <div className="relative w-full">
      {/* 3D Viewer Container */}
      <motion.div
        ref={containerRef}
        className="relative aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl overflow-hidden shadow-2xl"
        style={{
          perspective: 1000
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const centerX = rect.left + rect.width / 2
          const centerY = rect.top + rect.height / 2
          x.set(e.clientX - centerX)
          y.set(e.clientY - centerY)
        }}
        onMouseLeave={() => {
          x.set(0)
          y.set(0)
        }}
      >
        {/* Holographic glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-purple-400/20 to-rose-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(6,182,212,0.2), rgba(168,85,247,0.2), rgba(251,113,133,0.2))',
              'linear-gradient(90deg, rgba(168,85,247,0.2), rgba(251,113,133,0.2), rgba(6,182,212,0.2))',
              'linear-gradient(135deg, rgba(251,113,133,0.2), rgba(6,182,212,0.2), rgba(168,85,247,0.2))',
            ]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Product image with 3D transform */}
        <motion.div
          className="relative w-full h-full cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDrag={handleDrag}
          style={{
            rotateX,
            rotateY,
            scale: zoom
          }}
          whileTap={{ cursor: 'grabbing' }}
        >
          <motion.img
            src={images[currentImageIndex]}
            alt={alt}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Shimmer light effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-100%', '200%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
              repeatDelay: 2
            }}
          />
        </motion.div>

        {/* Instruction overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full text-white flex items-center gap-2">
            <RotateCw className="w-5 h-5" />
            <span className="text-sm font-medium">Drag to rotate</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-between">
        {/* Zoom controls */}
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setZoom(Math.max(1, zoom - 0.2))}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            disabled={zoom <= 1}
          >
            <ZoomOut className="w-5 h-5 text-slate-700" />
          </motion.button>
          <span className="text-sm text-slate-600 font-medium min-w-[60px] text-center">
            {Math.round(zoom * 100)}%
          </span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setZoom(Math.min(2, zoom + 0.2))}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            disabled={zoom >= 2}
          >
            <ZoomIn className="w-5 h-5 text-slate-700" />
          </motion.button>
        </div>

        {/* Image indicator */}
        <div className="flex items-center gap-1">
          {images.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex
                  ? 'bg-cyan-500 w-8'
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Color selector */}
      {colors && colors.length > 0 && (
        <div className="mt-6">
          <div className="text-sm font-medium text-slate-700 mb-3">Color: {colors[selectedColor].name}</div>
          <div className="flex gap-3">
            {colors.map((color, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedColor(index)}
                className={`relative w-12 h-12 rounded-full border-2 transition-all ${
                  index === selectedColor
                    ? 'border-cyan-500 shadow-lg shadow-cyan-200'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div
                  className="w-full h-full rounded-full"
                  style={{ backgroundColor: color.value }}
                />
                {index === selectedColor && (
                  <motion.div
                    layoutId="selected-color"
                    className="absolute inset-0 rounded-full ring-2 ring-cyan-400 ring-offset-2"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* 360° Progress indicator */}
      <div className="mt-6 relative">
        <div className="flex justify-between text-xs text-slate-500 mb-2">
          <span>0°</span>
          <span>180°</span>
          <span>360°</span>
        </div>
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
            style={{
              width: `${(currentImageIndex / (images.length - 1)) * 100}%`
            }}
            animate={{
              boxShadow: [
                '0 0 10px rgba(6,182,212,0.5)',
                '0 0 20px rgba(6,182,212,0.8)',
                '0 0 10px rgba(6,182,212,0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  )
}
