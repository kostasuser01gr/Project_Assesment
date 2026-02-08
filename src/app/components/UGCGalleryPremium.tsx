import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Heart, MessageCircle, Share2, Instagram } from 'lucide-react'

interface UGCPhoto {
  id: string
  src: string
  likes: number
  author: string
  caption: string
  date: string
}

interface UGCGalleryProps {
  photos: UGCPhoto[]
}

export const UGCGalleryPremium = ({ photos }: UGCGalleryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<UGCPhoto | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white mb-6"
        >
          <Instagram className="w-5 h-5" />
          <span className="font-semibold">Shot by Sun Ninja Fans</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4"
        >
          Join 10,000+ Families Making Beach Memories
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-600 max-w-2xl mx-auto"
        >
          Real moments, real families, real protection. See how Sun Ninja transforms beach days.
        </motion.p>
      </div>

      {/* Instagram-style grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <UGCPhotoCard
              key={photo.id}
              photo={photo}
              index={index}
              isHovered={hoveredId === photo.id}
              onHover={() => setHoveredId(photo.id)}
              onLeave={() => setHoveredId(null)}
              onClick={() => setSelectedPhoto(photo)}
            />
          ))}
        </div>
      </div>

      {/* Live stats ticker */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-16 px-6"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Photos Shared', value: '2,847', icon: Instagram },
              { label: 'Total Likes', value: '24.8K', icon: Heart },
              { label: 'Happy Customers', value: '10.2K', icon: MessageCircle }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-rose-500 mx-auto mb-3" />
                <motion.div
                  className="text-4xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-slate-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Lightbox modal */}
      {selectedPhoto && (
        <UGCLightbox
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </div>
  )
}

const UGCPhotoCard = ({
  photo,
  index,
  isHovered,
  onHover,
  onLeave,
  onClick
}: {
  photo: UGCPhoto
  index: number
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
  onClick: () => void
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      className="relative aspect-square cursor-pointer group"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {/* Image */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg">
        <img
          src={photo.src}
          alt={photo.caption}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Holographic border */}
        <motion.div
          className="absolute inset-0 ring-2 ring-transparent group-hover:ring-rose-400 rounded-2xl"
          animate={isHovered ? {
            boxShadow: [
              '0 0 20px rgba(244,63,94,0.5)',
              '0 0 40px rgba(244,63,94,0.8)',
              '0 0 20px rgba(244,63,94,0.5)'
            ]
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Hover overlay with stats */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
      >
        {/* Top info */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold">
            {photo.author[0]}
          </div>
          <div className="text-white text-sm font-medium drop-shadow-lg">
            @{photo.author}
          </div>
        </div>

        {/* Bottom actions */}
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2"
            whileHover={{ scale: 1.1 }}
          >
            <Heart className="w-4 h-4 text-white fill-white" />
            <LiveCounter target={photo.likes} />
          </motion.div>

          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2, rotate: -15 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center"
            >
              <Share2 className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
        animate={isHovered ? { x: ['-100%', '200%'] } : {}}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </motion.div>
  )
}

const LiveCounter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(target)

  return (
    <motion.span
      className="text-white text-sm font-bold"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
    >
      {count.toLocaleString()}
    </motion.span>
  )
}

const UGCLightbox = ({ photo, onClose }: { photo: UGCPhoto; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="aspect-square">
          <img
            src={photo.src}
            alt={photo.caption}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info panel */}
        <div className="p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
              {photo.author[0]}
            </div>
            <div>
              <div className="font-bold text-slate-800">@{photo.author}</div>
              <div className="text-sm text-slate-500">{photo.date}</div>
            </div>
          </div>

          <p className="text-slate-700 mb-4">{photo.caption}</p>

          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-rose-500 hover:text-rose-600 transition-colors">
              <Heart className="w-5 h-5 fill-current" />
              <span className="font-semibold">{photo.likes.toLocaleString()}</span>
            </button>
            <button className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">Comment</span>
            </button>
            <button className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors">
              <Share2 className="w-5 h-5" />
              <span className="font-semibold">Share</span>
            </button>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-black/70 transition-colors flex items-center justify-center"
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  )
}
