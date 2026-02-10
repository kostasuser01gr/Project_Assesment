# 🏖️ Sun Ninja Scaffold Generator

**Dev-only Figma plugin** that auto-generates the complete file structure for the Sun Ninja PDP + Homepage redesign assignment.

---

## 🎯 What It Does

When you click "Generate Scaffold", this plugin automatically creates:

### Pages (8 total)

- `00_Cover` — Project title page with navigation
- `01_Quick_Audit` — Current site analysis template
- `02_Style_Direction` — Mood board / style exploration
- `03_PDP_Desktop` — Product page desktop (1440w)
- `04_PDP_Mobile` — Product page mobile (390w)
- `05_Home_Desktop` — Homepage desktop (1440w)
- `06_Home_Mobile` — Homepage mobile (390w)
- `07_Components_Styles` — Design system + components
- `08_Rationale_Notes` — Design decisions documentation

### Design System (in page 07)

- **14 Color Styles** (Primary, Secondary, Accent, Neutral scale)
- **8 Text Styles** (H1-H3, Body L/M/S, UI Label/Button)
- **Spacing Scale** (4/8/12/16/24/32/48/64px with visual reference)
- **10 Component Placeholders**:
  - Buttons (Primary/Secondary/Ghost)
  - Product Card
  - Badge/Pill
  - Rating Stars
  - Review Card
  - Accordion/FAQ Item
  - Sticky Cart Bar (Mobile)
  - Icon Sample

### Artboards

- Pre-sized frames in each design page with correct dimensions
- Desktop: 1440px wide
- Mobile: 390px wide
- Heights based on typical page length

---

## 🚀 Setup Instructions

### 1. Install Dependencies

```bash
cd figma-plugin
npm install
```

### 2. Build the Plugin

```bash
npm run build
```

For development with auto-rebuild:

```bash
npm run watch
```

### 3. Load Plugin in Figma

1. Open Figma Desktop App
2. Go to **Plugins → Development → Import plugin from manifest...**
3. Navigate to this folder and select `manifest.json`
4. The plugin will appear in your **Plugins** menu

### 4. Run the Plugin

1. Create a **new Figma file** (or open existing)
   - ⚠️ **Important**: Use a **Draft file** or personal file, NOT a Starter team file (3-page limit)
2. Go to **Plugins → Development → Sun Ninja Scaffold Generator**
3. Click **"Generate Scaffold"**
4. Wait 5-10 seconds for everything to generate
5. You'll be navigated to the Cover page automatically

---

## ⚙️ Development Notes

### File Structure

```
figma-plugin/
├── manifest.json       # Plugin config
├── ui.html            # Plugin UI
├── src/
│   └── code.ts        # Main logic
├── dist/
│   └── code.js        # Built output (auto-generated)
├── package.json
├── tsconfig.json
└── README.md
```

### Key Functions

- `ensurePage(name)` — Creates or retrieves page, handles Starter plan limit
- `ensureFrame(...)` — Creates artboard frames with specific dimensions
- `ensurePaintStyles()` — Generates color palette
- `ensureTextStyles()` — Generates typography scale
- `buildComponents()` — Creates component placeholders
- `generateScaffold()` — Main orchestration function

### Error Handling

- **Page Limit**: If you hit the 3-page limit (Starter plan), you'll see a notification explaining how to fix it
- **Duplicate Prevention**: Running the plugin multiple times won't create duplicates—it updates existing pages/frames
- **Font Fallback**: If "Inter" font isn't available, it falls back to system default

---

## 🎨 Color Palette Reference

| Name          | Hex       | Usage                 |
| ------------- | --------- | --------------------- |
| Primary       | `#0F3B4C` | Ocean (trust, calm)   |
| Secondary     | `#FF6B5A` | Coral (energy, CTA)   |
| Accent        | `#FFB84D` | Gold (highlight, sun) |
| Neutral/0-900 | Various   | Grayscale system      |

---

## 📐 Typography Scale

| Style         | Size | Weight   | Usage          |
| ------------- | ---- | -------- | -------------- |
| H1 / Display  | 56px | Bold     | Hero headlines |
| H2 / Title    | 40px | Bold     | Section titles |
| H3 / Subtitle | 28px | SemiBold | Subsections    |
| Body / Large  | 18px | Regular  | Intro copy     |
| Body / Medium | 16px | Regular  | Standard copy  |
| Body / Small  | 14px | Regular  | Captions       |
| UI / Label    | 14px | Medium   | Form labels    |
| UI / Button   | 16px | SemiBold | CTAs           |

---

## 🐛 Troubleshooting

### "Page limit reached" error

**Solution**: You're in a Starter team file. Create a **Draft file** instead:

1. Click your profile in top-left
2. Select **Drafts**
3. Create new file there
4. Run plugin again

### Plugin doesn't appear in menu

**Solution**:

1. Make sure you ran `npm run build`
2. Check that `dist/code.js` exists
3. In Figma, go to **Plugins → Development → Reload** the plugin

### Fonts look wrong

**Solution**: The plugin uses "Inter" font. If not installed:

1. Download from [Google Fonts](https://fonts.google.com/specimen/Inter)
2. Install on your system
3. Restart Figma

### Build errors

**Solution**:

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 🎯 Next Steps After Generation

1. **00_Cover**: Update designer name and date
2. **01_Quick_Audit**: Add screenshots of current sunninja.com site with annotations
3. **02_Style_Direction**: Create mood board (collect inspiration, define visual direction)
4. **03_PDP_Desktop**: Design the product page (main focus)
5. **04_PDP_Mobile**: Adapt PDP for mobile
6. **05_Home_Desktop**: Design homepage
7. **06_Home_Mobile**: Adapt homepage for mobile
8. **07_Components_Styles**: Refine components as you build
9. **08_Rationale_Notes**: Document your design decisions

---

## 📝 License

Dev tool for internal use. Not for distribution.

---

## 🤝 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review Figma Plugin API docs: https://www.figma.com/plugin-docs/
3. Verify you're using Figma Desktop (not browser version)

---

**Created by Konstantinos Foskolakis — Full Stack Web Engineer**
