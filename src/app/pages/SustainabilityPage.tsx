// ============================================================================
// SUSTAINABILITY PAGE
// ============================================================================

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SustainabilityDashboard } from '../components/SustainabilityDashboard'

export function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main id="main-content">
        <SustainabilityDashboard />
      </main>

      <Footer />
    </div>
  )
}
