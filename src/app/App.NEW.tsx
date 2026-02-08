import { RouterProvider } from 'react-router'
import { ErrorBoundary, PerformanceMonitor } from './components/PerformanceMonitor'
import { Toaster } from './components/ui/sonner'
import { router } from './routes'

function App() {
  return (
    <ErrorBoundary>
      <PerformanceMonitor debug={import.meta.env.DEV} />
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </ErrorBoundary>
  )
}

export default App
