import { Shield, Truck, RotateCcw, Headphones } from 'lucide-react'
import { Link } from 'react-router'

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border mt-24">
      {/* Trust Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-medium text-sm">Free Shipping</div>
                <div className="text-xs text-muted-foreground mt-1">On orders over $50</div>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-medium text-sm">2-Year Warranty</div>
                <div className="text-xs text-muted-foreground mt-1">Quality guaranteed</div>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <RotateCcw className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-medium text-sm">30-Day Returns</div>
                <div className="text-xs text-muted-foreground mt-1">Easy hassle-free returns</div>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <Headphones className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-medium text-sm">24/7 Support</div>
                <div className="text-xs text-muted-foreground mt-1">We're here to help</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="font-bold text-lg mb-4">SUN NINJA</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium beach shelters designed for ultimate comfort and protection.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/products/sun-ninja-tents"
                  className="hover:text-foreground transition-colors"
                >
                  Beach Tents
                </Link>
              </li>
              <li>
                <Link
                  to="/products/sun-ninja-tents"
                  className="hover:text-foreground transition-colors"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  to="/products/sun-ninja-tents"
                  className="hover:text-foreground transition-colors"
                >
                  Bundles
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/uv-dashboard" className="hover:text-foreground transition-colors">
                  UV Dashboard
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="hover:text-foreground transition-colors">
                  Sun Quiz
                </Link>
              </li>
              <li>
                <Link to="/rewards" className="hover:text-foreground transition-colors">
                  Rewards
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-foreground transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-foreground transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/products/sun-ninja-tents#reviews"
                  className="hover:text-foreground transition-colors"
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2026 Sun Ninja. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
