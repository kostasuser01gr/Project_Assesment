// ============================================================================
// UV DASHBOARD PAGE - Real-time UV monitoring & sun protection hub
// ============================================================================

import { motion } from 'motion/react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { UVIndexWidget, SunExposureTimer } from '../components/UVIndexWidget'

import { SmartRecommendations } from '../components/SmartRecommendations'
import { MapPin, Bell } from 'lucide-react'

export function UVDashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="py-12 bg-gradient-to-b from-[#0EA5E9]/5 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-10"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-3">UV Protection Dashboard</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Real-time UV monitoring with personalized protection recommendations
              </p>

              {/* Location */}
              <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-white border border-border text-sm">
                <MapPin className="w-4 h-4 text-[#0EA5E9]" />
                <span>Miami Beach, FL</span>
                <button className="text-[#0EA5E9] text-xs font-medium hover:underline">
                  Change
                </button>
              </div>
            </motion.div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="space-y-6">
                <UVIndexWidget />
                <SunExposureTimer />
              </div>

              <div className="space-y-6">
                {/* Alert Signup */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="p-6 rounded-2xl bg-gradient-to-r from-[#FF6B6B] to-[#FFD700] text-white"
                >
                  <div className="flex items-start gap-4">
                    <Bell className="w-8 h-8 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold mb-1">UV Alert Notifications</h3>
                      <p className="text-white/80 text-sm mb-4">
                        Get notified when UV levels are high at your saved locations
                      </p>
                      <div className="flex gap-3">
                        <input
                          type="email"
                          placeholder="Your email"
                          className="flex-1 px-4 py-2.5 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder:text-white/60 text-sm outline-none border border-white/30 focus:border-white/60"
                        />
                        <button className="px-5 py-2.5 rounded-xl bg-white text-foreground font-semibold text-sm hover:bg-white/90 transition-colors">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Today's Tips */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-6 rounded-2xl bg-white border border-border shadow-sm"
                >
                  <h3 className="text-lg font-bold mb-4">☀️ Today's Protection Tips</h3>
                  <div className="space-y-3">
                    {[
                      { time: '10:00 AM', tip: 'Apply sunscreen before heading out', icon: '🧴' },
                      { time: '12:00 PM', tip: 'Peak UV — set up Sun Ninja tent now', icon: '⛱️' },
                      { time: '2:00 PM', tip: 'Reapply sunscreen after swimming', icon: '🏊' },
                      { time: '4:00 PM', tip: 'UV dropping — still wear protection', icon: '🌤️' },
                    ].map((item) => (
                      <div
                        key={item.time}
                        className="flex items-center gap-3 p-3 rounded-xl bg-neutral-50"
                      >
                        <span className="text-xl">{item.icon}</span>
                        <div className="flex-1">
                          <div className="text-sm font-medium">{item.tip}</div>
                          <div className="text-xs text-muted-foreground">{item.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Weekly UV Summary */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="p-6 rounded-2xl bg-white border border-border shadow-sm"
                >
                  <h3 className="text-lg font-bold mb-4">📊 7-Day UV Forecast</h3>
                  <div className="grid grid-cols-7 gap-2">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
                      const uvValues = [6, 7, 8, 5, 9, 8, 4]
                      const uv = uvValues[i]
                      const color =
                        uv <= 2 ? '#22C55E' : uv <= 5 ? '#F59E0B' : uv <= 7 ? '#F97316' : '#EF4444'
                      return (
                        <div key={day} className="text-center">
                          <div className="text-xs text-muted-foreground mb-2">{day}</div>
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.6 + i * 0.05 }}
                            className="w-8 h-8 rounded-full mx-auto flex items-center justify-center text-white text-xs font-bold"
                            style={{ backgroundColor: color }}
                          >
                            {uv}
                          </motion.div>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendations based on UV */}
        <SmartRecommendations
          title="UV-Matched Products"
          subtitle="Products recommended based on current UV conditions"
        />
      </main>

      <Footer />
    </div>
  )
}
