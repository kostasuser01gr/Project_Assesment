import { useState, useEffect } from 'react'
import { abTestEngine } from '../../services/ab-testing/ABTestEngine'

/**
 * Hook to get current variant for an A/B test
 * @returns The variant assigned to this user ('A' or 'B')
 */
export function useABTest() {
  const [variant, setVariant] = useState<'A' | 'B'>(() => abTestEngine.getVariant())

  useEffect(() => {
    // Variant is stable per user
    const currentVariant = abTestEngine.getVariant()
    if (currentVariant !== variant) {
      setVariant(currentVariant)
    }
  }, [variant])

  return variant
}

/**
 * Hook with conversion tracking helper
 * @param testName - The name of the test
 * @param conversionType - Type of conversion (default: 'purchase')
 * @returns Object with variant and track function
 */
export function useABTestWithTracking(testName: string, conversionType: string = 'purchase') {
  const variant = useABTest()

  const trackConversion = () => {
    abTestEngine.trackConversion(testName, conversionType)
  }

  return {
    variant,
    trackConversion,
  }
}

/**
 * Hook for hero messaging test
 * Returns variant and helper functions
 */
export function useHeroMessagingTest() {
  const { variant, trackConversion } = useABTestWithTracking('hero_messaging_2024', 'cta_click')

  const config = abTestEngine.testConfigs.heroMessage
  const content = abTestEngine.getTestVariant<{ headline: string; subhead: string }>(config)

  return {
    variant,
    headline: content.headline,
    subheadline: content.subhead,
    trackConversion,
  }
}

/**
 * Hook for price display test
 * Returns variant and formatted price
 */
export function usePriceDisplayTest() {
  const { variant, trackConversion } = useABTestWithTracking(
    'price_display_format_2024',
    'purchase'
  )

  const config = abTestEngine.testConfigs.priceDisplay
  const priceConfig = abTestEngine.getTestVariant<{ format: string; showSavings: boolean }>(config)

  return {
    variant,
    priceFormat: priceConfig.format,
    showSavings: priceConfig.showSavings,
    trackConversion,
  }
}

/**
 * Hook to track page view for A/B test analytics
 * Call this on component mount for pages with tests
 */
export function useABTestPageView(testName: string) {
  const variant = useABTest()

  useEffect(() => {
    // Track page view for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'ab_test_page_view', {
        test_name: testName,
        variant: variant,
      })
    }
  }, [testName, variant])
}
