// ============================================================================
// SMART PRODUCT RECOMMENDATIONS - AI-powered recommendation engine
// ============================================================================

import { ArrowRight, Sparkles, Star, TrendingUp, Zap } from 'lucide-react'
import { motion } from 'motion/react'
import { useState, useMemo } from 'react'

// ==========================================
// TYPES
// ==========================================

interface RecommendedProduct {
  id: string
  name: string
  slug: string
  price: number
  compareAtPrice?: number
  image: string
  rating: number
  reviewCount: number
  badge?: string
  badgeColor?: string
  tags: string[]
  matchScore: number // 0-100 relevance
  reason: string
}

interface UserPreferences {
  skinType?: number
  activity?: string
  budget?: 'budget' | 'mid' | 'premium'
  previousPurchases?: string[]
}

// ==========================================
// PRODUCT CATALOG (simulated)
// ==========================================

const PRODUCT_CATALOG: RecommendedProduct[] = [
  {
    id: 'tent-xl',
    name: 'Sun Ninja XL Beach Tent',
    slug: 'sun-ninja-xl',
    price: 129.99,
    compareAtPrice: 199.99,
    image: '/assets/photos/product-tent-xl.jpg',
    rating: 4.9,
    reviewCount: 2847,
    badge: 'Best Seller',
    badgeColor: '#FF6B6B',
    tags: ['beach', 'family', 'uvprotection', 'premium'],
    matchScore: 95,
    reason: 'Most popular choice for beach days',
  },
  {
    id: 'tent-compact',
    name: 'Sun Ninja Compact',
    slug: 'sun-ninja-compact',
    price: 89.99,
    compareAtPrice: 129.99,
    image: '/assets/photos/product-tent-compact.jpg',
    rating: 4.8,
    reviewCount: 1234,
    badge: 'Great Value',
    badgeColor: '#22C55E',
    tags: ['beach', 'compact', 'hiking', 'solo'],
    matchScore: 82,
    reason: 'Perfect for solo trips and hiking',
  },
  {
    id: 'tent-family',
    name: 'Sun Ninja Family Size',
    slug: 'sun-ninja-family',
    price: 179.99,
    compareAtPrice: 249.99,
    image: '/assets/photos/product-tent-family.jpg',
    rating: 4.9,
    reviewCount: 891,
    badge: 'Family Pick',
    badgeColor: '#0EA5E9',
    tags: ['beach', 'family', 'large', 'premium'],
    matchScore: 88,
    reason: 'Maximum shade for the whole family',
  },
  {
    id: 'bundle-pro',
    name: 'Pro Beach Bundle',
    slug: 'pro-beach-bundle',
    price: 199.99,
    compareAtPrice: 299.99,
    image: '/assets/photos/product-bundle-pro.jpg',
    rating: 4.9,
    reviewCount: 567,
    badge: 'Save 33%',
    badgeColor: '#FFD700',
    tags: ['bundle', 'beach', 'premium', 'accessories'],
    matchScore: 90,
    reason: 'Everything you need in one package',
  },
  {
    id: 'spf50-sunscreen',
    name: 'Sun Ninja SPF 50 Sunscreen',
    slug: 'spf50-sunscreen',
    price: 24.99,
    image: '/assets/photos/product-sunscreen.jpg',
    rating: 4.7,
    reviewCount: 2100,
    tags: ['sunscreen', 'spf50', 'reefSafe'],
    matchScore: 75,
    reason: 'Reef-safe SPF 50+ protection',
  },
  {
    id: 'beach-stakes',
    name: 'Premium Sand Stakes (Pack of 8)',
    slug: 'premium-sand-stakes',
    price: 19.99,
    image: '/assets/photos/product-stakes.jpg',
    rating: 4.6,
    reviewCount: 890,
    badge: 'Add-on',
    badgeColor: '#A3A3A3',
    tags: ['accessory', 'stakes', 'beach'],
    matchScore: 70,
    reason: 'Essential accessory for wind protection',
  },
]

// ==========================================
// RECOMMENDATION ENGINE
// ==========================================

function getRecommendations(preferences: UserPreferences, limit: number = 4): RecommendedProduct[] {
  let scored = PRODUCT_CATALOG.map((product) => {
    let score = product.matchScore

    // Adjust based on activity
    if (preferences.activity) {
      if (product.tags.includes(preferences.activity)) score += 15
    }

    // Adjust based on budget
    if (preferences.budget === 'budget' && product.price < 100) score += 10
    if (preferences.budget === 'premium' && product.price > 100) score += 10

    // Adjust based on skin type (higher sensitivity = recommend more protection)
    if (preferences.skinType && preferences.skinType <= 2) {
      if (product.tags.includes('uvprotection') || product.tags.includes('spf50')) score += 20
    }

    // Don't recommend products already purchased
    if (preferences.previousPurchases?.includes(product.id)) score -= 50

    return { ...product, matchScore: Math.min(score, 100) }
  })

  scored.sort((a, b) => b.matchScore - a.matchScore)
  return scored.slice(0, limit)
}

// ==========================================
// RECOMMENDATION CARD
// ==========================================

