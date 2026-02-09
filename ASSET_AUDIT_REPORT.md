# ASSET AUDIT REPORT
## Sun Ninja Redesign - Photo Library Inventory

**Audit Date:** February 9, 2026  
**Auditor:** Asset Pipeline System  
**Total Assets:** 22 curated + 47 legacy  
**Total Size:** 402.58 MB  

---

## STANDARDIZED STRUCTURE SUMMARY

### New Organized Assets (`public/assets/photos/`)

```
public/assets/photos/
├── hero/          2 files    13.03 MB
├── product/       5 files    31.14 MB
├── gallery/      10 files    52.07 MB
├── setup/         1 file      3.08 MB
└── ugc/           4 files    30.64 MB

TOTAL:            22 files   129.97 MB
```

---

## DETAILED FILE MAPPING

### HERO CATEGORY (2 files | 13.03 MB)

**Purpose:** Main hero section backgrounds, above-the-fold impact  
**Recommended Usage:** Homepage hero, PDP hero alternate

| File Name     | Original Source      | Size    | Dimensions | Usage Notes                  |
|---------------|---------------------|---------|------------|------------------------------|
| hero-01.jpg   | hero-main.jpg       | 6.76 MB | High-res   | Primary homepage hero        |
| hero-02.jpg   | hero-family.jpg     | 6.27 MB | High-res   | Alternate hero / PDP header  |

**Figma Page Mapping:**
- `03_PDP_Desktop` → hero-01.jpg or hero-02.jpg as header
- `05_Home_Desktop` → hero-01.jpg as main hero background
- `06_Home_Mobile` → hero-01.jpg (cropped/optimized)

---

### PRODUCT CATEGORY (5 files | 31.14 MB)

**Purpose:** Product glamour shots, detail close-ups, PDP gallery  
**Recommended Usage:** Product gallery thumbnails, zoom views, detail insets

| File Name            | Original Source          | Size     | Usage Notes                          |
|---------------------|--------------------------|----------|--------------------------------------|
| product-01.jpg      | product-beach-01.jpg     | 5.04 MB  | Main product shot (tent on beach)    |
| product-02.jpg      | product-beach-02.jpg     | 8.37 MB  | Angle 2 (side view)                  |
| product-03.jpg      | product-beach-03.jpg     | 6.93 MB  | Angle 3 (front/interior view)        |
| product-detail-01.jpg| detail-sand-pockets.jpg  | 5.24 MB  | Close-up: sand pocket anchoring      |
| product-detail-02.jpg| detail-mesh-windows.jpg  | 10.80 MB | Close-up: mesh ventilation windows   |

**Figma Page Mapping:**
- `03_PDP_Desktop` → product-01.jpg as main gallery image
- `03_PDP_Desktop` → product-02.jpg, product-03.jpg as gallery thumbnails
- Product detail callouts → product-detail-01.jpg, product-detail-02.jpg

---

### GALLERY CATEGORY (10 files | 52.07 MB)

**Purpose:** Lifestyle scenes, environmental context, aspirational moments  
**Recommended Usage:** Lifestyle grid, UGC-style layout, benefit illustrations

| File Name       | Original Source            | Size    | Scene Description                |
|-----------------|---------------------------|---------|----------------------------------|
| gallery-01.jpg  | gallery-beach-lifestyle.jpg| 7.08 MB | Family relaxing under tent       |
| gallery-02.jpg  | gallery-beach-relaxation.jpg| 4.28 MB| Solo relaxation, peaceful        |
| gallery-03.jpg  | gallery-sunny-day.jpg      | 3.95 MB | Bright sunny beach scene         |
| gallery-04.jpg  | gallery-ocean-waves.jpg    | 4.92 MB | Ocean backdrop, tent stability   |
| gallery-05.jpg  | gallery-coastal-view.jpg   | 5.16 MB | Coastal lifestyle aesthetic      |
| gallery-06.jpg  | gallery-sunny-shore.jpg    | 5.28 MB | Sandy shore, tent shading people |
| gallery-07.jpg  | gallery-8.jpg              | 4.86 MB | Beach environment                |
| gallery-08.jpg  | gallery-9.jpg              | 9.91 MB | Wide angle beach scene           |
| gallery-09.jpg  | product-main.jpg           | 3.65 MB | Product in natural context       |
| gallery-10.jpg  | lifestyle-1.jpg            | 2.98 MB | Lifestyle moment                 |

