# Sun Ninja Developer Handoff Guide
## From Figma to Production-Ready Code

---

## 🎯 OVERVIEW

This guide translates the Figma design system into production-ready code. All components use:
- **React** + **TypeScript**
- **Tailwind CSS** (+ custom config)
- **Framer Motion** (animations)
- **Radix UI** (accessible primitives)

---

## 🎨 DESIGN TOKENS → CODE

### Tailwind Config Extension

Add to `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc', // Light hover states
          400: '#38bdf8',
          500: '#0ea5e9', // Primary brand
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e', // Dark mode
        },
        coral: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5', // Highlights
          400: '#f87171',
          500: '#ff6b6b', // Primary CTAs
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d', // Dark accents
        },
        gold: {
          50: '#fefce8',
          100: '#fef3c7', // Badge backgrounds
          200: '#fde68a',
          300: '#fcd34d', // Highlights
          400: '#fbbf24',
          500: '#ffd700', // Premium accents
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#854d0e', // Dark luxury
        },
        cream: {
          base: '#fffbf5', // Main background
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        hero: ['96px', { lineHeight: '1.0', letterSpacing: '-0.02em', fontWeight: '700' }],
        h1: ['64px', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '700' }],
        h2: ['48px', { lineHeight: '1.2', letterSpacing: '-0.005em', fontWeight: '600' }],
        h3: ['36px', { lineHeight: '1.3', fontWeight: '600' }],
        h4: ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        h5: ['20px', { lineHeight: '1.5', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        body: ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        caption: ['12px', { lineHeight: '1.4', letterSpacing: '0.005em', fontWeight: '500' }],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
        '5xl': '128px',
      },
      boxShadow: {
        quantum: '0 0 20px rgba(14, 165, 233, 0.3), 0 0 40px rgba(255, 107, 107, 0.2), 0 20px 40px rgba(0, 0, 0, 0.15)',
        'glass-sm': '0 1px 2px rgba(0, 0, 0, 0.05), inset 0 0 20px rgba(255, 255, 255, 0.1)',
        'glass-md': '0 4px 6px rgba(0, 0, 0, 0.07), inset 0 0 30px rgba(255, 255, 255, 0.15)',
        'glass-lg': '0 10px 15px rgba(0, 0, 0, 0.1), inset 0 0 40px rgba(255, 255, 255, 0.2)',
      },
      backdropBlur: {
        glass: '20px',
        'glass-strong': '32px',
      },
      backgroundImage: {
        'gradient-ocean-coral': 'linear-gradient(135deg, #0ea5e9 0%, #ff6b6b 100%)',
        'gradient-aurora': 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 50%, #ff6b6b 100%)',
        'gradient-gold-shine': 'linear-gradient(135deg, #ffd700 0%, #fde68a 50%, #ffd700 100%)',
        'gradient-holographic': 'conic-gradient(from 180deg, #0ea5e9, #8b5cf6, #ff6b6b, #ffd700, #0ea5e9)',
        'gradient-mesh': `
          radial-gradient(circle at 20% 30%, rgba(14, 165, 233, 0.2), transparent),
          radial-gradient(circle at 80% 70%, rgba(255, 107, 107, 0.2), transparent),
          radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.1), transparent)
        `,
      },
      keyframes: {
        'quantum-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(14, 165, 233, 0.4), 0 0 40px rgba(255, 107, 107, 0.3), 0 0 60px rgba(255, 215, 0, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(14, 165, 233, 0.6), 0 0 80px rgba(255, 107, 107, 0.5), 0 0 120px rgba(255, 215, 0, 0.4), inset 0 0 40px rgba(255, 255, 255, 0.2)',
          },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '33%': { transform: 'translateY(-20px) translateX(10px)' },
          '66%': { transform: 'translateY(-10px) translateX(-10px)' },
        },
      },
      animation: {
        'quantum-glow': 'quantum-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
```

---

## 🧩 COMPONENT IMPLEMENTATIONS

### 1. Quantum CTA Button

