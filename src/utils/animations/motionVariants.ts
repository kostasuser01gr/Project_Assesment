// ============================================================================
// MOTION VARIANTS - Centralized Framer Motion animation presets
// ============================================================================

import type { Variants, Transition } from 'motion/react'

// ==========================================
// TRANSITION PRESETS
// ==========================================

export const transitions = {
  spring: { type: 'spring', stiffness: 300, damping: 30 } as Transition,
  springBouncy: { type: 'spring', stiffness: 400, damping: 20 } as Transition,
  springGentle: { type: 'spring', stiffness: 200, damping: 25 } as Transition,
  smooth: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } as Transition,
  smoothSlow: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } as Transition,
  elastic: { type: 'spring', stiffness: 500, damping: 15 } as Transition,
  dramatic: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } as Transition,
}

// ==========================================
// FADE VARIANTS
// ==========================================

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

// ==========================================
// SCALE VARIANTS
// ==========================================

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: transitions.spring },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
}

export const scaleInBounce: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: transitions.springBouncy },
}

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: transitions.elastic },
}

// ==========================================
// STAGGER VARIANTS (for lists/grids)
// ==========================================

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export const staggerItemScale: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: transitions.spring,
  },
}

// ==========================================
// SLIDE VARIANTS
// ==========================================

export const slideInFromLeft: Variants = {
  hidden: { x: '-100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: transitions.smooth },
  exit: { x: '-100%', opacity: 0, transition: { duration: 0.2 } },
}

export const slideInFromRight: Variants = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: transitions.smooth },
  exit: { x: '100%', opacity: 0, transition: { duration: 0.2 } },
}

export const slideInFromBottom: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: { y: 0, opacity: 1, transition: transitions.smooth },
  exit: { y: '100%', opacity: 0, transition: { duration: 0.2 } },
}

// ==========================================
// HERO-SPECIFIC VARIANTS
// ==========================================

export const heroTitle: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
}

export const heroSubtitle: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export const heroCTA: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: 0.8, ease: [0.34, 1.56, 0.64, 1] },
  },
}

export const heroImage: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
}

// ==========================================
// SCROLL-TRIGGERED VARIANTS
// ==========================================

export const revealOnScroll: Variants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.3, duration: 0.8 },
  },
}

export const revealFromLeft: Variants = {
  offscreen: { x: -80, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.2, duration: 0.8 },
  },
}

export const revealFromRight: Variants = {
  offscreen: { x: 80, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.2, duration: 0.8 },
  },
}

// ==========================================
// INTERACTIVE VARIANTS
// ==========================================

export const buttonHover = {
  scale: 1.05,
  transition: transitions.spring,
}

export const buttonTap = {
  scale: 0.95,
}

export const cardHover = {
  y: -8,
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
  transition: transitions.spring,
}

export const magneticHover = {
  scale: 1.08,
  transition: { type: 'spring', stiffness: 400, damping: 20 },
}

// ==========================================
// NOTIFICATION / TOAST VARIANTS
// ==========================================

export const toastVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.3 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: transitions.springBouncy,
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.5,
    transition: { duration: 0.2 },
  },
}

// ==========================================
// LOADING VARIANTS
// ==========================================

export const shimmer: Variants = {
  hidden: { x: '-100%' },
  visible: {
    x: '200%',
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: 'easeInOut',
    },
  },
}

export const pulseGlow: Variants = {
  rest: { boxShadow: '0 0 0 rgba(255, 215, 0, 0)' },
  pulse: {
    boxShadow: [
      '0 0 20px rgba(255, 215, 0, 0.4)',
      '0 0 40px rgba(255, 215, 0, 0.6)',
      '0 0 20px rgba(255, 215, 0, 0.4)',
    ],
    transition: { duration: 2, repeat: Infinity },
  },
}

// ==========================================
// PAGE TRANSITION VARIANTS
// ==========================================

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
}

// ==========================================
// UTILITY - Viewport animation config
// ==========================================

export const viewportOnce = {
  once: true,
  margin: '-100px',
}

export const viewportRepeat = {
  once: false,
  margin: '-50px',
  amount: 0.3,
}
