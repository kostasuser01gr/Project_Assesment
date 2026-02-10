# 🌞 Sun Ninja - Full-Scale Production Application

[![CI/CD](https://github.com/yourusername/sun-ninja/workflows/CI%2FCD/badge.svg)](https://github.com/yourusername/sun-ninja/actions)
[![codecov](https://codecov.io/gh/yourusername/sun-ninja/branch/main/graph/badge.svg)](https://codecov.io/gh/yourusername/sun-ninja)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Premium sun protection products e-commerce platform built with modern web technologies and production-ready features.

## 🚀 Features

### Core Features

- ⚡ **Lightning Fast** - Vite-powered development and optimized production builds
- 📱 **Progressive Web App** - Installable, works offline, app-like experience
- 🎨 **Modern UI** - Radix UI components with Tailwind CSS
- 🔍 **SEO Optimized** - Meta tags, structured data, sitemap, and robots.txt
- 📊 **Analytics Ready** - Google Analytics 4 and custom event tracking
- 🐛 **Error Tracking** - Sentry integration for production monitoring
- 📈 **Performance Monitoring** - Web Vitals tracking and reporting
- 🧪 **Fully Tested** - Unit tests with Vitest and E2E with Playwright
- 🔐 **Type Safe** - TypeScript throughout with strict mode
- 🎯 **State Management** - Custom Context + Reducer implementation

### Developer Experience

- 🎨 **Code Quality** - ESLint, Prettier, and Husky git hooks
- 🚢 **CI/CD Ready** - GitHub Actions for testing and deployment
- 🐳 **Docker Support** - Multi-stage builds with Nginx
- 📝 **Well Documented** - Comprehensive docs and inline comments
- 🔧 **VSCode Integration** - Settings and extensions recommendations

## 📋 Tech Stack

- **Framework**: React 18.3
- **Build Tool**: Vite 6.3
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 4.1
- **UI Components**: Radix UI
- **Routing**: React Router 7
- **Animation**: Motion (Framer Motion)
- **State**: Context + useReducer
- **Testing**: Vitest + Playwright
- **Linting**: ESLint 9
- **Formatting**: Prettier 3
- **Deployment**: Docker + Nginx

## 🏃 Quick Start

### Prerequisites

- Node.js 20+
- npm, pnpm, or yarn
- Docker (optional, for containerized deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/sun-ninja.git
cd sun-ninja

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your application.

## 📜 Available Scripts

### Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Testing

```bash
npm run test         # Run unit tests
npm run test:ui      # Run tests with UI
npm run test:coverage # Run tests with coverage report
npm run e2e          # Run E2E tests
npm run e2e:ui       # Run E2E tests with UI
```

### Code Quality

```bash
npm run lint         # Lint code
npm run lint:fix     # Fix linting issues
npm run format       # Format code
npm run format:check # Check code formatting
npm run type-check   # TypeScript type checking
```

### Git Hooks

```bash
npm run prepare      # Set up Husky git hooks
```

## 🏗️ Project Structure

```
sun-ninja/
├── .github/              # GitHub Actions workflows
│   └── workflows/
│       ├── ci-cd.yml     # Main CI/CD pipeline
│       ├── docker.yml    # Docker build and push
│       └── security.yml  # Security scanning
├── .husky/               # Git hooks
│   ├── pre-commit       # Run lint-staged before commit
│   └── pre-push         # Run tests before push
├── .vscode/              # VSCode configuration
│   ├── extensions.json  # Recommended extensions
│   └── settings.json    # Editor settings
├── e2e/                  # E2E tests
│   └── home.spec.ts
├── public/               # Static assets
│   ├── robots.txt
│   └── site.webmanifest
├── src/
│   ├── app/              # Application code
│   │   ├── components/   # React components
│   │   │   ├── ui/       # Reusable UI components
│   │   │   └── ...       # Feature components
│   │   ├── pages/        # Page components
│   │   ├── App.tsx       # Root component
│   │   └── routes.ts     # Route configuration
│   ├── styles/           # Global styles
│   ├── test/             # Test utilities
│   │   ├── setup.ts      # Test setup
│   │   └── App.test.tsx  # Example test
│   ├── types/            # TypeScript types
│   │   └── index.ts
│   ├── utils/            # Utility functions
│   │   ├── analytics.ts      # Analytics tracking
│   │   ├── api.ts            # API client
│   │   ├── errorTracking.ts  # Error monitoring
│   │   ├── helpers.ts        # Helper functions
│   │   ├── hooks.ts          # Custom React hooks
│   │   ├── seo.ts            # SEO utilities
│   │   ├── store.ts          # State management
│   │   └── webVitals.ts      # Performance monitoring
│   └── main.tsx          # Application entry point
├── .env.example          # Environment variables template
├── .env.development      # Development environment
├── .gitignore            # Git ignore rules
├── .lintstagedrc        # Lint-staged configuration
├── .prettierrc          # Prettier configuration
├── docker-compose.yml   # Docker Compose config
├── Dockerfile           # Docker configuration
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML entry point
├── nginx.conf           # Nginx configuration
├── package.json         # Dependencies and scripts
├── playwright.config.ts # Playwright configuration
├── postcss.config.mjs   # PostCSS configuration
├── tsconfig.json        # TypeScript configuration
├── tsconfig.node.json   # Node TypeScript config
├── vite.config.ts       # Vite configuration
└── vitest.config.ts     # Vitest configuration
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# App Configuration
VITE_APP_NAME=Sun Ninja
VITE_APP_URL=http://localhost:3000
VITE_API_URL=http://localhost:8000/api

# Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_GTM_ID=GTM-XXXXXXX

# Error Tracking
VITE_SENTRY_DSN=https://xxxxx@xxxxx.ingest.sentry.io/xxxxx
VITE_SENTRY_ENVIRONMENT=production

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_ERROR_TRACKING=true
VITE_ENABLE_PWA=true

# Third-party Services
VITE_STRIPE_PUBLIC_KEY=pk_live_xxxxx
```

### Build Configuration

The Vite configuration includes:

- Code splitting for optimal loading
- Compression (Gzip + Brotli)
- PWA support with service workers
- Source maps for debugging
- Asset optimization

## 🧪 Testing

### Unit Tests

Tests are written with Vitest and React Testing Library:

```typescript
// src/test/App.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../app/App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(document.getElementById('root')).toBeInTheDocument()
  })
})
```

Run tests:

```bash
npm run test          # Watch mode
npm run test:coverage # With coverage
```

### E2E Tests

E2E tests use Playwright for cross-browser testing:

```typescript
// e2e/home.spec.ts
import { test, expect } from '@playwright/test'

test('should load home page', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Sun Ninja/i)
})
```

Run E2E tests:

```bash
npm run e2e      # Headless mode
npm run e2e:ui   # UI mode
```

## 📊 Monitoring & Analytics

### Error Tracking (Sentry)

```typescript
import { captureException } from './utils/errorTracking'

try {
  // Your code
} catch (error) {
  captureException(error, { context: 'additional info' })
}
```

### Analytics Tracking

```typescript
import { trackEvent, trackPageView } from './utils/analytics'

// Track page views
trackPageView('/products', 'Products Page')

// Track events
trackEvent('button_click', {
  category: 'engagement',
  label: 'Add to Cart',
})
```

### Web Vitals

Web Vitals are automatically tracked and sent to analytics:

- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)
- TTFB (Time to First Byte)
- FCP (First Contentful Paint)

## 🚢 Deployment

### Docker Deployment

```bash
# Build the image
docker build -t sun-ninja .

# Run the container
docker run -p 80:80 sun-ninja

# Or use Docker Compose
docker-compose up -d
```

### Manual Deployment

```bash
# Build for production
npm run build

# The dist/ folder is ready to deploy
# Upload to your hosting service (Vercel, Netlify, AWS, etc.)
```

### CI/CD Pipeline

The project includes GitHub Actions workflows for:

- **Continuous Integration**: Linting, testing, and building
- **Docker**: Building and pushing container images
- **Security**: Dependency and code security scanning

Workflows run on:

- Push to `main` or `develop` branches
- Pull requests to `main`

## 🔐 Security

- Security headers configured in Nginx
- CSP (Content Security Policy) headers
- XSS protection
- HTTPS enforcement ready
- Dependency scanning with GitHub Actions
- Input validation and sanitization

## 🎨 UI Components

The project uses Radix UI primitives with Tailwind CSS for styling. All components are:

- Fully accessible (ARIA compliant)
- Keyboard navigable
- Screen reader friendly
- Mobile responsive
- Themeable

Example components available:

- Buttons, Cards, Dialogs
- Dropdowns, Modals, Tooltips
- Forms, Inputs, Selects
- Tables, Tabs, Accordions
- And many more...

## 📈 Performance

Performance optimizations include:

- Code splitting by route
- Lazy loading for heavy components
- Image optimization
- Tree shaking
- Dead code elimination
- Asset compression (Gzip + Brotli)
- Service worker caching
- Prefetching and preloading

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow the existing code style
- Run `npm run lint` before committing
- Run `npm run format` to format code
- Write tests for new features
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React](https://react.dev/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI components
- All other open-source contributors

## 📧 Support

For support, email support@sunninja.com or open an issue on GitHub.

---

**Created by Konstantinos Foskolakis — Full Stack Web Engineer**
