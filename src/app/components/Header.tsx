import { ShoppingCart, Menu, X, Sun, Award, Leaf } from 'lucide-react'
import { Link } from 'react-router'
import { Button } from './ui/button'
import { useState } from 'react'
import { useApp } from '../../utils/store'
import { motion, AnimatePresence } from 'motion/react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { state, dispatch } = useApp()
  const cartCount = state.cart.items.reduce((sum, item) => sum + item.quantity, 0)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products/sun-ninja-tents', label: 'Products' },
    { to: '/uv-dashboard', label: 'UV Dashboard', icon: Sun },
    { to: '/quiz', label: 'Sun Quiz' },
    { to: '/rewards', label: 'Rewards', icon: Award },
    { to: '/sustainability', label: 'Eco', icon: Leaf },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="font-bold text-xl tracking-tight">SUN NINJA</div>
          </Link>

          <nav
            className="hidden lg:flex items-center gap-6"
            role="navigation"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors font-medium"
              >
                {link.icon && <link.icon className="w-3.5 h-3.5" />}
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => dispatch({ type: 'UI_TOGGLE_CART' })}
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              <ShoppingCart className="w-5 h-5" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 bg-[#FF6B6B] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-border bg-white"
          >
            <nav className="container mx-auto px-4 py-4 space-y-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium hover:bg-neutral-50 transition-colors"
                >
                  {link.icon && <link.icon className="w-4 h-4 text-[#0EA5E9]" />}
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
