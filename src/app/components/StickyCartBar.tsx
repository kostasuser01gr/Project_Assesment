import { ShoppingCart } from 'lucide-react'
import { Button } from './ui/button'
import { StarRating } from './StarRating'

interface StickyCartBarProps {
  price: string
  rating: number
  reviewCount: number
  onAddToCart: () => void
}

export function StickyCartBar({ price, rating, reviewCount, onAddToCart }: StickyCartBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg z-50 md:hidden">
      <div className="px-4 py-3 flex items-center justify-between gap-4">
        <div>
          <div className="font-semibold text-lg">{price}</div>
          <StarRating rating={rating} count={reviewCount} size="sm" showNumber={false} />
        </div>
        <Button
          onClick={onAddToCart}
          className="bg-[#ff9f1c] hover:bg-[#ff9f1c]/90 text-black font-semibold gap-2 shadow-md flex-shrink-0"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  )
}
