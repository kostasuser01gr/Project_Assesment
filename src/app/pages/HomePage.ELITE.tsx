import { useNavigate } from 'react-router'
import { motion } from 'framer-motion'
import {
  Star, Shield, Zap, Clock, Users, Award, Package, CheckCircle,
  ChevronRight, Sparkles, TrendingUp, Heart
} from 'lucide-react'
import {
  getHeroPhotos,
  getSetupPhotos,
  getUGCPhotos,
  getProductPhotos
} from '../../utils/photoManager'

// Import WOW Components
import { WeatherAwareHero } from '../components/WeatherAwareHero'
import { CinematicHero } from '../components/CinematicHero'
import { Interactive360Viewer } from '../components/Interactive360Viewer'
import { SmartSetupGuide } from '../components/SmartSetupGuide'
import { GamifiedSetup } from '../components/GamifiedSetup'
import { LiveSocialProofWall } from '../components/LiveSocialProofWall'
import { SustainabilitySection } from '../components/SustainabilitySection'
import { ARPlacementButton } from '../components/ARPlacementButton'
import { AmbientAudioSystem } from '../components/AmbientAudioSystem'
import { DarkSolarModeToggle } from '../components/DarkSolarModeToggle'
import { ReviewCard } from '../components/ReviewCard'
import { StickyTrustRibbon } from '../components/StickyTrustRibbon'

