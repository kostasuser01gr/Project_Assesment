export class DynamicPricingEngine {
  private static instance: DynamicPricingEngine

  private readonly BASE_PRICES = {
    premium: 149,
    xl: 179,
    bundle: 127, // per unit in bundle
  }

  private constructor() {}

  public static getInstance(): DynamicPricingEngine {
    if (!DynamicPricingEngine.instance) {
      DynamicPricingEngine.instance = new DynamicPricingEngine()
    }
    return DynamicPricingEngine.instance
  }

  // Bundle discount calculator
  public getBundleDiscount(quantity: number): number {
    if (quantity >= 3) return 0.25 // 25% off
    if (quantity === 2) return 0.15 // 15% off
    return 0
  }

  // Calculate unit price with bundle discount
  public getUnitPrice(variant: 'premium' | 'xl' | 'bundle', quantity: number = 1): number {
    const basePrice = this.BASE_PRICES[variant]
    const discount = this.getBundleDiscount(quantity)
    return Math.round(basePrice * (1 - discount))
  }

  // Get total price for quantity
  public getTotalPrice(variant: 'premium' | 'xl' | 'bundle', quantity: number): number {
    return this.getUnitPrice(variant, quantity) * quantity
  }

  // Calculate savings
  public getSavings(variant: 'premium' | 'xl' | 'bundle', quantity: number): number {
    const regularTotal = this.BASE_PRICES[variant] * quantity
    const discountedTotal = this.getTotalPrice(variant, quantity)
    return regularTotal - discountedTotal
  }

  // Get pricing tiers for display
  public getPricingTiers(variant: 'premium' | 'xl' = 'premium'): Array<{
    qty: number
    unitPrice: number
    totalPrice: number
    savings: number
    label: string
    badge?: string
  }> {
    return [
      {
        qty: 1,
        unitPrice: this.getUnitPrice(variant, 1),
        totalPrice: this.getTotalPrice(variant, 1),
        savings: this.getSavings(variant, 1),
        label: 'Single',
      },
      {
        qty: 2,
        unitPrice: this.getUnitPrice(variant, 2),
        totalPrice: this.getTotalPrice(variant, 2),
        savings: this.getSavings(variant, 2),
        label: 'Beach Duo',
        badge: 'Popular',
      },
      {
        qty: 3,
        unitPrice: this.getUnitPrice(variant, 3),
        totalPrice: this.getTotalPrice(variant, 3),
        savings: this.getSavings(variant, 3),
        label: 'Family Pack',
        badge: 'Best Value',
      },
    ]
  }

  // Check if flash sale is active
  public getFlashSaleCountdown(): Date | null {
    const now = new Date()
    const dayOfWeek = now.getDay()

    // Weekend flash sale (Saturday/Sunday)
    if (dayOfWeek === 6 || dayOfWeek === 0) {
      const endOfDay = new Date(now)
      endOfDay.setHours(23, 59, 59, 999)
      return endOfDay
    }

    return null
  }

  // Format price for display
  public formatPrice(price: number): string {
    return `$${price.toFixed(2)}`
  }

  // Get shipping info
  public getShippingInfo(orderTotal: number): {
    cost: number
    isFree: boolean
    threshold: number
    remaining: number
  } {
    const freeShippingThreshold = 100
    const standardShipping = 9.99

    const isFree = orderTotal >= freeShippingThreshold
    const cost = isFree ? 0 : standardShipping
    const remaining = Math.max(0, freeShippingThreshold - orderTotal)

    return {
      cost,
      isFree,
      threshold: freeShippingThreshold,
      remaining,
    }
  }
}

export const dynamicPricingEngine = DynamicPricingEngine.getInstance()
