import { useState } from 'react';
import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StickyCartBar } from '../components/StickyCartBar';
import { StarRating } from '../components/StarRating';
import { ReviewCard } from '../components/ReviewCard';
import { BenefitCard } from '../components/BenefitCard';
import { TrustBadge } from '../components/TrustBadge';
import { ProductBadge } from '../components/ProductBadge';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  ShoppingCart, 
  Truck, 
  RotateCcw, 
  Shield, 
  Sun, 
  Wind, 
  Zap, 
  Users, 
  Package,
  Timer,
  ChevronDown,
  Play,
  CheckCircle2,
  ArrowRight,
  Star,
  Umbrella
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { toast } from 'sonner';

const productImages = [
  'https://images.unsplash.com/photo-1600403506000-62e42b6e3238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHRlbnQlMjBzaGFkZSUyMG9jZWFufGVufDF8fHx8MTc3MDQ1MzQxMHww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1759796975347-b60da1f8939c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHVtYnJlbGxhJTIwZmFtaWx5JTIwc2V0dXB8ZW58MXx8fHwxNzcwNDUzNDExfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1709216194920-eba6ce2da58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0YWJsZSUyMGJlYWNoJTIwc2hlbHRlcnxlbnwxfHx8fDE3NzA0NTM0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1651245009323-fbc34e7dd1c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGNhbXBpbmclMjB0ZW50fGVufDF8fHx8MTc3MDQ1MzQxMnww&ixlib=rb-4.1.0&q=80&w=1080',
];

