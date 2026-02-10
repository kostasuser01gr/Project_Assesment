import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Respect reduced motion preferences
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Initialize GSAP configuration
gsap.config({
  nullTargetWarn: false,
})

// Parallax hero with depth
export function heroParallax(element: HTMLElement | null): void {
  if (!element) return
  if (prefersReducedMotion()) return

  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      invalidateOnRefresh: true,
    },
    y: 300,
    scale: 1.1,
    ease: 'none',
  })
}

// Staggered card reveals
export function cardReveal(element: HTMLElement): void {
  if (!element) return
  const reduced = prefersReducedMotion()

  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    y: reduced ? 0 : 60,
    opacity: 0,
    duration: reduced ? 0.3 : 0.8,
    ease: 'power3.out',
  })
}

// Sun-glow pulse on CTAs
export function sunGlowPulse(button: HTMLElement | null): gsap.core.Tween | null {
  if (!button) return null
  if (prefersReducedMotion()) return null

  return gsap.to(button, {
    boxShadow: '0 0 30px rgba(255, 107, 107, 0.6)',
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: 'sine.inOut',
  })
}

// Smooth scroll reveal
export function fadeInUp(element: HTMLElement | null, delay: number = 0): void {
  if (!element) return
  const reduced = prefersReducedMotion()

  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 90%',
      toggleActions: 'play none none reverse',
    },
    y: reduced ? 0 : 40,
    opacity: 0,
    duration: reduced ? 0.3 : 0.6,
    delay: reduced ? 0 : delay,
    ease: 'power2.out',
  })
}

// Number counter animation
export function animateCounter(element: HTMLElement, target: number, duration: number = 2): void {
  const obj = { value: 0 }

  gsap.to(obj, {
    value: target,
    duration,
    ease: 'power1.out',
    onUpdate: () => {
      element.textContent = Math.floor(obj.value).toLocaleString()
    },
  })
}

// Magnetic button effect
export function magneticButton(
  button: HTMLElement,
  strength: number = 0.3
): { destroy: () => void } {
  if (prefersReducedMotion()) return { destroy: () => {} }

  let rafId: number

  const handleMouseMove = (e: MouseEvent) => {
    const rect = button.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength

    rafId = requestAnimationFrame(() => {
      gsap.to(button, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: 'power2.out',
      })
    })
  }

  const handleMouseLeave = () => {
    cancelAnimationFrame(rafId)
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)',
    })
  }

  button.addEventListener('mousemove', handleMouseMove)
  button.addEventListener('mouseleave', handleMouseLeave)

  return {
    destroy: () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(rafId)
    },
  }
}

// Cleanup all scroll triggers
export function cleanup(): void {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
}
