import { RouterProvider } from 'react-router'
import { router } from './routes'
import { Toaster } from './components/ui/sonner'
import { ErrorBoundary, PerformanceMonitor } from './components/PerformanceMonitor'

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
