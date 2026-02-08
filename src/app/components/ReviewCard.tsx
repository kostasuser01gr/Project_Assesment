import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified?: boolean;
  location?: string;
}

export function ReviewCard({ 
  name, 
  rating, 
  date, 
  title, 
  content, 
  verified = false,
  location 
}: ReviewCardProps) {
  return (
    <div className="bg-white border border-border rounded-xl p-6 hover-shadow-md transition-shadow diamond-card crystalline-surface">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium">{name}</span>
            {verified && (
              <span className="text-xs px-2 py-0.5 rounded-full glasier-ultra">
                Verified Purchase
              </span>
            )}
          </div>
          {location && (
            <div className="text-xs text-muted-foreground">{location}</div>
          )}
        </div>
        <span className="text-xs text-muted-foreground">{date}</span>
      </div>
      
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'fill-[#ff9f1c] text-[#ff9f1c]' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      <h4 className="font-medium mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{content}</p>
    </div>
  );
}
