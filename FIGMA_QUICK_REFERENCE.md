# 🎨 Sun Ninja Design Tokens - Quick Reference Card
## Copy-Paste Guide για Figma & Code

---

## 🎨 COLORS

### Primary Palette
```
Ocean-900:  #075985  ⬛ (Dark mode, headers)
Ocean-500:  #0EA5E9  🔵 (Primary brand - MAIN)
Ocean-300:  #7DD3FC  🔷 (Hover states)
Ocean-100:  #E0F2FE  ◻️ (Backgrounds)

Coral-900:  #991B1B  ⬛ (Dark accents)
Coral-500:  #FF6B6B  🔴 (CTAs, energy - MAIN)
Coral-300:  #FCA5A5  🟠 (Highlights)
Coral-100:  #FEE2E2  🟡 (Subtle backgrounds)

Gold-900:   #854D0E  ⬛ (Dark luxury)
Gold-500:   #FFD700  🟡 (Premium accents - MAIN)
Gold-300:   #FDE68A  ⚡ (Highlights)
Gold-100:   #FEF3C7  ☀️ (Badge backgrounds)

Cream-Base: #FFFBF5  ☐ (Main background)
```

### Neutrals
```
Gray-900:   #111827  ⬛ (Text primary)
Gray-600:   #4B5563  ◼️ (Text secondary)
Gray-400:   #9CA3AF  ◻️ (Text tertiary)
Gray-100:   #F3F4F6  ☐ (Borders, dividers)
White:      #FFFFFF  ☐ (Cards, overlays)
```

### Gradients (Linear, 135°)
```
Ocean → Coral:     linear-gradient(135deg, #0EA5E9 0%, #FF6B6B 100%)
Aurora:            linear-gradient(135deg, #0EA5E9 0%, #8B5CF6 50%, #FF6B6B 100%)
Gold Shine:        linear-gradient(135deg, #FFD700 0%, #FDE68A 50%, #FFD700 100%)
Holographic:       conic-gradient(from 180deg, #0EA5E9, #8B5CF6, #FF6B6B, #FFD700, #0EA5E9)
```

---

## 📝 TYPOGRAPHY

### Font Families
```
Display:  "Playfair Display", serif   (Luxury headlines)
Body:     "Inter", sans-serif          (Readability)
Accent:   "Montserrat", sans-serif     (CTAs, UI)
```

### Desktop Scale
```
Hero/H1:     96px / Bold (700) / -2% / 1.0   (Playfair)
H2:          64px / Bold (700) / -1% / 1.1   (Playfair)
H3:          48px / Semibold (600) / -0.5% / 1.2 (Playfair)
H4:          36px / Semibold (600) / 0% / 1.3    (Inter)
H5:          24px / Semibold (600) / 0% / 1.4    (Inter)
H6:          20px / Semibold (600) / 0% / 1.5    (Inter)
Body-Large:  18px / Regular (400) / 0% / 1.6     (Inter)
Body:        16px / Regular (400) / 0% / 1.6     (Inter)
Body-Small:  14px / Regular (400) / 0% / 1.5     (Inter)
Caption:     12px / Medium (500) / 0.5% / 1.4    (Montserrat)
Button:      16px / Semibold (600) / 0.5% / 1.0  (Montserrat, UPPERCASE)
```

### Mobile Scale (Key Changes)
```
Hero/H1:     48px  (50% reduction)
H2:          36px
H3:          28px
H4:          24px
(Rest: same as desktop)
```

---

## 📐 SPACING

### Base Scale (4px increment)
```
xs:   4px
sm:   8px
md:   16px
lg:   24px
xl:   32px
2xl:  48px
3xl:  64px
4xl:  96px
5xl:  128px
```

### Section Padding
```
Desktop:  128px top/bottom, 80px sides, max-width 1440px
Tablet:   96px top/bottom, 48px sides
Mobile:   64px top/bottom, 24px sides
```

### Component Padding
```
Card:    32px
Button:  16px (V) × 32px (H)
Badge:   8px (V) × 16px (H)
Input:   12px (V) × 16px (H)
```

---

## 🌟 EFFECTS

### Shadows
```
Quantum:
  0 0 20px rgba(14, 165, 233, 0.3),
  0 0 40px rgba(255, 107, 107, 0.2),
  0 20px 40px rgba(0, 0, 0, 0.15)

Glass-SM:
  0 1px 2px rgba(0, 0, 0, 0.05),
  inset 0 0 20px rgba(255, 255, 255, 0.1)

Glass-MD:
  0 4px 6px rgba(0, 0, 0, 0.07),
  inset 0 0 30px rgba(255, 255, 255, 0.15)

Glass-LG:
  0 10px 15px rgba(0, 0, 0, 0.1),
  inset 0 0 40px rgba(255, 255, 255, 0.2)
```

### Border Radius
```
sm:   8px   (badges, small buttons)
md:   16px  (cards, inputs)
lg:   24px  (large cards, modals)
xl:   32px  (hero elements)
full: 9999px (pills, avatars)
```

