import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: number
  count?: number
  size?: 'sm' | 'md' | 'lg'
  showNumber?: boolean
}

export function StarRating({ rating, count, size = 'md', showNumber = true }: StarRatingProps) {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`${sizeClasses[size]} ${
              i < Math.floor(rating) ? 'fill-[#ff9f1c] text-[#ff9f1c]' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      {showNumber && <span className="text-sm font-medium">{rating.toFixed(1)}</span>}
      {count && (
        <span className="text-sm text-muted-foreground">({count.toLocaleString()} reviews)</span>
      )}
    </div>
  )
}
