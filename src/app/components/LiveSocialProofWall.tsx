import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, MapPin, ExternalLink, Calendar, TrendingUp } from 'lucide-react'

interface SocialPost {
  id: string
  author: string
  avatar: string
  location: string
  coordinates: { lat: number; lng: number }
  image: string
  caption: string
  likes: number
  date: string
  isNew?: boolean
}

interface LiveSocialProofWallProps {
  posts: SocialPost[]
}

export const LiveSocialProofWall = ({ posts }: LiveSocialProofWallProps) => {
  const [selectedPost, setSelectedPost] = useState<SocialPost | null>(null)
  const [hoveredPin, setHoveredPin] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid')

  // Aggregate stats
  const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0)
  const countries = [...new Set(posts.map(p => p.location.split(',')[1]?.trim()))]
  const recentPosts = posts.filter(p => p.isNew).length

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-purple-900/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with Stats */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              Join the Sun Ninja Community
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Thousands of beach lovers worldwide trust Sun Ninja
            </p>
          </motion.div>

          {/* Live Stats Bar */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <LiveStat
              icon={Heart}
              value={totalLikes.toLocaleString()}
              label="Total Loves"
              color="text-pink-400"
            />
            <LiveStat
              icon={MapPin}
              value={countries.length.toString()}
              label="Countries"
              color="text-cyan-400"
            />
            <LiveStat
              icon={TrendingUp}
              value={`+${recentPosts}`}
              label="New This Week"
              color="text-green-400"
              pulse
            />
          </motion.div>

          {/* View Toggle */}
          <div className="flex justify-center gap-4">
            <motion.button
              onClick={() => setViewMode('grid')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                viewMode === 'grid'
                  ? 'quantum-glass-dark text-white'
                  : 'text-white/60 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Grid View
            </motion.button>
            <motion.button
              onClick={() => setViewMode('map')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                viewMode === 'map'
                  ? 'quantum-glass-dark text-white'
                  : 'text-white/60 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Map View
            </motion.button>
          </div>
        </div>

        {/* Grid View */}
        <AnimatePresence mode="wait">
          {viewMode === 'grid' && (
            <motion.div
              key="grid"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {posts.map((post, index) => (
                <InstagramCard
                  key={post.id}
                  post={post}
                  index={index}
                  onClick={() => setSelectedPost(post)}
                />
              ))}
            </motion.div>
          )}

          {/* Map View */}
          {viewMode === 'map' && (
            <motion.div
              key="map"
              className="relative h-[600px] quantum-glass rounded-3xl overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Simple world map with pins */}
              <WorldMapWithPins
                posts={posts}
                hoveredPin={hoveredPin}
                onPinHover={setHoveredPin}
                onPinClick={setSelectedPost}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Post Detail Modal */}
        <AnimatePresence>
          {selectedPost && (
            <PostDetailModal
              post={selectedPost}
              onClose={() => setSelectedPost(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

// Instagram-style Card
const InstagramCard = ({ 
  post, 
  index, 
  onClick 
}: { 
  post: SocialPost
  index: number
  onClick: () => void 
}) => {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <motion.div
      className="quantum-glass rounded-2xl overflow-hidden cursor-pointer group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
    >
      {/* New badge */}
      {post.isNew && (
        <motion.div
          className="absolute top-4 right-4 z-20 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          NEW
        </motion.div>
      )}

      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={post.image}
          alt={post.caption}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <p className="text-white text-sm line-clamp-3">{post.caption}</p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
              {post.author[0].toUpperCase()}
            </div>
            <span className="text-white font-semibold text-sm">@{post.author}</span>
          </div>

          <motion.button
            onClick={(e) => {
              e.stopPropagation()
              setIsLiked(!isLiked)
            }}
            className="flex items-center gap-1"
            whileTap={{ scale: 1.2 }}
          >
            <Heart
              className={`w-5 h-5 ${isLiked ? 'fill-pink-500 text-pink-500' : 'text-white/60'}`}
            />
            <span className="text-white/80 text-sm">{post.likes + (isLiked ? 1 : 0)}</span>
          </motion.button>
        </div>

        <div className="flex items-center gap-2 text-white/60 text-xs">
          <MapPin className="w-3 h-3" />
          <span>{post.location}</span>
          <span>•</span>
          <Calendar className="w-3 h-3" />
          <span>{post.date}</span>
        </div>
      </div>
    </motion.div>
  )
}

// World Map with Pins
const WorldMapWithPins = ({ 
  posts, 
  hoveredPin, 
  onPinHover, 
  onPinClick 
}: { 
  posts: SocialPost[]
  hoveredPin: string | null
  onPinHover: (id: string | null) => void
  onPinClick: (post: SocialPost) => void
}) => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 p-8">
      {/* Simple world illustration */}
      <div className="text-9xl absolute inset-0 flex items-center justify-center opacity-20">
        🌍
      </div>

      {/* Pins */}
      {posts.map((post, index) => {
        // Convert lat/lng to percentage position
        const x = ((post.coordinates.lng + 180) / 360) * 100
        const y = ((90 - post.coordinates.lat) / 180) * 100

        return (
          <motion.div
            key={post.id}
            className="absolute cursor-pointer"
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={{ scale: 0 }}
            animate={{ scale: hoveredPin === post.id ? 1.5 : 1 }}
            transition={{ delay: index * 0.05 }}
            onMouseEnter={() => onPinHover(post.id)}
            onMouseLeave={() => onPinHover(null)}
            onClick={() => onPinClick(post)}
          >
            <MapPin className="w-6 h-6 text-pink-500 fill-pink-500 drop-shadow-lg" />
            
            {/* Hover card */}
            {hoveredPin === post.id && (
              <motion.div
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 quantum-glass-dark rounded-lg p-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-24 object-cover rounded-lg mb-2"
                />
                <div className="text-white text-xs font-semibold mb-1">@{post.author}</div>
                <div className="text-white/80 text-xs line-clamp-2">{post.caption}</div>
              </motion.div>
            )}
          </motion.div>
        )
      })}
    </div>
  )
}

// Post Detail Modal
const PostDetailModal = ({ post, onClose }: { post: SocialPost; onClose: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="max-w-4xl w-full quantum-glass-dark rounded-3xl overflow-hidden"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <img
            src={post.image}
            alt={post.caption}
            className="w-full h-full object-cover"
          />

          {/* Details */}
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-white font-bold">
                {post.author[0].toUpperCase()}
              </div>
              <div>
                <div className="text-white font-bold">@{post.author}</div>
                <div className="text-white/60 text-sm flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {post.location}
                </div>
              </div>
            </div>

            <p className="text-white mb-6">{post.caption}</p>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
                <span className="text-white text-lg font-semibold">{post.likes}</span>
              </div>
              <div className="text-white/60 text-sm">{post.date}</div>
            </div>

            <motion.button
              onClick={onClose}
              className="w-full quantum-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View on Instagram
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Live Stat Component
const LiveStat = ({ 
  icon: Icon, 
  value, 
  label, 
  color, 
  pulse 
}: { 
  icon: React.ElementType
  value: string
  label: string
  color: string
  pulse?: boolean
}) => {
  return (
    <motion.div
      className="flex items-center gap-3 quantum-glass px-6 py-3 rounded-full"
      animate={pulse ? { scale: [1, 1.05, 1] } : {}}
      transition={pulse ? { duration: 2, repeat: Infinity } : {}}
    >
      <Icon className={`w-6 h-6 ${color}`} />
      <div>
        <div className={`text-2xl font-bold ${color}`}>{value}</div>
        <div className="text-white/60 text-xs">{label}</div>
      </div>
    </motion.div>
  )
}