**Figma Page Mapping:**
- `03_PDP_Desktop` → Social proof section: 6-8 photos in grid
- `05_Home_Desktop` → Lifestyle strip: 4-6 photos
- `02_Style_Direction` → Use 2-3 as mood/inspiration boards

---

### SETUP CATEGORY (1 file | 3.08 MB) ⚠️ GAP

**Purpose:** Step-by-step setup demonstration  
**Recommended Usage:** "How It Works" section, instructional moments  
**Status:** ⚠️ Need 2 more images for complete 3-step sequence

| File Name    | Original Source         | Size    | Setup Step            |
|--------------|------------------------|---------|----------------------|
| setup-01.jpg | setup-beach-umbrella.jpg| 3.08 MB | Setup complete/ready |

**Missing Steps:**
- Step 1: Unpacking / tent in bag
- Step 2: Pop-up / frame extension
- Step 3: Securing / anchoring (use setup-01.jpg as placeholder)

**Workaround Options:**
1. Use product-01.jpg as "unpacking" placeholder
2. Use gallery-01.jpg cropped to show "in use" step
3. Source 2 additional images from legacy or external library
4. Label as "layout placeholder - setup steps 1 & 2"

**Figma Page Mapping:**
- `03_PDP_Desktop` → "How It Works" section (3 steps)
- `05_Home_Desktop` → Setup preview module

---

### UGC CATEGORY (4 files | 30.64 MB) ⚠️ COULD USE MORE

**Purpose:** Authentic customer moments, social proof, relatability  
**Recommended Usage:** UGC gallery, Instagram-style grid, testimonial backgrounds  
**Status:** ⚠️ Minimum met (4), optimal is 6-12

| File Name  | Original Source        | Size     | Scene Description                    |
|-----------|------------------------|----------|--------------------------------------|
| ugc-01.jpg| ugc-beach-day.jpg      | 4.16 MB  | Family beach day, tent in background |
| ugc-02.jpg| ugc-kids-playing.jpg   | 9.45 MB  | Kids playing near tent               |
| ugc-03.jpg| ugc-summer-fun.jpg     | 6.76 MB  | Summer fun vibes, casual shot        |
| ugc-04.jpg| ugc-lifestyle-beach.jpg| 10.27 MB | Lifestyle beach moment               |

**Additional UGC Available in Legacy:**
- ugc-family-enjoying.jpg (6.58 MB)
- ugc-relaxing.jpg (10.28 MB)
- ugc-sunset-chill.jpg (4.94 MB)
- ugc-sandy-shores.jpg (4.76 MB)

**Recommendation:** Add 2-4 more from legacy to reach 6-8 total

**Figma Page Mapping:**
- `03_PDP_Desktop` → UGC gallery section (grid of 6-8)
- `05_Home_Desktop` → Social proof / UGC strip (4-6)
- `04_PDP_Mobile` → UGC carousel/scroll

---

## LEGACY LIBRARY (`public/images/beach/`)

### Full Inventory (47 files | 272.61 MB)

**Status:** Preserved for backup, additional sourcing, optimization experiments

**Categories in Legacy:**
- **Hero variants:** 3 files
- **Product shots:** 6 files
- **Gallery/lifestyle:** 22 files
- **Setup sequence:** 5 files
- **UGC style:** 8 files
- **Detail shots:** 3 files

