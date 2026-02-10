# Sun Ninja Redesign Project

> A premium, conversion-optimised e-commerce experience for Sun Ninja outdoor sun-protection tents — built with React 18, TypeScript, Vite 6, Tailwind CSS 4, and a complete Figma design-system scaffold plugin.

**Figma Source:** <https://www.figma.com/design/vYprS6XgFNdOW28vOXzgyv/Sun-Ninja-Redesign-Project>

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Development](#development)
6. [Production Build & Preview](#production-build--preview)
7. [Deployment](#deployment)
   - [Static Hosting (Vercel / Netlify / Cloudflare Pages)](#static-hosting)
   - [Docker / Docker Compose](#docker--docker-compose)
8. [Available Scripts](#available-scripts)
9. [Project Architecture](#project-architecture)
10. [Application Routes](#application-routes)
11. [Features](#features)
12. [Figma Plugin — Scaffold Generator](#figma-plugin--scaffold-generator)
    - [What the Plugin Creates](#what-the-plugin-creates)
    - [How to Install & Run the Plugin](#how-to-install--run-the-plugin)
    - [Plugin Development](#plugin-development)
13. [Design Tokens & Theme System](#design-tokens--theme-system)
14. [Accessibility](#accessibility)
15. [Testing](#testing)
16. [Code Quality](#code-quality)
17. [Environment Variables](#environment-variables)
18. [License](#license)

---

## Project Overview

Sun Ninja Redesign is a fully interactive, premium-grade storefront for Sun Ninja pop-up sun tents. The project goes beyond a standard product page — it includes a **real-time UV dashboard**, an **AI-powered skin-type quiz**, a **gamification & rewards engine**, a **sustainability dashboard**, a smart recommendation system, social-proof widgets, and a fully accessible slide-in cart — all wrapped in a luxury design system with cinematic hero animations and micro-interactions.

---

## Tech Stack

| Category                 | Technology                              | Version  |
| ------------------------ | --------------------------------------- | -------- |
| **Framework**            | React                                   | 18.3.1   |
| **Language**             | TypeScript                              | 5.7+     |
| **Build Tool**           | Vite                                    | 6.3.5    |
| **CSS**                  | Tailwind CSS                            | 4.1.12   |
| **UI Primitives**        | Radix UI (full suite)                   | latest   |
| **Component Library**    | shadcn/ui                               | —        |
| **Animation**            | Motion (Framer Motion)                  | 12.23.24 |
| **Animation (advanced)** | GSAP                                    | 3.14.2   |
| **Routing**              | React Router                            | 7.13.0   |
| **Charts**               | Recharts                                | 2.15.2   |
| **Toasts**               | Sonner                                  | 2.0.3    |
| **Forms**                | react-hook-form                         | 7.55.0   |
| **Icons**                | Lucide React                            | 0.487.0  |
| **Error Tracking**       | Sentry                                  | 8.47+    |
| **Unit Testing**         | Vitest + Testing Library                | latest   |
| **E2E Testing**          | Playwright                              | 1.48+    |
| **Linting**              | ESLint 9 + Prettier                     | latest   |
| **Compression**          | vite-plugin-compression (gzip + brotli) | —        |
| **Containerisation**     | Docker + Nginx                          | Alpine   |

---

## Prerequisites

- **Node.js** ≥ 20 LTS
- **npm** ≥ 9 (or **pnpm** ≥ 8)
- _(Optional)_ **Docker** & **Docker Compose** for containerised deployment

---

## Installation

```bash
# Clone the repository
git clone <your-repo-url> sun-ninja-redesign
cd sun-ninja-redesign

# Install dependencies
npm install
# — or with pnpm —
pnpm install
```

---

## Development

Start the local development server with Hot Module Replacement:

```bash
npm run dev
```

The app will open automatically at **http://localhost:3000**.

The dev server is configured with:

- `host: true` — accessible from other devices on the same network
- `strictPort: false` — falls back to another port if 3000 is busy
- Fast Refresh enabled via `@vitejs/plugin-react`
- Path alias `@/` → `src/`

---

## Production Build & Preview

```bash
# Create an optimised production build
npm run build

# Preview the production build locally
npm run preview
```

The production build outputs to `dist/` with:

- **Terser** minification (console & debugger statements stripped)
- **Gzip** (`.gz`) and **Brotli** (`.br`) compressed assets
- **Manual chunk splitting** for React, UI vendor, and motion libraries
- **CSS code splitting** enabled
- **Source maps** included

Preview runs at **http://localhost:4173**.

---

## Deployment

### Static Hosting

The `dist/` folder is a standard SPA bundle. Deploy to any static host:

#### Vercel

```bash
npm install -g vercel
vercel --prod
```

#### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

Add a `_redirects` file in `public/` for SPA routing:

```
/*    /index.html   200
```

#### Cloudflare Pages

Connect your Git repo in the Cloudflare dashboard:

- **Build command:** `npm run build`
- **Build output directory:** `dist`

---

### Docker / Docker Compose

A production-ready Dockerfile and docker-compose.yml are included.

#### Build & Run with Docker

```bash
# Build the image
docker build -t sun-ninja .

# Run the container
docker run -p 80:80 sun-ninja
```

The app will be available at **http://localhost**.

#### Run with Docker Compose

```bash
docker compose up -d
```

This starts the app on **port 80** (and 443 if TLS is configured) with:

- Automatic restart (`unless-stopped`)
- Health checks every 30 seconds
- A dedicated bridge network (`app-network`)

#### How the Docker Build Works

1. **deps stage** — Installs dependencies using pnpm, npm, or yarn (auto-detected)
2. **builder stage** — Runs `npm run build` to produce the `dist/` output
3. **runner stage** — Copies `dist/` into an **Nginx Alpine** container and serves it with the custom `nginx.conf`

---

## Available Scripts

| Command                 | Description                                  |
| ----------------------- | -------------------------------------------- |
| `npm run dev`           | Start Vite dev server on port 3000           |
| `npm run build`         | TypeScript check + production Vite build     |
| `npm run preview`       | Serve the `dist/` build locally on port 4173 |
| `npm run test`          | Run unit tests with Vitest                   |
| `npm run test:ui`       | Open Vitest interactive UI                   |
| `npm run test:coverage` | Run tests with V8 coverage report            |
| `npm run lint`          | Run ESLint across the codebase               |
| `npm run lint:fix`      | Auto-fix lint issues                         |
| `npm run format`        | Format all files with Prettier               |
| `npm run format:check`  | Check formatting without writing             |
| `npm run type-check`    | Run `tsc --noEmit` to validate types         |
| `npm run e2e`           | Run Playwright end-to-end tests              |
| `npm run e2e:ui`        | Open Playwright interactive UI               |

---

## Project Architecture

```
sun-ninja-redesign/
├── public/                    # Static assets served as-is
│   ├── assets/
│   │   ├── brand/             # Logo, favicon, brand marks
│   │   └── photos/            # Product & lifestyle photography
│   └── images/beach/          # Beach scene imagery
├── src/
│   ├── main.tsx               # App entry point + service worker registration
│   ├── app/
│   │   ├── App.tsx            # Root — ErrorBoundary, SkipToContent, CartDrawer, RouterProvider
│   │   ├── routes.ts          # All routes (createBrowserRouter)
│   │   ├── components/        # Shared UI components
│   │   │   ├── Header.tsx              # Responsive nav + animated cart badge
│   │   │   ├── Footer.tsx              # Site-wide footer
│   │   │   ├── CartDrawer.tsx          # Slide-in cart (dialog a11y)
│   │   │   ├── UVIndexWidget.tsx       # Real-time UV Index + Sun Exposure Timer
│   │   │   ├── SkinTypeQuiz.tsx        # 5-step interactive quiz
│   │   │   ├── Gamification.tsx        # Achievements, levels, streaks, rewards
│   │   │   ├── SmartRecommendations.tsx # AI-style product suggestions
│   │   │   ├── SustainabilityDashboard.tsx # Eco metrics & certifications
│   │   │   ├── SocialProofToast.tsx    # Live purchase notifications
│   │   │   ├── StickyTrustRibbon.tsx   # Trust badges bar
│   │   │   ├── CinematicHero.tsx       # Animated hero section
│   │   │   ├── LoadingStates.tsx       # Skeleton loaders, spinner, loading bar
│   │   │   ├── ErrorStates.tsx         # ErrorBoundary, 404, 500, Offline, Empty
│   │   │   ├── Accessibility.tsx       # SkipToContent, FocusTrap, LiveRegion, Toolbar
│   │   │   └── ui/                     # shadcn/ui primitives
│   │   ├── pages/
│   │   │   ├── HomePage.tsx            # Landing page
│   │   │   ├── ProductPage.tsx         # Product detail + add-to-cart
│   │   │   ├── UVDashboardPage.tsx     # UV Index dashboard page
│   │   │   ├── QuizPage.tsx            # Skin-type quiz page
│   │   │   ├── RewardsPage.tsx         # Gamification & rewards page
│   │   │   └── SustainabilityPage.tsx  # Eco dashboard page
│   │   └── hooks/              # Page-specific hooks
│   ├── services/
│   │   ├── ab-testing/         # A/B testing service
│   │   ├── pricing/            # Dynamic pricing engine
│   │   └── social-proof/       # Social proof data service
│   ├── styles/
│   │   ├── index.css           # Global styles + imports
│   │   ├── tailwind.css        # Tailwind directives
│   │   ├── theme.css           # CSS custom properties
│   │   ├── fonts.css           # Font-face declarations
│   │   ├── accessibility.css   # High-contrast, reduced-motion, dark-mode
│   │   └── premium-enhancements.css
│   ├── utils/
│   │   ├── store.tsx           # Global state (Context + useReducer)
│   │   ├── designTokens.ts     # JS design tokens (colours, typography, spacing)
│   │   ├── animations/
│   │   │   └── motionVariants.ts  # Centralised Framer Motion variants
│   │   ├── accessibilityHooks.ts  # useAnnounce, useReducedMotion, etc.
│   │   ├── hooks.ts            # useAsync, useMediaQuery, useIntersectionObserver
│   │   ├── analytics.ts        # Google Analytics / gtag helpers
│   │   ├── api.ts              # API client utilities
│   │   └── errorTracking.ts    # Sentry integration
│   ├── types/
│   │   ├── index.ts            # Shared TypeScript types
│   │   └── global.d.ts         # Global type declarations
│   └── test/
│       ├── App.test.tsx        # Root app tests
│       └── setup.ts            # Vitest setup (jest-dom matchers)
├── e2e/
│   └── home.spec.ts            # Playwright E2E tests
├── figma-plugin/               # Figma scaffold generator plugin
├── scripts/                    # Utility scripts (asset audit, image optimisation)
├── Dockerfile                  # Multi-stage Docker build
├── docker-compose.yml          # Docker Compose orchestration
├── nginx.conf                  # Production Nginx configuration
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── eslint.config.js            # ESLint flat config
├── postcss.config.mjs          # PostCSS configuration
└── playwright.config.ts        # Playwright configuration
```

---

## Application Routes

| Path                        | Page               | Description                                                  |
| --------------------------- | ------------------ | ------------------------------------------------------------ |
| `/`                         | HomePage           | Main landing page with hero, product showcase, social proof  |
| `/products/sun-ninja-tents` | ProductPage        | Product detail, gallery, reviews, add-to-cart                |
| `/product`                  | ProductPage        | Redirect alias for the product page                          |
| `/uv-dashboard`             | UVDashboardPage    | Real-time UV Index display & sun exposure timer              |
| `/quiz`                     | QuizPage           | Interactive skin-type quiz with personalised recommendations |
| `/rewards`                  | RewardsPage        | Gamification dashboard — achievements, levels, streaks       |
| `/sustainability`           | SustainabilityPage | Eco metrics, certifications, carbon footprint tracker        |
| `/wow`                      | HomePageWOW        | WOW variant of the home page                                 |
| `/elite`                    | HomePageELITE      | Elite variant of the home page                               |
| `*`                         | ErrorPage404       | Catch-all 404 page                                           |

---

## Features

### Core Commerce

- **Cinematic Hero** — Full-screen animated hero with parallax and gradient overlays
- **Product Page** — Image gallery, variant selector, reviews, and a functional add-to-cart
- **Slide-in Cart Drawer** — Fully accessible (`role="dialog"`, `aria-modal`), quantity controls, promo code input, dynamic totals
- **Social Proof Toast** — Live "someone just purchased" notifications with timer-safe cleanup
- **Sticky Trust Ribbon** — Shipping, guarantee, and review badges (auto-hidden on mobile)

### Interactive Experiences

- **UV Index Widget** — Real-time UV level display, colour-coded gauge, 3-day forecast, and a Sun Exposure Timer with SPF-adjusted countdown
- **Skin Type Quiz** — 5-step guided quiz with `role="radiogroup"` accessibility, producing personalised product recommendations
- **Smart Recommendations** — AI-style product match engine with percentage scores
- **Gamification** — Achievement system, XP levels, daily streaks, and rewards with animated celebrations

### Sustainability

- **Sustainability Dashboard** — CO₂ savings tracker, material breakdown, eco-score gauge, certification badges (FSC, OEKO-TEX, bluesign)

### Performance & Quality

- **Code Splitting** — Manual chunks for React, UI, and motion vendors
- **Compression** — Gzip + Brotli at build time
- **Lazy Loading** — Intersection Observer-based visibility detection
- **Error Boundaries** — Graceful error recovery with fallback UI
- **Loading States** — Skeleton loaders, branded spinner, progress bar
- **Error Pages** — Custom 404, 500, Offline, and Empty states

### Accessibility (WCAG 2.1 AA)

- **Skip-to-Content** link
- **Focus Trap** for modals and drawers
- **Live Regions** for dynamic announcements
- **Accessibility Toolbar** — Font scaling, high-contrast toggle, reduced-motion toggle
- **Keyboard Navigation** — Full keyboard support across all interactive elements
- **Reduced Motion** — Respects `prefers-reduced-motion` media query
- **High Contrast Mode** — Enhanced visibility styles
- **Dark Mode** support via CSS custom properties

---

## Figma Plugin — Scaffold Generator

The project includes a **Figma plugin** located in the `figma-plugin/` directory. This plugin auto-generates a complete design-system scaffold inside any Figma file — eliminating the need to manually set up pages, styles, and components.

### What the Plugin Creates

When you run the plugin, it generates **8 pages** and a full design system:

#### Pages

1. **Cover** — Project cover with Sun Ninja branding and metadata
2. **Design System** — Complete token documentation (colours, typography, spacing, effects)
3. **Components** — Reusable component library (buttons, cards, inputs, badges, nav items)
4. **Desktop – Home** — Full desktop home page layout (1440×900)
5. **Desktop – Product** — Product detail page layout
6. **Mobile – Home** — Mobile home page layout (390×844)
7. **Mobile – Product** — Mobile product detail page layout
8. **Prototype Flow** — Interaction flow diagram

#### Design System Contents

- **Colour Palette** — Primary (Ocean Teal `#0A6E6E`), Secondary (Sun Gold `#F5A623`), Accent (Coral `#FF6B6B`), Neutrals (4 shades), Semantic colours (success, warning, error), Gradients (sun-glow, ocean-depth, premium)
- **Typography Scale** — Hero (48px), H1 (36px), H2 (28px), H3 (22px), Body (16px), Caption (14px), Overline (12px) — all using Inter
- **Spacing System** — 4px base grid: xs (4), sm (8), md (16), lg (24), xl (32), 2xl (48), 3xl (64)
- **Effect Styles** — Card Shadow, Elevated Shadow, Sun Glow, Inner Light
- **Component Library** — Primary/Secondary/Ghost buttons, Product Card, Testimonial Card, Feature Card, UV Badge, Text Input, Search Input, Navigation Item

### How to Install & Run the Plugin

#### Step 1 — Build the Plugin

```bash
cd figma-plugin

# Install plugin dependencies
npm install

# Build the plugin (compiles TypeScript → dist/code.js)
npm run build
```

#### Step 2 — Import into Figma

1. Open the **Figma Desktop App** (plugins require the desktop app)
2. Go to **Plugins → Development → Import plugin from manifest…**
3. Navigate to the `figma-plugin/` directory and select `manifest.json`
4. The plugin "Sun Ninja Elite Scaffold Generator" will appear in your development plugins

#### Step 3 — Run the Plugin

1. Open any Figma file (or create a new one)
2. Go to **Plugins → Development → Sun Ninja Elite Scaffold Generator**
3. Click the **"Generate Elite Scaffold"** button in the plugin UI
4. Wait for the generation to complete — the plugin will create all 8 pages, the design system, and the component library automatically
5. Each page is populated with properly structured frames, colour-coded sections, and annotated specifications

#### Step 4 — Customise

After generation, you can:

- Swap placeholder imagery with final product photography
- Adjust colour tokens to match any brand updates
- Extend the component library with additional variants
- Add prototyping interactions between the generated pages

### Plugin Development

```bash
cd figma-plugin

# Watch mode — auto-rebuilds on changes
npm run dev

# One-time build
npm run build
```

The plugin source is at `figma-plugin/src/code.ts` (TypeScript). It uses the Figma Plugin API to programmatically create:

- Pages and frames
- Paint styles and effect styles
- Text nodes with specific font configurations
- Rectangles with fills, strokes, and corner radii
- Auto-layout frames with padding and spacing

---

## Design Tokens & Theme System

Design tokens are defined in two complementary layers:

### JavaScript Tokens (`src/utils/designTokens.ts`)

```typescript
import { designTokens } from '@/utils/designTokens'

designTokens.colors.primary // '#0A6E6E' (Ocean Teal)
designTokens.colors.secondary // '#F5A623' (Sun Gold)
designTokens.colors.accent // '#FF6B6B' (Coral Pop)
designTokens.typography.hero // { size: '3rem', weight: 800, ... }
designTokens.spacing.md // '1rem'
designTokens.shadows.card // box-shadow string
designTokens.breakpoints.md // '768px'
```

### CSS Custom Properties (`src/styles/theme.css`)

All tokens are also available as CSS variables for use in Tailwind utilities and raw CSS.

### Motion Variants (`src/utils/animations/motionVariants.ts`)

Centralised Framer Motion variants for consistent animations:

- `fadeIn`, `slideUp`, `slideInLeft`, `slideInRight`
- `scaleIn`, `staggerContainer`, `staggerItem`
- `heroAnimation`, `floating`, `pulse`

---

## Accessibility

The project is built to **WCAG 2.1 AA** standards:

- **Skip-to-Content** link (visible on Tab)
- **Semantic HTML** — proper heading hierarchy, landmarks (`<main>`, `<nav>`, `<footer>`)
- **ARIA attributes** — `role="dialog"`, `aria-modal`, `aria-label`, `aria-checked`, `aria-expanded`, `role="radiogroup"` where applicable
- **Focus management** — `FocusTrap` component for modals, visible focus rings
- **Live regions** — Dynamic content changes announced to screen readers
- **Reduced motion** — Animations disabled when `prefers-reduced-motion: reduce` is active
- **High contrast** — Enhanced styles via `prefers-contrast: high`
- **Dark mode** — Full dark mode support via `prefers-color-scheme: dark`
- **Accessibility Toolbar** — In-app controls for font size, contrast, and motion preferences
- **Keyboard navigation** — All interactive elements reachable and operable via keyboard

---

## Testing

### Unit Tests (Vitest)

```bash
# Run all tests
npm run test

# Interactive UI
npm run test:ui

# With coverage report
npm run test:coverage
```

Tests are located in `src/test/` and use:

- **Vitest** as the test runner
- **@testing-library/react** for component rendering
- **@testing-library/jest-dom** for DOM matchers
- **jsdom** as the test environment

### End-to-End Tests (Playwright)

```bash
# Run E2E tests
npm run e2e

# Interactive UI
npm run e2e:ui
```

E2E tests are in `e2e/` and test full user flows in real browsers.

---

## Code Quality

| Tool        | Config File            | Purpose                               |
| ----------- | ---------------------- | ------------------------------------- |
| ESLint 9    | `eslint.config.js`     | Linting (React, hooks, refresh rules) |
| Prettier    | `.prettierrc` / inline | Code formatting                       |
| TypeScript  | `tsconfig.json`        | Strict type checking                  |
| Husky       | `.husky/`              | Git hooks                             |
| lint-staged | `package.json`         | Pre-commit formatting                 |

```bash
# Lint
npm run lint

# Auto-fix lint issues
npm run lint:fix

# Format
npm run format

# Type-check (no emit)
npm run type-check
```

---

## Environment Variables

No environment variables are strictly required for local development. Optional variables for production:

| Variable          | Description                     |
| ----------------- | ------------------------------- |
| `VITE_GA_ID`      | Google Analytics measurement ID |
| `VITE_SENTRY_DSN` | Sentry error-tracking DSN       |

---

## License

This project is part of a Figma redesign assignment. See the original design at the Figma link above.

---

**Created by Konstantinos Foskolakis — Full Stack Web Engineer**
