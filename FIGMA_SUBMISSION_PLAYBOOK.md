# FIGMA SUBMISSION PLAYBOOK
## Sun Ninja Redesign - Step-by-Step Figma Deliverable Guide

**Purpose:** Create a professional Figma file that showcases the Sun Ninja redesign  
**Time Estimate:** 3-5 hours (with this guide)  
**Skill Level:** Intermediate+ Figma user  
**Final Deliverable:** Shareable Figma link (view-only)

---

## OVERVIEW

This playbook walks you through creating the exact Figma file structure required for the Sun Ninja redesign assignment. Every page, frame, and component is specified.

### What You'll Create
- **8 Figma pages** (exact names, exact order)
- **Desktop frames** (1440px width)
- **Mobile frames** (390px width)
- ** tokens** (colors, typography, spacing)
- **Component library** (buttons, cards, badges)
- **Rationale documentation** (design decisions)

---

## PRE-WORK: GATHER ASSETS

### Step 1: Collect Photos from Repository

Navigate to: `/Users/user/Downloads/Sun Ninja Redesign Project/public/assets/photos/`

**Copy these files to your desktop** (for easy Figma import):

```
Desktop/SunNinja_Assets/
├── hero-01.jpg          ← from /hero/
├── hero-02.jpg          ← from /hero/
├── product-01.jpg       ← from /product/
├── product-02.jpg       ← from /product/
├── product-03.jpg       ← from /product/
├── product-detail-01.jpg ← from /product/
├── product-detail-02.jpg ← from /product/
├── gallery-01.jpg       ← from /gallery/
├── gallery-02.jpg       ← from /gallery/
├── gallery-03.jpg       ← from /gallery/
├── gallery-04.jpg       ← from /gallery/
├── gallery-05.jpg       ← from /gallery/
├── gallery-06.jpg       ← from /gallery/
├── setup-01.jpg         ← from /setup/
├── ugc-01.jpg           ← from /ugc/
├── ugc-02.jpg           ← from /ugc/
├── ugc-03.jpg           ← from /ugc/
└── ugc-04.jpg           ← from /ugc/
```

**Optional:** Add 2 more UGC photos from `/public/images/beach/`:
- `ugc-family-enjoying.jpg`
- `ugc-relaxing.jpg`

### Step 2: Install Fonts (if not already available)

**Primary Font:** Inter (free from Google Fonts)  
**Fallback:** System font stack (SF Pro, Segoe UI, Roboto)

Download: https://fonts.google.com/specimen/Inter

---

## FIGMA FILE SETUP

### Step 1: Create New Figma File

1. Open Figma Desktop or Browser
2. Click **New Design File**
3. Rename file: `Sun Ninja Redesign - [Your Name]`
4. Save to appropriate team/folder (or "Drafts")

### Step 2: Set Up Pages (Exact Names Required)

**Right-click on "Page 1" → Rename**

Create these 8 pages in this exact order:

```
1. 00_Cover
2. 01_Quick_Audit
3. 02_Style_Direction
4. 03_PDP_Desktop
5. 04_PDP_Mobile
6. 05_Home_Desktop
7. 06_Home_Mobile
8. 07_Components_Styles
9. 08_Rationale_Notes
```

**Pro Tip:** Use `00_`, `01_`, etc. prefixes to force alphabetical order.

---

## PAGE 1: 00_COVER

### Purpose
Title page, introduction, your credentials

### What to Build

**Frame:**  
- Name: `Cover`
- Size: 1920 x 1080px (presentation slide format)

**Content:**
```
┌─────────────────────────────────────────────┐
│                                             │
│        [Import: hero-01.jpg as background]  │
│         (with 70% dark overlay)             │
│                                             │
│         SUN NINJA REDESIGN                  │
│         Premium Beach Tent                  │
│         eCommerce Experience                │
│                                             │
│         By: [Your Name]                     │
│         Date: February 2026                 │
│         Client: Sun Ninja (Hypothetical)    │
│                                             │
└─────────────────────────────────────────────┘
```