**File**: `src/components/ui/QuantumButton.tsx`

```typescript
import { motion } from 'framer-motion'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils/helpers'

interface QuantumButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  children: ReactNode
}

export function QuantumButton({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className,
  children,
  ...props
}: QuantumButtonProps) {
  const baseStyles =
    'relative overflow-hidden font-accent uppercase tracking-wide transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'

  const variantStyles = {
    primary:
      'bg-gradient-ocean-coral text-white shadow-quantum hover:shadow-quantum-intense hover:-translate-y-0.5 active:translate-y-0 active:scale-98',
    secondary:
      'bg-white/10 backdrop-blur-glass border border-white/20 text-white hover:bg-white/20 hover:-translate-y-0.5',
    ghost: 'bg-transparent text-ocean-500 hover:bg-ocean-50 hover:text-ocean-600',
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-8 py-4 text-base rounded-xl',
    lg: 'px-12 py-5 text-lg rounded-2xl',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {/* Shimmer effect overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{
          x: '200%',
          transition: { duration: 0.6, ease: 'easeInOut' },
        }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Loading...</span>
          </>
        ) : (
          children
        )}
      </span>

      {/* Quantum glow effect */}
      <div className="absolute inset-0 rounded-inherit opacity-0 hover:opacity-100 transition-opacity duration-300 animate-quantum-glow pointer-events-none" />
    </motion.button>
  )
}
```

**Usage**:
```tsx
<QuantumButton variant="primary" size="lg">
  Shop Now – $149.99
</QuantumButton>

<QuantumButton variant="secondary" size="md">
  Watch Setup Video
</QuantumButton>

<QuantumButton variant="ghost" size="sm">
  Learn More
</QuantumButton>
```

---

### 2. Glass Card Component

**File**: `src/components/ui/GlassCard.tsx`

```typescript
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '../../utils/helpers'

interface GlassCardProps {
  variant?: 'default' | 'ocean' | 'coral' | 'gold'
  elevated?: boolean
  className?: string
  children: ReactNode
}

export function GlassCard({
  variant = 'default',
  elevated = false,
  className,
  children,
}: GlassCardProps) {
  const baseStyles =
    'rounded-3xl backdrop-blur-glass p-8 transition-all duration-300 hover:shadow-glass-lg'

  const variantStyles = {
    default: 'bg-white/15 border border-white/20',
    ocean: 'bg-ocean-500/10 border border-ocean-500/20',
    coral: 'bg-coral-500/10 border border-coral-500/20',
    gold: 'bg-gold-500/8 border border-gold-500/30',
  }

  return (
    <motion.div
      whileHover={{
        rotateY: 2,
        rotateX: -2,
        transition: { duration: 0.3 },
      }}
      className={cn(
        baseStyles,
        variantStyles[variant],
        elevated && 'shadow-quantum',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
```

**Usage**:
```tsx
<GlassCard variant="ocean" elevated>
  <h3 className="text-h4 font-display mb-4">UPF 50+ Protection</h3>
  <p className="text-body text-gray-600">
    Block 98% of harmful UV rays. Your skin's best friend all day long.
  </p>
</GlassCard>
```

---

### 3. Trust Badge Component

**File**: `src/components/TrustBadge.tsx` (already exists, enhance it)

```typescript
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { cn } from '../utils/helpers'

interface TrustBadgeProps {
  icon: LucideIcon
  text: string
  color?: 'ocean' | 'coral' | 'gold'
  className?: string
}

export function TrustBadge({ icon: Icon, text, color = 'ocean', className }: TrustBadgeProps) {
  const colorStyles = {
    ocean: 'text-ocean-500 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]',
    coral: 'text-coral-500 group-hover:shadow-[0_0_20px_rgba(255,107,107,0.4)]',
    gold: 'text-gold-500 group-hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]',
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={cn(
        'group inline-flex items-center gap-3 px-4 py-3 rounded-full bg-white/15 backdrop-blur-glass border border-white/20 transition-all duration-300',
        className
      )}
    >
      <Icon className={cn('w-6 h-6 transition-all duration-300', colorStyles[color])} />
      <span className="text-sm font-semibold text-gray-900">{text}</span>
    </motion.div>
  )
}
```