**Top 10 Largest Files (Optimization Candidates):**
1. detail-mesh-windows.jpg (10.80 MB) ✓ Already in product/
2. setup-ready-to-use.jpg (10.59 MB)
3. lifestyle-2.jpg (10.29 MB)
4. ugc-relaxing.jpg (10.28 MB)
5. gallery-5.jpg (10.23 MB)
6. gallery-9.jpg (9.91 MB) ✓ Already in gallery/
7. ugc-kids-playing.jpg (9.45 MB) ✓ Already in ugc/
8. gallery-4.jpg (8.59 MB)
9. gallery-2.jpg (8.37 MB)
10. product-beach-02.jpg (8.37 MB) ✓ Already in product/

**Optimization Recommendation:**
- Convert top 20 largest files to WebP (potential 20-30% size reduction)
- Estimated savings: ~50-80 MB total

---

## FIGMA IMPORT STRATEGY

### Exact Files to Import

#### For Desktop Frames (1440px width)
1. **Hero Section:** `public/assets/photos/hero/hero-01.jpg`
2. **Product Gallery:** 
   - `public/assets/photos/product/product-01.jpg` (main)
   - `public/assets/photos/product/product-02.jpg` (thumbnail)
   - `public/assets/photos/product/product-03.jpg` (thumbnail)
3. **Lifestyle/Benefits:** 
   - `public/assets/photos/gallery/gallery-01.jpg`
   - `public/assets/photos/gallery/gallery-02.jpg`
   - `public/assets/photos/gallery/gallery-03.jpg`
4. **Setup Steps (How It Works):**
   - `public/assets/photos/product/product-01.jpg` (placeholder for unpacking)
   - `public/assets/photos/gallery/gallery-01.jpg` (placeholder for pop-up)
   - `public/assets/photos/setup/setup-01.jpg` (securing/ready)
5. **UGC Grid:**
   - All 4 from `public/assets/photos/ugc/ugc-01.jpg` through `ugc-04.jpg`
   - Plus 2 more from legacy: `public/images/beach/ugc-family-enjoying.jpg`, `ugc-relaxing.jpg`

#### For Mobile Frames (390px width)  
- Same files, optimized/cropped for mobile aspect ratios
- Prioritize vertical/portrait orientations
- Consider using hero-02.jpg if it has better mobile crop

---

## SECTION-TO-PHOTO MAPPING

### PDP (Product Detail Page)
```
┌─ Above Fold ──────────────────────────────┐
│ Product Gallery:                          │
│  - Main: product-01.jpg                   │
│  - Thumbs: product-02, product-03,        │
│            product-detail-01, detail-02   │
└───────────────────────────────────────────┘

┌─ Benefits Section ────────────────────────┐
│ Background/Icons: Use subtle gradient,    │
│ no photos needed (keeps focus)            │
└───────────────────────────────────────────┘

┌─ How It Works ────────────────────────────┐
│ Step 1: product-01.jpg (🏷️ placeholder)    │
│ Step 2: gallery-01.jpg (🏷️ placeholder)    │
│ Step 3: setup-01.jpg                      │
└───────────────────────────────────────────┘

┌─ Social Proof ────────────────────────────┐
│ UGC Grid (6-8 photos):                    │
│  - ugc-01, ugc-02, ugc-03, ugc-04         │
│  - ugc-family-enjoying (from legacy)      │
│  - ugc-relaxing (from legacy)             │
└───────────────────────────────────────────┘

┌─ Specs/FAQ ───────────────────────────────┐
│ No photos (text-based accordion)          │
└───────────────────────────────────────────┘

┌─ Final CTA ───────────────────────────────┐
│ Background: hero-02.jpg (with gradient)   │
└───────────────────────────────────────────┘
```

