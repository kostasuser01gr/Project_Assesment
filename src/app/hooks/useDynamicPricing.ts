import { useState, useEffect } from 'react'
import { dynamicPricingEngine } from '../../services/pricing/DynamicPricingEngine'

/**
 * Hook for bundle pricing calculations
 * @param variant - The product variant ('premium' or 'xl')
 * @param quantity - Number of items
 */
export function useBundlePrice(variant: 'premium' | 'xl', quantity: number) {
  const [pricing, setPricing] = useState(() => ({
    unitPrice: dynamicPricingEngine.getUnitPrice(variant, quantity),
    totalPrice: dynamicPricingEngine.getTotalPrice(variant, quantity),
    savings: dynamicPricingEngine.getSavings(variant, quantity),
    discountPercent: dynamicPricingEngine.getBundleDiscount(quantity),
  }))

  useEffect(() => {
    setPricing({
      unitPrice: dynamicPricingEngine.getUnitPrice(variant, quantity),
      totalPrice: dynamicPricingEngine.getTotalPrice(variant, quantity),
      savings: dynamicPricingEngine.getSavings(variant, quantity),
      discountPercent: dynamicPricingEngine.getBundleDiscount(quantity),
    })
  }, [variant, quantity])

  return pricing
}

/**
 * Hook to get all pricing tiers for display
 * @param variant - The product variant ('premium' or 'xl')
 */
export function usePricingTiers(variant: 'premium' | 'xl' = 'premium') {
  const [tiers, setTiers] = useState(() => dynamicPricingEngine.getPricingTiers(variant))

  useEffect(() => {
    setTiers(dynamicPricingEngine.getPricingTiers(variant))
  }, [variant])

  return tiers
}

/**
 * Hook to get shipping information
 * @param orderTotal - Total order amount
 */
export function useShippingInfo(orderTotal: number) {
  const [shipping, setShipping] = useState(() => dynamicPricingEngine.getShippingInfo(orderTotal))

  useEffect(() => {
    setShipping(dynamicPricingEngine.getShippingInfo(orderTotal))
  }, [orderTotal])

  return shipping
}

/**
 * Combined hook for complete pricing details
 * @param variant - The product variant ('premium' or 'xl')
 * @param quantity - Number of items
 */
export function useCompletePricing(variant: 'premium' | 'xl', quantity: number) {
  const bundle = useBundlePrice(variant, quantity)
  const tiers = usePricingTiers(variant)
  const shipping = useShippingInfo(bundle.totalPrice)

  const total = bundle.totalPrice + shipping.cost

  return {
    ...bundle,
    shipping,
    total,
    tiers,
    isFreeShipping: shipping.isFree,
  }
}

/**
 * Hook for cart-level pricing
 * Useful for shopping cart/checkout pages
 */
export function useCartPricing(items: Array<{ variant: 'premium' | 'xl'; quantity: number }>) {
  const [cartTotal, setCartTotal] = useState({ subtotal: 0, savings: 0, shipping: 0, total: 0 })

  useEffect(() => {
    let subtotal = 0
    let totalSavings = 0

    items.forEach((item) => {
      const itemTotal = dynamicPricingEngine.getTotalPrice(item.variant, item.quantity)
      const itemSavings = dynamicPricingEngine.getSavings(item.variant, item.quantity)

      subtotal += itemTotal
      totalSavings += itemSavings
    })

    const shipping = dynamicPricingEngine.getShippingInfo(subtotal)
    const total = subtotal + shipping.cost

    setCartTotal({
      subtotal,
      savings: totalSavings,
      shipping: shipping.cost,
      total,
    })
  }, [items])

  return cartTotal
}