function RecommendationCard({ product, index }: { product: RecommendedProduct; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group rounded-2xl overflow-hidden border border-border bg-white shadow-sm hover:shadow-lg transition-shadow"
    >
      {/* Image */}
      <div className="aspect-square relative overflow-hidden bg-neutral-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            ;(e.target as HTMLImageElement).src = '/images/beach/product-beach-01.jpg'
          }}
        />

        {product.badge && (
          <div
            className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold text-white"
            style={{ backgroundColor: product.badgeColor }}
          >
            {product.badge}
          </div>
        )}

        {/* Match Score */}
        <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-[#FFD700]" />
          {product.matchScore}% match
        </div>

        {product.compareAtPrice && (
          <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-red-500 text-white text-xs font-bold">
            Save ${(product.compareAtPrice - product.price).toFixed(0)}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-sm font-semibold line-clamp-1 group-hover:text-[#0EA5E9] transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mt-1.5">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-3 h-3 ${
                  star <= Math.round(product.rating)
                    ? 'fill-[#FFD700] text-[#FFD700]'
                    : 'text-neutral-200'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Why recommended */}
        <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
          <Zap className="w-3 h-3 text-[#FFD700]" />
          {product.reason}
        </p>

        {/* Price & CTA */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
          <div>
            <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
            {product.compareAtPrice && (
              <span className="text-sm text-muted-foreground line-through ml-2">
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button className="px-3 py-1.5 rounded-lg bg-[#0EA5E9] text-white text-xs font-semibold hover:bg-[#0284C7] transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  )
}

// ==========================================
// MAIN RECOMMENDATIONS SECTION
// ==========================================

export function SmartRecommendations({
  preferences = {},
  title = 'Recommended For You',
  subtitle = 'Based on your sun profile and preferences',
  limit = 4,
}: {
  preferences?: UserPreferences
  title?: string
  subtitle?: string
  limit?: number
}) {
  const [filter, setFilter] = useState<'all' | 'tents' | 'bundles' | 'accessories'>('all')

  const recommendations = useMemo(() => {
    const recs = getRecommendations(preferences, 6)
    if (filter === 'all') return recs.slice(0, limit)
    return recs
      .filter((p) => {
        if (filter === 'tents') return p.tags.includes('beach') && !p.tags.includes('bundle')
        if (filter === 'bundles') return p.tags.includes('bundle')
        return p.tags.includes('accessory') || p.tags.includes('sunscreen')
      })
      .slice(0, limit)
  }, [preferences, filter, limit])

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-[#FFD700]" />
              <span className="text-sm font-semibold text-[#FFD700] uppercase tracking-wider">
                Smart Picks
              </span>
            </div>
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-muted-foreground mt-1">{subtitle}</p>
          </div>

          <a
            href="/products/sun-ninja-tents"
            className="hidden md:flex items-center gap-1 text-sm font-medium text-[#0EA5E9] hover:text-[#0284C7] transition-colors"
          >
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
          {[
            { key: 'all', label: 'All' },
            { key: 'tents', label: 'Beach Tents' },
            { key: 'bundles', label: 'Bundles' },
            { key: 'accessories', label: 'Accessories' },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key as typeof filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                filter === f.key
                  ? 'bg-[#0EA5E9] text-white'
                  : 'bg-neutral-100 text-muted-foreground hover:bg-neutral-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.map((product, index) => (
            <RecommendationCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Trending */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-4 rounded-xl bg-gradient-to-r from-[#FF6B6B]/5 to-[#FFD700]/5 border border-[#FFD700]/20 flex items-center gap-3"
        >
          <TrendingUp className="w-5 h-5 text-[#FF6B6B] flex-shrink-0" />
          <p className="text-sm">
            <strong>Trending:</strong> Sun Ninja XL Beach Tent is the #1 best seller — 47 purchased
            in the last 24 hours!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ==========================================
// FREQUENTLY BOUGHT TOGETHER
// ==========================================

export function FrequentlyBoughtTogether({ currentProductId }: { currentProductId: string }) {
  const bundles = PRODUCT_CATALOG.filter((p) => p.id !== currentProductId).slice(0, 3)
  const totalPrice = bundles.reduce((sum, p) => sum + p.price, 0)
  const bundlePrice = totalPrice * 0.85 // 15% bundle discount

  return (
    <div className="p-6 rounded-2xl border border-border bg-white">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Zap className="w-5 h-5 text-[#FFD700]" />
        Frequently Bought Together
      </h3>

      <div className="flex items-center gap-3 mb-4 overflow-x-auto pb-2">
        {bundles.map((product, i) => (
          <div key={product.id} className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-neutral-100 flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).src = '/images/beach/product-beach-01.jpg'
                }}
              />
            </div>
            {i < bundles.length - 1 && (
              <span className="text-xl text-muted-foreground flex-shrink-0">+</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-bold">${bundlePrice.toFixed(2)}</div>
          <div className="text-sm text-muted-foreground line-through">${totalPrice.toFixed(2)}</div>
          <div className="text-xs text-green-600 font-medium">Save 15% with bundle</div>
        </div>
        <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF6B6B] to-[#FFD700] text-white font-semibold text-sm hover:opacity-90 transition-opacity">
          Add Bundle to Cart
        </button>
      </div>
    </div>
  )
}