**Styling:**
- Title: 64px, Bold, White
- Subtitle: 32px, Regular, White/90%
- Credentials: 20px, Regular, White/70%
- Overlay: Black to transparent gradient (top to bottom)

---

## PAGE 2: 01_QUICK_AUDIT

### Purpose
Show you analyzed the current state (even if fictional/reference-based)

### What to Build

**Frame:**  
- Name: `Quick Audit`
- Size: 1440 x auto (expand as needed)

**Content Template:**

```
QUICK AUDIT — CURRENT STATE vs. OPPORTUNITY

✅ STRENGTHS
• High-quality product photography available
• Strong beach lifestyle positioning
• Clear value proposition (60-second setup)
• UPF 50+ protection differentiator

⚠️ OPPORTUNITIES
• Hero section could be more impactful (beach-first imagery)
• Product benefits buried; move above fold
• Setup process not visually clear (add step-by-step)
• Social proof underutilized (no UGC gallery)
• Trust indicators scattered (centralize in sticky bar)
• Mobile experience could be more thumb-friendly
• CTA hierarchy unclear (too many competing buttons)

📊 COMPETITIVE INSIGHTS
• Coleman: Feature-focused, lacks lifestyle emotional pull
• REI: Strong social proof, but dated UI
• Nike/Lululemon: Premium polish, aspirational imagery (benchmark)

🎯 TARGET AUDIENCE
• Families with young children (primary)
• Beach enthusiasts
• Outdoor recreation shoppers
• Ages 28-45, coastal proximity
• Values: convenience + quality + sun safety

💡 DESIGN GOALS
1. Beach-first visual identity (ocean to coral gradient)
2. Outcome-focused benefits (not just features)
3. Clear setup process (3 steps, real photos)
4. Social proof prominence (UGC + reviews)
5. Premium polish (top 1% DTC standard)
```

**Styling:**
- Section headers: 24px, Bold
- Body text: 16px, Regular
- Bullet points: 16px, line-height 1.5
- Use colors from your palette (Blues, Corals, Neutrals)

---

## PAGE 3: 02_STYLE_DIRECTION

### Purpose
Show 2 style options, mark the chosen one

### What to Build

**Create 2 side-by-side frames:**

#### Option A: Ocean Sunset (CHOSEN ✓)
- Frame: 800 x 1200px
- Name: `Style A — Ocean Sunset (CHOSEN)`

**Content:**
- Import: hero-01.jpg as background
- Add Ocean→Coral gradient overlay (subtle, 20% opacity)
- Headline: "Your Beach Day, Perfected"
- Subhead: "Premium UPF 50+ tent, 60-second setup"
- CTA button: Ocean→Coral gradient fill

**Label:**
```
✅ CHOSEN DIRECTION

Ocean to Coral Gradient System
• Evokes beach sunset moments
• Warm + aspirational
• Premium but not sterile
• Limited to strategic CTA zones
```

#### Option B: Coastal Minimal (Alternative)
- Frame: 800 x 1200px
- Name: `Style B — Coastal Minimal`

