// ============================================================================
// SHOPPING CART - Full cart management with drawer UI
// ============================================================================

import { Minus, Plus, ShoppingBag, Trash2, X, ArrowRight, Tag, Truck } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { useCallback } from 'react'
import { useApp } from '../../utils/store'

interface CartItemData {
  id: string
  name: string
  price: number
  compareAtPrice?: number
  quantity: number
  image: string
  variant?: string
  color?: string
}

function CartItem({
  item,
  onUpdateQuantity,
  onRemove,
}: {
  item: CartItemData
  onUpdateQuantity: (id: string, qty: number) => void
  onRemove: (id: string) => void
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20, height: 0 }}
      className="flex gap-4 py-4 border-b border-border last:border-0"
    >
      <div className="w-20 h-20 rounded-xl overflow-hidden bg-neutral-100 flex-shrink-0">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold truncate">{item.name}</h4>
        {item.variant && <p className="text-xs text-muted-foreground mt-0.5">{item.variant}</p>}
        {item.color && <p className="text-xs text-muted-foreground">Color: {item.color}</p>}

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
              className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-neutral-50 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-neutral-50 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          <div className="text-right">
            <div className="text-sm font-bold">${(item.price * item.quantity).toFixed(2)}</div>
            {item.compareAtPrice && (
              <div className="text-xs text-muted-foreground line-through">
                ${(item.compareAtPrice * item.quantity).toFixed(2)}
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={() => onRemove(item.id)}
        className="self-start p-1 text-muted-foreground hover:text-red-500 transition-colors"
        aria-label="Remove item"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </motion.div>
  )
}

export function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { state, dispatch } = useApp()

  const cartItems: CartItemData[] = (state.cart?.items || []) as CartItemData[]
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const savings = cartItems.reduce(
    (sum, item) => sum + ((item.compareAtPrice || item.price) - item.price) * item.quantity,
    0
  )
  const freeShippingThreshold = 50
  const shippingProgress = Math.min((subtotal / freeShippingThreshold) * 100, 100)
  const qualifiesForFreeShipping = subtotal >= freeShippingThreshold

  const updateQuantity = useCallback(
    (id: string, qty: number) => {
      if (qty === 0) {
        dispatch({ type: 'CART_REMOVE_ITEM', payload: { id } })
      } else {
        dispatch({ type: 'CART_UPDATE_QUANTITY', payload: { id, quantity: qty } })
      }
    },
    [dispatch]
  )

  const removeItem = useCallback(
    (id: string) => {
      dispatch({ type: 'CART_REMOVE_ITEM', payload: { id } })
    },
    [dispatch]
  )

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                <h2 className="text-lg font-bold">Your Cart</h2>
                <span className="text-sm text-muted-foreground">({itemCount} items)</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress */}
            <div className="px-6 py-3 bg-[#0EA5E9]/5 border-b border-border">
              {qualifiesForFreeShipping ? (
                <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                  <Truck className="w-4 h-4" />
                  You qualify for FREE shipping! 🎉
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-muted-foreground">
                      Add ${(freeShippingThreshold - subtotal).toFixed(2)} more for free shipping
                    </span>
                    <Truck className="w-3.5 h-3.5 text-muted-foreground" />
                  </div>
                  <div className="h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#0EA5E9] rounded-full"
                      animate={{ width: `${shippingProgress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <ShoppingBag className="w-16 h-16 text-neutral-200 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Add a Sun Ninja tent to get started!
                  </p>
                  <button
                    onClick={onClose}
                    className="px-6 py-3 rounded-xl bg-[#0EA5E9] text-white font-semibold text-sm hover:bg-[#0284C7] transition-colors"
                  >
                    Browse Products
                  </button>
                </div>
              ) : (
                <AnimatePresence>
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onUpdateQuantity={updateQuantity}
                      onRemove={removeItem}
                    />
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer with Total & Checkout */}
            {cartItems.length > 0 && (
              <div className="border-t border-border px-6 py-4 space-y-3">
                {/* Promo Code */}
                <div className="flex gap-2">
                  <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg border border-border">
                    <Tag className="w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Promo code"
                      aria-label="Promo code"
                      className="flex-1 text-sm outline-none bg-transparent"
                    />
                  </div>
                  <button className="px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-neutral-50 transition-colors">
                    Apply
                  </button>
                </div>

                {/* Totals */}
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {savings > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Savings</span>
                      <span>-${savings.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{qualifiesForFreeShipping ? 'FREE' : '$4.99'}</span>
                  </div>
                  <div className="flex justify-between font-bold text-base pt-2 border-t border-border">
                    <span>Total</span>
                    <span>${(subtotal + (qualifiesForFreeShipping ? 0 : 4.99)).toFixed(2)}</span>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF6B6B] to-[#FFD700] text-white font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity quantum-button">
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  🔒 Secure checkout · 30-day returns · Free shipping over $50
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
