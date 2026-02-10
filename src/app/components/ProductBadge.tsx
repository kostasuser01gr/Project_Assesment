interface ProductBadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent'
  className?: string
}

export function ProductBadge({ children, variant = 'primary', className = '' }: ProductBadgeProps) {
  const variants = {
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    accent: 'bg-accent text-accent-foreground border border-border',
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