---

### 4. Review Card Component

**File**: `src/components/ReviewCard.tsx` (already exists, enhance it)

```typescript
import { motion } from 'framer-motion'
import { CheckCircle2, Star } from 'lucide-react'
import { cn } from '../utils/helpers'

interface ReviewCardProps {
  rating: 1 | 2 | 3 | 4 | 5
  title: string
  body: string
  reviewer: {
    name: string
    location: string
    avatar?: string
    verified?: boolean
  }
  date: string
  photo?: string
  className?: string
}

export function ReviewCard({
  rating,
  title,
  body,
  reviewer,
  date,
  photo,
  className,
}: ReviewCardProps) {
  return (
    <motion.div
      whileHover={{ rotateY: 2, rotateX: -2, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
      className={cn(
        'rounded-2xl bg-white/15 backdrop-blur-glass border border-white/20 p-6 transition-all duration-300',
        className
      )}
    >
      {/* Header: Rating + Verification */}
      <div className="flex items-center justify-between mb-4">
        {/* Star Rating */}
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                'w-5 h-5',
                i < rating ? 'fill-gold-500 text-gold-500' : 'text-gray-300'
              )}
            />
          ))}
        </div>

        {/* Verified Badge */}
        {reviewer.verified && (
          <div className="flex items-center gap-1 text-ocean-500 text-xs font-medium">
            <CheckCircle2 className="w-4 h-4" />
            <span>Verified</span>
          </div>
        )}
      </div>

      {/* Review Title */}
      <h4 className="text-h5 font-body font-semibold text-gray-900 mb-2">{title}</h4>

      {/* Review Body */}
      <p className="text-body-sm text-gray-600 mb-4 line-clamp-4">{body}</p>

      {/* Photo Attachment */}
      {photo && (
        <div className="mb-4">
          <img
            src={photo}
            alt="Review photo"
            className="w-20 h-20 rounded-lg object-cover"
            loading="lazy"
          />
        </div>
      )}

      {/* Reviewer Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-ocean-100 flex items-center justify-center text-ocean-600 font-semibold">
          {reviewer.avatar ? (
            <img src={reviewer.avatar} alt={reviewer.name} className="w-full h-full rounded-full object-cover" />
          ) : (
            <span>{reviewer.name.charAt(0)}</span>
          )}
        </div>

        {/* Name + Location + Date */}
        <div className="flex-1">
          <p className="text-body-sm font-semibold text-gray-900">{reviewer.name}</p>
          <p className="text-caption text-gray-500">{reviewer.location} • {date}</p>
        </div>
      </div>
    </motion.div>
  )
}
```

---

### 5. Product Card Component

**File**: `src/components/ProductCard.tsx`

```typescript
import { motion } from 'framer-motion'
import { ArrowRight, Package, Users } from 'lucide-react'
import { QuantumButton } from './ui/QuantumButton'
import { cn } from '../utils/helpers'

interface ProductCardProps {
  size: 'solo' | 'duo' | 'family'
  title: string
  tagline: string
  price: string
  image: string
  specs: {
    capacity: string
    weight: string
  }
  isBestseller?: boolean
  onSelect: () => void
  className?: string
}

export function ProductCard({
  size,
  title,
  tagline,
  price,
  image,
  specs,
  isBestseller,
  onSelect,
  className,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={cn(
        'group relative rounded-3xl bg-white/15 backdrop-blur-glass border border-white/20 overflow-hidden',
        className
      )}
    >
      {/* Bestseller Badge */}
      {isBestseller && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-gold-500/80 backdrop-blur-glass text-white text-xs font-bold uppercase tracking-wide">
          Bestseller
        </div>
      )}

      {/* Product Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title + Tagline */}
        <h3 className="text-h4 font-display text-gray-900 mb-2">{title}</h3>
        <p className="text-body-sm text-gray-600 mb-4">{tagline}</p>

        {/* Price */}
        <p className="text-h3 font-bold text-gold-500 mb-4">{price}</p>

        {/* Specs */}
        <div className="flex flex-col gap-2 mb-6 text-body-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-ocean-500" />
            <span>{specs.capacity}</span>
          </div>
          <div className="flex items-center gap-2">
            <Package className="w-4 h-4 text-ocean-500" />
            <span>Weighs {specs.weight}</span>
          </div>
        </div>

        {/* CTA */}
        <QuantumButton variant="primary" size="md" className="w-full group" onClick={onSelect}>
          Choose {title.split(' ')[0]}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </QuantumButton>
      </div>
    </motion.div>
  )
}
```

