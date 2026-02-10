// ============================================================================
// SUN NINJA DESIGN TOKENS - Single Source of Truth
// Mirrors Figma design system for pixel-perfect implementation
// ============================================================================

export const designTokens = {
  // ==========================================
  // COLOR SYSTEM
  // ==========================================
  colors: {
    // Primary Brand - Ocean
    primary: {
      50: '#E0F2FE',
      100: '#BAE6FD',
      200: '#7DD3FC',
      300: '#38BDF8',
      400: '#0EA5E9',
      500: '#0284C7',
      600: '#0369A1',
      700: '#075985',
      800: '#0C4A6E',
      900: '#0A3756',
      DEFAULT: '#0EA5E9',
    },

    // Secondary - Coral
    secondary: {
      50: '#FFF1F0',
      100: '#FFE0DE',
      200: '#FFC2BE',
      300: '#FF9B95',
      400: '#FF6B6B',
      500: '#FF4444',
      600: '#E63030',
      700: '#CC2020',
      800: '#991818',
      900: '#661010',
      DEFAULT: '#FF6B6B',
    },

    // Accent - Gold
    accent: {
      50: '#FFFDF0',
      100: '#FFF9DB',
      200: '#FFF2B8',
      300: '#FFE88A',
      400: '#FFD700',
      500: '#FFC857',
      600: '#E6A800',
      700: '#CC9600',
      800: '#997000',
      900: '#664B00',
      DEFAULT: '#FFD700',
    },

    // Neutrals
    neutral: {
      0: '#FFFFFF',
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#E5E5E5',
      300: '#D4D4D4',
      400: '#A3A3A3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },

    // Semantic
    semantic: {
      success: '#22C55E',
      successLight: '#DCFCE7',
      warning: '#F59E0B',
      warningLight: '#FEF3C7',
      error: '#EF4444',
      errorLight: '#FEE2E2',
      info: '#3B82F6',
      infoLight: '#DBEAFE',
    },

    // Backgrounds
    background: {
      sand: '#FFFBF5',
      cream: '#FFF8F0',
      muted: '#F6E8D5',
      card: '#FFFFFF',
      overlay: 'rgba(0, 0, 0, 0.5)',
    },

    // Gradients (as CSS strings)
    gradients: {
      sunGlow: 'linear-gradient(135deg, #FF6B6B 0%, #FFD700 100%)',
      ocean: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
      coral: 'linear-gradient(135deg, #FF6B6B 0%, #FF9B95 50%, #FFD700 100%)',
      sunset: 'linear-gradient(135deg, #FF6B5A 0%, #FFB84D 100%)',
      premium: 'linear-gradient(135deg, #0EA5E9 0%, #FF6B6B 50%, #FFD700 100%)',
      glass: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
    },
  },

  // ==========================================
  // TYPOGRAPHY
  // ==========================================
  typography: {
    fontFamily: {
      display: "'Playfair Display', Georgia, serif",
      sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      mono: "'JetBrains Mono', 'Fira Code', monospace",
    },

    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '3.5rem', // 56px
      '7xl': '4.5rem', // 72px
    },

    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },

    lineHeight: {
      none: 1,
      tight: 1.1,
      snug: 1.2,
      normal: 1.5,
      relaxed: 1.6,
      loose: 1.8,
    },

    letterSpacing: {
      tighter: '-0.03em',
      tight: '-0.02em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },

  // ==========================================
  // SPACING (4px base grid)
  // ==========================================
  spacing: {
    0: '0px',
    px: '1px',
    0.5: '2px',
    1: '4px',
    1.5: '6px',
    2: '8px',
    2.5: '10px',
    3: '12px',
    3.5: '14px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    14: '56px',
    16: '64px',
    20: '80px',
    24: '96px',
    28: '112px',
    32: '128px',
  },

  // ==========================================
  // BORDER RADIUS
  // ==========================================
  borderRadius: {
    none: '0px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    '3xl': '32px',
    full: '9999px',
  },

  // ==========================================
  // SHADOWS
  // ==========================================
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    warm: '0 10px 40px -10px rgba(255, 184, 77, 0.3)',
    coral: '0 10px 40px -10px rgba(255, 107, 107, 0.3)',
    ocean: '0 10px 40px -10px rgba(14, 165, 233, 0.3)',
    glow: '0 0 20px rgba(255, 215, 0, 0.4)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
  },

  // ==========================================
  // BREAKPOINTS
  // ==========================================
  breakpoints: {
    xs: '375px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1440px',
    '3xl': '1920px',
  },

  // ==========================================
  // Z-INDEX SCALE
  // ==========================================
  zIndex: {
    behind: -1,
    base: 0,
    dropdown: 10,
    sticky: 20,
    banner: 30,
    overlay: 40,
    modal: 50,
    popover: 60,
    toast: 70,
    tooltip: 80,
    max: 9999,
  },

  // ==========================================
  // ANIMATIONS
  // ==========================================
  animation: {
    duration: {
      instant: '0ms',
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
      slower: '700ms',
      slowest: '1000ms',
    },

    easing: {
      linear: 'linear',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
  },

  // ==========================================
  // CONTAINER SIZES
  // ==========================================
  containers: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1440px',
  },
} as const

// Type exports for type-safe token usage
export type ColorToken = keyof typeof designTokens.colors
export type SpacingToken = keyof typeof designTokens.spacing
export type BreakpointToken = keyof typeof designTokens.breakpoints
export type ShadowToken = keyof typeof designTokens.shadows
export type FontSizeToken = keyof typeof designTokens.typography.fontSize
