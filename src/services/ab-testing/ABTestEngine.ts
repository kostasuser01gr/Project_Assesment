export type VariantType = 'A' | 'B'

export interface ABTest {
  name: string
  variant: VariantType
  startDate: Date
}

export interface TestConfiguration<T = unknown> {
  name: string
  description: string
  variants: {
    A: T
    B: T
  }
  traffic: number // Percentage of traffic to include in test (0-100)
}

export class ABTestEngine {
  private static instance: ABTestEngine
  private variant: VariantType = 'A'
  private tests: Map<string, ABTest> = new Map()
  private readonly STORAGE_KEY = 'ab-tests'

  private constructor() {
    this.loadTestData()
    this.ensureVariantAssignment()
  }

  public static getInstance(): ABTestEngine {
    if (!ABTestEngine.instance) {
      ABTestEngine.instance = new ABTestEngine()
    }
    return ABTestEngine.instance
  }

  private loadTestData(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY)
      if (stored) {
        const data = JSON.parse(stored)
        this.tests = new Map(Object.entries(data))

        // Get global variant from first test
        const firstTest = this.tests.values().next().value
        if (firstTest) {
          this.variant = (firstTest as ABTest).variant
        }
      }
    } catch (error) {
      console.warn('Failed to load AB test data:', error)
    }
  }

  private saveTestData(): void {
    try {
      const data = Object.fromEntries(this.tests)
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data))
    } catch (error) {
      console.warn('Failed to save AB test data:', error)
    }
  }

  private ensureVariantAssignment(): void {
    if (this.tests.size === 0) {
      // New user - assign variant
      this.variant = Math.random() > 0.5 ? 'A' : 'B'
      this.trackVariantAssignment()
    }
  }

  private trackVariantAssignment(): void {
    // Track in analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'ab_test_variant_assigned', {
        variant: this.variant,
        timestamp: new Date().toISOString(),
      })
    }
  }

  public getVariant(): VariantType {
    return this.variant
  }

  public registerTest(config: TestConfiguration): void {
    const existingTest = this.tests.get(config.name)

    if (!existingTest) {
      // New test - assign variant based on traffic allocation
      const includeInTest = Math.random() * 100 < config.traffic

      if (includeInTest) {
        const test: ABTest = {
          name: config.name,
          variant: this.variant,
          startDate: new Date(),
        }

        this.tests.set(config.name, test)
        this.saveTestData()

        // Track test enrollment
        this.trackTestEnrollment(config.name, this.variant)
      }
    }
  }

  private trackTestEnrollment(testName: string, variant: VariantType): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'ab_test_enrolled', {
        test_name: testName,
        variant: variant,
        timestamp: new Date().toISOString(),
      })
    }
  }

  public getTestVariant<T>(config: TestConfiguration): T {
    this.registerTest(config)

    const test = this.tests.get(config.name)
    const variant = test?.variant || this.variant

    return config.variants[variant] as T
  }

  public trackConversion(testName: string, conversionType: string = 'purchase'): void {
    const test = this.tests.get(testName)

    if (test && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'ab_test_conversion', {
        test_name: testName,
        variant: test.variant,
        conversion_type: conversionType,
        timestamp: new Date().toISOString(),
      })
    }
  }

  public trackEvent(
    testName: string,
    eventType: string,
    eventData?: Record<string, unknown>
  ): void {
    const test = this.tests.get(testName)

    if (test && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'ab_test_event', {
        test_name: testName,
        variant: test.variant,
        event_type: eventType,
        ...eventData,
        timestamp: new Date().toISOString(),
      })
    }
  }

  // Preset test configurations
  public readonly testConfigs = {
    heroMessage: {
      name: 'hero_messaging_2024',
      description: 'Test hero headline messaging',
      variants: {
        A: {
          headline: 'Premium Beach Shade in Seconds',
          subhead: 'Superior UV protection. Effortless setup. Unbeatable comfort.',
        },
        B: {
          headline: 'Your Beach Day, Perfected',
          subhead: 'The fastest, easiest way to create premium shade anywhere.',
        },
      },
      traffic: 100,
    },

    priceDisplay: {
      name: 'price_display_format_2024',
      description: 'Test price display format',
      variants: {
        A: { format: 'strike-through', showSavings: true },
        B: { format: 'savings-badge', showSavings: true },
      },
      traffic: 100,
    },
  }
}

export const abTestEngine = ABTestEngine.getInstance()
