// ============================================================================
// QUIZ PAGE - Skin type quiz & onboarding
// ============================================================================

import { motion } from 'motion/react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SkinTypeQuiz } from '../components/SkinTypeQuiz'

export function QuizPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main id="main-content" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl font-bold mb-3">Find Your Perfect Protection</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Take our quick quiz to get personalized sun protection recommendations based on your
              skin type and outdoor activities.
            </p>
          </motion.div>

          <SkinTypeQuiz
            onComplete={(result) => {
              console.log('Quiz completed:', result)
            }}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
