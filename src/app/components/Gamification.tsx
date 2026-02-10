// ============================================================================
// GAMIFICATION SYSTEM - Achievements, streaks, points, and rewards
// ============================================================================

import { Award, Crown, Flame, Gift, Star, Sun, Target, Trophy, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect, useRef } from 'react'

// ==========================================
// TYPES
// ==========================================

interface Achievement {
  id: string
  name: string
  description: string
  icon: typeof Award
  color: string
  bgColor: string
  pointsValue: number
  unlockedAt?: Date
  progress?: number
  total?: number
  tier: 'bronze' | 'silver' | 'gold' | 'diamond'
}

interface UserStats {
  points: number
  level: number
  streak: number
  longestStreak: number
  achievements: Achievement[]
  totalPurchases: number
  referrals: number
}

// ==========================================
// ACHIEVEMENTS CATALOG
// ==========================================

const ACHIEVEMENTS_CATALOG: Achievement[] = [
  {
    id: 'first-purchase',
    name: 'First Purchase',
    description: 'Complete your first Sun Ninja purchase',
    icon: Trophy,
    color: '#FFD700',
    bgColor: 'bg-yellow-50',
    pointsValue: 100,
    tier: 'bronze',
  },
  {
    id: 'spf-warrior',
    name: 'SPF Warrior',
    description: 'Log sun protection 7 days in a row',
    icon: Sun,
    color: '#F97316',
    bgColor: 'bg-orange-50',
    pointsValue: 250,
    tier: 'silver',
    progress: 4,
    total: 7,
  },
  {
    id: 'shade-seeker',
    name: 'Shade Seeker',
    description: 'Use UV Index tracker for 30 days',
    icon: Target,
    color: '#0EA5E9',
    bgColor: 'bg-blue-50',
    pointsValue: 500,
    tier: 'gold',
    progress: 12,
    total: 30,
  },
  {
    id: 'beach-master',
    name: 'Beach Master',
    description: 'Set up your Sun Ninja tent 10 times',
    icon: Crown,
    color: '#8B5CF6',
    bgColor: 'bg-purple-50',
    pointsValue: 350,
    tier: 'gold',
    progress: 6,
    total: 10,
  },
  {
    id: 'social-butterfly',
    name: 'Social Butterfly',
    description: 'Refer 3 friends who make a purchase',
    icon: Gift,
    color: '#EC4899',
    bgColor: 'bg-pink-50',
    pointsValue: 750,
    tier: 'diamond',
    progress: 1,
    total: 3,
  },
  {
    id: 'review-star',
    name: 'Review Star',
    description: 'Leave a product review with photo',
    icon: Star,
    color: '#22C55E',
    bgColor: 'bg-green-50',
    pointsValue: 150,
    tier: 'bronze',
    unlockedAt: new Date('2026-01-15'),
  },
  {
    id: 'uv-expert',
    name: 'UV Expert',
    description: 'Complete the Sun Protection Quiz',
    icon: Zap,
    color: '#EAB308',
    bgColor: 'bg-yellow-50',
    pointsValue: 100,
    tier: 'bronze',
    unlockedAt: new Date('2026-01-20'),
  },
  {
    id: 'eco-warrior',
    name: 'Eco Warrior',
    description: 'Purchase 3 reef-safe products',
    icon: Award,
    color: '#10B981',
    bgColor: 'bg-emerald-50',
    pointsValue: 400,
    tier: 'silver',
    progress: 1,
    total: 3,
  },
]

// ==========================================
// POINTS LEVEL SYSTEM
// ==========================================

function getLevelInfo(points: number) {
  const levels = [
    { level: 1, name: 'Beach Beginner', min: 0, max: 200, color: '#A3A3A3' },
    { level: 2, name: 'Sun Seeker', min: 200, max: 500, color: '#CD7F32' },
    { level: 3, name: 'Shade Pro', min: 500, max: 1000, color: '#C0C0C0' },
    { level: 4, name: 'Sun Guardian', min: 1000, max: 2000, color: '#FFD700' },
    { level: 5, name: 'UV Master', min: 2000, max: 5000, color: '#B9F2FF' },
    { level: 6, name: 'Sun Ninja Elite', min: 5000, max: Infinity, color: '#FF6B6B' },
  ]
  const current = [...levels].reverse().find((l) => points >= l.min) || levels[0]
  const next = levels.find((l) => points < l.min)
  const progress = next ? ((points - current.min) / (next.min - current.min)) * 100 : 100

  return { ...current, next, progress }
}

// ==========================================
// STREAK COUNTER COMPONENT
// ==========================================

export function StreakCounter({ streak }: { streak: number }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
    >
      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
        <Flame className="w-5 h-5" />
      </motion.div>
      <span className="font-bold text-lg">{streak}</span>
      <span className="text-sm text-white/80">day streak</span>
    </motion.div>
  )
}

// ==========================================
// ACHIEVEMENT CARD
// ==========================================