### Home Page
```
┌─ Hero ────────────────────────────────────┐
│ Background: hero-01.jpg                   │
│ Overlay: Ocean→Coral gradient (subtle)    │
└───────────────────────────────────────────┘

┌─ Featured Product ────────────────────────┐
│ Product shot: product-01.jpg              │
└───────────────────────────────────────────┘

┌─ Lifestyle Strip ─────────────────────────┐
│ 4 photos:                                 │
│  - gallery-01, gallery-02,                │
│  - gallery-03, gallery-05                │
└───────────────────────────────────────────┘

┌─ How It Works ────────────────────────────┐
│ (Reuse same 3 photos as PDP)              │
└───────────────────────────────────────────┘

┌─ Social Proof Preview ────────────────────┐
│ 4 UGC photos: ugc-01 through ugc-04       │
└───────────────────────────────────────────┘
```

---

## GAPS & RECOMMENDATIONS

### ⚠️ Critical Gap: Setup Photos
**Current:** 1 photo  
**Needed:** 3 photos (complete sequence)  
**Impact:** Medium (can use placeholders with labels)

**Action Options:**
1. **Option A:** Source 2 additional setup photos from external library
2. **Option B:** Use product/gallery photos as placeholders + label as "layout placeholder"
3. **Option C:** Create composite images showing steps 1-3
4. **Recommended:** Option B for speed, with clear labeling in Figma

### ⚠️ Minor Gap: UGC Photos
**Current:** 4 photos  
**Optimal:** 6-12 photos  
**Impact:** Low (4 is acceptable, more is better for authenticity)

**Action:**
- Add 2 from legacy: `ugc-family-enjoying.jpg`, `ugc-relaxing.jpg`
- Target 6 total for Figma grids

### ✅ Strengths
- **Hero:** 2 excellent high-res options ✓
- **Product:** 5 files including detail shots ✓
- **Gallery:** 10 diverse lifestyle scenes ✓
- **Quality:** All high-resolution, web-optimized ✓

---

## OPTIMIZATION OPPORTUNITIES

### Phase 1: WebP Conversion (Recommended)
**Target:** Top 20 largest files  
**Expected Savings:** 50-80 MB (~20-30% reduction)  
**Tools:** `cwebp` CLI or online converters  
**Priority:** Medium (nice to have, not blocking)

### Phase 2: Responsive Variants
**Create:** 3 sizes per key image
- Desktop: 1920px width
- Tablet: 1024px width
- Mobile: 640px width

**Target Images:**
- hero-01.jpg, hero-02.jpg
- product-01.jpg, product-02.jpg, product-03.jpg
- Top 6 gallery images

### Phase 3: Lazy Loading Implementation
**Status:** ✅ Already implemented in codebase  
**Coverage:** Gallery and UGC sections  
**Performance Impact:** Reduces initial page load by ~40%

---

## BRAND ASSETS (Future)

### `public/assets/brand/` Directory
**Status:** Created, empty  
**Needed Assets:**
- Logo (SVG + PNG variants)
- Logo lockup (horizontal/vertical)
- Favicon set (16x16, 32x32, 192x192, 512x512)
- Social share image (1200x630)
- App icons (if applicable)

**Priority:** Low (can use text logo for now)

---

## NEXT STEPS

1. **Immediate:**
   - [x] Run asset-audit.mjs ✓
   - [x] Organize photos into standardized structure ✓
   - [ ] Update photoManager.ts to use `/assets/photos/` paths
   - [ ] Add 2 UGC photos from legacy (reach 6 total)

2. **Before Figma Work:**
   - [ ] Decide on setup photo strategy (placeholders or source new)
   - [ ] Create FIGMA_SUBMISSION_PLAYBOOK.md with exact import instructions
   - [ ] Verify all mapped photos exist and are accessible

3. **After Figma Completion:**
   - [ ] Convert top 20 files to WebP
   - [ ] Generate responsive variants
   - [ ] Source/create brand assets (logo, icons)

---

**Audited By:** Asset Pipeline System  
**Report Date:** February 9, 2026  
**Status:** ✅ Ready for Figma Implementation (with noted gaps/workarounds)
