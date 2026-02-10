// ============================================================================
// ACCESSIBILITY - Skip navigation, focus management, and a11y utilities
// ============================================================================

import { useState, useEffect, useRef, type ReactNode } from 'react'
import { useReducedMotion, useFontScale } from '../../utils/accessibilityHooks'

// ==========================================
// SKIP NAVIGATION LINK
// ==========================================

export function SkipToContent({ targetId = 'main-content' }: { targetId?: string }) {
  return (
    <a
      href={`#${targetId}`}
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:rounded-xl focus:bg-[#0EA5E9] focus:text-white focus:font-semibold focus:text-sm focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0EA5E9]"
    >
      Skip to main content
    </a>
  )
}

// ==========================================
// FOCUS TRAP (for modals, drawers, dialogs)
// ==========================================

export function FocusTrap({ children, active = true }: { children: ReactNode; active?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!active || !containerRef.current) return

    const container = containerRef.current
    const focusableSelector = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ')

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      const focusableElements = container.querySelectorAll(focusableSelector)
      const first = focusableElements[0] as HTMLElement
      const last = focusableElements[focusableElements.length - 1] as HTMLElement

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last?.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first?.focus()
      }
    }

    // Focus first element on mount
    const firstFocusable = container.querySelector(focusableSelector) as HTMLElement
    firstFocusable?.focus()

    container.addEventListener('keydown', handleKeyDown)
    return () => container.removeEventListener('keydown', handleKeyDown)
  }, [active])

  return (
    <div ref={containerRef} role="dialog" aria-modal="true">
      {children}
    </div>
  )
}

// ==========================================
// VISUALLY HIDDEN (screen reader only)
// ==========================================

export function VisuallyHidden({
  children,
  as: Tag = 'span',
}: {
  children: ReactNode
  as?: keyof JSX.IntrinsicElements
}) {
  return <Tag className="sr-only">{children}</Tag>
}

// ==========================================
// LIVE REGION - for dynamic announcements
// ==========================================

export function LiveRegion({
  message,
  politeness = 'polite',
}: {
  message: string
  politeness?: 'polite' | 'assertive'
}) {
  return (
    <div role="status" aria-live={politeness} aria-atomic="true" className="sr-only">
      {message}
    </div>
  )
}

// ==========================================
// ACCESSIBILITY TOOLBAR
// ==========================================

import { Eye, Minus, Plus, RotateCcw, Type, Contrast, Move } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

export function AccessibilityToolbar() {
  const [isOpen, setIsOpen] = useState(false)
  const reducedMotion = useReducedMotion()
  const { scale, increase, decrease, reset } = useFontScale()
  const [highContrastMode, setHighContrastMode] = useState(false)
  const [reducedMotionOverride, setReducedMotionOverride] = useState(false)

  const toggleHighContrast = () => {
    setHighContrastMode(!highContrastMode)
    document.documentElement.classList.toggle('high-contrast', !highContrastMode)
  }

  const toggleReducedMotion = () => {
    setReducedMotionOverride(!reducedMotionOverride)
    document.documentElement.classList.toggle('reduce-motion', !reducedMotionOverride)
  }

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-[#0EA5E9] text-white shadow-lg flex items-center justify-center hover:bg-[#0284C7] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:ring-offset-2"
        aria-label="Accessibility options"
        aria-expanded={isOpen}
      >
        <Eye className="w-5 h-5" />
      </button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 left-6 z-50 w-72 bg-white rounded-2xl shadow-2xl border border-border overflow-hidden"
            role="dialog"
            aria-label="Accessibility settings"
          >
            <div className="px-5 py-4 bg-[#0EA5E9] text-white">
              <h3 className="font-bold text-sm">Accessibility Settings</h3>
              <p className="text-xs text-white/70">Customize your experience</p>
            </div>

            <div className="p-4 space-y-4">
              {/* Font Size */}
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5 mb-2">
                  <Type className="w-3.5 h-3.5" /> Text Size ({Math.round(scale * 100)}%)
                </label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={decrease}
                    className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-neutral-50 transition-colors"
                    aria-label="Decrease text size"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#0EA5E9] rounded-full transition-all"
                      style={{ width: `${((scale - 0.8) / 0.7) * 100}%` }}
                    />
                  </div>
                  <button
                    onClick={increase}
                    className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-neutral-50 transition-colors"
                    aria-label="Increase text size"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={reset}
                    className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-neutral-50 transition-colors"
                    aria-label="Reset text size"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                  <Contrast className="w-3.5 h-3.5" /> High Contrast
                </label>
                <button
                  onClick={toggleHighContrast}
                  role="switch"
                  aria-checked={highContrastMode}
                  className={`w-10 h-6 rounded-full p-0.5 transition-colors ${
                    highContrastMode ? 'bg-[#0EA5E9]' : 'bg-neutral-200'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${
                      highContrastMode ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                  <Move className="w-3.5 h-3.5" /> Reduced Motion
                </label>
                <button
                  onClick={toggleReducedMotion}
                  role="switch"
                  aria-checked={reducedMotionOverride || reducedMotion}
                  className={`w-10 h-6 rounded-full p-0.5 transition-colors ${
                    reducedMotionOverride || reducedMotion ? 'bg-[#0EA5E9]' : 'bg-neutral-200'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${
                      reducedMotionOverride || reducedMotion ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Help */}
              <p className="text-[10px] text-muted-foreground pt-2 border-t border-border">
                Keyboard: Tab to navigate, Enter to select, Escape to close.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
