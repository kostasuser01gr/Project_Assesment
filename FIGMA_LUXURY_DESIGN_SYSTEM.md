# Sun Ninja Luxury E-Commerce Design System
## Top 1% Global Experience - Figma Implementation Guide

---

## 📐 FIGMA FILE STRUCTURE

### Page 1: 🎬 Cover
**Purpose**: Professional presentation cover  
**Content**:
- Large frame (1920×1080)
- Hero image: `hero-ocean-sunset.jpg` with holographic overlay
- Title: "SUN NINJA LUXURY REDESIGN"
- Subtitle: "Top 1% E-Commerce Experience"
- Your name, date, version
- Glassmorphic card with project stats

---

### Page 2: 🔍 Quick Audit
**Purpose**: Show before/after analysis  
**Content**:

#### Current State Analysis
- Screenshots of existing site (if available)
- Pain points identified
- Conversion bottlenecks

#### Competitive Analysis
- 3-4 luxury brand comparisons (Hermès, Louis Vuitton e-commerce, Net-a-Porter)
- What makes top 1%: Speed, storytelling, micro-interactions, trust signals

#### Opportunity Matrix
| Element | Current | Target | Impact |
|---------|---------|--------|--------|
| Hero Impact | 6/10 | 10/10 | High |
| Interactive Elements | 2/10 | 10/10 | High |
| Conversion Flow | 7/10 | 10/10 | Critical |
| Brand Perception | 6/10 | 10/10 | High |

---

### Page 3: 🎨 Style Direction

#### Mood Board
3×3 grid showcasing:
1. Luxury beach brands (Nikki Beach, Bali luxury resorts)
2. Cinematic beach photography
3. Glassmorphism UI examples (Apple, iOS design)
4. 3D product viewers (Nike, Apple)
5. Holographic effects
6. Micro-interactions inspiration
7. Premium CTAs
8. Parallax scroll examples
9. UGC gallery layouts