---

### 6. Parallax Section

**File**: `src/components/ParallaxSection.tsx`

```typescript
import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface ParallaxSectionProps {
  backgroundImage: string
  children: ReactNode
  className?: string
}

export function ParallaxSection({ backgroundImage, children, className }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Different parallax speeds for depth effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <div ref={ref} className={`relative h-[1200px] overflow-hidden ${className}`}>
      {/* Background Layer (slowest) */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10"
      >
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover blur-sm opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </motion.div>

      {/* Content Layer (normal speed) */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 flex items-center justify-center h-full"
      >
        {children}
      </motion.div>
    </div>
  )
}
```

**Usage**:
```tsx
<ParallaxSection backgroundImage="/images/beach/gallery-ocean-panorama.jpg">
  <div className="container-custom max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-h1 font-display text-white mb-6 holographic-text">
      Built for Real Beach Days
    </h2>
    <p className="text-body-lg text-white/90 leading-relaxed">
      Every Sun Ninja tent is tested on real beaches, by real families, in real conditions...
    </p>
  </div>
</ParallaxSection>
```

---

### 7. 360° Product Viewer (Placeholder)

**File**: `src/components/Product360Viewer.tsx`

```typescript
import { motion } from 'framer-motion'
import { RotateCw } from 'lucide-react'
import { useState } from 'react'

interface Product360ViewerProps {
  images: string[] // Array of 8 images (45° increments)
  className?: string
}

export function Product360Viewer({ images, className }: Product360ViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const deltaX = e.clientX - startX
    const sensitivity = 30 // px to move before changing image
    const steps = Math.floor(deltaX / sensitivity)

    if (Math.abs(steps) > 0) {
      setCurrentIndex((prev) => {
        const newIndex = prev + steps
        return ((newIndex % images.length) + images.length) % images.length
      })
      setStartX(e.clientX)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <div
      className={`relative aspect-square rounded-3xl bg-gradient-mesh overflow-hidden cursor-grab active:cursor-grabbing ${className}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-ocean-500/10 backdrop-blur-glass border border-ocean-500/20 pointer-events-none" />

      {/* Product Image */}
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        alt="Product 360 view"
        className="w-full h-full object-contain p-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Instruction Overlay */}
      {!isDragging && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-white/15 backdrop-blur-glass border border-white/20 text-sm font-medium text-white flex items-center gap-2"
        >
          <RotateCw className="w-4 h-4 animate-spin-slow" />
          Drag to rotate
        </motion.div>
      )}

      {/* Rotation indicator */}
      <div className="absolute top-4 right-4 text-xs font-mono text-white/60">
        {((currentIndex / images.length) * 360).toFixed(0)}°
      </div>
    </div>
  )
}
```

**Usage**:
```tsx
const productImages360 = [
  '/images/product/front.jpg',
  '/images/product/front-45.jpg',
  '/images/product/side.jpg',
  '/images/product/side-45.jpg',
  '/images/product/back.jpg',
  '/images/product/back-45.jpg',
  '/images/product/side2.jpg',
  '/images/product/side2-45.jpg',
]

