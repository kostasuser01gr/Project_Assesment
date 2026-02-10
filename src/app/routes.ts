import { createBrowserRouter } from 'react-router'
import { HomePage } from './pages/HomePage'
import { ProductPage } from './pages/ProductPage'
import HomePageWOW from './pages/HomePage.WOW'
import HomePageELITE from './pages/HomePage.ELITE'
import { UVDashboardPage } from './pages/UVDashboardPage'
import { QuizPage } from './pages/QuizPage'
import { RewardsPage } from './pages/RewardsPage'
import { SustainabilityPage } from './pages/SustainabilityPage'
import { ErrorPage404 } from './components/ErrorStates'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/wow',
    Component: HomePageWOW,
  },
  {
    path: '/elite',
    Component: HomePageELITE,
  },
  {
    path: '/products/sun-ninja-tents',
    Component: ProductPage,
  },
  {
    // Redirect /product to /products/sun-ninja-tents
    path: '/product',
    Component: ProductPage,
  },
  {
    path: '/uv-dashboard',
    Component: UVDashboardPage,
  },
  {
    path: '/quiz',
    Component: QuizPage,
  },
  {
    path: '/rewards',
    Component: RewardsPage,
  },
  {
    path: '/sustainability',
    Component: SustainabilityPage,
  },
  {
    // Catch-all 404 route
    path: '*',
    Component: ErrorPage404,
  },
])
