import { RouterProvider } from 'react-router'
import { router } from './routes'
import { Toaster } from './components/ui/sonner'
import { SocialProofToast } from './components/SocialProofToast'
import { ErrorBoundary } from './components/ErrorStates'
import { SkipToContent, AccessibilityToolbar } from './components/Accessibility'
import { CartDrawer } from './components/CartDrawer'
import { useApp } from '../utils/store'

function AppContent() {
  const { state, dispatch } = useApp()

  return (
    <>
      <SkipToContent />
      <RouterProvider router={router} />
      <Toaster position="top-right" />
      <SocialProofToast />
      <CartDrawer
        isOpen={state.ui.isCartOpen}
        onClose={() => dispatch({ type: 'UI_TOGGLE_CART' })}
      />
      <AccessibilityToolbar />
    </>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <AppContent />
    </ErrorBoundary>
  )
}

export default App
