# README: Figma Plugin for Sun Ninja Redesign
## Auto-Generate Complete Figma File Structure

**Plugin Name:** Sun Ninja Scaffold Generator  
**Purpose:** Automatically create all 8 pages + frames + styles for the redesign deliverable  
**Time Saved:** ~45 minutes of manual setup  
**Status:** ✅ Production Ready  

---

## WHAT THIS PLUGIN DOES

This Figma plugin automatically generates the complete file structure for the Sun Ninja redesign assignment, including:

1. **8 Figma Pages** (exact names, proper order)
2. **Desktop & Mobile Frames** (1440px & 390px widths)
3. **Color Styles** (Ocean, Coral, Neutrals, Gradient references)
4. **Typography Styles** (H1-H4, Body L/M/S, UI Label)
5. **Component Placeholders** (Buttons, Cards, Badges ready to design)
6. **Rationale Text Blocks** (Pre-filled design decision templates)

---

## QUICK START

### Option 1: Use Figma Community Plugin (Recommended)
**Status:** Not published (local dev only)

### Option 2: Install Locally (Dev Mode)

**Prerequisites:**
- Figma Desktop App installed
- Node.js v18+ and npm

**Steps:**

1. **Navigate to plugin directory:**
   ```bash
   cd "/Users/user/Downloads/Sun Ninja Redesign Project/figma-plugin"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the plugin:**
   ```bash
   npm run build
   ```
   
   Output: `dist/` folder with compiled `code.js`

4. **Import into Figma:**
   - Open Figma Desktop app
   - Click **Plugins** in menu bar
   - Select **Development** → **Import plugin from manifest...**
   - Navigate to: `/Users/user/Downloads/Sun Ninja Redesign Project/figma-plugin/`
   - Select `manifest.json`
   - Plugin appears in **Development** section

5. **Run the plugin:**
   - In any Figma file, go to **Plugins** → **Development** → **Sun Ninja Scaffold Generator**
   - Click **Run**
   - Watch as pages and frames are auto-created!

---

## WHAT GETS CREATED

### Page Structure
```
File: "Sun Ninja Redesign"
├── 00_Cover
│   └── Frame: Cover (1920x1080)
│       └── Text: Title, subtitle, credentials placeholders
│
├── 01_Quick_Audit
│   └── Frame: Quick Audit (1440x1200)
│       └── Text: Audit bullets template (strengths, opportunities)
│
├── 02_Style_Direction
│   ├── Frame: Style A — Ocean Sunset (CHOSEN) (800x1200)
│   └── Frame: Style B — Coastal Minimal (800x1200)
│       └── Text: Rationale for chosen direction
│
├── 03_PDP_Desktop
│   └── Frame: PDP — Desktop 1440 (1440x4200)
│       └── Sections: Hero, Benefits, Setup, Reviews, FAQ, CTA
│
├── 04_PDP_Mobile
│   └── Frame: PDP — Mobile 390 (390x5200)
│       └── Sections: Same as desktop, mobile-optimized
│
├── 05_Home_Desktop
│   └── Frame: Home — Desktop 1440 (1440x3600)
│       └── Sections: Hero, Featured Product, Lifestyle, Setup, Social Proof
│
├── 06_Home_Mobile
│   └── Frame: Home — Mobile 390 (390x4200)
│       └── Sections: Same as desktop, single column
│
├── 07_Components_Styles
│   └── Frame: Components & Styles (1920x2400)
│       ├── Color Swatches (all palette colors)
│       ├── Typography Scale (H1-H4, Body, UI)
│       ├── Button Components (Primary/Secondary/Ghost)
│       ├── Card Components (Benefit/Product/Review)
│       └── Spacing Scale visualization
│
└── 08_Rationale_Notes
    └── Frame: Rationale & Notes (1440x2000)
        └── Text: Pre-filled design decision bullets