function AchievementCard({ achievement }: { achievement: Achievement }) {
  const isUnlocked = !!achievement.unlockedAt
  const hasProgress = achievement.progress !== undefined && achievement.total !== undefined
  const Icon = achievement.icon

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`relative p-4 rounded-xl border transition-all ${
        isUnlocked
          ? 'border-[#FFD700]/30 bg-gradient-to-br from-white to-[#FFD700]/5 shadow-sm'
          : 'border-border bg-white'
      }`}
    >
      {isUnlocked && (
        <div className="absolute -top-1 -right-1">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500, damping: 15 }}
            className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center"
          >
            <span className="text-white text-xs">✓</span>
          </motion.div>
        </div>
      )}

      <div className="flex items-start gap-3">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${achievement.bgColor}`}
          style={{ opacity: isUnlocked ? 1 : 0.5 }}
        >
          <Icon className="w-5 h-5" style={{ color: achievement.color }} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className={`text-sm font-semibold ${isUnlocked ? '' : 'text-muted-foreground'}`}>
              {achievement.name}
            </h4>
            <span
              className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded"
              style={{
                backgroundColor: `${achievement.color}15`,
                color: achievement.color,
              }}
            >
              {achievement.tier}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">{achievement.description}</p>

          {hasProgress && !isUnlocked && (
            <div className="mt-2">
              <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-1">
                <span>
                  {achievement.progress}/{achievement.total}
                </span>
                <span>+{achievement.pointsValue} pts</span>
              </div>
              <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: achievement.color }}
                  animate={{
                    width: `${((achievement.progress || 0) / (achievement.total || 1)) * 100}%`,
                  }}
                />
              </div>
            </div>
          )}

          {isUnlocked && (
            <div className="text-[10px] text-[#FFD700] font-medium mt-1">
              +{achievement.pointsValue} pts earned
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// ==========================================
// REWARDS PANEL
// ==========================================

interface Reward {
  id: string
  name: string
  description: string
  cost: number
  icon: typeof Gift
  available: boolean
}

const REWARDS: Reward[] = [
  {
    id: 'r1',
    name: '10% Off Next Order',
    description: 'Valid for 30 days',
    cost: 500,
    icon: Gift,
    available: true,
  },
  {
    id: 'r2',
    name: 'Free Shipping',
    description: 'On your next order',
    cost: 300,
    icon: Gift,
    available: true,
  },
  {
    id: 'r3',
    name: 'Exclusive Beach Kit',
    description: 'Limited edition accessories',
    cost: 1500,
    icon: Crown,
    available: true,
  },
  {
    id: 'r4',
    name: 'VIP Early Access',
    description: 'New product launches',
    cost: 2000,
    icon: Star,
    available: false,
  },
]

// ==========================================
// MAIN GAMIFICATION DASHBOARD
// ==========================================

export function GamificationDashboard() {
  const [activeTab, setActiveTab] = useState<'achievements' | 'rewards'>('achievements')
  const [showCelebration, setShowCelebration] = useState(false)

  // Simulated user stats
  const stats: UserStats = {
    points: 850,
    level: 3,
    streak: 5,
    longestStreak: 12,
    achievements: ACHIEVEMENTS_CATALOG,
    totalPurchases: 3,
    referrals: 1,
  }

  const levelInfo = getLevelInfo(stats.points)
  const unlockedCount = stats.achievements.filter((a) => a.unlockedAt).length

  // Celebration animation effect — only on first visit per session
  const celebrationShownRef = useRef(false)
  useEffect(() => {
    if (celebrationShownRef.current) return
    celebrationShownRef.current = true
    setShowCelebration(true)
    const timer = setTimeout(() => setShowCelebration(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto"
    >
      {/* Level & Points Header */}
      <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] text-white p-6 mb-6 relative">
        <AnimatePresence>
          {showCelebration && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none"
            >
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 1,
                    x: '50%',
                    y: '50%',
                    scale: 0,
                  }}
                  animate={{
                    opacity: 0,
                    x: `${Math.random() * 100}%`,
                    y: `${Math.random() * 100}%`,
                    scale: 1,
                  }}
                  transition={{ duration: 2, delay: i * 0.1 }}
                  className="absolute w-2 h-2 rounded-full"
                  style={{ backgroundColor: ['#FFD700', '#FF6B6B', '#FFF'][i % 3] }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-white/70 text-sm">Level {levelInfo.level}</p>
              <h2 className="text-2xl font-bold">{levelInfo.name}</h2>
            </div>
            <StreakCounter streak={stats.streak} />
          </div>

          <div className="mb-2 flex items-center justify-between text-sm">
            <span>{stats.points} points</span>
            {levelInfo.next && (
              <span className="text-white/70">
                {levelInfo.next.min - stats.points} to {levelInfo.next.name}
              </span>
            )}
          </div>

          <div className="h-3 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#FFD700] to-[#FF6B6B] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${levelInfo.progress}%` }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-5">
            <div className="text-center">
              <div className="text-2xl font-bold">{unlockedCount}</div>
              <div className="text-xs text-white/70">Achievements</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{stats.totalPurchases}</div>
              <div className="text-xs text-white/70">Purchases</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{stats.referrals}</div>
              <div className="text-xs text-white/70">Referrals</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-neutral-100 rounded-xl mb-6">
        {(['achievements', 'rewards'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab
                ? 'bg-white text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab === 'achievements'
              ? `Achievements (${unlockedCount}/${stats.achievements.length})`
              : 'Rewards'}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'achievements' ? (
          <motion.div
            key="achievements"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-3"
          >
            {stats.achievements.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="rewards"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-3"
          >
            {REWARDS.map((reward) => {
              const canAfford = stats.points >= reward.cost
              const Icon = reward.icon

              return (
                <div
                  key={reward.id}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FFD700]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#FFD700]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold">{reward.name}</h4>
                    <p className="text-xs text-muted-foreground">{reward.description}</p>
                  </div>
                  <button
                    disabled={!canAfford}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                      canAfford
                        ? 'bg-[#0EA5E9] text-white hover:bg-[#0284C7]'
                        : 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                    }`}
                  >
                    {reward.cost} pts
                  </button>
                </div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
