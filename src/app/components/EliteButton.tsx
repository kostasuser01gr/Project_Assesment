import { motion } from 'framer-motion'
import { ReactNode, MouseEvent } from 'react'

interface EliteButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'small' | 'medium' | 'large'
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  className?: string
  disabled?: boolean
  fullWidth?: boolean
}

export const EliteButton = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  className = '',
  disabled = false,
  fullWidth = false,
}: EliteButtonProps) => {
  const baseClasses =
    'relative font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2'

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-cyan-500 to-rose-500 text-white shadow-lg hover:shadow-xl hover:shadow-cyan-500/30',
    secondary: 'bg-white text-cyan-600 border-2 border-cyan-500 hover:bg-cyan-50',
    ghost: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
  }

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  }

  const widthClass = fullWidth ? 'w-full' : ''

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 17,
      }}
    >
      <motion.span
        className="relative z-10"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
      >
        {children}
      </motion.span>

      {/* Ripple effect on click */}
      {!disabled && (
        <motion.div
          className="absolute inset-0 rounded-lg bg-white opacity-0"
          whileTap={{ scale: 2, opacity: [0, 0.3, 0] }}
          transition={{ duration: 0.6 }}
        />
      )}
    </motion.button>
  )
}

// Magnetic button wrapper with hover effect
export const MagneticButton = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      className="inline-block"
      whileHover="hover"
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  )
}
