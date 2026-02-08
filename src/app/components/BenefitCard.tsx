import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
}

export function BenefitCard({ icon: Icon, title, description, image }: BenefitCardProps) {
  return (
    <div className="bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all group diamond-card particle-container">
      {image && (
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 quantum-glass">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
