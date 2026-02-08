import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StarRating } from '../components/StarRating';
import { TrustBadge } from '../components/TrustBadge';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
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
  Star,
  Users,
  Timer,
  Heart
} from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <Header />

      {/* ============================================================
          HERO SECTION - CINEMATIC ASPIRATIONAL
          ============================================================ */}
      <section className="relative min-h-[95vh] overflow-hidden grain">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img 
            src="https://images.unsplash.com/photo-1764816656846-737209df4ca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGZhbWlseSUyMHZhY2F0aW9uJTIwc3Vubnl8ZW58MXx8fHwxNzcwNDUzNTA3fDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Beach background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 min-h-[95vh] flex items-center">
          <motion.div 
            className="max-w-3xl space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 glass-dark px-4 py-2 rounded-full">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 fill-[#FFB84D] text-[#FFB84D]" />
                ))}
              </div>
              <span className="text-sm font-medium text-white ml-2">Rated 4.9/5 by 2,847 customers</span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-display-xl text-white mb-4">
                Your Portable Shade,<br />
                Redesigned.
              </h1>
              <p className="text-body-lg text-white/90 max-w-2xl">
                Premium beach shelters that set up in 120 seconds. Maximum shade, superior ventilation, unbeatable protection.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products/sun-ninja-tents">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto gradient-sunset text-white font-semibold text-lg px-10 py-7 rounded-full shadow-warm hover:scale-105 transition-transform"
                >
                  Shop Beach Tents
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto glass-dark text-white border-white/30 hover:bg-white/20 px-8 py-7 rounded-full gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Setup Video
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FFB84D]" />
                <span className="font-medium">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FFB84D]" />
                <span className="font-medium">30-Day Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FFB84D]" />
                <span className="font-medium">2-Year Warranty</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* ============================================================
          3-PILLAR VALUE PROPOSITION
          ============================================================ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-1 text-[#1C1F24] mb-4">
              Designed for Real Beach Days
            </h2>
            <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for perfect beach memories, nothing you don't.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Pillar 1: Protect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-6 p-8 rounded-2xl hover:bg-[#F6E8D5]/30 transition-colors hover-lift"
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#0F3B4C] to-[#1A5470] flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="heading-3 text-[#1C1F24] mb-3">Protect</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  UPF 50+ medical-grade fabric blocks 99% of harmful UV rays.
                </p>
                <div className="text-4xl font-bold text-[#0F3B4C]">99%</div>
                <div className="text-sm text-gray-500">UV Protection</div>
              </div>
            </motion.div>

            {/* Pillar 2: Simple */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center space-y-6 p-8 rounded-2xl hover:bg-[#DDEFF5]/30 transition-colors hover-lift"
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#FFB84D] to-[#FF6B5A] flex items-center justify-center">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="heading-3 text-[#1C1F24] mb-3">Simple</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Spring-loaded frame pops open in seconds. No assembly headaches.
                </p>
                <div className="text-4xl font-bold text-[#FF6B5A]">120s</div>
                <div className="text-sm text-gray-500">Setup Time</div>
              </div>
            </motion.div>

            {/* Pillar 3: Spacious */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center space-y-6 p-8 rounded-2xl hover:bg-[#F6E8D5]/30 transition-colors hover-lift"
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#DDEFF5] to-[#0F3B4C] flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="heading-3 text-[#1C1F24] mb-3">Spacious</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  10×10 canopy fits your whole crew plus gear and cooler.
                </p>
                <div className="text-4xl font-bold text-[#0F3B4C]">6+</div>
                <div className="text-sm text-gray-500">People Capacity</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============================================================
          FEATURED PRODUCT SPOTLIGHT
          ============================================================ */}
      <section className="py-24 bg-gradient-to-br from-[#F6E8D5] to-[#DDEFF5] grain">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600403506000-62e42b6e3238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHRlbnQlMjBzaGFkZSUyMG9jZWFufGVufDF8fHx8MTc3MDQ1MzQxMHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Sun Ninja Classic"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-[#FF6B5A] text-white px-6 py-3 rounded-full font-bold shadow-xl">
                Best Seller
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="heading-2 text-[#1C1F24] mb-4">
                  Sun Ninja Classic
                </h2>
                <p className="text-body-lg text-gray-700 leading-relaxed">
                  Our signature beach tent. Trusted by over 10,000 families for unforgettable days at the shore.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-5 h-5 fill-[#FFB84D] text-[#FFB84D]" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">4.9/5 (2,847 reviews)</span>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-[#1C1F24]">$129</span>
                <span className="text-xl text-gray-500 line-through">$199</span>
                <Badge className="bg-[#FF6B5A] text-white">Save 35%</Badge>
              </div>

              <Link to="/products/sun-ninja-tents">
                <Button 
                  size="lg"
                  className="gradient-sunset text-white font-semibold text-lg px-10 py-6 rounded-full shadow-warm hover:scale-105 transition-transform"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============================================================
          LIFESTYLE GRID - USE CASES
          ============================================================ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-1 text-[#1C1F24] mb-4">
              Wherever the Sun Takes You
            </h2>
            <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
              Beach, park, camping, or backyard—your Sun Ninja goes everywhere.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            
            {/* Beach - Primary */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1764816656846-737209df4ca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGZhbWlseSUyMHZhY2F0aW9uJTIwc3Vubnl8ZW58MXx8fHwxNzcwNDUzNTA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Beach"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="heading-3 mb-2">Beach Days</h3>
                <p className="text-white/90">The ultimate beach companion</p>
              </div>
            </motion.div>

            {/* Park - Secondary */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative group rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1651245009323-fbc34e7dd1c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGNhbXBpbmclMjB0ZW50fGVufDF8fHx8MTc3MDQ1MzQxMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Park"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="heading-3 mb-2">Park Picnics</h3>
                <p className="text-white/90">Perfect for outdoor gatherings</p>
              </div>
            </motion.div>

            {/* Camping */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1709216194920-eba6ce2da58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0YWJsZSUyMGJlYWNoJTIwc2hlbHRlcnxlbnwxfHx8fDE3NzA0NTM0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Camping"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="heading-3 mb-2">Camping Trips</h3>
                <p className="text-white/90">Extra shade at the campsite</p>
              </div>
            </motion.div>

            {/* Backyard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative group rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1759796975347-b60da1f8939c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHVtYnJlbGxhJTIwZmFtaWx5JTIwc2V0dXB8ZW58MXx8fHwxNzcwNDUzNDExfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Backyard"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="heading-3 mb-2">Backyard BBQs</h3>
                <p className="text-white/90">Shade for summer parties</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============================================================
          REVIEWS + PRESS
          ============================================================ */}
      <section className="py-24 bg-[#F6E8D5]">
        <div className="container mx-auto px-4">
          
          {/* Press Mentions */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-6">As Featured In</p>
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
              <div className="text-2xl font-bold text-gray-800">Outside Magazine</div>
              <div className="text-2xl font-bold text-gray-800">GearJunkie</div>
              <div className="text-2xl font-bold text-gray-800">Beach Life</div>
            </div>
          </div>

          {/* Featured Review */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <div className="flex justify-center">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-8 h-8 fill-[#FFB84D] text-[#FFB84D]" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl text-[#1C1F24] leading-relaxed font-serif italic">
              "Best beach tent we've ever owned. The setup is ridiculously easy and it actually stays put in the wind. Worth every penny."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#0F3B4C]"></div>
              <div className="text-left">
                <div className="font-semibold text-[#1C1F24]">Sarah M.</div>
                <div className="text-sm text-gray-600">Verified Buyer</div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ============================================================
          WHY SUN NINJA - BRAND VALUES
          ============================================================ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-[#1C1F24] mb-4">
              Why Sun Ninja?
            </h2>
          </div>

          <div className="space-y-12">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#DDEFF5] to-[#0F3B4C] flex items-center justify-center flex-shrink-0">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="heading-3 text-[#1C1F24] mb-2 text-xl">Beach-Tested Since 2019</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Designed by surfers, for beach lovers. We know what works because we live it.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB84D] to-[#FF6B5A] flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="heading-3 text-[#1C1F24] mb-2 text-xl">Quality First</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Premium materials, rigorous testing, 2-year warranty. We stand behind every tent.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0F3B4C] to-[#1A5470] flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="heading-3 text-[#1C1F24] mb-2 text-xl">Give Back</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  1% of every sale goes to ocean conservation. Protecting the places we love.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============================================================
          EMAIL CAPTURE
          ============================================================ */}
      <section className="py-24 bg-gradient-to-br from-[#0F3B4C] to-[#1A5470] grain">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-8">
          <div>
            <h2 className="heading-2 text-white mb-4">
              Join the Beach Club
            </h2>
            <p className="text-body-lg text-white/90">
              Get beach tips, exclusive deals, and 10% off your first order.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border-2 border-white/20 bg-white/10 glass text-white placeholder:text-white/60 focus:outline-none focus:border-[#FFB84D]"
            />
            <Button 
              size="lg"
              className="gradient-sunset text-white font-semibold px-8 py-4 rounded-full shadow-warm hover:scale-105 transition-transform"
            >
              Sign Up
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <p className="text-sm text-white/70">
            No spam. Just sunshine and great deals. Unsubscribe anytime.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