<Product360Viewer images={productImages360} />
```

---

### 8. Setup Guide Animated Sequence

**File**: `src/components/SetupGuideSequence.tsx`

```typescript
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { cn } from '../utils/helpers'

interface SetupStep {
  number: number
  title: string
  description: string
  image: string
}

interface SetupGuideSequenceProps {
  steps: SetupStep[]
  autoPlay?: boolean
  className?: string
}

export function SetupGuideSequence({
  steps,
  autoPlay = true,
  className,
}: SetupGuideSequenceProps) {
  const [activeStep, setActiveStep] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!autoPlay || isPaused) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [autoPlay, isPaused, steps.length])

  return (
    <div className={cn('space-y-6', className)}>
      {/* Progress Bar */}
      <div className="flex gap-2">
        {steps.map((_, index) => (
          <motion.div
            key={index}
            className={cn(
              'h-1 flex-1 rounded-full transition-colors',
              index <= activeStep ? 'bg-ocean-500' : 'bg-white/20'
            )}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: index === activeStep ? 1 : index < activeStep ? 1 : 0 }}
            transition={{ duration: 2 }}
          />
        ))}
      </div>

      {/* Steps Grid (Desktop: 3 columns, Mobile: vertical stack) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            whileHover={{ scale: 1.02 }}
            onClick={() => {
              setActiveStep(index)
              setIsPaused(true)
            }}
            className={cn(
              'group cursor-pointer rounded-3xl p-8 backdrop-blur-glass border transition-all duration-300',
              index === activeStep
                ? 'bg-ocean-500/20 border-ocean-500/40 shadow-quantum'
                : 'bg-white/10 border-white/20 hover:bg-white/15'
            )}
          >
            {/* Number Badge */}
            <motion.div
              animate={{
                scale: index === activeStep ? 1.1 : 1,
                boxShadow:
                  index === activeStep
                    ? '0 0 30px rgba(14, 165, 233, 0.6)'
                    : '0 0 0px rgba(14, 165, 233, 0)',
              }}
              className="w-12 h-12 rounded-full bg-gradient-ocean-coral flex items-center justify-center text-white font-bold text-2xl mb-6"
            >
              {step.number}
            </motion.div>

            {/* Image */}
            <div className="aspect-video rounded-xl overflow-hidden mb-4">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            {/* Text */}
            <h4 className="text-h5 font-display text-gray-900 mb-2">{step.title}</h4>
            <p className="text-body-sm text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="px-6 py-2 rounded-full bg-white/15 backdrop-blur-glass border border-white/20 text-sm font-medium hover:bg-white/25 transition-colors"
        >
          {isPaused ? 'Resume' : 'Pause'}
        </button>
        <span className="text-caption text-gray-500">
          Step {activeStep + 1} of {steps.length}
        </span>
      </div>
    </div>
  )
}
```

**Usage**:
```tsx
const setupSteps = [
  {
    number: 1,
    title: 'Unfold & Extend',
    description: 'Remove from bag and unfold the canopy. Extend poles until they click.',
    image: '/images/beach/setup-1.jpg',
  },
  {
    number: 2,
    title: 'Lock in Place',
    description: 'Secure the corner pins. The tent auto-tensions—no fiddling required.',
    image: '/images/beach/setup-2.jpg',
  },
  {
    number: 3,
    title: 'Enjoy Your Shade',
    description: 'Add sand pockets for stability. You're done. Time to relax.',
    image: '/images/beach/setup-ready-to-use.jpg',
  },
]

<SetupGuideSequence steps={setupSteps} autoPlay />
```

---

## 🎨 CUSTOM CSS UTILITIES

**File**: `src/styles/quantum-theme.css` (already exists, add these)

```css
/* Holographic Text Effect */
.holographic-text {
  background: linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 50%, #ff6b6b 100%);
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 5s ease infinite;
}

/* Quantum Text Glow */
.quantum-text-glow {
  text-shadow: 
    0 0 20px rgba(14, 165, 233, 0.6),
    0 0 40px rgba(255, 107, 107, 0.4),
    0 4px 8px rgba(0, 0, 0, 0.3);
}

