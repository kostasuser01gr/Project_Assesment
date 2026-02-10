import { useEffect, useRef, RefObject } from 'react'
import {
  heroParallax,
  cardReveal,
  sunGlowPulse,
  fadeInUp,
  animateCounter,
  magneticButton,
  cleanup as cleanupAnimations,
} from '../../utils/animations/eliteAnimations'

/**
 * Hook for hero parallax effect
 * @param enabled - Whether to enable the animation
 * @returns Ref to attach to hero element
 */
export function useHeroParallax(enabled = true): RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (enabled && ref.current) {
      heroParallax(ref.current)
    }
    return () => cleanupAnimations()
  }, [enabled])

  return ref
}

/**
 * Hook for card reveal animation
 * @param enabled - Whether to enable the animation
 * @returns Ref to attach to container with cards
 */
export function useCardReveal(enabled = true): RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (enabled && ref.current) {
      const cards = ref.current.querySelectorAll('[data-card]')
      cards.forEach((card) => cardReveal(card as HTMLElement))
    }
    return () => cleanupAnimations()
  }, [enabled])

  return ref
}

/**
 * Hook for sun glow pulse effect
 * @param enabled - Whether to enable the animation
 * @returns Ref to attach to element with sun-glow
 */
export function useSunGlowPulse(enabled = true): RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (enabled && ref.current) {
      sunGlowPulse(ref.current)
    }
    return () => cleanupAnimations()
  }, [enabled])

  return ref
}

/**
 * Hook for fade-in-up animation
 * @param delay - Delay before animation starts
 * @param enabled - Whether to enable the animation
 * @returns Ref to attach to element
 */
export function useFadeInUp(delay = 0, enabled = true): RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (enabled && ref.current) {
      fadeInUp(ref.current, delay)
    }
    return () => cleanupAnimations()
  }, [delay, enabled])

  return ref
}

/**
 * Hook for animated counter
 * @param targetValue - The target number to count to
 * @param duration - Animation duration in seconds
 * @param enabled - Whether to enable the animation
 * @returns Ref to attach to counter element
 */
export function useAnimatedCounter(
  targetValue: number,
  duration = 2,
  enabled = true
): RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (enabled && ref.current) {
      animateCounter(ref.current, targetValue, duration)
    }
    return () => cleanupAnimations()
  }, [targetValue, duration, enabled])

  return ref
}

/**
 * Hook for magnetic button effect
 * @param strength - How strong the magnetic effect is (0-1)
 * @param enabled - Whether to enable the animation
 * @returns Ref to attach to button element
 */
export function useMagneticButton(strength = 0.3, enabled = true): RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (enabled && ref.current) {
      magneticButton(ref.current, strength)
    }
    return () => cleanupAnimations()
  }, [strength, enabled])

  return ref
}
