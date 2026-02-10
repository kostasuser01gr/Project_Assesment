// ============================================================================
// REWARDS PAGE - Gamification dashboard
// ============================================================================

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { GamificationDashboard } from '../components/Gamification'

export function RewardsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main id="main-content" className="py-16">
        <div className="container mx-auto px-4">
          <GamificationDashboard />
        </div>
      </main>

      <Footer />
    </div>
  )
}