### Glassmorphism
```
Glass-Light:
  Background: rgba(255, 255, 255, 0.15)
  Backdrop-filter: blur(20px) saturate(180%)
  Border: 1px solid rgba(255, 255, 255, 0.2)

Glass-Ocean:
  Background: rgba(14, 165, 233, 0.1)
  Backdrop-filter: blur(24px)
  Border: 1px solid rgba(14, 165, 233, 0.2)

Glass-Coral:
  Background: rgba(255, 107, 107, 0.1)
  Backdrop-filter: blur(24px)
  Border: 1px solid rgba(255, 107, 107, 0.2)

Glass-Gold:
  Background: rgba(255, 215, 0, 0.08)
  Backdrop-filter: blur(28px)
  Border: 1px solid rgba(255, 215, 0, 0.3)
```

---

## 🔘 BUTTON SPECS

### Quantum Primary Button
```
Size: Auto-layout (HUG × HUG)
Padding: 16px (V) × 32px (H)
Background: gradient Ocean → Coral (135°)
Border-radius: 12px
Typography: Button (16px, Semibold, Montserrat, UPPERCASE)
Shadow: Quantum
Text color: White

Hover:
  Transform: translateY(-2px)
  Shadow: Quantum (1.5× intensity)
  Shimmer: gradient sweep animation (2s)
  Glow: 0 0 30px rgba(14, 165, 233, 0.5)
```

### Secondary Button
```
Background: rgba(255, 255, 255, 0.1)
Backdrop-filter: blur(20px)
Border: 1px solid rgba(255, 255, 255, 0.2)
Text color: White

Hover:
  Background: rgba(255, 255, 255, 0.2)
  Transform: translateY(-2px)
```

### Ghost Button
```
Background: transparent
Text color: Ocean-500

Hover:
  Background: Ocean-100
  Text color: Ocean-600
```

---

## 🎴 CARD SPECS

### Glass Card (Default)
```
Auto-layout: Vertical, gap 16px
Padding: 32px
Background: Glass-light (rgba(255,255,255,0.15), blur 20px)
Border: 1px solid rgba(255, 255, 255, 0.2)
Border-radius: 24px
Shadow: Glass-MD

Hover:
  Transform: rotateY(2deg) rotateX(-2deg)
  Shadow: Glass-LG
  Transition: 300ms cubic-bezier
```

### Product Card
```
Frame: Auto-layout Vertical
Image: Aspect 4:3, border-radius 16px (top only)
Content padding: 32px
Background: Glass-light
Border: White/20

Hover:
  Card: translateY(-8px), shadow increase
  Image: scale(1.05)
  Transition: 300ms ease
```

---

## 🏷️ BADGE SPECS

### Trust Badge
```
Auto-layout: Horizontal, gap 12px
Padding: 12px (V) × 16px (H)
Background: Glass-light
Border: White/20, 1px
Border-radius: 9999px (full pill)
Icon: 24×24, color varies (Ocean/Coral/Gold)
Text: 14px, Semibold, color Gray-900

Hover:
  Glow: 0 0 20px (icon color)
  Scale: 1.05
```

### Price Badge
```
Typography: H3 (36px, Bold)
Color: Gold-500
Shadow: 0 2px 4px rgba(0,0,0,0.1)
```

---

## ⭐ REVIEW CARD

### Structure
```
Frame: 360×auto (desktop), 300×auto (mobile)
Padding: 24px
Background: Glass-light
Border-radius: 16px

Content (Auto-layout Vertical, gap 16px):
├─ Header (Horizontal, space-between)
│  ├─ Stars (5×, 20×20, Gold-500)
│  └─ Verified (CheckCircle, Ocean-500, 16×16)
├─ Title (H5, Gray-900)
├─ Body (16px, Gray-600, max 4 lines)
├─ Photo (80×80, optional)
└─ Reviewer (Horizontal, gap 12px)
   ├─ Avatar (48×48, circle)
   └─ Name + Location (14px, Gray-600)

Hover:
  Transform: rotateY(2deg) rotateX(-2deg)
  Shadow: 0 10px 30px rgba(0,0,0,0.15)
```

---

## 📱 RESPONSIVE BREAKPOINTS

```
Mobile:  375px  (min-width, iPhone SE)
Tablet:  768px  (iPad portrait)
Desktop: 1024px (standard laptop)
Max:     1440px (container max-width)
```

### Grid Changes
```
Desktop:  3 columns (product grid, reviews)
Tablet:   2 columns
Mobile:   1 column (vertical stack)
```

---

## ⚡ ANIMATIONS

### Timing Functions
```
Default:     300ms ease-out
Fast:        200ms ease-in-out
Slow:        600ms cubic-bezier(0.34, 1.56, 0.64, 1) (spring)
Quantum Glow: 3s ease-in-out infinite
Shimmer:     2s linear infinite
Float:       6s ease-in-out infinite
```

