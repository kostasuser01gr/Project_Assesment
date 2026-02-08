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
  CheckCircle2
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
    <div className="min-h-screen bg-background">
      <Header />

      {/* Above the Fold - Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Product Gallery */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <motion.img 
                key={selectedImage}
                src={productImages[selectedImage]} 
                alt="Sun Ninja Beach Tent" 
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx 
                      ? 'border-primary shadow-md' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-wrap gap-2">
              <ProductBadge variant="primary">UPF 50+ Protection</ProductBadge>
              <ProductBadge variant="accent">Best Seller</ProductBadge>
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                Sun Ninja Beach Tent
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your ultimate beach companion. Premium shade protection with instant setup and superior ventilation.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <StarRating rating={4.8} count={2847} />
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold">$129.99</span>
              <span className="text-xl text-muted-foreground line-through">$179.99</span>
              <ProductBadge variant="secondary">Save 28%</ProductBadge>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-3">
              <div className="flex items-center border border-border rounded-lg">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-muted transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-3 border-x border-border font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-muted transition-colors"
                >
                  +
                </button>
              </div>
              <Button 
                onClick={handleAddToCart}
                className="flex-1 bg-[#ff9f1c] hover:bg-[#ff9f1c]/90 text-black font-semibold py-6 text-lg gap-2 shadow-lg"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </Button>
            </div>

            <Button 
              variant="outline" 
              className="w-full py-6 gap-2"
            >
              <Play className="w-5 h-5" />
              Watch Setup Video
            </Button>

            {/* Trust Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border">
              <TrustBadge 
                icon={Truck} 
                title="Free Shipping" 
                description="Orders over $50"
              />
              <TrustBadge 
                icon={RotateCcw} 
                title="30-Day Returns" 
                description="Hassle-free"
              />
              <TrustBadge 
                icon={Shield} 
                title="2-Year Warranty" 
                description="Quality guaranteed"
              />
              <TrustBadge 
                icon={Sun} 
                title="UPF 50+" 
                description="Max protection"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Beach Day, Perfected
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Engineered for comfort, designed for convenience. Every detail matters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <BenefitCard 
              icon={Sun}
              title="Maximum Sun Protection"
              description="UPF 50+ rated fabric blocks 98% of harmful UV rays, keeping you and your family safe all day long."
              image="https://images.unsplash.com/photo-1632540157527-a03000a9ba4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1diUyMHByb3RlY3Rpb24lMjBiZWFjaHxlbnwxfHx8fDE3NzA0NTM0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            />
            <BenefitCard 
              icon={Zap}
              title="60-Second Setup"
              description="Pop-up design means you go from bag to shade in under a minute. No poles, no stress, just instant comfort."
              image="https://images.unsplash.com/photo-1660986616995-23a6d76f18df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5ueSUyMGJlYWNoJTIwZGF5JTIwcGVvcGxlfGVufDF8fHx8MTc3MDQ1MzQxMXww&ixlib=rb-4.1.0&q=80&w=1080"
            />
            <BenefitCard 
              icon={Wind}
              title="Superior Ventilation"
              description="Strategic mesh windows and extended back flap create a cooling cross-breeze while maintaining privacy."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Setup in 3 Simple Steps
            </h2>
            <p className="text-lg text-muted-foreground">
              Beach time starts now, not in 20 minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto">
                1
              </div>
              <h3 className="text-xl font-semibold">Remove from Bag</h3>
              <p className="text-muted-foreground">
                Pull the tent out of its compact carrying bag
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto">
                2
              </div>
              <h3 className="text-xl font-semibold">Pop & Unfold</h3>
              <p className="text-muted-foreground">
                Release the strap and let it spring into shape
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold">Secure with Stakes</h3>
              <p className="text-muted-foreground">
                Anchor with included stakes and sandbags
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Reviews */}
      <section id="reviews" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <StarRating rating={4.8} count={2847} size="lg" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Loved by Beach Enthusiasts
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of happy customers enjoying perfect beach days
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ReviewCard 
              name="Sarah M."
              rating={5}
              date="2 weeks ago"
              title="Game changer for beach days!"
              content="This tent has completely transformed our beach trips. The setup is genuinely under a minute, and the shade coverage is incredible. My kids can play all day without worrying about sunburn."
              verified
              location="Miami, FL"
            />
            <ReviewCard 
              name="Michael R."
              rating={5}
              date="1 month ago"
              title="Best beach investment ever"
              content="I was skeptical about the price, but after one weekend I knew it was worth every penny. The ventilation keeps it cool even on 95° days, and it's surprisingly stable in wind."
              verified
              location="San Diego, CA"
            />
            <ReviewCard 
              name="Jennifer K."
              rating={4}
              date="3 weeks ago"
              title="Perfect for families"
              content="Fits our family of 4 comfortably with room for coolers and bags. The UPF protection gives me peace of mind. Only wish it came in more colors!"
              verified
              location="Outer Banks, NC"
            />
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="gap-2">
              Read All 2,847 Reviews
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Specs & What's Included */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Specifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Dimensions</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Setup Size</span>
                  <span className="font-medium">94" x 94" x 59"</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Packed Size</span>
                  <span className="font-medium">40" diameter circle</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Weight</span>
                  <span className="font-medium">8.5 lbs</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Capacity</span>
                  <span className="font-medium">4-5 people</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Materials</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Fabric</span>
                  <span className="font-medium">190T Polyester</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">UV Protection</span>
                  <span className="font-medium">UPF 50+</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Frame</span>
                  <span className="font-medium">Fiberglass</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Water Resistant</span>
                  <span className="font-medium">Yes</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6">What's Included</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Sun Ninja Beach Tent</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">4 Sandbag Anchors</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">8 Ground Stakes</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Premium Carrying Bag</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Setup Instructions</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">2-Year Warranty Card</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border border-border">
              <AccordionTrigger className="text-left font-semibold">
                How long does setup really take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The Sun Ninja Tent features a true pop-up design. Once you release it from the bag, it takes about 30-60 seconds to fully expand and secure with stakes. First-time users typically complete setup in under 2 minutes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border border-border">
              <AccordionTrigger className="text-left font-semibold">
                Will it stay secure in windy conditions?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! When properly anchored with the included stakes and sandbags, the tent is stable in winds up to 25 mph. For extra security in very windy conditions, we recommend filling all four sandbag anchors with sand or water.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border border-border">
              <AccordionTrigger className="text-left font-semibold">
                How many people does it fit?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The tent comfortably accommodates 4-5 adults with room for beach chairs, coolers, and bags. The interior dimensions are approximately 94" x 94" with 59" of headroom at the peak.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border border-border">
              <AccordionTrigger className="text-left font-semibold">
                What's your return policy?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer a 30-day money-back guarantee. If you're not completely satisfied, return the tent in its original condition for a full refund. We also include a 2-year warranty covering manufacturing defects.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-6 border border-border">
              <AccordionTrigger className="text-left font-semibold">
                Is it really UPF 50+?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely. Our fabric is independently tested and certified to block 98% of harmful UVA and UVB rays. This is the highest rating available for sun protection fabrics.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg px-6 border border-border">
              <AccordionTrigger className="text-left font-semibold">
                Can it be used in light rain?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, the fabric is water-resistant and will handle light rain or ocean spray. However, it's designed primarily as a sun shelter, not a rain tent. We don't recommend using it in heavy rain or storms.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-[#0052a3] rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Your Best Beach Day?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Join 50,000+ happy customers. Free shipping on all orders over $50.
            </p>
            <Button 
              onClick={handleAddToCart}
              size="lg"
              className="bg-[#ff9f1c] hover:bg-[#ff9f1c]/90 text-black font-semibold text-lg px-8 py-6 gap-2 shadow-xl"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart - $129.99
            </Button>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                2-Year Warranty
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                30-Day Returns
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4" />
                Free Shipping
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Mobile Sticky Cart Bar */}
      <StickyCartBar 
        price="$129.99"
        rating={4.8}
        reviewCount={2847}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}