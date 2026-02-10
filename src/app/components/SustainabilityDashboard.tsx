// ============================================================================
// SUSTAINABILITY DASHBOARD - Eco-friendly product features
// ============================================================================

import { Leaf, Droplets, Recycle, Globe, TreePine, Award, Check } from 'lucide-react'
import { motion } from 'motion/react'

interface EcoMetric {
  icon: typeof Leaf
  label: string
  value: string
  detail: string
  color: string
}

const ECO_METRICS: EcoMetric[] = [
  {
    icon: Leaf,
    label: 'Reef Safe',
    value: '100%',
    detail: 'No harmful chemicals that damage coral reefs',
    color: '#22C55E',
  },
  {
    icon: Droplets,
    label: 'Recycled Materials',
    value: '65%',
    detail: 'Made from post-consumer recycled fabrics',
    color: '#0EA5E9',
  },
  {
    icon: Recycle,
    label: 'Recyclable Packaging',
    value: '100%',
    detail: 'All packaging is fully recyclable or compostable',
    color: '#10B981',
  },
  {
    icon: Globe,
    label: 'Carbon Offset',
    value: '2.4kg',
    detail: 'CO₂ offset per purchase through tree planting',
    color: '#6366F1',
  },
]

const CERTIFICATIONS = [
  { name: 'OEKO-TEX Standard 100', icon: Award },
  { name: 'Bluesign Approved', icon: Check },
  { name: '1% for the Planet', icon: Globe },
  { name: 'B Corp Certified', icon: TreePine },
]

export function SustainabilityDashboard() {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50/50 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            <Leaf className="w-4 h-4" />
            Our Sustainability Promise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Protecting You & The Planet</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every Sun Ninja product is designed with environmental responsibility in mind. We're
            committed to reducing our footprint while keeping you protected.
          </p>
        </motion.div>

        {/* Eco Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ECO_METRICS.map((metric, i) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-white border border-border shadow-sm text-center"
              >
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: `${metric.color}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: metric.color }} />
                </div>
                <div className="text-3xl font-bold mb-1" style={{ color: metric.color }}>
                  {metric.value}
                </div>
                <div className="text-sm font-semibold mb-1">{metric.label}</div>
                <p className="text-xs text-muted-foreground">{metric.detail}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Eco Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-border p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Score Gauge */}
            <div className="flex-shrink-0">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#E5E5E5" strokeWidth="6" />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="#22C55E"
                    strokeWidth="6"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: '0 264' }}
                    whileInView={{ strokeDasharray: '228 264' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-green-600">A+</span>
                  <span className="text-xs text-muted-foreground">Eco Score</span>
                </div>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Sun Ninja Eco Score: A+</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Our products score in the top 5% for environmental sustainability across materials,
                manufacturing, shipping, and end-of-life recyclability.
              </p>

              {/* Breakdown bars */}
              <div className="space-y-3">
                {[
                  { label: 'Materials', score: 92 },
                  { label: 'Manufacturing', score: 88 },
                  { label: 'Packaging', score: 95 },
                  { label: 'Durability', score: 90 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-medium">{item.label}</span>
                      <span className="text-green-600 font-semibold">{item.score}/100</span>
                    </div>
                    <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-green-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.score}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {CERTIFICATIONS.map((cert) => {
            const Icon = cert.icon
            return (
              <div
                key={cert.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border text-sm font-medium text-muted-foreground"
              >
                <Icon className="w-4 h-4 text-green-600" />
                {cert.name}
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