export default function HomePage() {
  const navigate = useNavigate()
  const heroPhotos = getHeroPhotos()
  const setupPhotos = getSetupPhotos()
  const productPhotos = getProductPhotos()
  const ugcPhotosRaw = getUGCPhotos()

  // Transform UGC photos for live social wall
  const socialPosts = ugcPhotosRaw.map((photo, index) => ({
    id: photo.id,
    author: ['beachfamily', 'sunsetlover', 'coastalvibes', 'summerdreams', 'oceanbreeze', 'beachlife'][index % 6],
    avatar: photo.src,
    location: ['Santorini, Greece', 'Malibu, USA', 'Gold Coast, Australia', 'Costa Rica', 'Bali, Indonesia', 'Miami, USA'][index % 6],
    coordinates: {
      lat: [36.39, 34.03, -28.01, 9.75, -8.34, 25.76][index % 6],
      lng: [25.46, -118.78, 153.43, -83.75, 115.09, -80.19][index % 6]
    },
    image: photo.src,
    caption: [
      'Best beach tent ever! Our kids love it 🏖️',
      'Game changer for our family beach days',
      'Setup was literally 60 seconds. Amazing!',
      'The shade and UV protection are incredible',
      'Perfect for windy beach days 💨',
      'Worth every penny. Highly recommend!'
    ][index % 6],
    likes: Math.floor(Math.random() * 500) + 200,
    date: ['2 days ago', '1 week ago', '2 weeks ago', '1 month ago', '2 months ago'][index % 5],
    isNew: index < 2
  }))

  // Smart setup guide steps
  const setupSteps = setupPhotos.slice(0, 3).map((photo, index) => ({
    image: photo.src,
    title: ['Unpack & Unfold', 'Pop Up Frame', 'Secure & Anchor'][index],
    description: [
      'Remove from compact carry bag and unfold pre-assembled frame',
      'Quick-release mechanism pops up instantly - no complicated parts',
      'Secure with sand pockets and stakes. Built-in storage keeps everything organized'
    ][index],
    duration: [8, 12, 10][index]
  }))

  // Customer reviews
  const reviews = [
    {
      name: 'Sarah M.',
      rating: 5,
      date: 'March 15, 2024',
      title: 'Game-changer for beach days!',
      content: 'Sets up in literally 2 minutes and stays put even when it\'s windy. Our kids love the extra space.',
      verified: true,
      location: 'California, USA'
    },
    {
      name: 'David K.',
      rating: 5,
      date: 'March 22, 2024',
      title: 'Best beach tent ever!',
      content: 'The ventilation is incredible—no more sweating under a hot canopy. Would buy again in a heartbeat.',
      verified: true,
      location: 'Florida, USA'
    },
    {
      name: 'Emily R.',
      rating: 5,
      date: 'April 2, 2024',
      title: 'Worth every penny',
      content: 'The UV protection gives me peace of mind with my toddler, and the setup is actually as easy as they claim.',
      verified: true,
      location: 'Sydney, Australia'
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: '60-Second Setup',
      description: 'Pre-assembled frame pops up instantly. No complicated parts or confusing instructions.',
      color: 'from-cyan-400 to-blue-600'
    },
    {
      icon: Shield,
      title: 'UPF 50+ Protection',
      description: 'Blocks 98% of harmful UV rays. Keep your family safe from sun damage.',
      color: 'from-coral-400 to-pink-600'
    },
    {
      icon: Zap,
      title: 'Wind Resistant',
      description: 'Patented anchoring system withstands winds up to 35 mph. Stays put all day.',
      color: 'from-purple-400 to-indigo-600'
    },
    {
      icon: Users,
      title: 'Spacious Interior',
      description: 'Comfortably fits 4-6 adults with gear. Multiple ventilation windows for airflow.',
      color: 'from-green-400 to-teal-600'
    }
  ]

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Global Controls */}
      <DarkSolarModeToggle />
      <AmbientAudioSystem autoplayVoiceover={false} />
      <StickyTrustRibbon />

      {/* HERO SECTION with Weather Awareness */}
      <WeatherAwareHero>
        <CinematicHero
          images={heroPhotos.map(p => p.src)}
          title="The Beach Tent That Changes Everything"
          subtitle="60-second setup. UPF 50+ protection. Built for real beach days."
          price="$129"
          rating={4.9}
          reviews={2847}
          onCTAClick={() => {
            document.getElementById('360-viewer')?.scrollIntoView({ behavior: 'smooth' })
          }}
        />
      </WeatherAwareHero>

      {/* INTERACTIVE 360° VIEWER */}
      <section id="360-viewer" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <h2 className="text-5xl font-bold text-white mb-4">
              Customize Your Perfect Tent
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-8">
              360° interactive view. Choose your color and size. See every detail.
            </p>
          </motion.div>

          <Interactive360Viewer
            images={productPhotos.map(p => p.src)}
            alt="Sun Ninja Beach Tent"
          />

          <div className="flex justify-center mt-12">
            <ARPlacementButton />
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION with Parallax Animation */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              Why 50,000+ Families Choose Sun Ninja
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="quantum-glass p-8 rounded-2xl relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                />

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} p-4 mb-6 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="w-full h-full text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>

                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronRight className="w-6 h-6 text-cyan-400" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SMART SETUP GUIDE */}
      <section className="py-24 bg-gradient-to-b from-blue-950/20 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h2 className="text-5xl font-bold text-white mb-4">
              Setup So Easy, It's Actually Fun
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Watch our interactive guide or scrub through at your own pace
            </p>
          </motion.div>

          <SmartSetupGuide steps={setupSteps} />
        </div>
      </section>

      {/* GAMIFIED SETUP CHALLENGE */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Award className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <h2 className="text-5xl font-bold text-white mb-4">
              Think You Can Beat 47 Seconds?
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Play our setup game and win a discount code!
            </p>
          </motion.div>

          <GamifiedSetup />
        </div>
      </section>

      {/* SUSTAINABILITY SECTION */}
      <SustainabilitySection />

      {/* LIVE SOCIAL PROOF WALL */}
      <LiveSocialProofWall posts={socialPosts} />

      {/* CUSTOMER REVIEWS */}
      <section className="py-24 bg-gradient-to-b from-indigo-950/20 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">
              Loved by Beach Families Everywhere
            </h2>
            <p className="text-xl text-white/60">
              4.9/5 from 12,847 reviews
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ReviewCard {...review} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-600 to-pink-600" />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          style={{
            backgroundImage: 'url("/api/placeholder/1920/1080")',
            backgroundSize: 'cover'
          }}
        />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-bold text-white mb-6">
              Your Best Beach Days Start Here
            </h2>
            <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Join 50,000+ families who've upgraded their beach experience
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <motion.button
                onClick={() => navigate('/product')}
                className="quantum-button px-12 py-6 text-xl font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Package className="w-6 h-6 mr-3" />
                Shop Sun Ninja Now
                <TrendingUp className="w-6 h-6 ml-3" />
              </motion.button>

              <ARPlacementButton />
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-8 text-white/80">
              {[
                { Icon: CheckCircle, text: 'Free Shipping' },
                { Icon: Shield, text: '1-Year Warranty' },
                { Icon: Heart, text: '30-Day Returns' },
                { Icon: Award, text: '50k+ Happy Customers' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <item.Icon className="w-5 h-5" />
                  <span className="font-semibold">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