```

### Color Styles Created
- `Ocean/500` - #0EA5E9 (primary blue)
- `Ocean/600` - #0284C7 (darker blue)
- `Ocean/700` - #0369A1 (darkest blue)
- `Coral/500` - #FF6B6B (primary coral)
- `Coral/600` - #FF5252 (darker coral)
- `Coral/700` - #E03E3E (darkest coral)
- `Neutral/50` through `Neutral/900` (gray scale)

### Typography Styles Created
- `Display/H1` - 64px Bold (hero headlines)
- `Display/H2` - 48px Bold (section headlines)
- `Heading/H3` - 32px Semibold (subsections)
- `Heading/H4` - 24px Semibold (card titles)
- `Body/Large` - 20px Regular (lead text)
- `Body/Medium` - 16px Regular (primary reading)
- `Body/Small` - 14px Regular (captions)
- `UI/Label` - 12px Medium, uppercase, 5% tracking

### Component Placeholders
- **Buttons:** Primary (gradient), Secondary (outlined), Ghost (text-only)
- **Cards:** Benefit Card, Product Card, Review Card
- **Badges:** Pill Badge, Rating Badge
- **Icons:** Placeholder shapes (replace with Lucide icons)

---

## AFTER PLUGIN RUNS

### Next Steps (Manual Work Required)

1. **Import Photos**
   - Drag images from `public/assets/photos/` into appropriate frames
   - See [FIGMA_SUBMISSION_PLAYBOOK.md](../FIGMA_SUBMISSION_PLAYBOOK.md) for exact mapping

2. **Apply Design System**
   - Use created color styles (not random colors)
   - Use created text styles (not random fonts)
   - Maintain spacing scale (4/8/12/16/24/32/48/64)

3. **Design Components**
   - Replace placeholder buttons with polished versions
   - Add hover states (optional but impressive)
   - Create variants for different button types

4. **Add Content**
   - Replace placeholder text with real copy (or realistic filler)
   - Import product photos into gallery sections
   - Add UGC photos to social proof areas

5. **Polish & Refine**
   - Align everything to grid
   - Check contrast ratios (WCAG AA compliance)
   - Name layers clearly
   - Group related elements

6. **Final QA**
   - Review FIGMA_SUBMISSION_PLAYBOOK.md checklist
   - Test share link in private/incognito browser
   - Ensure all placeholders are filled or labeled

---

## CUSTOMIZATION

### Modify Plugin Before Building

**Change Page Names:**
Edit `src/code.ts`, lines 8-18:
```typescript
const PAGE_NAMES = [
  '00_Cover',
  '01_Quick_Audit',
  // ... add/remove/rename pages here
]
```

**Change Frame Sizes:**
Edit `src/code.ts`, lines 20-25:
```typescript
const FRAME_SPECS = {
  '03_PDP_Desktop': { name: 'PDP — Desktop 1440', width: 1440, height: 4200 },
  // ... adjust dimensions here
}
```

**Change Color Palette:**
Edit `src/code.ts`, lines 27-43:
```typescript
const COLOR_PALETTE = {
  Primary: { r: 15 / 255, g: 59 / 255, b: 76 / 255 }, // Ocean
  // ... modify RGB values here
}
```

**After Changes:**
```bash
npm run build  # Rebuild
# Re-import manifest in Figma
```

---

## PLUGIN COMMANDS

### Development
```bash
npm install       # Install dependencies
npm run build     # Build for production (creates dist/)
npm run dev       # Watch mode (auto-rebuild on save)
```

### Files Structure
```
figma-plugin/
├── manifest.json      # Figma plugin manifest
├── package.json       # npm dependencies
├── tsconfig.json      # TypeScript config
├── ui.html           # Plugin UI (minimal)
├── src/
│   └── code.ts       # Main plugin logic (493 lines)
├── dist/             # Built output (created by npm run build)
│   └── code.js       # Compiled JavaScript
└── README.md         # This file
```

---

## TROUBLESHOOTING

### Plugin doesn't appear in Figma
- **Check:** Figma Desktop app (not browser version)
- **Check:** Plugin imported from correct `manifest.json` path
- **Fix:** Re-import: Plugins → Development → Import plugin from manifest

### "Build failed" error
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Colors/styles don't match design system
- **Check:** Latest version built? (`npm run build`)
- **Check:** manifest.json points to `dist/code.js` (not `src/code.ts`)
- **Fix:** Re-import plugin after rebuild

### Frames overlap or are mispositioned
- **Check:** Frame specs in `src/code.ts` (lines 20-25)
- **Fix:** Manually adjust `x` and `y` positions in code, rebuild

---

## ADVANCED: EXTENDING THE PLUGIN

### Add New Page
1. Edit `src/code.ts`, add to `PAGE_NAMES` array
2. Add frame spec to `FRAME_SPECS` (if frame needed)
3. Add logic in `createPages()` function (~line 100)
4. Rebuild: `npm run build`

### Add Component Library
1. Create function `createButtonComponent()` (~line 300)
2. Call from `createComponents()` function
3. Use Figma Plugin API: `figma.createComponent()`
4. Reference: https://www.figma.com/plugin-docs/api/ComponentNode/

### Auto-Import Photos (Experimental)
**Challenge:** Figma plugins can't access local file system directly  
**Workaround:** Use base64-encoded images in plugin code (increases size)  
**Not Recommended:** Manual import is faster and more flexible

---

## BENEFITS OF USING THIS PLUGIN

✅ **Time Savings:** 30-45 minutes of manual setup eliminated  
✅ **Consistency:** Pages always created with exact names/order  
✅ **Design System:** Color/typography styles pre-configured  
✅ **Fewer Errors:** No typos in page names, no missed frames  
✅ **Professional:** Shows technical sophistication to evaluators  
✅ **Repeatable:** Run on multiple files if experimenting  

---

## RELATED DOCUMENTATION

- [FIGMA_SUBMISSION_PLAYBOOK.md](../FIGMA_SUBMISSION_PLAYBOOK.md) - Full step-by-step guide
- [WOW_UPGRADES.md](../WOW_UPGRADES.md) - Design system details
- [ASSET_AUDIT_REPORT.md](../ASSET_AUDIT_REPORT.md) - Photo library inventory

---

## SUPPORT

### Questions?
1. Check [FIGMA_SUBMISSION_PLAYBOOK.md](../FIGMA_SUBMISSION_PLAYBOOK.md) first
2. Review Figma Plugin API docs: https://www.figma.com/plugin-docs/
3. Inspect `src/code.ts` comments (heavily annotated)

### Bug Reports
- File format: Issue description + expected vs actual behavior
- Include: Figma version, Node version, OS

### Feature Requests
- Enhancement ideas welcome
- Keep scope focused on Sun Ninja assignment

---

**Plugin Author:** Elite Senior Frontend Engineer  
**Last Updated:** February 9, 2026  
**Version:** 1.0.0  
**License:** MIT (for assignment use)  

**Ready to scaffold? Run `npm run build` and import into Figma! 🚀**