### Keyframe Names
```
@keyframes quantum-glow { ... }
@keyframes shimmer { ... }
@keyframes float { ... }
@keyframes fade-in-up { ... }
@keyframes holographic-rotate { ... }
```

### Hover Transforms
```
Button:       translateY(-2px), scale(1.02)
Card:         translateY(-8px), rotateY(2deg) rotateX(-2deg)
Image:        scale(1.05)
Icon:         scale(1.1), rotate(5deg)
```

---

## 🎯 COMPONENT STATES

### Button States
```
Default:  Base styles above
Hover:    Lift, glow, shimmer
Active:   translateY(0), scale(0.98)
Disabled: opacity 50%, cursor not-allowed
Loading:  Spinner icon, "Loading..." text
```

### Input States
```
Default:  Border Gray-300
Focus:    Border Ocean-500, ring 0 0 0 3px Ocean-100
Error:    Border Coral-500, text Coral-600
Success:  Border Green-500, checkmark icon
```

### Interactive States
```
Link:     Ocean-500, underline on hover
Active:   Ocean-700, bold
Visited:  Purple-600
```

---

## 📋 COPY FORMULAS

### Headlines
```
Pattern: [Outcome] + [Promise]
Example: "Your Beach Day, Perfected"
         "Shade in 60 Seconds. Memories Forever."
```

### Body Copy
```
Pattern: [Benefit] + [Emotional Hook]
Example: "Block 98% of harmful UV rays. Your skin's best friend all day long."
```

### CTAs
```
Pattern: [Action] + [Value/Outcome]
Example: "Shop Now – $149.99" (price transparency)
         "Start Your Beach Ritual" (emotional)
```

### Trust Signals
```
Pattern: [Stat/Number] + [Outcome]
Example: "10,000+ Happy Customers"
         "UPF 50+ Protection"
```

---

## ✅ QUICK CHECKLIST

### Every Component Should Have:
- [ ] Auto-layout (not fixed positioning)
- [ ] Named layers (not "Rectangle 47")
- [ ] Proper spacing (use token scale)
- [ ] Hover state (if interactive)
- [ ] Accessibility (contrast, focus states)
- [ ] Responsive behavior (HUG/FILL/MIN/MAX)

### Every Page Should Have:
- [ ] Max-width container (1440px)
- [ ] Section padding (128px desktop, 64px mobile)
- [ ] Clear hierarchy (H1 → H2 → Body)
- [ ] Trust signals (badges, reviews, guarantees)
- [ ] Clear CTA (above fold + end of page)
- [ ] Mobile-optimized layout

---

## 🚀 FIGMA SHORTCUTS

```
Frame:           F
Rectangle:       R
Text:            T
Auto-layout:     Shift + A
Component:       Ctrl/Cmd + Alt + K
Instance:        Ctrl/Cmd + D
Measure:         Alt (hold while hovering)
Copy properties: Ctrl/Cmd + Alt + C
Paste:           Ctrl/Cmd + Alt + V
Plugin:          Ctrl/Cmd + /
```

---

## 🎨 COLOR PSYCHOLOGY

```
Ocean (#0EA5E9):   Trust, Calm, Premium (primary brand)
Coral (#FF6B6B):   Energy, Warmth, Urgency (CTAs)
Gold (#FFD700):    Luxury, Exclusivity, Success (accents)
Cream (#FFFBF5):   Sophistication, Space, Elegance (background)
```

**Usage Strategy**:
- **70% Cream**: Main background, breathing room
- **20% Ocean**: Brand touchpoints, links, icons
- **8% Coral**: CTAs, urgency elements
- **2% Gold**: Premium highlights, badges, success states

---

## 📐 GOLDEN RATIOS

```
Hero Height:      95vh (min 700px)
Section Padding:  128px (8× base unit)
Card Padding:     32px (2× base unit)
Button Padding:   16×32px (1:2 ratio)
Image Ratios:     4:3 (product), 16:9 (lifestyle), 1:1 (avatar)
```

---

## 🎯 CONVERSION PRIORITIES

```
CRITICAL (must be above fold):
1. Value proposition headline
2. Price (transparency = trust)
3. Primary CTA
4. Social proof (rating + review count)
5. Trust badges (UPF, warranty, shipping)

HIGH (within first 2 scrolls):
6. Product showcase (3 sizes)
7. Benefits (outcome-focused)
8. Setup simplicity (60s guide)

MEDIUM (mid-page):
9. Reviews (6+ samples)
10. UGC gallery (social proof)
11. FAQ (objection handling)

CLOSING (before footer):
12. Final CTA (repeat value prop)
13. Guarantee text (30-day, 2-year)
14. Trust badges (repeat)
```

---

**🌊 Αποθήκευσε αυτό το αρχείο ως bookmark - θα το χρειάζεσαι συνεχώς κατά τη διάρκεια του build!**

**Copy-paste values απευθείας στο Figma ή στον κώδικα. Όλα είναι production-ready.** ✨
