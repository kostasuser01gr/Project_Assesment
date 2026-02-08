import { Link } from 'react-router';
import { Star, Shield, Package, Users, ArrowRight, Sparkles, Sun, Wind, Heart, Award, TrendingUp, Clock, Zap, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { ReviewCard } from '../components/ReviewCard';
import { TrustBadge } from '../components/TrustBadge';
import { getHeroPhotos, getGalleryPhotos, getProductPhotos, getSetupPhotos, getUGCPhotos } from '../../utils/photoManager';

export function HomePage() {
  const heroPhoto = getHeroPhotos()[0];
  const setupPhotos = getSetupPhotos();
  const ugcPhotos = getUGCPhotos();
  const galleryPhotos = getGalleryPhotos(6);
  const productPhotos = getProductPhotos();

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      {/* QUANTUM HERO SECTION - Full bleed dramatic hero */}
      <section className="relative h-[95vh] min-h-[700px] overflow-hidden grain">
        {/* Background Image with Ocean → Coral Gradient Overlay */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            className="w-full h-full object-cover"
          />
          {/* Premium Ocean → Coral Gradient from Figma Brief */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/60 via-[#0EA5E9]/40 to-[#FF6B6B]/50"></div>
          <div className="absolute inset-0 holographic-overlay opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container-custom max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-center text-white"
            >
              {/* Rating Badge - Quantum Glass */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full quantum-glass mb-6"
              >
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.9 · 2,847 reviews</span>
              </motion.div>

              {/* Headline - Holographic Text */}
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="font-display text-6xl md:text-7xl lg:text-8xl mb-6 holographic-text quantum-text-glow leading-tight"
              >
                Your Beach Day,
                <br />
                Perfected
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed"
              >
                Premium UPF 50+ beach tent that sets up in 60 seconds. Maximum shade, zero stress.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link to="/product">
                  <Button size="lg" className="quantum-button magnetic-quantum px-8 py-6 text-lg">
                    Shop Now - $129
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                
                <div className="aurora-gradient px-6 py-3 rounded-full glasier-ultra">
                  <span className="font-semibold text-white text-lg">🔥 35% OFF Today Only</span>
                </div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-12 flex flex-wrap gap-6 justify-center items-center text-sm text-white/80"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  <span>Lifetime Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-emerald-400" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-emerald-400" />
                  <span>30-Day Returns</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/70 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* VALUE PROPOSITIONS - 3 Pillars */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center diamond-card p-8 quantum-shadow transform-3d"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center holographic-overlay">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-2xl mb-3 holographic-text">60-Second Setup</h3>
              <p className="text-muted-foreground leading-relaxed">
                Pop-up design gets you from car to shade faster than you can say "sunscreen."
              </p>
              <div className="mt-6 quantum-glass inline-block px-4 py-2 rounded-full">
                <span className="font-bold text-3xl holographic-text">3x</span>
                <span className="text-sm ml-2">Faster than competitors</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center diamond-card p-8 quantum-shadow transform-3d"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-500 to-pink-400 flex items-center justify-center holographic-overlay">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-2xl mb-3 holographic-text">UPF 50+ Protection</h3>
              <p className="text-muted-foreground leading-relaxed">
                Blocks 98% of harmful UV rays. Dermatologist-recommended fabric keeps your family safe.
              </p>
              <div className="mt-6 quantum-glass inline-block px-4 py-2 rounded-full">
                <span className="font-bold text-3xl holographic-text">98%</span>
                <span className="text-sm ml-2">UV blocked</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center diamond-card p-8 quantum-shadow transform-3d"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-indigo-400 flex items-center justify-center holographic-overlay">
                <Wind className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-2xl mb-3 holographic-text">Wind-Resistant</h3>
              <p className="text-muted-foreground leading-relaxed">
                Heavy-duty stakes and sand pockets keep you anchored in gusts up to 35mph.
              </p>
              <div className="mt-6 quantum-glass inline-block px-4 py-2 rounded-full">
                <span className="font-bold text-3xl holographic-text">35mph</span>
                <span className="text-sm ml-2">Wind tested</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - 3-Step Visual Guide with Setup Photos */}
      <section className="py-24 bg-gradient-to-br from-[#FFFBF5] to-[#F0F9FF] grain">
        <div className="container-custom max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full quantum-glass mb-6">
              <Clock className="w-4 h-4 text-[#0EA5E9]" />
              <span className="text-sm font-medium">Setup in 60 Seconds</span>
            </div>
            <h2 className="font-display text-5xl mb-4 holographic-text">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps from car to shade
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {setupPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative diamond-card overflow-hidden transform-3d"
              >
                {/* Step Number Badge */}
                <div className="absolute top-4 left-4 z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#FF6B6B] flex items-center justify-center quantum-shadow">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>

                {/* Setup Photo */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Step Description */}
                <div className="p-6">
                  <h3 className="font-display text-2xl mb-3 holographic-text">
                    {['Unpack', 'Pop Up', 'Secure'][index]}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {[
                      'Remove from compact carry bag. Lightweight at just 4.8 lbs.',
                      'Frame auto-expands with pop-up mechanism. No assembly required.',
                      'Anchor with sand pockets and stakes. Ready for all-day use.',
                    ][index]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Time Guarantee */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 crystalline-surface rounded-full quantum-shadow">
              <Zap className="w-6 h-6 text-[#FFD700]" />
              <span className="font-semibold text-lg">Average setup time: <span className="holographic-text">47 seconds</span></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PRODUCT SPOTLIGHT */}
      <section className="py-24 bg-gradient-to-br from-sky-50 to-orange-50 grain overflow-hidden">
        <div className="container-custom max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="crystalline-surface rounded-3xl overflow-hidden quantum-shadow">
                <img
                  src={productPhotos[0]?.src || '/images/beach/product-main.jpg'}
                  alt="Sun Ninja Beach Tent"
                  className="w-full h-auto"
                />
                <div className="absolute top-6 right-6 aurora-gradient px-4 py-2 rounded-full glasier-ultra">
                  <span className="font-bold text-white">BEST SELLER</span>
                </div>
              </div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 diamond-card p-6 quantum-shadow"
              >
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-bold text-2xl holographic-text">2,847</div>
                    <div className="text-sm text-muted-foreground">5-Star Reviews</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full quantum-glass mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Premium Edition</span>
              </div>

              <h2 className="font-display text-5xl mb-6 holographic-text">
                Sun Ninja Beach Tent
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The only beach tent you'll ever need. Premium materials, thoughtful design, and unbeatable protection—all in a package that weighs less than 5 pounds.
              </p>

              {/* Feature List */}
              <ul className="space-y-4 mb-8">
                {[
                  'UPF 50+ certified sun protection fabric',
                  '10ft × 10ft spacious coverage',
                  'Reinforced aluminum frame with sand anchors',
                  '360° mesh ventilation windows',
                  'Includes carry bag, stakes, and sand bags',
                  'Lifetime warranty on all components',
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-base">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/product">
                  <Button size="lg" className="quantum-button magnetic-quantum px-8">
                    View Full Details
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <div className="flex items-center gap-3 px-6 py-3 crystalline-surface rounded-lg">
                  <div>
                    <div className="text-sm text-muted-foreground line-through">$199</div>
                    <div className="text-3xl font-bold holographic-text">$129</div>
                  </div>
                  <div className="text-xs text-emerald-600 font-semibold">SAVE $70</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* UGC STRIP - Real Customer Photos */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full quantum-glass mb-6">
              <Heart className="w-4 h-4 text-[#FF6B6B]" />
              <span className="text-sm font-medium">#SunNinjaLife</span>
            </div>
            <h2 className="font-display text-5xl mb-4 holographic-text">
              Real Families, Real Moments
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how our customers enjoy their perfect beach days
            </p>
          </motion.div>

          {/* UGC Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {ugcPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-2xl diamond-card aspect-square"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0EA5E9]/80 via-[#FF6B6B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-2 text-white">
                      <Heart className="w-4 h-4 fill-white" />
                      <span className="text-xs font-medium">{Math.floor(Math.random() * 500) + 100} likes</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social CTA */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">Share your beach moments with us!</p>
            <Button variant="outline" size="lg" className="magnetic-quantum">
              <Sparkles className="mr-2 w-5 h-5" />
              Tag #SunNinjaLife
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50 grain">
        <div className="container-custom max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full quantum-glass mb-6">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">Rated 4.9/5 by 2,847 customers</span>
            </div>
            <h2 className="font-display text-5xl mb-4 holographic-text">
              Loved by Beach-Goers
            </h2>
            <p className="text-xl text-muted-foreground">
              Real reviews from real families
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <ReviewCard
              name="Sarah M."
              location="San Diego, CA"
              rating={5}
              date="2 days ago"
              title="AMAZING tent!"
              content="This tent is AMAZING! Set it up in literally under a minute. The shade coverage is perfect for our family of 4. No more sunburns or overheating!"
              verified
            />
            <ReviewCard
              name="Michael T."
              location="Miami Beach, FL"
              rating={5}
              date="1 week ago"
              title="Worth every penny"
              content="The wind resistance is no joke—survived a 30mph gust without budging. Finally found a tent that actually works."
              verified
            />
            <ReviewCard
              name="Jennifer L."
              location="Outer Banks, NC"
              rating={5}
              date="2 weeks ago"
              title="Game changer!"
              content="Perfect for beach days with kids. The mesh windows keep it cool, and the UPF 50+ protection gives me peace of mind. Highly recommend!"
              verified
            />
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/product#reviews">
              <Button variant="outline" size="lg" className="magnetic-quantum">
                Read All 2,847 Reviews
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* USE CASES - Icon Grid */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-5xl mb-4 holographic-text">
              Perfect For Every Beach Day
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Family Days', desc: 'Room for everyone' },
              { icon: Heart, title: 'Romantic Getaways', desc: 'Intimate shade' },
              { icon: Sun, title: 'Solo Relaxation', desc: 'Your peaceful retreat' },
              { icon: TrendingUp, title: 'Beach Sports', desc: 'Gear storage HQ' },
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center diamond-card p-6 transform-3d"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center quantum-glass">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground">{useCase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - Email Capture with Premium Background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={getHeroPhotos()[1]?.src || galleryPhotos[0]?.src}
            alt="Beautiful beach sunset"
            className="w-full h-full object-cover"
          />
          {/* Ocean → Coral Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0EA5E9]/95 to-[#FF6B6B]/90"></div>
          <div className="absolute inset-0 holographic-overlay opacity-20"></div>
        </div>

        <div className="relative z-10 container-custom max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-6xl mb-6 text-white holographic-text">
              Ready for Better Beach Days?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Join 10,000+ happy customers who upgraded their beach experience
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full glasier-ultra text-white placeholder-white/60 border-2 border-white/30 focus:border-white/60 focus:outline-none"
              />
              <Button size="lg" className="quantum-button magnetic-quantum px-8 whitespace-nowrap">
                Get 10% Off
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <p className="text-sm text-white/70">
              Exclusive deals + beach tips. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-12 bg-white border-t border-border">
        <div className="container-custom max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <TrustBadge icon={Shield} title="Lifetime Warranty" description="Quality guaranteed forever" />
            <TrustBadge icon={Package} title="Free Shipping" description="On all orders" />
            <TrustBadge icon={Users} title="30-Day Returns" description="No questions asked" />
            <TrustBadge icon={Award} title="Made in USA" description="Premium quality" />
          </div>
        </div>
      </section>
    </div>
  );
}