**Content:**
- Import: hero-02.jpg as background
- Light blue (#E0F2FE) subtle overlay
- Headline: same
- Subhead: same
- CTA button: Solid ocean blue (#0EA5E9)

**Label:**
```
ALTERNATIVE

Coastal Minimal Palette
• Clean, airy, understated
• Safe, traditional eComm
• Less emotional impact
• Lacks unique signature
```

**Why Option A Wins:**
- More memorable (signature gradient = brand recognition)
- Emotional connection (sunset = beach lifestyle aspiration)
- Differentiated from competitors (Coleman, REI use blues only)
- CRO-tested: warm colors increase urgency

---

## PAGE 4: 03_PDP_DESKTOP

### Purpose
Full product detail page layout (desktop, 1440px)

### Frame Setup
- Name: `PDP — Desktop`
- Size: 1440 x (auto, expand as you build)
- Background: #FFFFFF

### Section Build Order

#### 🔹 1. Above the Fold (0-800px from top)

**Layout:**
```
┌──────────────────────────────────────────────────┐
│ [Header: Logo | Nav | Cart]                    │
├────────────────┬─────────────────────────────────┤
│                │  SUN NINJA BEACH TENT           │
│                │  Premium UPF 50+ Protection     │
│                │                                 │
│   [Product     │  ⭐⭐⭐⭐⭐ 4.9 (2,847 reviews)   │
│    Gallery]    │                                 │
│                │  $149.99  [was $199.99]         │
│   - Main img   │                                 │
│   - Thumbnails │  Color: [Ocean Blue] [Coral]   │
│     (4-5)      │  Size:  [Standard] [XL]         │
│                │                                 │
│   product-01   │  [Add to Cart - Premium CTA]    │
│   product-02   │                                 │
│   product-03   │  ✓ Free Shipping | ✓ Easy Returns│
│   detail-01    │  ✓ 2-Year Warranty | ✓ Setup <60s│
└────────────────┴─────────────────────────────────┘
```

**Import Photos:**
- Main gallery: `product-01.jpg` (large, 600x600px box)
- Thumbnails: `product-02.jpg`, `product-03.jpg`, `product-detail-01.jpg`, `product-detail-02.jpg` (100x100px each)

**Components to Create:**
- ⭐ Star rating (5 stars, yellow #FBBF24)
- 🛒 Add to Cart button (Ocean→Coral gradient, 180x56px, 16px text, bold)
- ✓ Trust badges (icons + text, 4 in a row)

---

#### 🔹 2. Benefits Section (800-1400px)

**Layout:**
```
OUTCOME-FOCUSED BENEFITS
3 Cards in a row (400px width each, 32px gap)

┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ [Zap Icon]   │ │ [Shield Icon]│ │ [Wind Icon]  │
│ 60-Second    │ │ UPF 50+      │ │ Wind         │
│ Setup        │ │ Protection   │ │ Resistant    │
│              │ │              │ │              │
│ Pop-up design│ │ Blocks 98%   │ │ Anchors up   │
│ gets you from│ │ harmful UV   │ │ to 35mph     │
│ car to shade │ │ rays         │ │ winds        │
│ in seconds   │ │              │ │              │
└──────────────┘ └──────────────┘ └──────────────┘
```

**Component:**
- Benefit Card: 400x320px
- Icon: 48x48px, Ocean blue
- Title: 24px, Bold
- Description: 16px, Regular, Gray-600

---

#### 🔹 3. How It Works (1400-2000px)

**Layout:**
```
HOW IT WORKS — SETUP IN 3 EASY STEPS

┌──────────┐ ┌──────────┐ ┌──────────┐
│ [Photo 1]│ │ [Photo 2]│ │ [Photo 3]│
│          │ │          │ │          │
│ 1. Unpack│ │ 2. Pop Up│ │ 3. Secure│
│          │ │          │ │          │
│ Remove   │ │ Frame    │ │ Anchor   │
│ from bag │ │ expands  │ │ with sand│
└──────────┘ └──────────┘ └──────────┘
```

**Import Photos:**
- Step 1: `product-01.jpg` (placeholder, label "🏷️ layout placeholder")
- Step 2: `gallery-01.jpg` (placeholder, label "🏷️ layout placeholder")
- Step 3: `setup-01.jpg`

**Component:**
- Step Card: 400x500px
- Photo: 400x300px (cover fit)
- Number badge: 64x64px circle, Ocean→Coral gradient
- Title: 20px, Bold
- Description: 16px, Regular

---

#### 🔹 4. Reviews & UGC (2000-2800px)

**Layout:**
```
LOVED BY 10,000+ FAMILIES

[3 Review Cards in a row]

REAL MOMENTS FROM REAL CUSTOMERS

[UGC Grid: 6-8 photos, 3 columns]
```

**Review Card:**
```
┌─────────────────────────────────┐
│ ⭐⭐⭐⭐⭐ | Sarah M. | Verified  │
│                                 │
│ "Game-changer for our family    │
│  beach days!"                   │
│                                 │
│ Sets up in literally 2 minutes  │
│ and stays put even when windy.  │
└─────────────────────────────────┘
```

**UGC Grid:**
- Import: `ugc-01.jpg`, `ugc-02.jpg`, `ugc-03.jpg`, `ugc-04.jpg`, plus 2 more from legacy
- Grid: 3 columns, 16px gap
- Each photo: 400x400px (square crop, cover fit)
- Hover effect (optional in prototype): Scale 1.05, shadow increase

---

#### 🔹 5. FAQ Accordion (2800-3400px)

**Layout:**
```
FREQUENTLY ASKED QUESTIONS

▼ How long does setup really take?
  [Answer text, 16px, Gray-700]

▶ What materials is it made from?

▶ Can it withstand wind?

▶ What's included in the box?

▶ What's your return policy?
```

**Component:**
- Accordion item: Full width (1280px content area), 72px height collapsed
- Chevron icon: 24x24px, rotates 180° when expanded
- Question: 18px, Semibold
- Answer: 16px, Regular, Gray-700, padded 24px

---

#### 🔹 6. Final CTA Section (3400-3800px)

**Layout:**
```
┌─────────────────────────────────────────┐
│    [hero-02.jpg background]             │
│    [Ocean→Coral gradient overlay, 60%]  │
│                                         │
│    Ready for Better Beach Days?         │
│                                         │
│    Join 10,000+ happy families          │
│                                         │
│    [Add to Cart - Large CTA]            │
│                                         │
│    ✓ Free Shipping  ✓ 60-Day Returns   │
└─────────────────────────────────────────┘
```

**Import:** `hero-02.jpg` as background
**Text:** All white
**CTA:** 240x64px, Ocean→Coral gradient

---

## PAGE 5: 04_PDP_MOBILE

### Purpose
Mobile version of PDP (390px width)

### Frame Setup
- Name: `PDP — Mobile`
- Size: 390 x (auto, expand as you build)
- Background: #FFFFFF

### Key Changes from Desktop

1. **Single Column Layout**
   - Gallery stacks vertically (main + carousel of thumbnails below)
   - Product info stacks below gallery
   - Benefits: 1 column, stack vertically

2. **Sticky Add-to-Cart Bar**
   - Fixed to bottom: 390x80px
   - Contains: Mini product image (64x64) + Price + [Add to Cart] button
   - Appears on scroll past above-fold

3. **Hamburger Menu**
   - Top-left: 32x32px icon
   - Replaces full navigation

4. **Larger Touch Targets**
   - Buttons: Minimum 48x48px (Apple/Google guidelines)
   - Spacing: Increase padding by 25% vs desktop

5. **Simplified Trust Row**
   - 2x2 grid instead of 4 in a row
   - Icons smaller (32x32 vs 48x48)

**Import same photos, adjust sizing/cropping for mobile aspect**

---

## PAGE 6: 05_HOME_DESKTOP

### Purpose
Homepage layout (desktop, 1440px)

### Frame Setup
- Name: `Home — Desktop`
- Size: 1440 x (auto, ~3000px)
- Background: #FFFFFF

### Section Build Order

#### 🔹 1. Hero (0-800px)

**Layout:**
```
┌──────────────────────────────────────────────┐
│ [Header: Logo | Nav | Cart]                │
├──────────────────────────────────────────────┤
│                                             │
│   [hero-01.jpg background]                 │
│   [Ocean→Coral gradient overlay, subtle]   │
│                                             │
│        YOUR BEACH DAY, PERFECTED            │
│                                             │
│   Premium UPF 50+ tent, 60-second setup    │
│                                             │
│   [Shop Now CTA]  [Learn More]             │
│                                             │
│   ⭐ 4.9 | 2,847 Reviews | Free Shipping   │
│                                             │
└──────────────────────────────────────────────┘
```

**Import:** `hero-01.jpg` as full-width background
**Headline:** 64px, Bold, White
**Subhead:** 24px, Regular, White/90%
**CTA:** Ocean→Coral gradient, 180x56px

---

#### 🔹 2. Featured Product (800-1400px)

**Layout:**
```
BEST-SELLER: SUN NINJA BEACH TENT

┌──────────────┬─────────────────────────────────┐
│              │  Premium UPF 50+ Protection     │
│ [product-01] │                                 │
│              │  • 60-second pop-up setup       │
│              │  • Blocks 98% UV rays           │
│              │  • Wind-resistant to 35mph      │
│              │                                 │
│              │  $149.99                        │
│              │  [Shop Now →]                   │
└──────────────┴─────────────────────────────────┘
```

**Import:** `product-01.jpg` (600x600px)

---

#### 🔹 3. Lifestyle Grid (1400-2000px)

**Layout:**
```
MADE FOR YOUR BEACH LIFESTYLE

[4 photos in a row, 16px gap]

gallery-01  gallery-02  gallery-03  gallery-05
```

**Import:** 4 gallery photos, each 340x340px (square crop)

---

#### 🔹 4. How It Works (2000-2600px)

**(Reuse same component from PDP)**

---

#### 🔹 5. Social Proof (2600-3000px)

**Layout:**
```
LOVED BY 10,000+ FAMILIES

⭐⭐⭐⭐⭐ 4.9  |  2,847 Reviews  |  #SunNinjaLife

[UGC Grid: 4 photos in a row]

ugc-01  ugc-02  ugc-03  ugc-04
```

**Import:** 4 UGC photos, each 340x340px

---

## PAGE 7: 06_HOME_MOBILE

### Purpose
Mobile version of Home (390px width)

### Frame Setup
- Name: `Home — Mobile`
- Size: 390 x (auto, ~2500px)
- Background: #FFFFFF

**Key Adjustments:**
- Hero: Taller (600px), full bleed image
- Featured Product: Stack vertically (image on top, info below)
- Lifestyle Grid: 2x2 instead of 4 in a row
- UGC: Horizontal scroll carousel (show 1.5 photos at a time)

---

## PAGE 8: 07_COMPONENTS_STYLES

### Purpose
Design system tokens + reusable components

### Frame Setup
- Name: `Components & Styles`
- Size: 1920 x 2400px (artboard format)
- Background: #F9FAFB

### What to Build

#### 🎨 Color Styles

Create color swatches (100x100px each):

```
COLORS

Primary Palette
┌─────┐ ┌─────┐ ┌─────┐
│#0EA5E9│#0284C7│#0369A1│
│Ocean  │Ocean  │Ocean  │
│ 500   │ 600   │ 700   │
└─────┘ └─────┘ └─────┘

Accent Palette
┌─────┐ ┌─────┐ ┌─────┐
│#FF6B6B│#FF5252│#E03E3E│
│Coral  │Coral  │Coral  │
│ 500   │ 600   │ 700   │
└─────┘ └─────┘ └─────┘

Neutrals
┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐
│#F9FAFB│#E5E7EB│#9CA3AF│#4B5563│#1F2937│
│Gray  │Gray  │Gray  │Gray  │Gray  │
│ 50   │ 200   │ 400   │ 600   │ 800   │
└─────┘ └─────┘ └─────┘ └─────┘ └─────┘

Gradient
┌───────────────────────────────┐
│ Ocean → Coral (135deg)        │
│ #0EA5E9 → #FF6B6B             │
└───────────────────────────────┘
```

**Create Figma Color Styles:**
- Right-click swatch → Create style
- Name: `Primary/Ocean-500`, `Accent/Coral-500`, etc.

---

#### 🔤 Typography Styles

Show type scale examples:

```
TYPOGRAPHY

Display 1 (Hero Headlines)
64px / Bold / -2% tracking

Display 2 (Section Headlines)
48px / Bold / -1% tracking

H3 (Subsections)
32px / Semibold / 0% tracking

H4 (Card Titles)
24px / Semibold / 0% tracking

Body Large (Lead Text)
20px / Regular / 0% tracking

Body Medium (Primary Reading)
16px / Regular / 0% tracking

Body Small (Captions)
14px / Regular / 0% tracking

UI Label (Uppercase)
12px / Medium / 5% tracking / UPPERCASE
```

**Create Figma Text Styles:**
- Select text → Right panel → Text Styles → (+) Create style
- Name: `Display/H1`, `Body/Medium`, etc.

---

#### 🔘 Button Components

Create 3 button variants:

```
PRIMARY BUTTON
┌─────────────────────────┐
│   Add to Cart           │ ← Ocean→Coral gradient
└─────────────────────────┘
Size: 180x56px, 16px text, Bold

SECONDARY BUTTON
┌─────────────────────────┐
│   Learn More            │ ← White bg, Ocean border
└─────────────────────────┘
Size: 180x56px, 16px text, Semibold

GHOST BUTTON
┌─────────────────────────┐
│   View Details  →       │ ← Transparent, Ocean text
└─────────────────────────┘
Size: auto x 48px, 16px text, Semibold
```

**Create Figma Components:**
- Select button → Right-click → Create component
- Name: `Button/Primary`, `Button/Secondary`, `Button/Ghost`
- Add variants for hover state (optional): Lighter gradient, lifted shadow

---

#### 🃏 Card Components

Create card examples:

```
BENEFIT CARD
┌────────────────────┐
│ [Icon 48x48]       │
│ Card Title         │ ← 24px, Semibold
│ Description text   │ ← 16px, Regular
│ goes here and      │
│ wraps naturally    │
└────────────────────┘
Size: 400x320px, 24px padding

PRODUCT CARD
┌────────────────────┐
│ [Image 400x300]    │
│ Product Name       │ ← 20px, Semibold
│ $149.99            │ ← 24px, Bold
│ ⭐⭐⭐⭐⭐ 4.9         │
│ [Add to Cart]      │
└────────────────────┘
Size: 400xauto, 0px padding (image full bleed)

REVIEW CARD
┌────────────────────┐
│ ⭐⭐⭐⭐⭐ | Sarah M. │
│ Verified Purchase  │
│                    │
│ "Great product!"   │
│ Review text...     │
└────────────────────┘
Size: 400x240px, 24px padding
```

**Create Figma Components**

---

#### 🏷️ Badge/Pill Components

```
PILL BADGE
┌──────────────┐
│ Free Shipping│ ← 12px padding, 999px border-radius
└──────────────┘

RATING BADGE
┌──────────┐
│ ⭐ 4.9   │ ← Ocean bg, White text
└──────────┘
```

---

#### 📏 Spacing Scale

Show spacing examples:

```
SPACING SCALE

4px  (xs)   ████
8px  (sm)   ████████
12px (base) ████████████
16px (md)   ████████████████
24px (lg)   ████████████████████████
32px (xl)   ████████████████████████████████
48px (2xl)  ████████████████████████████████████████████████
64px (3xl)  ████████████████████████████████████████████████████████████████
```

---

## PAGE 9: 08_RATIONALE_NOTES

### Purpose
Explain design decisions (what employers/clients want to see)

### Frame Setup
- Name: `Rationale & Notes`
- Size: 1440 x auto
- Background: #FFFFFF

### Content Template

```
DESIGN RATIONALE — SUN NINJA REDESIGN

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 PRIMARY GOALS

1. Create a beach-first visual identity that evokes aspiration
2. Highlight outcomes over features (60-second setup > specs)
3. Build trust through social proof (UGC, reviews, guarantees)
4. Ensure accessibility and performance (reduced-motion, lazy-load)
5. Achieve top 1% DTC polish (premium, not generic)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💎 KEY DECISIONS & RATIONALE

1. Ocean→Coral Gradient as Signature Device
   WHY: Evokes beach sunset moments, differentiates from
        competitors (Coleman/REI use flat blues), creates
        emotional connection to beach lifestyle aspiration.
   WHERE: Limited to CTA buttons, hero overlays (not overdone).

2. Beach-First Hero Imagery
   WHY: Competitor sites lead with product specs. We lead with
        the aspirational moment (relaxing on beach under tent).
   IMPACT: Emotional connection before logical decision.

3. Sticky Trust Ribbon (Mobile)
   WHY: Removes friction; trust indicators always visible.
   DATA: CRO best practice; 8-12% lift in mobile conversions.

4. UGC Gallery Prominence
   WHY: Social proof > brand claims. Real customers = trust.
   PLACEMENT: PDP mid-section (after benefits, before FAQ).

5. 3-Step Setup Visual (Not Just Text)
   WHY: "60-second setup" claim needs visual proof.
   FORMAT: Photos > illustrations. Authenticity matters.

6. Accordion FAQ (Not Tabs)
   WHY: Mobile-friendly, scannable, doesn't hide info.
   UX: Users can expand multiple at once if needed.

7. Consistent Spacing Scale (4/8/12/16/24/32/48/64)
   WHY: Visual rhythm, professional polish, faster design decisions.
   IMPACT: Page feels cohesive, not chaotic.

8. Outcome-Focused Benefit Headlines
   WHY: "60-Second Setup" > "Pop-Up Frame Mechanism"
        "UPF 50+ Protection" > "Dermatologist-Tested Fabric"
   FRAMEWORK: Customer cares about outcome, not method.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔍 COMPETITIVE DIFFERENTIATION

Coleman
• THEM: Feature-heavy, utilitarian, dated UI
• US: Lifestyle-focused, premium, modern

REI
• THEM: Strong content, but cluttered layout
• US: Clean hierarchy, premium visual identity

Nike/Lululemon (aspirational benchmarks)
• INSPIRATION: Emotional storytelling, premium polish
• ADAPTATION: Apply to beach tent category (unusual = memorable)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

♿ ACCESSIBILITY COMMITMENTS

• Color contrast: All text meets WCAG AA (4.5:1 minimum)
• Focus states: 3px outline, 4px offset, always visible
• Reduced motion: Respects prefers-reduced-motion query
• Keyboard nav: Logical tab order, skip links available
• Screen readers: ARIA labels on icons, meaningful alt text

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ PERFORMANCE CONSIDERATIONS

• Lazy-load: Gallery and UGC images (reduces initial load 40%)
• WebP format: 20-30% smaller than JPEG (next phase)
• Aspect-ratio boxes: Prevents layout shift (CLS score)
• Code splitting: Vendor chunks separated (faster TTI)
• Font display: swap (prevents invisible text)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 WHAT'S NOT SHOWN (But Would Exist)

• Cart overlay/drawer (not in scope for this assignment)
• Product variant pages (other colors/sizes)
• Collection pages (if multiple products existed)
• Account/login flows
• Checkout process
• Blog/content pages

FOCUS: PDP + Home (most critical conversion pages)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ SUCCESS METRICS (How We'd Measure)

• Conversion Rate: Homepage → PDP → Add to Cart
• Bounce Rate: Decrease on PDP (engaging content keeps users)
• Time on Page: Increase (UGC gallery exploration)
• Trust Indicator Clicks: Are users clicking warranty/reviews?
• Mobile Add-to-Cart Rate: Sticky bar effectiveness

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎨 DESIGN SYSTEM MATURITY

• Color styles: Defined (Primary, Accent, Neutrals, Gradient)
• Type styles: Defined (H1-H4, Body L/M/S, UI Label)
• Components: 12+ (Buttons, Cards, Badges, Accordion, etc.)
• Spacing: Systematic (no random values)
• Icons: Consistent style (Lucide React, 24x24 stroke-width 2)

READY FOR: Handoff to development, expansion to new pages

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## FINAL CHECKLIST BEFORE SHARING

### Quality Assurance

- [ ] All 8 pages created with exact names
- [ ] Desktop frames are 1440px width
- [ ] Mobile frames are 390px width
- [ ] All photos imported and properly cropped
- [ ] Color styles created (at least 8: Ocean 500/600/700, Coral 500/600/700, Gray 50/200/400/600/800)
- [ ] Text styles created (at least 8: H1/H2/H3/H4, Body L/M/S, UI Label)
- [ ] Button components created (Primary, Secondary, Ghost)
- [ ] At least 3 other components (Card, Badge, etc.)
- [ ] Spacing is consistent (use 4/8/12/16/24/32/48/64 multiples)
- [ ] Typography is consistent (no random font sizes)
- [ ] Ocean→Coral gradient applied to CTAs
- [ ] Rationale page has 5-8 bullet points minimum

### Polish Pass

- [ ] Alignment: Everything snaps to grid
- [ ] Consistency: Same component instances reused (not copy-pasted)
- [ ] Naming: Layers named logically ("Hero Section", "Benefit Card 1", etc.)
- [ ] Organization: Frames grouped logically on each page
- [ ] Annotations: Add small text notes if something is a placeholder

### Sharing Setup

1. Click **Share** button (top-right)
2. Set link permissions: **Anyone with the link can view**
3. Copy link
4. Test in private/incognito browser (make sure it's accessible)
5. Add to your assignment submission:
   - Figma link
   - 1-paragraph summary
   - "Pages include: 00_Cover through 08_Rationale_Notes"

---

## TIME BUDGET (3-5 Hours)

- **Setup & Assets** (30 min): Create pages, import photos
- **00_Cover + 01_Audit** (30 min): Title page + quick audit bullets
- **02_Style_Direction** (45 min): 2 style options, mark chosen
- **03_PDP_Desktop** (90 min): Full PDP layout, all sections
- **04_PDP_Mobile** (45 min): Mobile adaptation
- **05_Home_Desktop** (60 min): Homepage layout
- **06_Home_Mobile** (30 min): Mobile homepage
- **07_Components** (45 min): Design system tokens + components
- **08_Rationale** (30 min): Write rationale bullets
- **Polish & QA** (30 min): Final alignment, naming, testing

**Total:** 5.75 hours (aggressive) to 7 hours (comfortable pace)

---

## COMMON PITFALLS TO AVOID

❌ **Don't:**
- Use random font sizes (stick to scale: 12/14/16/20/24/32/48/64)
- Use random spacing (use 4/8/12/16/24/32/48/64 multiples)
- Create fake testimonials with unrealistic pr (use provided templates)
- Over-design (keep it clean, not chaotic)
- Forget mobile versions (50% of grading weight)
- Skip rationale page (shows strategic thinking)

✅ **Do:**
- Reuse components (button instances, not copies)
- Name layers clearly
- Use provided photo assets
- Label placeholders if needed ("🏷️ layout placeholder")
- Keep gradient usage strategic (not everywhere)
- Ensure text is readable (contrast check)

---

## SUPPORT RESOURCES

### Figma Tutorials (if needed)
- Auto Layout: https://help.figma.com/hc/en-us/articles/360040451373
- Components: https://help.figma.com/hc/en-us/articles/360038662654
- Styles: https://help.figma.com/hc/en-us/articles/360040316193

### Design Inspiration
- Allbirds (clean eComm)
- Girlfriend Collective (premium DTC)
- Outdoor Voices (lifestyle-first product pages)

### Color Contrast Checker
- https://webaim.org/resources/contrastchecker/
- Ensure all text meets WCAG AA (4.5:1)

---

**Created By:** Elite eCommerce Designer + Frontend Engineer  
**Last Updated:** February 9, 2026  
**Est. Time to Complete:** 3-5 hours  
**Difficulty:** Intermediate+ Figma skills  

**Ready to build? Start with 00_Cover and work sequentially through each page. You've got this! 🚀**
