import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StarRating } from '../components/StarRating';
import { TrustBadge } from '../components/TrustBadge';
import { Button } from '../components/ui/button';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Sun, 
  Wind, 
  Zap, 
  Shield, 
  Truck, 
  RotateCcw,
  CheckCircle2,
  Play,
  Star
} from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Beach First */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 holographic-overlay">
          <img 
            src="/images/beach/hero-main.jpg" 
            alt="Beach background" 
            className="w-full h-full object-cover quantum-shadow"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full mb-6 quantum-glass">
              <Star className="w-4 h-4 fill-[#ff9f1c] text-[#ff9f1c] float-slow" />
              <span className="text-sm font-medium">Rated 4.8/5 by 2,847 customers</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight quantum-text-glow holographic-text">
              Your Perfect Beach Day Starts Here
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Premium beach shelters that set up in 60 seconds. Maximum shade, superior ventilation, unbeatable protection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/products/sun-ninja-tents">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto text-black font-semibold text-lg px-8 py-6 gap-2 quantum-button magnetic-quantum"
                >
                  Shop Beach Tents
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 px-8 py-6 gap-2"
              >
                <Play className="w-5 h-5" />
                Watch How It Works
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#ff9f1c]" />
                Free Shipping
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#ff9f1c]" />
                30-Day Returns
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#ff9f1c]" />
                2-Year Warranty
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y border-border py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TrustBadge 
              icon={Truck} 
              title="Free Shipping" 
              description="On all orders $50+"
            />
            <TrustBadge 
              icon={RotateCcw} 
              title="Easy Returns" 
              description="30-day guarantee"
            />
            <TrustBadge 
              icon={Shield} 
              title="2-Year Warranty" 
              description="Quality backed"
            />
            <TrustBadge 
              icon={Sun} 
              title="UPF 50+" 
              description="Max UV protection"
            />
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-16 md:py-24 scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Best Seller</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 holographic-text">
              The Sun Ninja Beach Tent
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our flagship product. Engineered for the beach, loved by families everywhere.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted quantum-shadow transform-3d">
                <img 
                  src="https://images.unsplash.com/photo-1600403506000-62e42b6e3238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHRlbnQlMjBzaGFkZSUyMG9jZWFufGVufDF8fHx8MTc3MDQ1MzQxMHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Sun Ninja Beach Tent" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 aurora-gradient text-black font-bold px-6 py-3 rounded-full shadow-lg pulse-glow quantum-shadow">
                Save 28%
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <StarRating rating={4.8} count={2847} size="lg" />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3">Premium Beach Shelter</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The ultimate beach companion with instant pop-up setup, UPF 50+ protection, and superior ventilation. Perfect for families who want to maximize their time in the sun—safely.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 hover-lift transform-3d">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 quantum-glass">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">60-Second Setup</div>
                    <div className="text-sm text-muted-foreground">Pop-up design, no assembly required</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 hover-lift transform-3d">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 quantum-glass">
                    <Sun className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">UPF 50+ Protection</div>
                    <div className="text-sm text-muted-foreground">Blocks 98% of harmful UV rays</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 hover-lift transform-3d">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 quantum-glass">
                    <Wind className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Superior Ventilation</div>
                    <div className="text-sm text-muted-foreground">Mesh windows for cooling airflow</div>
                  </div>
                </div>
              </div>

              <div className="flex items-baseline gap-3 pt-4">
                <span className="text-4xl font-bold">$129.99</span>
                <span className="text-xl text-muted-foreground line-through">$179.99</span>
              </div>

              <Link to="/products/sun-ninja-tents" className="block">
                <Button 
                  size="lg"
                  className="w-full text-black font-semibold py-6 gap-2 quantum-button magnetic-quantum"
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases - Versatility */}
      <section className="bg-secondary py-16 md:py-24 scroll-slide-left">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Beyond the Beach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              While designed for the beach, Sun Ninja tents excel in any outdoor setting
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1714412192114-61dca8f15f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHBhcmFkaXNlJTIwYmVhY2h8ZW58MXx8fHwxNzcwNDUzNTA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Beach days" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Beach Days</h3>
                <p className="text-sm text-white/90">Ultimate sun protection for endless coastal adventures</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer card-premium">
              <img 
                src="https://images.unsplash.com/photo-1755003842792-9d2b7ad08862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJrJTIwcGljbmljJTIwZmFtaWx5fGVufDF8fHx8MTc3MDQ1MzUwOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Park picnics" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Park Picnics</h3>
                <p className="text-sm text-white/90">Instant shade for family gatherings and outdoor meals</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer card-premium">
              <img 
                src="https://images.unsplash.com/photo-1666599972599-7350e0c75479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwY2FtcGluZyUyMG5hdHVyZXxlbnwxfHx8fDE3NzA0NTM1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Outdoor events" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Outdoor Events</h3>
                <p className="text-sm text-white/90">Sports games, festivals, and camping trips</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Setup in 60 Seconds
            </h2>
            <p className="text-lg text-muted-foreground">
              No complicated assembly. No frustration. Just instant shade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center space-y-4 hover-lift">
              <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground text-3xl font-bold flex items-center justify-center mx-auto shadow-lg shadow-ultra">
                1
              </div>
              <h3 className="text-2xl font-semibold">Unpack</h3>
              <p className="text-muted-foreground leading-relaxed">
                Remove the tent from its compact carrying bag
              </p>
            </div>

            <div className="text-center space-y-4 hover-lift">
              <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground text-3xl font-bold flex items-center justify-center mx-auto shadow-lg shadow-ultra">
                2
              </div>
              <h3 className="text-2xl font-semibold">Pop Open</h3>
              <p className="text-muted-foreground leading-relaxed">
                Release the strap and watch it spring into shape
              </p>
            </div>

            <div className="text-center space-y-4 hover-lift">
              <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground text-3xl font-bold flex items-center justify-center mx-auto shadow-lg shadow-ultra">
                3
              </div>
              <h3 className="text-2xl font-semibold">Secure</h3>
              <p className="text-muted-foreground leading-relaxed">
                Anchor with stakes and sandbags—done!
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <Play className="w-5 h-5" />
              Watch Setup Video
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-secondary py-16 md:py-24 scroll-slide-right">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <StarRating rating={4.8} size="lg" showNumber={false} />
              <span className="text-3xl font-bold">4.8 out of 5</span>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Based on 2,847 verified reviews from happy customers
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm card-premium">
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm card-premium">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Would Recommend</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm card-premium">
                <div className="text-4xl font-bold text-primary mb-2">4.8★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>

            <Link to="/products/sun-ninja-tents">
              <Button variant="link" className="gap-2">
                Read Customer Reviews
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-[#0052a3] rounded-3xl p-8 md:p-16 text-white text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Transform Your Beach Days
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join 50,000+ families enjoying safer, more comfortable outdoor adventures. Free shipping on all orders.
            </p>
            <Link to="/products/sun-ninja-tents">
              <Button 
                size="lg"
                className="text-black font-semibold text-lg px-12 py-6 gap-2 quantum-button magnetic-quantum"
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