export function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    toast.success('Added to cart!', {
      description: `${quantity} Sun Ninja Beach Tent${quantity > 1 ? 's' : ''} added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <Header />

      {/* ============================================================
          HERO SECTION - CINEMATIC FULL BLEED
          ============================================================ */}
      <section className="relative min-h-[90vh] overflow-hidden grain">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img 
            src={productImages[0]}
            alt="Sun Ninja at the beach" 
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="relative z-10 container mx-auto px-4 h-full min-h-[90vh] flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-16">
            
            {/* Left: Copy + CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white space-y-8"
            >
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 glass-dark px-4 py-2 rounded-full">
                <div className="flex -space-x-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-[#FFB84D] text-[#FFB84D]" />
                  ))}
                </div>
                <span className="text-sm font-medium ml-2">4.9/5 from 2,847 reviews</span>
              </div>

              {/* Headline */}
              <div>
                <h1 className="text-display-xl text-white mb-4">
                  Sunburn Ends<br />
                  Your Day.
                </h1>
                <h2 className="text-display-xl text-[#FFB84D]">
                  Sun Ninja Doesn't.
                </h2>
              </div>

              {/* Subheadline */}
              <p className="text-body-lg text-white/90 max-w-xl">
                The beach shelter that sets up in 120 seconds, blocks 99% UV rays, and turns any beach day into pure comfort.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="glass-dark border-white/20 text-white px-4 py-2 text-sm">
                  <Shield className="w-4 h-4 mr-2" />
                  UPF 50+ Protection
                </Badge>
                <Badge variant="secondary" className="glass-dark border-white/20 text-white px-4 py-2 text-sm">
                  <Timer className="w-4 h-4 mr-2" />
                  120s Setup
                </Badge>
                <Badge variant="secondary" className="glass-dark border-white/20 text-white px-4 py-2 text-sm">
                  <Wind className="w-4 h-4 mr-2" />
                  Wind Resistant
                </Badge>
              </div>

              {/* CTA + Price */}
              <div className="space-y-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-bold text-white">$129</span>
                  <span className="text-2xl text-white/60 line-through">$199</span>
                  <Badge className="bg-[#FF6B5A] text-white border-0 px-3 py-1">35% OFF</Badge>
                </div>
                
                <Button 
                  onClick={handleAddToCart}
                  size="lg"
                  className="gradient-sunset text-white font-semibold text-lg px-10 py-7 rounded-full shadow-warm hover:scale-105 transition-transform"
                >
                  Add to Cart - $129
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* Trust Badges Below CTA */}
              <div className="flex flex-wrap gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FFB84D]" />
                  Free Shipping
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FFB84D]" />
                  30-Day Returns
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FFB84D]" />
                  2-Year Warranty
                </div>
              </div>
            </motion.div>

            {/* Right: Empty or subtle product card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block"
            >
              {/* Optional: floating product preview */}
            </motion.div>

          </div>
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
          PROBLEM → SOLUTION SPLIT
          ============================================================ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
            
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="text-[#FF6B5A] font-semibold mb-4 uppercase tracking-wide text-sm">The Problem</div>
              <h2 className="heading-2 text-[#1C1F24] mb-6">
                Beach umbrellas are a hassle.<br/>
                And they barely work.
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-sm font-bold">✕</span>
                  </div>
                  <span className="text-lg">Flips over in light wind</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-sm font-bold">✕</span>
                  </div>
                  <span className="text-lg">Takes forever to set up (and falls apart)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-sm font-bold">✕</span>
                  </div>
                  <span className="text-lg">Leaves half your family in the sun</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-sm font-bold">✕</span>
                  </div>
                  <span className="text-lg">No airflow = feels like a sauna</span>
                </li>
              </ul>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#F6E8D5] to-[#DDEFF5] p-10 rounded-3xl space-y-6"
            >
              <div className="text-[#0F3B4C] font-semibold mb-4 uppercase tracking-wide text-sm">The Solution</div>
              <h2 className="heading-2 text-[#1C1F24] mb-6">
                Sun Ninja gives you shade that actually works.
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-lg"><strong>Wind-proof anchors</strong> keep it stable in 25mph gusts</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-lg"><strong>Pop-up frame</strong> deploys in under 2 minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-lg"><strong>Spacious 10×10 canopy</strong> fits the whole crew</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-lg"><strong>Mesh vents</strong> = cool breeze, no stuffiness</span>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============================================================
          PRODUCT EXPLAINER - Feature Grid
          ============================================================ */}
      <section className="py-24 bg-[#FFFBF5] grain">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-1 text-[#1C1F24] mb-4">
              Engineered for Real Beach Conditions
            </h2>
            <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
              Every detail designed to make your beach day effortless—and keep you protected.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {[
              {
                icon: Shield,
                title: "UPF 50+ Canopy",
                desc: "Medical-grade fabric blocks 99% of harmful UV rays",
                color: "from-[#FFB84D] to-[#FF6B5A]"
              },
              {
                icon: Wind,
                title: "Dual Vent System",
                desc: "Cross-breeze design prevents heat buildup",
                color: "from-[#DDEFF5] to-[#0F3B4C]"
              },
              {
                icon: Zap,
                title: "Spring-Loaded Frame",
                desc: "Opens in seconds, no wrestling with poles",
                color: "from-[#FF6B5A] to-[#FFB84D]"
              },
              {
                icon: Package,
                title: "Compact Carry Bag",
                desc: "Fits in your trunk or closet when not in use",
                color: "from-[#0F3B4C] to-[#1A5470]"
              },
              {
                icon: Sun,
                title: "10×10 Coverage",
                desc: "Room for 6 adults + cooler + beach gear",
                color: "from-[#FFB84D] to-[#F6E8D5]"
              },
              {
                icon: Umbrella,
                title: "Sand Anchors Included",
                desc: "4-point ground stakes + sandbag pockets",
                color: "from-[#DDEFF5] to-[#F6E8D5]"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all hover-lift"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="heading-3 text-[#1C1F24] mb-3 text-xl">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ============================================================
          SOCIAL PROOF GALLERY
          ============================================================ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-1 text-[#1C1F24] mb-4">
              Loved by 10,000+ Beach Families
            </h2>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-6 h-6 fill-[#FFB84D] text-[#FFB84D]" />
                ))}
              </div>
              <span className="font-semibold ml-2">4.9 out of 5</span>
            </div>
          </div>

          {/* Customer Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
            {productImages.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                <img 
                  src={img}
                  alt="Customer photo"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Review Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ReviewCard 
              name="Sarah M."
              rating={5}
              date="2 weeks ago"
              text="Game-changer for our family beach days! Sets up in literally 2 minutes and stays put even when it's windy. Our kids love the extra space."
              verified={true}
            />
            <ReviewCard 
              name="Mike R."
              rating={5}
              date="1 month ago"
              text="Best beach tent we've ever owned. The ventilation is incredible—no more sweating under a hot canopy. Would buy again in a heartbeat."
              verified={true}
            />
            <ReviewCard 
              name="Jennifer K."
              rating={5}
              date="3 weeks ago"
              text="Worth every penny. The UV protection gives me peace of mind with my toddler, and the setup is actually as easy as they claim. Highly recommend!"
              verified={true}
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          FAQ SECTION
          ============================================================ */}
      <section className="py-24 bg-[#F6E8D5]">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-[#1C1F24] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-xl px-6 border-0">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                How long does setup really take?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Genuinely 2 minutes or less. Unfold the frame, lock the joints, stake the corners, and adjust. Even first-timers get it done in under 3 minutes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-xl px-6 border-0">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                Will it blow away in the wind?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Nope. The anchor system (4 ground stakes + sandbag pockets) keeps it stable up to 25mph winds. We've stress-tested it in coastal conditions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-xl px-6 border-0">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                How many people does it actually fit?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Comfortably 6 adults sitting, or 4 adults + 2-3 kids + gear. The 10×10 footprint is genuinely spacious—not one of those "fits 4" tents that barely fits 2.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-xl px-6 border-0">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                What's included in the box?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Everything you need: tent canopy, collapsible frame, 4 sand anchors, carry bag with shoulder strap, and setup guide. No hidden extras required.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* ============================================================
          GUARANTEE BLOCK
          ============================================================ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="bg-gradient-to-br from-[#F6E8D5] to-[#DDEFF5] rounded-3xl p-12 space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#FFB84D] to-[#FF6B5A] flex items-center justify-center mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="heading-2 text-[#1C1F24]">
              30-Day Beach Test Drive
            </h2>
            <p className="text-body-lg text-gray-700 max-w-2xl mx-auto">
              Try it for a full month. If it's not the best shade you've ever used, return it. We'll pay shipping both ways.
            </p>
            <div className="pt-4">
              <p className="text-sm font-semibold text-[#0F3B4C]">
                + 2-Year Warranty on frame & fabric
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA BLOCK
          ============================================================ */}
      <section className="py-24 bg-gradient-to-br from-[#0F3B4C] to-[#1A5470] grain">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="heading-1 text-white">
            Ready for Better Beach Days?
          </h2>
          <div className="flex items-baseline justify-center gap-3">
            <span className="text-5xl font-bold text-white">$129</span>
            <span className="text-2xl text-white/60 line-through">$199</span>
          </div>
          <Button 
            onClick={handleAddToCart}
            size="lg"
            className="gradient-sunset text-white font-semibold text-lg px-12 py-8 rounded-full shadow-2xl hover:scale-105 transition-transform"
          >
            Add to Cart - Save 35%
            <ShoppingCart className="ml-2 w-5 h-5" />
          </Button>
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm pt-4">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5" />
              Ships tomorrow
            </div>
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5" />
              Arrives in 3-5 days
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              2,847 families agree
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCartBar />
    </div>
  );
}