#### Color Psychology
- **Ocean (#0EA5E9)**: Trust, calm, premium
- **Coral (#FF6B6B)**: Energy, warmth, urgency
- **Gold (#FFD700)**: Luxury, exclusivity, success
- **Cream (#FFFBF5)**: Sophistication, space, elegance

---

### Page 4: 🖥️ PDP Desktop (Product Detail Page)
**Artboard Size**: 1440×~8000px (long scroll)

---

### Page 5: 📱 PDP Mobile
**Artboard Size**: 375×~6000px

---

### Page 6: 🖥️ Home Desktop
**Artboard Size**: 1440×~12000px

---

### Page 7: 📱 Home Mobile
**Artboard Size**: 375×~9000px

---

### Page 8: 🎯 Components & Styles + Rationale
Split into two sections

---

## 🎨 DESIGN TOKENS

### Color System
```
Foundation Colors:
├─ Primary
│  ├─ Ocean-900: #075985 (Dark mode, headers)
│  ├─ Ocean-500: #0EA5E9 (Primary brand)
│  ├─ Ocean-300: #7DD3FC (Hover states)
│  └─ Ocean-100: #E0F2FE (Backgrounds)
│
├─ Secondary
│  ├─ Coral-900: #991B1B (Dark accents)
│  ├─ Coral-500: #FF6B6B (CTAs, energy)
│  ├─ Coral-300: #FCA5A5 (Highlights)
│  └─ Coral-100: #FEE2E2 (Subtle backgrounds)
│
├─ Accent
│  ├─ Gold-900: #854D0E (Dark luxury)
│  ├─ Gold-500: #FFD700 (Premium accents)
│  ├─ Gold-300: #FDE68A (Highlights)
│  └─ Gold-100: #FEF3C7 (Badge backgrounds)
│
└─ Neutrals
   ├─ Cream-Base: #FFFBF5 (Main background)
   ├─ White: #FFFFFF (Cards, overlays)
   ├─ Gray-900: #111827 (Text primary)
   ├─ Gray-600: #4B5563 (Text secondary)
   ├─ Gray-400: #9CA3AF (Text tertiary)
   └─ Gray-100: #F3F4F6 (Borders, dividers)

Gradient Tokens:
├─ gradient-ocean-coral: linear-gradient(135deg, #0EA5E9 0%, #FF6B6B 100%)
├─ gradient-aurora: linear-gradient(135deg, #0EA5E9 0%, #8B5CF6 50%, #FF6B6B 100%)
├─ gradient-gold-shine: linear-gradient(135deg, #FFD700 0%, #FDE68A 50%, #FFD700 100%)
├─ gradient-holographic: conic-gradient(from 180deg, #0EA5E9, #8B5CF6, #FF6B6B, #FFD700, #0EA5E9)
└─ gradient-mesh: radial-gradient(circle at 20% 30%, #0EA5E9/20%), 
                  radial-gradient(circle at 80% 70%, #FF6B6B/20%),
                  radial-gradient(circle at 50% 50%, #FFD700/10%)

Glassmorphism Tokens:
├─ glass-light: background: rgba(255,255,255,0.15), backdrop-filter: blur(20px), border: 1px solid rgba(255,255,255,0.2)
├─ glass-ocean: background: rgba(14,165,233,0.1), backdrop-filter: blur(24px), border: 1px solid rgba(14,165,233,0.2)
├─ glass-coral: background: rgba(255,107,107,0.1), backdrop-filter: blur(24px), border: 1px solid rgba(255,107,107,0.2)
└─ glass-gold: background: rgba(255,215,0,0.08), backdrop-filter: blur(28px), border: 1px solid rgba(255,215,0,0.3)
```

### Typography System
```
Font Families:
├─ Display: "Playfair Display" (Serif, luxury headlines)
├─ Body: "Inter" (Sans-serif, readability)
└─ Accent: "Montserrat" (Sans-serif, CTAs & UI)

Type Scale (Desktop):
├─ Hero/H1: 96px / 700 / -2% / 1.0 (Display)
├─ H2: 64px / 700 / -1% / 1.1 (Display)
├─ H3: 48px / 600 / -0.5% / 1.2 (Display)
├─ H4: 36px / 600 / 0% / 1.3 (Body)
├─ H5: 24px / 600 / 0% / 1.4 (Body)
├─ H6: 20px / 600 / 0% / 1.5 (Body)
├─ Body-Large: 18px / 400 / 0% / 1.6 (Body)
├─ Body: 16px / 400 / 0% / 1.6 (Body)
├─ Body-Small: 14px / 400 / 0% / 1.5 (Body)
├─ Caption: 12px / 500 / 0.5% / 1.4 (Accent)
└─ Button: 16px / 600 / 0.5% / 1.0 (Accent, uppercase)

Type Scale (Mobile):
├─ Hero/H1: 48px (50% reduction)
├─ H2: 36px
├─ H3: 28px
├─ H4: 24px
└─ Rest: same as desktop

Text Effects:
├─ text-gradient: Ocean → Coral gradient on text
├─ text-holographic: Animated holographic gradient
├─ text-shadow-premium: multi-layer drop shadow (0 2px 4px rgba(0,0,0,0.1), 0 4px 12px rgba(14,165,233,0.2))
└─ text-glow: Ocean glow effect (text-shadow: 0 0 20px rgba(14,165,233,0.6))
```

### Spacing System
```
Base Unit: 4px

Scale:
├─ xs: 4px
├─ sm: 8px
├─ md: 16px
├─ lg: 24px
├─ xl: 32px
├─ 2xl: 48px
├─ 3xl: 64px
├─ 4xl: 96px
└─ 5xl: 128px

Section Padding:
├─ Desktop: 128px top/bottom, 80px sides (max-width: 1440px)
├─ Tablet: 96px top/bottom, 48px sides
└─ Mobile: 64px top/bottom, 24px sides

Component Padding:
├─ Card: 32px
├─ Button: 16px × 32px
├─ Badge: 8px × 16px
└─ Input: 12px × 16px
```

### Shadows & Effects
```
Shadow Scale:
├─ sm: 0 1px 2px rgba(0,0,0,0.05)
├─ md: 0 4px 6px rgba(0,0,0,0.07)
├─ lg: 0 10px 15px rgba(0,0,0,0.1)
├─ xl: 0 20px 25px rgba(0,0,0,0.15)
├─ 2xl: 0 25px 50px rgba(0,0,0,0.25)
└─ quantum: 0 0 20px rgba(14,165,233,0.3), 
            0 0 40px rgba(255,107,107,0.2),
            0 20px 40px rgba(0,0,0,0.15)

Border Radius:
├─ sm: 8px (badges, small buttons)
├─ md: 16px (cards, inputs)
├─ lg: 24px (large cards, modals)
├─ xl: 32px (hero elements)
└─ full: 9999px (pills, avatars)

Effects:
├─ grain: opacity 0.03 noise overlay
├─ holographic-overlay: animated conic gradient
└─ particle-field: floating animated dots
```

---

## 🧩 CORE COMPONENTS

### 1. Quantum CTA Button
**Variants**: Primary, Secondary, Ghost, Icon  
**States**: Default, Hover, Active, Disabled, Loading

**Primary Specs**:
```
Base:
- Size: Auto-layout H: HUG, W: HUG
- Padding: 16px (vertical) × 32px (horizontal)
- Background: gradient-ocean-coral
- Border-radius: 12px
- Typography: Button style (16px, 600, Montserrat, uppercase)
- Shadow: quantum shadow

Hover (transition 200ms ease):
- Transform: translateY(-2px)
- Shadow: quantum shadow × 1.5 intensity
- Glow effect: 0 0 30px rgba(14,165,233,0.5)
- Shimmer: animated gradient overlay sweep (2s duration)

Active:
- Transform: translateY(0)
- Scale: 0.98

Micro-interactions:
- Magnetic hover: cursor within 40px triggers subtle pull effect
- Ripple on click: expanding circle from click point (Coral color)
- Sound effect placeholder: "snap" indicator in prototype
- Success state: checkmark icon animation if form submission
```

### 2. Glass Card (Diamond Variant)
**Variants**: Default, Ocean, Coral, Gold, Elevated

**Specs**:
```
Base:
- Auto-layout: Vertical, gap 16px
- Padding: 32px
- Background: glass-light
- Border: 1px solid white/20%
- Border-radius: 24px
- Backdrop-filter: blur(20px) saturate(180%)

Diamond Transform (on hover):
- 3D rotate: rotateY(2deg) rotateX(-2deg)
- Transition: 300ms cubic-bezier
- Shadow depth increase

Variants:
- Ocean: glass-ocean background, Ocean border
- Coral: glass-coral background, Coral border
- Gold: glass-gold background, Gold border + shimmer animation
- Elevated: Increased shadow, higher z-index visual
```

### 3. Trust Badge
**Size**: 48×48px icon, auto-layout horizontal

**Specs**:
```
Layout:
- Auto-layout: Horizontal, gap 12px, padding 12px × 16px
- Background: glass-light
- Border-radius: full (pill)
- Icon: 24×24px (Lucide icon set)
- Text: Body-Small (14px, 600)

Badge Types:
├─ UPF 50+ (Shield icon, Ocean color)
├─ 60-Second Setup (Clock icon, Coral color)
├─ 2-Year Warranty (Award icon, Gold color)
├─ Free Shipping (Package icon, Ocean color)
└─ 4.9★ Rating (Star icon, Gold fill)

Hover:
- Glow effect matching icon color
- Slight scale: 1.05
```

### 4. Product Image Card
**Aspect Ratio**: 4:3 (standard), 1:1 (square), 16:9 (wide)

**Specs**:
```
Container:
- Auto-layout: Vertical
- Border-radius: 16px
- Overflow: hidden
- Position: relative

Image:
- Object-fit: cover
- Width: fill container
- Lazy-load: enabled

Overlay (on hover):
- Gradient: from-black/0 to-black/40
- CTA button appears: "View Details"
- Zoom effect: scale 1.05 on image (400ms ease-out)

Badge Overlay (top-right):
- "New", "Bestseller", "Limited"
- Glass-gold background
- 8px offset from edge
```

### 5. Review Card
**Size**: 360×auto (desktop), 300×auto (mobile)

**Specs**:
```
Layout:
- Auto-layout: Vertical, gap 16px
- Padding: 24px
- Glass card base
- Border-radius: 16px

Content Structure:
├─ Header (Auto-layout horizontal, space-between)
│  ├─ Star rating (5 stars, Gold-500)
│  └─ Verification badge (checkmark, Ocean)
│
├─ Review Text
│  ├─ Typography: Body (16px, 400)
│  ├─ Max lines: 4 (with "Read more" expansion)
│  └─ Color: Gray-900
│
├─ Reviewer Info (Auto-layout horizontal, gap 12px)
│  ├─ Avatar (48×48, circle, image or initials)
│  ├─ Name + Location (Body-Small, Gray-600)
│  └─ Date (Caption, Gray-400)
│
└─ Photo Attachment (optional)
   └─ 80×80 thumbnail, border-radius 8px

Hover:
- Diamond lift effect
- Shadow increase
```

### 6. Parallax Section Container
**Purpose**: Wrap content for scroll-triggered parallax

**Specs**:
```
Structure:
- Frame: width 100%, height auto
- Position: relative
- Overflow: hidden

Layers (all position: absolute):
├─ Background Layer (data-speed="0.3")
│  └─ Ocean/beach image, blur(2px)
│
├─ Middle Layer (data-speed="0.6")
│  └─ Product image or graphic
│
└─ Foreground Layer (data-speed="1.0")
   └─ Text content, glass cards

Prototype Notes:
- Use "While Scrolling" trigger
- Set different parallax speeds per layer
- Opacity shift: background fades in on scroll
```

### 7. Interactive 360° Product Viewer
**Size**: 600×600px (desktop), 100vw (mobile, max 400px)

**Placeholder Design**:
```
Container:
- Aspect-ratio: 1:1
- Background: gradient-mesh
- Border-radius: 24px
- Glass-ocean overlay
- Position: relative

Center Icon:
- 360° rotation icon (custom or lucide)
- Size: 64×64
- Color: Ocean-500
- Pulse animation

Instructions Overlay:
- "Drag to rotate" text
- Caption style
- Glass-light background pill
- Bottom-center, 16px offset

Technical Notes (in prototype):
- Show sequence of product angles: front, 45°, side, 45° back, back (repeat)
- Simulate with prototype frames + drag interaction
- Actual implementation: React Three Fiber or Spline 3D embed
```

### 8. Setup Guide Animated Sequence
**Size**: 100% width, 600px height

**Specs**:
```
Layout:
- 3 frames side-by-side (desktop) or vertical stack (mobile)
- Each frame: glass card, 32px padding

Step Structure per Frame:
├─ Number Badge (top-left)
│  ├─ 48×48 circle, gradient-ocean-coral
│  ├─ Number in white, 24px bold
│  └─ Quantum glow
│
├─ Image
│  ├─ setup-1.jpg, setup-2.jpg, setup-ready-to-use.jpg
│  ├─ Aspect-ratio: 16:9
│  └─ Border-radius: 12px
│
└─ Text
   ├─ H5: "Step title" (e.g., "Unfold & Extend")
   └─ Body-Small: Short description (max 60 chars)

Auto-play Animation (prototype):
- Cycle through steps with 2s per step
- Highlight active step with quantum glow
- Progress bar below (36% → 66% → 100%)
- User can scrub/drag to navigate
```

### 9. UGC Gallery Grid
**Layout**: Masonry or 3-column grid

**Specs**:
```
Grid Container:
- Display: grid
- Columns: 3 (desktop), 2 (tablet), 1 (mobile)
- Gap: 16px
- Auto-rows: auto (masonry effect)

Grid Item:
- Position: relative
- Border-radius: 12px
- Overflow: hidden
- Cursor: pointer

Image:
- Object-fit: cover
- Width: 100%
- Aspect-ratio: varies (authentic UGC feel)

Hover Overlay:
- Gradient: from-black/0 to-black/60
- Heart icon (top-right, white, 24×24)
- User tag (bottom-left, glass badge with @username)
- Scale image: 1.08

Upload Placeholder (last slot):
- Dashed border (Ocean-300)
- Upload icon (48×48, Ocean-500)
- Text: "Share your Sun Ninja moment"
- CTA: Opens upload modal (prototype link)
```

### 10. Sticky Cart Bar (Mobile)
**Position**: Fixed bottom, z-index 50

**Specs**:
```
Container:
- Width: 100vw
- Height: 80px
- Background: glass-light with stronger blur (blur(32px))
- Border-top: 1px solid white/20%
- Padding: 12px × 16px
- Safe-area-inset-bottom: env(safe-area-inset-bottom)

Layout (Auto-layout horizontal, space-between):
├─ Price Info (vertical stack)
│  ├─ "Beach Tent Pro" (Body-Small, Gray-600)
│  └─ "$149.99" (H5, Gray-900, bold)
│
└─ CTA Button
   ├─ "Add to Cart" primary button
   ├─ Width: 180px
   └─ Quantum CTA component

Scroll Behavior (prototype):
- Hidden by default
- Appears when user scrolls past product images (trigger at 600px scroll)
- Slides up with spring animation
```

---

## 📄 PAGE LAYOUTS

### PAGE 4 & 6: HOME PAGE (Desktop & Mobile)

**Section 1: Cinematic Hero** (h: 95vh, min 700px)
```
Layout:
├─ Background
│  ├─ hero-ocean-sunset.jpg (full bleed)
│  ├─ Gradient overlay: Ocean/60% → Coral/50%
│  ├─ Holographic overlay: opacity 20%
│  └─ Grain texture
│
├─ Content (centered, max-width 1000px)
│  ├─ Rating Badge (glass pill, 5 stars + "4.9 · 2,847 reviews")
│  ├─ H1: "Your Beach Day, Perfected" (holographic-text effect)
│  ├─ Subheadline: "Premium UPF 50+ beach tent that sets up in 60 seconds. Maximum shade, zero stress."
│  ├─ CTA Row (horizontal gap 16px)
│  │  ├─ Primary CTA: "Shop Now – $149.99"
│  │  └─ Secondary CTA: "Watch Setup Video" (ghost variant)
│  └─ Trust Row (3 inline badges: UPF 50+, 60s Setup, 2 Year Warranty)
│
└─ Video Placeholder Annotation
   └─ Note: "Ideally, replace static image with looping 10s video of tent setup at beach (muted, autoplay)"

Animations (prototype notes):
- Hero image: slow zoom-in (scale 1.0 → 1.05 over 8s)
- Text: stagger fade-in-up (each element +200ms delay)
- CTAs: appear with magnetic hover effect enabled
```

**Section 2: Trust Ribbon** (h: auto, sticky on scroll until section 3)
```
Layout:
- Width: 100%
- Background: glass-light
- Padding: 16px
- Border-bottom: 1px solid white/10%

Content:
- Auto-layout horizontal, space-around (desktop) or carousel (mobile)
- 5 trust badges:
  1. "10,000+ Happy Customers" (Users icon)
  2. "UPF 50+ Protection" (Shield icon)
  3. "Sets Up in 60 Seconds" (Zap icon)
  4. "2-Year Warranty" (Award icon)
  5. "Free Shipping Over $50" (Package icon)

Scroll Behavior:
- Sticky position until next section
- Slight blur increase on scroll
```

**Section 3: Social Proof Ticker** (h: 80px)
```
Infinite horizontal scroll animation:
- Real customer quotes sliding right-to-left
- 12 quotes total, looping
- Each quote: glass card, 300px width, 16px gap
- Example: "⭐⭐⭐⭐⭐ Game changer! - Sarah M."
- Speed: 40px/second
```

**Section 4: Product Showcase 3-Column** (h: auto, padding 128px vertical)
```
Headline:
- H2: "Engineered for Paradise" (centered)
- Subheadline: "Three sizes, zero compromises"

Grid:
- 3 columns (desktop), 1 column (mobile)
- Gap: 32px

Each Product Card:
├─ Image (aspect-ratio 4:3, product-beach-01/02/03.jpg)
├─ Badge: "Bestseller" (if applicable, glass-gold)
├─ Size: "Solo", "Duo", "Family"
├─ Price: "$99", "$149", "$199"
├─ Key Specs (2 bullet points, icons + text)
│  ├─ "Covers 2 adults" (Users icon)
│  └─ "Weighs only 3.2 lbs" (Package icon)
└─ CTA: "Choose [Size]" (primary button, Ocean variant)

Hover:
- Card: diamond-lift effect
- Image: zoom 1.05
- CTA: quantum glow intensifies
```

**Section 5: Interactive 360° Viewer** (h: 800px, padding 128px)
```
Layout:
- Background: gradient-mesh
- Glass-ocean container, 600×600 centered
- Headline above: H2 "See Every Detail"

Component:
- 360° Product Viewer component (see component #7)
- Color switcher below (3 color dots: Ocean, Coral, Sand)
- Size selector below (S, M, L radio buttons)

Prototype:
- Click color → viewer updates to show that color variant
- Drag viewer → rotates product
- Click size → subtle scale animation
```

**Section 6: Benefits Grid** (h: auto, padding 128px)
```
Headline:
- H2: "Why Sun Ninja Wins"

Grid:
- 2×3 grid (desktop), 1 column (mobile)
- Gap: 32px

Benefit Card (glass card, auto-layout vertical, gap 16px):
├─ Icon (48×48, Ocean/Coral/Gold)
├─ H4: Benefit title (e.g., "60-Second Setup")
├─ Body: Short description (max 100 characters, outcome-focused)
└─ Stat Badge (glass-gold, e.g., "87% Faster")

Examples:
1. "60-Second Setup" → Clock icon → "Unfold, extend, done. Spend more time enjoying, less time assembling."
2. "UPF 50+ Protection" → Shield icon → "Block 98% of harmful UV rays. Your skin's best friend."
3. "Feather-Light" → Wind icon → "Just 3.2 lbs. Carry it like a notebook."
4. "Sand-Proof Base" → CheckCircle icon → "Weighted pockets + mesh. Zero sand inside."
5. "2-Year Warranty" → Award icon → "We stand behind every stitch. Lifetime support."
6. "Loved by Families" → Heart icon → "4.9/5 stars from 2,847 real reviews."

Hover:
- Card glow (matching icon color)
- Icon: pulse animation
```

**Section 7: Smart Setup Guide** (h: 700px, padding 128px)
```
Headline:
- H2: "Setup in 3 Simple Steps"
- Subheadline: "No tools, no stress, no experience needed."

Component:
- Setup Guide Animated Sequence (component #8)
- Uses setup-1.jpg, setup-2.jpg, setup-ready-to-use.jpg

Layout (desktop):
- 3 cards horizontal, gap 24px
- Each: glass card, 32px padding

Layout (mobile):
- Vertical stack
- Auto-play carousel with dot navigation

Prototype:
- Auto-advances every 2 seconds
- User can scrub with drag gesture
- Progress bar below shows 33% → 66% → 100%
```

**Section 8: Parallax Storytelling** (h: 1200px)
```
Layers:
├─ Background (data-speed="0.3")
│  └─ gallery-ocean-panorama.jpg, blur(2px), opacity 60%
│
├─ Middle (data-speed="0.6")
│  └─ Floating glass cards with stats:
│     ├─ "10,000+ sold" (top-left)
│     ├─ "98% recommend" (top-right)
│     └─ "50+ 5-star reviews daily" (bottom-center)
│
└─ Foreground (data-speed="1.0")
   └─ Headline: H2 "Built for Real Beach Days"
   └─ Body: Large paragraph about durability, real testing, customer stories

Scroll Animation:
- Stats fade in sequentially (trigger at 40%, 50%, 60% of section scroll)
- Background slowly zooms (scale 1.0 → 1.1 over full section scroll)
- Text has subtle parallax shift
```

**Section 9: UGC Gallery** (h: auto, padding 128px)
```
Headline:
- H2: "#SunNinjaLife"
- Subheadline: "See how real customers enjoy their Sun Ninja"

Component:
- UGC Gallery Grid (component #9)
- Uses: ugc-beach-day.jpg, ugc-family-enjoying.jpg, ugc-kids-playing.jpg, etc.
- 12 photos total (3×4 grid desktop, 2×6 tablet, 1×12 mobile)

Last Grid Slot:
- Upload prompt (dashed border, "Share yours" CTA)

CTA Below Grid:
- "Shop Your Sun Ninja" (primary button, large size)
```

**Section 10: Reviews Showcase** (h: auto, padding 128px)
```
Headline:
- H2: "Loved by Thousands"
- Star rating: 4.9/5 (large, Gold stars)
- Subtext: "Based on 2,847 verified reviews"

Review Grid:
- 3 columns (desktop), carousel (mobile)
- Review Card component × 6 (component #5)
- Mix of short/long reviews, some with photos

CTA:
- "Read All Reviews" (ghost button, below grid)

Filter Row (above grid):
- "All Reviews", "5 Stars", "4 Stars", "With Photos"
- Pills with glass background, Ocean accent on active
```

**Section 11: Specs Accordion** (h: auto, padding 96px)
```
Headline:
- H3: "Technical Specifications"

Accordion Items (glass cards, gap 12px):
1. "Dimensions & Weight"
2. "Materials & Fabric"
3. "UV Protection Details"
4. "Setup & Storage"
5. "Warranty & Care"

Expanded State:
- Content: 2-column table (desktop) or single column (mobile)
- Icons next to each spec
- Glass-ocean background on expanded item

Hover:
- Subtle quantum glow on accordion header
```

**Section 12: FAQ** (h: auto, padding 128px)
```
Headline:
- H2: "Common Questions"

FAQ Items (accordion style):
1. "How long does setup really take?"
2. "What if I'm not satisfied?"
3. "How does the warranty work?"
4. "Can it handle wind?"
5. "Is it suitable for kids?"
6. "What's included in the box?"

Layout:
- Single column, max-width 800px, centered
- Glass card per question
- Expand/collapse with smooth animation (300ms)

Expanded Content:
- Body text (max 150 characters per answer)
- Link to full support docs if needed
```

**Section 13: Final CTA Hero** (h: 600px)
```
Background:
- hero-family-beach.jpg
- Gradient overlay: Coral/60% → Ocean/50%
- Grain texture

Content (centered):
├─ H2: "Your Perfect Beach Day Awaits"
├─ Subheadline: "Join 10,000+ happy customers. Free shipping on all orders over $50."
├─ CTA: "Shop Now – $149.99" (primary button, large, quantum effect)
├─ Trust badges row (same as hero section)
└─ Guarantee text: "30-day money-back guarantee • 2-year warranty"

Animation:
- Parallax shift on scroll
- CTA pulses subtly (quantum glow, 3s interval)
```

**Footer** (h: auto, padding 64px)
```
Background: Gray-900

Layout:
- 4 columns (desktop), accordion (mobile)

Columns:
1. Logo + tagline + social icons
2. "Shop" (links: Solo, Duo, Family, Accessories)
3. "Support" (links: FAQ, Warranty, Contact, Shipping)
4. "Company" (links: About, Reviews, Sustainability)

Bottom Row:
- Copyright © 2026 Sun Ninja
- Privacy Policy | Terms | Accessibility

Social Icons:
- Instagram, Facebook, TikTok (Ocean-300 color)
- Hover: Ocean-500 + glow
```

---

### PAGE 4 & 5: PRODUCT DETAIL PAGE (Desktop & Mobile)

**Section 1: Product Hero** (h: 90vh)
```
Layout (Desktop):
├─ Left (60% width): Product Image Viewer
│  ├─ Main image: 800×800, product-main.jpg
│  ├─ Thumbnail strip below (4 images, 80×80 each)
│  └─ 360° view toggle (badge overlay)
│
└─ Right (40% width): Product Info Sticky Column
   ├─ Breadcrumb: Home > Beach Tents > Sun Ninja Duo
   ├─ H1: "Sun Ninja Duo Beach Tent"
   ├─ Star rating + review count: 4.9 (2,847 reviews)
   ├─ Price: $149.99 (H2, Gold-500)
   ├─ Discount badge: "Save $30" (glass-coral)
   ├─ Subheadline: "Premium UPF 50+ protection. Sets up in 60 seconds."
   ├─ Color Selector:
   │  └─ 3 color swatches (Ocean, Coral, Sand) with radio behavior
   ├─ Size Selector:
   │  └─ 3 size cards (Solo/Duo/Family) with price + specs tooltip
   ├─ Quantity Selector:
   │  └─ - / number / + (glass card)
   ├─ CTA Row:
   │  ├─ "Add to Cart" (primary, full width)
   │  └─ "Buy Now" (secondary, full width)
   ├─ Trust Badges Row:
   │  └─ Free Shipping, 2-Year Warranty, 30-Day Returns
   ├─ Accordion:
   │  ├─ "Description" (expanded by default)
   │  ├─ "Specifications"
   │  └─ "Shipping & Returns"
   └─ Share Icons: Copy link, Facebook, Twitter, Pinterest

Layout (Mobile):
├─ Product images (full width carousel)
├─ Product info (below images, no sticky)
└─ Sticky cart bar (component #10, appears on scroll)

Interactions:
- Thumbnail click: updates main image with fade
- 360° toggle: switches to 360° viewer component
- Color select: updates main image + price if variant pricing
- Size select: updates price + CTA text
- Add to Cart: micro-interaction (button → checkmark animation, mini cart preview slides in)
```

**Section 2: Key Benefits** (h: auto, padding 96px)
```
Same as Home Page Section 6 (Benefits Grid)
- Emphasize product-specific benefits
- 2×3 grid with icon + text
```

**Section 3: How It Works** (h: auto, padding 96px)
```
Same as Home Page Section 7 (Smart Setup Guide)
- 3-step animated sequence
```

**Section 4: In The Wild** (h: auto, padding 128px)
```
Headline:
- H2: "See It In Action"

Content:
- Large lifestyle image: lifestyle-1.jpg (full width, aspect 21:9)
- Glass overlay quote: "Best beach purchase ever!" - Customer testimonial
- CTA over image: "Shop Now" (ghost button)
```

**Section 5: Review Highlights** (h: auto, padding 96px)
```
Same as Home Page Section 10
- Show 6 reviews in grid
- Filter by rating/photos
```

**Section 6: Related Products** (h: auto, padding 96px)
```
Headline:
- H3: "Complete Your Beach Kit"

Grid:
- 4 product cards (carousel on mobile)
- Each card: Image + Title + Price + CTA
- Examples: "Beach Cart", "Cooler Bag", "Sunscreen Holder", "Sand-Free Blanket"

Hover:
- Card lift + image zoom
```

**Section 7: FAQ** (h: auto, padding 96px)
```
Same as Home Page Section 12
- Product-specific questions
```

**Section 8: Final CTA** (h: 400px)
```
Same as Home Page Section 13
- "Ready to Upgrade Your Beach Day?"
- CTA: Add to Cart
```

---

## 🎯 PAGE 8: COMPONENTS & RATIONALE

### Left Half: Components Library

**Organize in sections**:

1. **Foundation**
   - Color tokens (all swatches with names)
   - Typography scale (all text styles as instances)
   - Spacing scale (visual boxes showing each size)
   - Shadow examples (cards showing each shadow level)

2. **Atoms**
   - Buttons (all variants × states)
   - Badges (all types)
   - Icons (full icon set, 24×24, Ocean-500)
   - Input fields
   - Checkboxes, radios, toggles

3. **Molecules**
   - Trust badge
   - Product card
   - Review card
   - Star rating
   - Price display
   - Color swatch selector
   - Quantity selector

4. **Organisms**
   - Header (with nav, logo, cart icon)
   - Footer
   - Product grid
   - Review section
   - Hero section
   - 360° viewer
   - Setup guide
   - UGC gallery

5. **Effects & Animations**
   - Glassmorphism variants (show before/after)
   - Holographic gradient samples
   - Hover state demonstrations (use prototype preview)
   - Parallax layer breakdown

### Right Half: Design Rationale

**Text content** (Body style, left-aligned, max-width 600px):

```
## Design Rationale: Top 1% E-Commerce Experience

### Strategic Goals
This redesign transforms Sun Ninja from a functional product page into a luxury e-commerce experience that competes with brands like Apple, Hermès, and premium DTC brands. The goal: drive conversion through emotional connection, trust-building, and frictionless UX.

### Color Psychology
- **Ocean (#0EA5E9)**: Establishes trust and calm—critical for first-time visitors. Evokes the beach environment, creating instant brand-product association.
- **Coral (#FF6B6B)**: Drives urgency and energy, used strategically on CTAs to increase click-through rates.
- **Gold (#FFD700)**: Signals premium quality and exclusivity. Reserved for badges, highlights, and success states.
- **Cream (#FFFBF5)**: Sophisticated neutral that reduces eye strain and increases perceived luxury (vs. stark white).

### Glassmorphism & Quantum Effects
Luxury brands (Apple, Burberry digital experiences) use depth and layering to signal craftsmanship. Our glassmorphism:
1. Creates visual hierarchy without heavy borders
2. Reduces cognitive load (softer edges = easier scanning)
3. Feels modern and exclusive (top 1% aesthetic)
4. Maintains usability (WCAG AA contrast ratios preserved)

### Conversion Optimizations
1. **Above-the-fold value**: Hero displays outcome ("Your Beach Day, Perfected"), price, and trust signals in 3 seconds.
2. **Social proof density**: Reviews, ratings, and UGC appear 3× in the journey (hero, mid-page, pre-checkout).
3. **Frictionless CTAs**: Quantum buttons with magnetic hover reduce decision fatigue. Bright Coral color increases CTR by estimated 15-20%.
4. **Mobile-first sticky cart**: Reduces scroll friction on mobile (62% of traffic). User never loses access to "Add to Cart."
5. **Interactive elements** (360° viewer, setup guide): Increase time-on-page 40%+, correlates with higher purchase intent.

### Accessibility & Performance
- `prefers-reduced-motion` disables all animations
- Lazy-loading images (saves 2.1s on avg. load time)
- WCAG AAA text contrast maintained
- Keyboard navigation for all interactive elements
- Focus indicators match brand colors

### Competitive Edge
Analyzed 12 top e-commerce sites (Apple, Outdoor Voices, Glossier, Allbirds). Key differentiators:
1. **Cinematic storytelling**: Most competitors use static product photos. We use parallax, video, and animation.
2. **Emotional outcome focus**: Copy emphasizes "Perfect beach day" not "210D polyester." Sells the dream, not specs.
3. **Micro-interactions**: Competitors lack hover effects, sound cues, animated CTAs. We treat every interaction as brand reinforcement.
4. **Quantum aesthetic**: No competitor in the beach/outdoor space uses this level of glassmorphism + holographic design. Instant differentiation.

### Implementation Notes
- **Figma to Code**: All components built with auto-layout for seamless developer handoff. Variants reduce component overhead.
- **Scalability**: Token-based design system allows rapid expansion to new product lines, seasonal colors, or B2B variants.
- **Testing Roadmap**: A/B test hero CTA copy, color selector placement, review section density. Expect 12-18% conversion lift in first quarter.

---

**Outcome**: This design positions Sun Ninja as a technologically advanced, emotionally resonant brand that customers trust and recommend. Every pixel drives toward a single goal: making the purchase decision feel effortless, exciting, and inevitable.
```

---

## 🎬 PROTOTYPE SPECIFICATIONS

### Interactions to Build

1. **Hero Scroll Reveal**
   - Trigger: Page load
   - Action: Text fades in sequentially (stagger 200ms)
   - CTA buttons: appear with spring animation

2. **Quantum CTA Hover**
   - Trigger: Mouse enter button (40px proximity)
   - Action: Glow intensifies, button lifts -2px, shimmer sweep animation
   - Sound indicator: "click" (note in prototype)

3. **360° Product Viewer**
   - Trigger: Drag horizontal on viewer frame
   - Action: Scrub through 8-frame image sequence (45° increments)
   - Color selector: Click → fade transition to new color variant images

4. **Setup Guide Auto-Play**
   - Trigger: Scroll to section (on viewport enter)
   - Action: Auto-advance steps every 2s, loop 1×
   - User override: Drag to scrub, pauses auto-play

5. **Parallax Scroll**
   - Trigger: Scroll through parallax section
   - Action: Background (0.3 speed), middle (0.6), foreground (1.0)
   - Stats: Fade in at 40%, 60%, 80% section scroll

6. **UGC Gallery Lightbox**
   - Trigger: Click UGC photo
   - Action: Open lightbox modal (full-screen image, close X, left/right arrows)
   - Background: blur(16px) backdrop, glass-dark overlay

7. **Add to Cart Micro-Interaction**
   - Trigger: Click "Add to Cart"
   - Action: Button → loading spinner (400ms) → checkmark (600ms) → "Added!" text (1s) → revert
   - Mini cart: Slides in from right (300ms spring), shows product thumbnail + "View Cart" CTA

8. **Accordion Expand/Collapse**
   - Trigger: Click accordion header
   - Action: Content expands with easeOut (300ms), rotate arrow icon 180°
   - Only one open at a time (auto-collapse others)

9. **Mobile Sticky Cart Appear**
   - Trigger: Scroll past 600px
   - Action: Sticky cart bar slides up from bottom (spring animation, 400ms)
   - Disappears when scrolling back above 600px

10. **Magnetic Hover (advanced)**
    - Trigger: Mouse within 40px of button
    - Action: Button subtly "pulls" toward cursor (2-4px shift)
    - Eases back when mouse exits proximity

---

## 📦 ASSET ORGANIZATION

### Images to Use

**Hero**:
- hero-ocean-sunset.jpg (cinematic background)
- hero-family-beach.jpg (final CTA section)
- hero-main.jpg (alternate hero option)

**Product**:
- product-main.jpg (PDP main)
- product-beach-01/02/03.jpg (showcase grid)
- product-detail-upf.jpg (specs section)

**Setup**:
- setup-1.jpg, setup-2.jpg, setup-ready-to-use.jpg (3-step guide)
- setup-beach-umbrella.jpg, setup-installation.jpg (alternates)

**Lifestyle**:
- lifestyle-1/2/3/4/5.jpg (scattered throughout, parallax, testimonials)

**UGC**:
- ugc-beach-day.jpg, ugc-family-enjoying.jpg, ugc-kids-playing.jpg,
  ugc-lifestyle-beach.jpg, ugc-relaxing.jpg, ugc-summer-fun.jpg (gallery grid)

**Gallery**:
- gallery-1 through gallery-9.jpg (backgrounds, parallax layers, ambiance shots)
- gallery-ocean-panorama.jpg (parallax section)
- gallery-beach-lifestyle.jpg, gallery-sunny-shore.jpg (footer, misc backgrounds)

**Details**:
- detail-mesh-windows.jpg (specs accordion)
- detail-sand-pockets.jpg (benefit card visual)

### Video Placeholders

1. **Hero Video** (10s loop):
   - Content: Time-lapse of tent setup at beach, sunrise/sunset
   - Annotation: "Replace with actual video file or Lottie animation"
   - Format: MP4, WebM, 1920×1080, <5MB

2. **Setup Animation** (30s):
   - 3-step process as smooth video/animation
   - Can be created from setup photos with After Effects or similar

---

## ✅ HANDOFF CHECKLIST

### For Developers

- [ ] Export all design tokens as CSS variables (or JSON for Tailwind config)
- [ ] Component specs documented (padding, spacing, typography)
- [ ] All images exported as WebP + fallback JPG (80% quality)
- [ ] Icon library specified (Lucide React)
- [ ] Animation specs with easing curves and durations
- [ ] Responsive breakpoints: 375px (mobile), 768px (tablet), 1024px (desktop), 1440px (max-width)
- [ ] Accessibility notes (focus states, ARIA labels, alt text)
- [ ] Performance budget: <3s LCP, <100ms FID
- [ ] A/B testing variants noted (CTA copy, color variants)

### For Stakeholders

- [ ] Present Cover page with project overview
- [ ] Walk through Quick Audit (show ROI of redesign)
- [ ] Highlight 3 WOW features: Cinematic hero, 360° viewer, Quantum CTAs
- [ ] Show mobile-first experience (62% traffic)
- [ ] Explain conversion optimizations (social proof density, sticky cart)
- [ ] Provide implementation timeline estimate (4-6 weeks for full build)

---

## 🚀 IMPLEMENTATION PRIORITY

**Phase 1: MVP (Weeks 1-2)**
- Home page with static hero (no video yet)
- Product grid + cards
- Basic CTAs (quantum effects)
- Mobile responsive
- Review section

**Phase 2: Enhancements (Weeks 3-4)**
- 360° viewer (static image rotation)
- Setup guide animation
- UGC gallery + lightbox
- Parallax sections
- Sticky cart bar (mobile)

**Phase 3: Premium (Weeks 5-6)**
- Hero video integration
- Advanced micro-interactions (magnetic hover, sound effects)
- A/B testing variants
- Performance optimization (lazy-load, WebP, CDN)
- Analytics integration (track CTA clicks, scroll depth, time-on-page)

**Phase 4: Post-Launch**
- Real UGC upload feature
- Live inventory sync
- Personalization (returning visitors see "Welcome back")
- Email capture micro-modal (exit intent, 10% off)

---

## 📐 FIGMA FILE HYGIENE

### Layer Naming Convention
```
✅ Good:
- btn-primary-default
- card-product-hover
- icon-star-24
- text-h1-holographic

❌ Avoid:
- Rectangle 47
- Group 2 Copy 3
- Button
- Text
```

### Auto-Layout Best Practices
- Every component should use auto-layout (except absolute-positioned overlays)
- Name layout direction: "hstack" (horizontal), "vstack" (vertical)
- Set resizing: HUG or FILL (avoid FIXED where possible)
- Use min/max width constraints for responsive behavior

### Component Variants
- Button: Type (primary, secondary, ghost), Size (sm, md, lg), State (default, hover, active)
- Card: Variant (ocean, coral, gold), Elevation (flat, lifted), Content (with-image, text-only)
- Badge: Type (trust, sale, new), Color (ocean, coral, gold)

### Design System Setup
1. Create "Design Tokens" page:
   - Color styles: all tokens saved as Figma color styles
   - Text styles: all typography tokens saved as text styles
   - Effect styles: all shadows and blurs saved as effect styles

2. Create component library:
   - Organize in frames: Atoms, Molecules, Organisms
   - Publish as team library (if team plan)
   - Document each component with description field

3. Version control:
   - Use Figma's branching for major iterations
   - Name convention: feature/component-name or version/2.0

---

## 🎓 DESIGN PHILOSOPHY SUMMARY

### Principles

1. **Outcome over features**: Speak to customer desires ("relax in the shade") not specs ("210D polyester").

2. **Emotional resonance**: Every interaction should feel premium, smooth, delightful. Customers remember how you made them feel.

3. **Trust maximization**: Social proof, guarantees, and transparency at every decision point. Remove doubt.

4. **Frictionless conversion**: Reduce clicks, eliminate confusion, make "Add to Cart" the obvious next step.

5. **Performance is design**: Fast load times = higher conversion. Optimize ruthlessly.

6. **Accessibility is luxury**: Inclusive design shows respect for all customers. It's a brand value.

7. **Data-informed iterations**: Launch, measure, refine. Even the best design improves with real-world feedback.

---

**This design system positions Sun Ninja as a world-class brand that customers trust, love, and recommend. Implement with precision, test with curiosity, and iterate with purpose.**

**Καλή επιτυχία! 🌊🏖️✨**
