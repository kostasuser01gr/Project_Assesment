import { Package, Zap, Cloud, Users, CheckCircle, Star } from 'lucide-react'
import { useNavigate } from 'react-router'
import { getHeroPhotos, getSetupPhotos, getUGCPhotos } from '../../utils/photoManager'
import { CinematicHero } from '../components/CinematicHero'
import { ScrollStorytelling } from '../components/ScrollStorytelling'
import { UGCGalleryPremium } from '../components/UGCGalleryPremium'
import { StickyTrustRibbon } from '../components/StickyTrustRibbon'
import { ReviewCard } from '../components/ReviewCard'
import { motion } from 'framer-motion'

export function HomePage() {
  const navigate = useNavigate()
  const heroPhotos = getHeroPhotos()
  const setupPhotos = getSetupPhotos()
  const ugcPhotosRaw = getUGCPhotos()

  // Transform UGC photos for premium gallery
  const ugcPhotos = ugcPhotosRaw.map((photo, index) => ({
    id: photo.id,
    src: photo.src,
    likes: Math.floor(Math.random() * 500) + 200,
    author: [
      'beachfamily',
      'sunsetlover',
      'coastalvibes',
      'summerdreams',
      'oceanbreeze',
      'beachlife',
    ][index % 6],
    caption: [
      'Best beach tent ever! Our kids love it 🏖️',
      'Game changer for our family beach days',
      'Setup was literally 60 seconds. Amazing!',
      'The shade and UV protection are incredible',
      'Perfect for windy beach days 💨',
      'Worth every penny. Highly recommend!',
    ][index % 6],
    date: [
      '2 days ago',
      '1 week ago',
      '3 weeks ago',
      '1 month ago',
      '2 months ago',
      '3 months ago',
    ][index % 6],
  }))

  // Story steps for scroll storytelling
  const storySteps = [
    {
      icon: Package,
      title: 'Unpack & Unfold',
      description:
        'Your Sun Ninja arrives compact and lightweight. Simply remove from the carry bag and unfold the pre-assembled frame. No complicated parts, no confusing instructions.',
      illustration: setupPhotos[0]?.src || heroPhotos[0].src,
      color: 'from-cyan-400 to-blue-600',
    },
    {
      icon: Zap,
      title: 'Secure & Anchor',
      description:
        'Pop up the frame in seconds with our patented quick-release mechanism. Secure with 8 sand anchors and 4 ground stakes. Built-in pockets keep everything organized.',
      illustration: setupPhotos[1]?.src || heroPhotos[0].src,
      color: 'from-purple-400 to-pink-600',
    },
    {
      icon: Cloud,
      title: 'Enjoy the Shade',
      description:
        'Relax under premium UPF 50+ protection with 360° ventilation. Spacious enough for the whole family, weather-resistant, and backed by our 1-year warranty.',
      illustration: setupPhotos[2]?.src || heroPhotos[0].src,
      color: 'from-yellow-400 to-orange-600',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* CINEMATIC HERO */}
      <CinematicHero
        title="Sun Ninja"
        subtitle="Premium Beach Protection in 60 Seconds"
        price="$149.99"
        rating={4.9}
        reviews={2847}
        images={heroPhotos.map((p) => p.src)}
        onCTAClick={() => navigate('/product')}
      />

      {/* BENEFITS GRID - Ultra Premium */}
      <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
              Why Families Choose Sun Ninja
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Premium protection meets effortless convenience. Every detail designed for your
              perfect beach day.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Cloud,
                title: 'UPF 50+ Protection',
                description: 'Medical-grade UV protection blocks 98% harmful rays',
                color: 'from-cyan-400 to-blue-600',
                stat: '98%',
              },
              {
                icon: Zap,
                title: '60-Second Setup',
                description: 'Pop-up design with pre-assembled frame',
                color: 'from-purple-400 to-pink-600',
                stat: '1 min',
              },
              {
                icon: Package,
                title: 'Weather Resistant',
                description: 'Windproof anchors + waterproof 210D fabric',
                color: 'from-yellow-400 to-orange-600',
                stat: '35mph',
              },
              {
                icon: Users,
                title: 'Family Sized',
                description: '10×10ft space fits 6 people + gear comfortably',
                color: 'from-emerald-400 to-green-600',
                stat: '6 ppl',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                }}
                className="relative group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glowing orb background */}
                <motion.div
                  className={`absolute -inset-10 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`}
                />

                {/* Card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-100 group-hover:shadow-2xl transition-shadow duration-500">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 mb-4">{benefit.description}</p>

                  {/* Stat badge */}
                  <div
                    className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${benefit.color} text-white font-bold text-sm`}
                  >
                    {benefit.stat}
                  </div>

                  {/* Holographic edge */}
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-transparent group-hover:ring-cyan-400/50 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SCROLL STORYTELLING - How It Works */}
      <ScrollStorytelling steps={storySteps} />

      {/* SOCIAL PROOF - Premium Reviews */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white mb-6">
              <Star className="w-5 h-5 fill-white" />
              <span className="font-semibold">4.9 out of 5.0 stars</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
              Loved by 10,000+ Families
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Real stories from real beach adventures. See why Sun Ninja is the #1 rated beach tent.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: 'Sarah M.',
                rating: 5,
                date: 'March 15, 2024',
                title: 'Game-changer for family beach days!',
                content:
                  "Sets up in literally 2 minutes and stays put even when it's windy. Our kids love the extra space.",
                verified: true,
              },
              {
                name: 'David K.',
                rating: 5,
                date: 'March 22, 2024',
                title: "Best beach tent we've ever owned",
                content:
                  'The ventilation is incredible—no more sweating under a hot canopy. Would buy again in a heartbeat.',
                verified: true,
              },
              {
                name: 'Emily R.',
                rating: 5,
                date: 'April 2, 2024',
                title: 'Worth every penny!',
                content:
                  'The UV protection gives me peace of mind with my toddler, and the setup is actually as easy as they claim. Highly recommend!',
                verified: true,
              },
            ].map((review, index) => (
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

      {/* UGC GALLERY - Instagram Style */}
      <UGCGalleryPremium photos={ugcPhotos} />

      {/* FINAL CTA SECTION */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-sky-500 to-rose-400 animate-gradient-shift" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl"
          >
            Transform Your Beach Days
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl mb-8 text-white/90"
          >
            Join 10,000+ happy families. Limited time offer - Save 25%
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-10"
          >
            <div className="text-6xl font-bold mb-2">$149.99</div>
            <div className="text-xl text-white/80 line-through">$199.99</div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            onClick={() => navigate('/product')}
            className="group relative px-12 py-6 text-xl font-bold rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-rose-500" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10 text-white">Shop Now - Free Shipping</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-6 text-white/80"
          >
            {['Free Shipping', '30-Day Returns', '1-Year Warranty', 'UPF 50+'].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* STICKY TRUST RIBBON */}
      <StickyTrustRibbon />
    </div>
  )
}

export default HomePage
