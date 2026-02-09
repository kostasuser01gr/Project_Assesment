import { motion } from 'framer-motion'
import { Leaf, Recycle, Wind, Droplet, TreePine, Award, TrendingDown } from 'lucide-react'

export const SustainabilitySection = () => {
  const sustainabilityStats = [
    {
      icon: Recycle,
      value: '75%',
      label: 'Recycled Materials',
      description: 'Post-consumer recycled polyester in our fabric',
      color: 'text-green-400'
    },
    {
      icon: Wind,
      value: '100%',
      label: 'Carbon Neutral',
      description: 'Offset shipping emissions for every order',
      color: 'text-cyan-400'
    },
    {
      icon: Droplet,
      value: '40%',
      label: 'Less Water',
      description: 'Reduced water usage in manufacturing',
      color: 'text-blue-400'
    },
    {
      icon: TreePine,
      value: '1 Tree',
      label: 'Per Purchase',
      description: 'We plant a tree for every Sun Ninja sold',
      color: 'text-emerald-400'
    }
  ]

  const certifications = [
    { name: 'OEKO-TEX®', badge: '🏅' },
    { name: 'bluesign®', badge: '💙' },
    { name: '1% For The Planet', badge: '🌍' },
    { name: 'B Corp Certified', badge: '✅' }
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with leaf particles */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-green-900/20 to-transparent" />
      
      {/* Floating leaf particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut'
            }}
          >
            🍃
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Leaf className="w-16 h-16 text-green-400 mx-auto" />
          </motion.div>
          <h2 className="text-5xl font-bold text-white mb-4">
            Protecting the Beaches We Love
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Every Sun Ninja is crafted with the planet in mind. From recycled materials to carbon-neutral shipping, we're committed to a sustainable future.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {sustainabilityStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="quantum-glass p-8 rounded-2xl text-center relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Animated background glow */}
              <motion.div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity ${stat.color.replace('text-', 'bg-')}/20`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <stat.icon className={`w-12 h-12 ${stat.color} mb-4 mx-auto`} />
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-white/80 mb-2">{stat.label}</div>
              <div className="text-sm text-white/60">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Impact Visualization */}
        <motion.div
          className="quantum-glass p-12 rounded-3xl mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Animated Impact Counter */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Impact So Far</h3>
              
              <div className="space-y-6">
                <ImpactCounter
                  icon={TreePine}
                  label="Trees Planted"
                  value={12847}
                  color="text-green-400"
                />
                <ImpactCounter
                  icon={TrendingDown}
                  label="CO₂ Offset (tons)"
                  value={542}
                  color="text-cyan-400"
                />
                <ImpactCounter
                  icon={Droplet}
                  label="Water Saved (liters)"
                  value={890123}
                  color="text-blue-400"
                />
              </div>
            </div>

            {/* Right: Visual Animation */}
            <div className="relative h-96 flex items-center justify-center">
              {/* Animated Earth */}
              <motion.div
                className="relative w-64 h-64"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                <div className="text-9xl">🌍</div>
                
                {/* Orbiting elements */}
                {[
                  { emoji: '🌱', delay: 0, radius: 140 },
                  { emoji: '♻️', delay: 1, radius: 140 },
                  { emoji: '💚', delay: 2, radius: 140 },
                  { emoji: '🌊', delay: 3, radius: 140 }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-3xl"
                    style={{
                      left: '50%',
                      top: '50%'
                    }}
                    animate={{
                      x: [
                        Math.cos(((i * 90 + item.delay * 120) * Math.PI) / 180) * item.radius,
                        Math.cos(((i * 90 + item.delay * 120 + 360) * Math.PI) / 180) * item.radius
                      ],
                      y: [
                        Math.sin(((i * 90 + item.delay * 120) * Math.PI) / 180) * item.radius,
                        Math.sin(((i * 90 + item.delay * 120 + 360) * Math.PI) / 180) * item.radius
                      ]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                      delay: item.delay
                    }}
                  >
                    {item.emoji}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Award className="w-6 h-6 text-gold-400" />
            <h3 className="text-2xl font-bold text-white">Certified & Verified</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="quantum-glass px-6 py-4 rounded-xl flex items-center gap-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <span className="text-3xl">{cert.badge}</span>
                <span className="text-white font-semibold">{cert.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Helper component for impact counters
const ImpactCounter = ({ 
  icon: Icon, 
  label, 
  value, 
  color 
}: { 
  icon: React.ElementType
  label: string
  value: number
  color: string 
}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="p-3 quantum-glass-dark rounded-xl">
        <Icon className={`w-8 h-8 ${color}`} />
      </div>
      <div>
        <motion.div
          className={`text-3xl font-bold ${color}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {value.toLocaleString()}
        </motion.div>
        <div className="text-white/60 text-sm">{label}</div>
      </div>
    </div>
  )
}