/* Grain Texture Overlay */
.grain::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03' /%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 1;
}

/* Glass Utilities */
.quantum-glass {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.07),
    inset 0 0 30px rgba(255, 255, 255, 0.15);
}

.glass-ocean {
  background: rgba(14, 165, 233, 0.1);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(14, 165, 233, 0.2);
}

.glass-coral {
  background: rgba(255, 107, 107, 0.1);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 107, 107, 0.2);
}

.glass-gold {
  background: rgba(255, 215, 0, 0.08);
  backdrop-filter: blur(28px);
  border: 1px solid rgba(255, 215, 0, 0.3);
}

/* Holographic Overlay */
.holographic-overlay {
  background: conic-gradient(
    from 180deg,
    rgba(14, 165, 233, 0.2),
    rgba(139, 92, 246, 0.2),
    rgba(255, 107, 107, 0.2),
    rgba(255, 215, 0, 0.2),
    rgba(14, 165, 233, 0.2)
  );
  background-size: 200% 200%;
  animation: holographic-rotate 10s linear infinite;
}

/* Magnetic Hover (Advanced) */
.magnetic-hover {
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.magnetic-hover:hover {
  transform: translate(var(--magnetic-x, 0), var(--magnetic-y, 0));
}
```

---

## 📦 PERFORMANCE OPTIMIZATIONS

### 1. Image Lazy Loading

```tsx
// Use native lazy loading
<img src={image} alt={alt} loading="lazy" />

// Or use Intersection Observer for more control
import { useEffect, useRef, useState } from 'react'

export function LazyImage({ src, alt, ...props }) {
  const imgRef = useRef<HTMLImageElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && imgRef.current && !isLoaded) {
          imgRef.current.src = src
          setIsLoaded(true)
        }
      },
      { rootMargin: '200px' } // Start loading 200px before visible
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [src, isLoaded])

  return <img ref={imgRef} alt={alt} {...props} />
}
```

### 2. Motion Preferences

```tsx
// Respect prefers-reduced-motion
import { useReducedMotion } from 'framer-motion'

export function AnimatedComponent() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      Content
    </motion.div>
  )
}
```

### 3. Dynamic Imports for Heavy Components

```tsx
import { lazy, Suspense } from 'react'

const Product360Viewer = lazy(() => import('./Product360Viewer'))

function ProductPage() {
  return (
    <Suspense fallback={<div>Loading 360° viewer...</div>}>
      <Product360Viewer images={images} />
    </Suspense>
  )
}
```

---

## ✅ DEVELOPER CHECKLIST

### Pre-Development
- [ ] Review Figma file thoroughly
- [ ] Confirm all design tokens (colors, fonts, spacing)
- [ ] Test animations on low-end devices
- [ ] Ensure accessibility (WCAG AA minimum)

### During Development
- [ ] Use semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
- [ ] Add ARIA labels where needed
- [ ] Test keyboard navigation
- [ ] Optimize images (WebP with JPG fallback)
- [ ] Implement lazy loading for images below fold
- [ ] Add proper alt text to all images
- [ ] Test on mobile (375px), tablet (768px), desktop (1440px)

### Pre-Launch
- [ ] Run Lighthouse audit (target: 90+ performance, 100 accessibility)
- [ ] Test with screen reader (VoiceOver, NVDA)
- [ ] Verify all CTAs have clear focus indicators
- [ ] Test with `prefers-reduced-motion` enabled
- [ ] Check color contrast (WCAG AA: 4.5:1 for text)
- [ ] Validate forms with error states
- [ ] Test checkout flow end-to-end
- [ ] Set up analytics events (CTA clicks, scroll depth)

---

**Αυτός ο οδηγός διασφαλίζει ότι η Figma σχεδίαση μεταφέρεται στον κώδικα με ακρίβεια, διατηρώντας την πολυτελή αισθητική και την υψηλή απόδοση.** 🚀✨
