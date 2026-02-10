// Sun Ninja Elite Scaffold Generator - TOP 1% Quality
// Auto-generates complete design system with sun-glow gradients, premium components, CRO optimization

// ============================================================================
// CONSTANTS - ELITE DESIGN SYSTEM
// ============================================================================

const PAGE_NAMES = [
  '00_Cover',
  '01_Quick_Audit',
  '02_Style_Direction',
  '03_PDP_Desktop',
  '04_PDP_Mobile',
  '05_Home_Desktop',
  '06_Home_Mobile',
  '07_Components_Styles',
  '08_Rationale_Notes',
]

const FRAME_SPECS = {
  '03_PDP_Desktop': { name: 'PDP — Desktop 1440', width: 1440, height: 4800, x: 0, y: 0 },
  '04_PDP_Mobile': { name: 'PDP — Mobile 390', width: 390, height: 5600, x: 0, y: 0 },
  '05_Home_Desktop': { name: 'Home — Desktop 1440', width: 1440, height: 4200, x: 0, y: 0 },
  '06_Home_Mobile': { name: 'Home — Mobile 390', width: 390, height: 4800, x: 0, y: 0 },
}

// ✨ ELITE COLOR SYSTEM - Sun-Glow Signature
const COLOR_PALETTE = {
  // Signature Sun-Glow Colors
  'Glow/Ocean': { r: 14 / 255, g: 165 / 255, b: 233 / 255 }, // #0EA5E9
  'Glow/Coral': { r: 255 / 255, g: 107 / 255, b: 107 / 255 }, // #FF6B6B
  'Glow/Gold': { r: 255 / 255, g: 200 / 255, b: 87 / 255 }, // #FFC857

  // Trust & Conversion Colors
  'Trust/Green': { r: 34 / 255, g: 197 / 255, b: 94 / 255 }, // Success states
  'Alert/Orange': { r: 251 / 255, g: 146 / 255, b: 60 / 255 }, // Urgency
  'Alert/Red': { r: 239 / 255, g: 68 / 255, b: 68 / 255 }, // Critical

  // Premium Neutrals
  'Neutral/0': { r: 1, g: 1, b: 1 },
  'Neutral/50': { r: 250 / 255, g: 250 / 255, b: 250 / 255 },
  'Neutral/100': { r: 243 / 255, g: 244 / 255, b: 246 / 255 },
  'Neutral/200': { r: 229 / 255, g: 231 / 255, b: 235 / 255 },
  'Neutral/300': { r: 209 / 255, g: 213 / 255, b: 219 / 255 },
  'Neutral/400': { r: 156 / 255, g: 163 / 255, b: 175 / 255 },
  'Neutral/500': { r: 107 / 255, g: 114 / 255, b: 128 / 255 },
  'Neutral/600': { r: 75 / 255, g: 85 / 255, b: 99 / 255 },
  'Neutral/700': { r: 55 / 255, g: 65 / 255, b: 81 / 255 },
  'Neutral/800': { r: 31 / 255, g: 41 / 255, b: 55 / 255 },
  'Neutral/900': { r: 17 / 255, g: 24 / 255, b: 39 / 255 },

  // Semantic Overlays
  'Overlay/Light': { r: 1, g: 1, b: 1 }, // 80% opacity white overlays
  'Overlay/Dark': { r: 0, g: 0, b: 0 }, // 40% opacity dark overlays
}

// ✨ PREMIUM TYPOGRAPHY SCALE
const TEXT_STYLES = [
  // Display (Hero Headlines)
  { name: 'Display / XL', size: 72, weight: 'Bold', lineHeight: { value: 105, unit: 'PERCENT' } },
  {
    name: 'Display / Large',
    size: 56,
    weight: 'Bold',
    lineHeight: { value: 110, unit: 'PERCENT' },
  },
  {
    name: 'Display / Medium',
    size: 48,
    weight: 'Bold',
    lineHeight: { value: 115, unit: 'PERCENT' },
  },

  // Headings
  { name: 'H1 / Desktop', size: 40, weight: 'Bold', lineHeight: { value: 120, unit: 'PERCENT' } },
  { name: 'H1 / Mobile', size: 32, weight: 'Bold', lineHeight: { value: 120, unit: 'PERCENT' } },
  {
    name: 'H2 / Desktop',
    size: 32,
    weight: 'SemiBold',
    lineHeight: { value: 125, unit: 'PERCENT' },
  },
  {
    name: 'H2 / Mobile',
    size: 24,
    weight: 'SemiBold',
    lineHeight: { value: 125, unit: 'PERCENT' },
  },
  {
    name: 'H3 / Subtitle',
    size: 20,
    weight: 'SemiBold',
    lineHeight: { value: 130, unit: 'PERCENT' },
  },

  // Body Text
  { name: 'Body / XL', size: 20, weight: 'Regular', lineHeight: { value: 160, unit: 'PERCENT' } },
  {
    name: 'Body / Large',
    size: 18,
    weight: 'Regular',
    lineHeight: { value: 160, unit: 'PERCENT' },
  },
  {
    name: 'Body / Medium',
    size: 16,
    weight: 'Regular',
    lineHeight: { value: 160, unit: 'PERCENT' },
  },
  {
    name: 'Body / Small',
    size: 14,
    weight: 'Regular',
    lineHeight: { value: 150, unit: 'PERCENT' },
  },
  { name: 'Body / XS', size: 12, weight: 'Regular', lineHeight: { value: 150, unit: 'PERCENT' } },

  // UI Elements
  {
    name: 'UI / Button Large',
    size: 18,
    weight: 'SemiBold',
    lineHeight: { value: 100, unit: 'PERCENT' },
  },
  {
    name: 'UI / Button',
    size: 16,
    weight: 'SemiBold',
    lineHeight: { value: 100, unit: 'PERCENT' },
  },
  { name: 'UI / Label', size: 14, weight: 'Medium', lineHeight: { value: 140, unit: 'PERCENT' } },
  { name: 'UI / Caption', size: 12, weight: 'Medium', lineHeight: { value: 140, unit: 'PERCENT' } },

  // Specialty
  { name: 'Price / Large', size: 36, weight: 'Bold', lineHeight: { value: 100, unit: 'PERCENT' } },
  { name: 'Price / Medium', size: 24, weight: 'Bold', lineHeight: { value: 100, unit: 'PERCENT' } },
]

// ✨ STRICT SPACING SCALE (4px base)
const SPACING_SCALE = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

// ✨ PREMIUM COMPONENT LIBRARY
const COMPONENT_SPECS = [
  // CTA Buttons (Sun-Glow Gradient)
  { name: 'Button/Primary/Large', width: 200, height: 56, type: 'primary' },
  { name: 'Button/Primary/Medium', width: 160, height: 48, type: 'primary' },
  { name: 'Button/Secondary/Large', width: 200, height: 56, type: 'secondary' },
  { name: 'Button/Secondary/Medium', width: 160, height: 48, type: 'secondary' },
  { name: 'Button/Ghost', width: 160, height: 48, type: 'ghost' },

  // Trust & Social Proof
  { name: 'Trust/Badge/Guarantee', width: 120, height: 40, type: 'trust' },
  { name: 'Trust/Badge/Shipping', width: 120, height: 40, type: 'trust' },
  { name: 'Trust/Badge/Returns', width: 120, height: 40, type: 'trust' },
  { name: 'Social/ReviewCard', width: 360, height: 220, type: 'card' },
  { name: 'Social/Rating', width: 140, height: 24, type: 'rating' },
  { name: 'Social/ProofPill', width: 200, height: 32, type: 'pill' },

  // Product Components
  { name: 'Product/ImageFrame', width: 600, height: 600, type: 'media' },
  { name: 'Product/Thumbnail', width: 80, height: 80, type: 'media' },
  { name: 'Product/PriceBlock', width: 320, height: 100, type: 'price' },
  { name: 'Product/VariantPicker', width: 400, height: 60, type: 'interactive' },

  // Content Cards
  { name: 'Card/Benefit', width: 360, height: 320, type: 'card' },
  { name: 'Card/Feature', width: 280, height: 240, type: 'card' },
  { name: 'Card/USP', width: 320, height: 160, type: 'card' },

  // Navigation & Sticky Elements
  { name: 'Mobile/StickyCart', width: 390, height: 88, type: 'sticky' },
  { name: 'Mobile/StickyNav', width: 390, height: 64, type: 'sticky' },
  { name: 'Desktop/TrustRibbon', width: 1440, height: 48, type: 'ribbon' },

  // Utility
  { name: 'Icon/24', width: 24, height: 24, type: 'icon' },
  { name: 'Icon/32', width: 32, height: 32, type: 'icon' },
  { name: 'Divider/Section', width: 1200, height: 2, type: 'divider' },
]

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Ensures a page exists. Returns existing or creates new.
 * Handles Starter plan 3-page limit gracefully.
 */
function ensurePage(name: string): PageNode | null {
  try {
    // Check if page already exists
    const existingPage = figma.root.children.find((p) => p.name === name)
    if (existingPage && existingPage.type === 'PAGE') {
      return existingPage as PageNode
    }

    // Try to create new page
    const newPage = figma.createPage()
    newPage.name = name
    return newPage
  } catch (error) {
    // Likely hit page limit
    if (String(error).includes('page') || String(error).includes('limit')) {
      figma.notify(
        `⚠️ Page limit reached. You're in a Starter TEAM file (3-page limit). Create a Draft file or run in Drafts to continue.`,
        { timeout: 8000, error: true }
      )
      return null
    }
    throw error
  }
}

/**
 * Ensures a frame exists within a page
 */
function ensureFrame(
  page: PageNode,
  name: string,
  width: number,
  height: number,
  x: number = 0,
  y: number = 0
): FrameNode {
  // Check if frame already exists
  const existingFrame = page.children.find((f) => f.type === 'FRAME' && f.name === name) as
    | FrameNode
    | undefined

  if (existingFrame) {
    existingFrame.resize(width, height)
    existingFrame.x = x
    existingFrame.y = y
    return existingFrame
  }

  const frame = figma.createFrame()
  frame.name = name
  frame.resize(width, height)
  frame.x = x
  frame.y = y
  frame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]
  page.appendChild(frame)
  return frame
}

/**
 * Creates a text node with specified properties
 */
async function createText(
  parent: PageNode | FrameNode,
  x: number,
  y: number,
  text: string,
  size: number = 16,
  weight: string = 'Regular'
): Promise<TextNode> {
  const textNode = figma.createText()

  // Load font
  try {
    await figma.loadFontAsync({ family: 'Inter', style: weight })
    textNode.fontName = { family: 'Inter', style: weight }
  } catch {
    // Fallback to whatever default is available
    await figma.loadFontAsync(textNode.fontName as FontName)
  }

  textNode.characters = text
  textNode.fontSize = size
  textNode.x = x
  textNode.y = y
  parent.appendChild(textNode)
  return textNode
}

/**
 * Creates all color styles INCLUDING gradients
 */
function ensurePaintStyles(): void {
  // Solid colors
  Object.entries(COLOR_PALETTE).forEach(([name, rgb]) => {
    const existingStyle = figma.getLocalPaintStyles().find((s) => s.name === `Colors/${name}`)
    const style = existingStyle || figma.createPaintStyle()
    style.name = `Colors/${name}`
    style.paints = [{ type: 'SOLID', color: rgb }]
  })

  // ✨ SIGNATURE SUN-GLOW GRADIENTS
  const gradients = [
    {
      name: 'Gradient/Sun-Glow/Primary',
      start: COLOR_PALETTE['Glow/Ocean'],
      end: COLOR_PALETTE['Glow/Coral'],
      angle: 135,
    },
    {
      name: 'Gradient/Sun-Glow/Warm',
      start: COLOR_PALETTE['Glow/Coral'],
      end: COLOR_PALETTE['Glow/Gold'],
      angle: 135,
    },
    {
      name: 'Gradient/Sun-Glow/Cool',
      start: COLOR_PALETTE['Glow/Ocean'],
      end: { r: 99 / 255, g: 102 / 255, b: 241 / 255 }, // Purple accent
      angle: 135,
    },
  ]

  gradients.forEach((grad) => {
    const existingStyle = figma.getLocalPaintStyles().find((s) => s.name === grad.name)
    const style = existingStyle || figma.createPaintStyle()
    style.name = grad.name

    // Convert angle to Figma gradient transform
    const angleRad = (grad.angle * Math.PI) / 180
    const cos = Math.cos(angleRad)
    const sin = Math.sin(angleRad)

    style.paints = [
      {
        type: 'GRADIENT_LINEAR',
        gradientTransform: [
          [cos, sin, 0.5 - cos * 0.5 - sin * 0.5],
          [-sin, cos, 0.5 + sin * 0.5 - cos * 0.5],
        ],
        gradientStops: [
          { position: 0, color: { ...grad.start, a: 1 } },
          { position: 1, color: { ...grad.end, a: 1 } },
        ],
      },
    ]
  })

  figma.notify(`✓ ${Object.keys(COLOR_PALETTE).length + gradients.length} paint styles created`, {
    timeout: 1500,
  })
}

/**
 * Creates shadow and glow effect styles
 */
function ensureEffectStyles(): void {
  const effects = [
    {
      name: 'Shadow/Small',
      effect: {
        type: 'DROP_SHADOW' as const,
        color: { r: 0, g: 0, b: 0, a: 0.08 },
        offset: { x: 0, y: 1 },
        radius: 3,
        spread: 0,
        visible: true,
        blendMode: 'NORMAL' as const,
      },
    },
    {
      name: 'Shadow/Medium',
      effect: {
        type: 'DROP_SHADOW' as const,
        color: { r: 0, g: 0, b: 0, a: 0.1 },
        offset: { x: 0, y: 4 },
        radius: 12,
        spread: 0,
        visible: true,
        blendMode: 'NORMAL' as const,
      },
    },
    {
      name: 'Shadow/Large',
      effect: {
        type: 'DROP_SHADOW' as const,
        color: { r: 0, g: 0, b: 0, a: 0.12 },
        offset: { x: 0, y: 8 },
        radius: 24,
        spread: 0,
        visible: true,
        blendMode: 'NORMAL' as const,
      },
    },
    {
      name: 'Glow/Sun',
      effect: {
        type: 'DROP_SHADOW' as const,
        color: { r: 255 / 255, g: 200 / 255, b: 87 / 255, a: 0.3 },
        offset: { x: 0, y: 0 },
        radius: 16,
        spread: 0,
        visible: true,
        blendMode: 'NORMAL' as const,
      },
    },
  ]

  effects.forEach(({ name, effect }) => {
    const existingStyle = figma.getLocalEffectStyles().find((s) => s.name === `Effects/${name}`)
    const style = existingStyle || figma.createEffectStyle()
    style.name = `Effects/${name}`
    style.effects = [effect]
  })

  figma.notify(`✓ ${effects.length} effect styles created`, { timeout: 1500 })
}

/**
 * Creates all text styles
 */
async function ensureTextStyles(): Promise<void> {
  for (const spec of TEXT_STYLES) {
    const existingStyle = figma.getLocalTextStyles().find((s) => s.name === `Text/${spec.name}`)

    const style = existingStyle || figma.createTextStyle()
    style.name = `Text/${spec.name}`

    try {
      await figma.loadFontAsync({ family: 'Inter', style: spec.weight })
      style.fontName = { family: 'Inter', style: spec.weight }
    } catch {
      await figma.loadFontAsync({ family: 'Inter', style: 'Regular' })
      style.fontName = { family: 'Inter', style: 'Regular' }
    }

    style.fontSize = spec.size
    style.lineHeight = spec.lineHeight as LineHeight
  }

  figma.notify(`✓ ${TEXT_STYLES.length} text styles created`)
}

/**
 * Creates spacing reference labels in the Components page
 */
async function createSpacingLabels(page: PageNode): Promise<void> {
  await createText(page, 1600, 100, 'SPACING SCALE', 24, 'Bold')

  let yOffset = 160
  for (const space of SPACING_SCALE) {
    await createText(page, 1600, yOffset, `${space}px`, 16, 'Medium')

    // Visual spacer
    const rect = figma.createRectangle()
    rect.resize(space, 16)
    rect.x = 1680
    rect.y = yOffset
    rect.fills = [{ type: 'SOLID', color: { r: 0.9, g: 0.9, b: 0.9 } }]
    page.appendChild(rect)

    yOffset += 48
  }
}

/**
 * Creates premium component library with proper styling
 */
async function buildComponents(page: PageNode): Promise<void> {
  let xOffset = 100
  let yOffset = 100
  const columnWidth = 450

  for (const spec of COMPONENT_SPECS) {
    const frame = figma.createFrame()
    frame.name = spec.name
    frame.resize(spec.width, spec.height)
    frame.x = xOffset
    frame.y = yOffset
    frame.cornerRadius = spec.type === 'icon' ? 0 : 8

    // ✨ ELITE COMPONENT STYLING
    if (spec.type === 'primary') {
      // Sun-Glow gradient button
      const angleRad = (135 * Math.PI) / 180
      const cos = Math.cos(angleRad)
      const sin = Math.sin(angleRad)

      frame.fills = [
        {
          type: 'GRADIENT_LINEAR',
          gradientTransform: [
            [cos, sin, 0.5 - cos * 0.5 - sin * 0.5],
            [-sin, cos, 0.5 + sin * 0.5 - cos * 0.5],
          ],
          gradientStops: [
            { position: 0, color: { ...COLOR_PALETTE['Glow/Ocean'], a: 1 } },
            { position: 1, color: { ...COLOR_PALETTE['Glow/Coral'], a: 1 } },
          ],
        },
      ]
      frame.effects = [
        {
          type: 'DROP_SHADOW',
          color: { r: 14 / 255, g: 165 / 255, b: 233 / 255, a: 0.3 },
          offset: { x: 0, y: 4 },
          radius: 12,
          spread: 0,
          visible: true,
          blendMode: 'NORMAL',
        },
      ]

      const label = await createText(
        frame,
        spec.width / 2 - 50,
        spec.height / 2 - 11,
        'Add to Cart',
        spec.height > 50 ? 18 : 16,
        'SemiBold'
      )
      label.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]
    } else if (spec.type === 'secondary') {
      frame.fills = []
      frame.strokes = [{ type: 'SOLID', color: COLOR_PALETTE['Glow/Ocean'] }]
      frame.strokeWeight = 2
      await createText(
        frame,
        spec.width / 2 - 45,
        spec.height / 2 - 11,
        'Learn More',
        spec.height > 50 ? 18 : 16,
        'SemiBold'
      )
    } else if (spec.type === 'ghost') {
      frame.fills = [{ type: 'SOLID', color: COLOR_PALETTE['Neutral/100'] }]
      await createText(frame, spec.width / 2 - 30, spec.height / 2 - 11, 'Maybe', 16, 'SemiBold')
    } else if (spec.type === 'trust') {
      frame.fills = [{ type: 'SOLID', color: COLOR_PALETTE['Trust/Green'], opacity: 0.1 }]
      frame.strokes = [{ type: 'SOLID', color: COLOR_PALETTE['Trust/Green'] }]
      frame.strokeWeight = 1
      const iconSize = 20
      const iconRect = figma.createRectangle()
      iconRect.resize(iconSize, iconSize)
      iconRect.x = 8
      iconRect.y = (spec.height - iconSize) / 2
      iconRect.fills = [{ type: 'SOLID', color: COLOR_PALETTE['Trust/Green'] }]
      iconRect.cornerRadius = iconSize / 2
      frame.appendChild(iconRect)

      const label = spec.name.split('/')[2] || 'Badge'
      await createText(frame, 36, spec.height / 2 - 9, label, 14, 'Medium')
    } else if (spec.type === 'rating') {
      frame.fills = []
      const starCount = 5
      const starSize = 20
      const spacing = 4
      for (let i = 0; i < starCount; i++) {
        const star = figma.createRectangle()
        star.resize(starSize, starSize)
        star.x = i * (starSize + spacing)
        star.y = 2
        star.fills = [{ type: 'SOLID', color: COLOR_PALETTE['Glow/Gold'] }]
        frame.appendChild(star)
      }
      await createText(frame, starCount * (starSize + spacing) + 8, 4, '4.9', 14, 'SemiBold')
    } else if (spec.type === 'pill') {
      frame.cornerRadius = spec.height / 2
      frame.fills = [{ type: 'SOLID', color: COLOR_PALETTE['Glow/Ocean'], opacity: 0.1 }]
      await createText(
        frame,
        spec.width / 2 - 45,
        spec.height / 2 - 9,
        '1,247 sold today',
        14,
        'Medium'
      )
    } else if (spec.type === 'card') {
      frame.fills = [{ type: 'SOLID', color: COLOR_PALETTE['Neutral/0'] }]
      frame.effects = [
        {
          type: 'DROP_SHADOW',
          color: { r: 0, g: 0, b: 0, a: 0.08 },
          offset: { x: 0, y: 2 },
          radius: 8,
          spread: 0,
          visible: true,
          blendMode: 'NORMAL',
        },
      ]
      await createText(frame, 24, 24, spec.name.split('/')[1] || 'Card', 18, 'SemiBold')
      await createText(frame, 24, 56, 'Card content placeholder...', 14, 'Regular')
    } else if (spec.type === 'media') {
      frame.fills = [{ type: 'SOLID', color: COLOR_PALETTE['Neutral/100'] }]
      frame.cornerRadius = spec.width < 100 ? 4 : 12
      await createText(frame, spec.width / 2 - 30, spec.height / 2 - 10, '📷', 32, 'Regular')
    } else if (spec.type === 'price') {
      frame.fills = []
      await createText(frame, 0, 0, '$89.99', 36, 'Bold')
      await createText(frame, 0, 48, 'Free shipping · 30-day returns', 14, 'Regular')
    } else if (spec.type === 'sticky') {
      frame.fills = [{ type: 'SOLID', color: COLOR_PALETTE['Neutral/0'] }]
      frame.effects = [
        {
          type: 'DROP_SHADOW',
          color: { r: 0, g: 0, b: 0, a: 0.12 },
          offset: { x: 0, y: -4 },
          radius: 16,
          spread: 0,
          visible: true,
          blendMode: 'NORMAL',
        },
      ]
      await createText(
        frame,
        16,
        spec.height / 2 - 11,
        spec.name.split('/')[1] || 'Sticky',
        16,
        'SemiBold'
      )
    } else if (spec.type === 'ribbon') {
      frame.fills = [
        {
          type: 'GRADIENT_LINEAR',
          gradientTransform: [
            [1, 0, 0],
            [0, 1, 0],
          ],
          gradientStops: [
            { position: 0, color: { ...COLOR_PALETTE['Glow/Ocean'], a: 0.75 } },
            { position: 1, color: { ...COLOR_PALETTE['Glow/Coral'], a: 0.75 } },
          ],
        },
      ]
      await createText(
        frame,
        spec.width / 2 - 100,
        spec.height / 2 - 9,
        '✓ Free Shipping · ✓ 30-Day Returns',
        14,
        'SemiBold'
      )
    } else if (spec.type === 'divider') {
      frame.fills = [
        {
          type: 'GRADIENT_LINEAR',
          gradientTransform: [
            [1, 0, 0],
            [0, 1, 0],
          ],
          gradientStops: [
            { position: 0, color: { ...COLOR_PALETTE['Glow/Ocean'], a: 0.2 } },
            { position: 0.5, color: { ...COLOR_PALETTE['Glow/Coral'], a: 0.2 } },
            { position: 1, color: { ...COLOR_PALETTE['Glow/Ocean'], a: 0.2 } },
          ],
        },
      ]
      frame.cornerRadius = 1
    } else {
      // Default styling
      frame.fills = [{ type: 'SOLID', color: COLOR_PALETTE['Neutral/100'] }]
      frame.strokes = [{ type: 'SOLID', color: COLOR_PALETTE['Neutral/300'] }]
      frame.strokeWeight = 1
      await createText(frame, 8, 8, spec.name.split('/').pop() || 'Component', 12, 'Medium')
    }

    page.appendChild(frame)

    // Create component from frame
    const _component = figma.createComponentFromNode(frame)

    // Layout management
    yOffset += spec.height + 32
    if (yOffset > 1400) {
      yOffset = 100
      xOffset += columnWidth
    }
  }

  figma.notify(`✓ ${COMPONENT_SPECS.length} premium components created`, { timeout: 2000 })
}

/**
 * Adds elite template content to audit page
 */
async function populateAuditPage(page: PageNode): Promise<void> {
  await createText(page, 100, 100, 'QUICK AUDIT — Current Site Analysis', 40, 'Bold')
  await createText(
    page,
    100,
    160,
    'Systematic evaluation of sunninja.com experience',
    18,
    'Regular'
  )

  const sections = [
    {
      title: '🏠 HOMEPAGE — First Impressions',
      y: 240,
      points: [
        '• Value proposition clarity (is it obvious what they sell?)',
        '• Visual hierarchy (where does the eye go first?)',
        '• Trust signals above the fold (reviews, guarantees, social proof)',
        '• Mobile responsiveness issues',
      ],
    },
    {
      title: '🛍️ PRODUCT PAGE — Conversion Optimization',
      y: 420,
      points: [
        '• Hero image quality and angle (shows product in use?)',
        '• CTA visibility and placement (Add to Cart prominence)',
        '• Product information architecture (specs, benefits, FAQs)',
        '• Social proof integration (reviews, ratings, UGC)',
        '• Trust elements (shipping, returns, guarantees)',
      ],
    },
    {
      title: '📱 MOBILE EXPERIENCE',
      y: 640,
      points: [
        '• Touch target sizes (buttons, links)',
        '• Image loading performance',
        '• Sticky cart/nav behavior',
        '• Form usability',
      ],
    },
    {
      title: '🎯 KEY OPPORTUNITIES IDENTIFIED',
      y: 820,
      points: [
        '1. [Add specific findings here - screenshot + annotation]',
        '2. [Hierarchy improvements needed]',
        '3. [CTA optimization opportunities]',
        '4. [Trust-building enhancements]',
        '',
        'Add screenshots and highlight areas for improvement below →',
      ],
    },
  ]

  for (const section of sections) {
    await createText(page, 100, section.y, section.title, 24, 'Bold')
    let pointY = section.y + 48
    for (const point of section.points) {
      await createText(page, 100, pointY, point, 16, 'Regular')
      pointY += 32
    }
  }
}

/**
 * Adds style direction template with sun-glow examples
 */
async function populateStyleDirectionPage(page: PageNode): Promise<void> {
  await createText(page, 100, 100, 'STYLE DIRECTION', 40, 'Bold')
  await createText(
    page,
    100,
    160,
    'Premium beach tent brand identity — Clean, modern, trustworthy',
    18,
    'Regular'
  )

  // Color palette showcase
  await createText(page, 100, 240, 'COLOR SYSTEM', 24, 'Bold')
  let colorX = 100
  const colorSwatches = [
    { name: 'Ocean', color: COLOR_PALETTE['Glow/Ocean'] },
    { name: 'Coral', color: COLOR_PALETTE['Glow/Coral'] },
    { name: 'Gold', color: COLOR_PALETTE['Glow/Gold'] },
    { name: 'Success', color: COLOR_PALETTE['Trust/Green'] },
  ]

  for (const swatch of colorSwatches) {
    const rect = figma.createRectangle()
    rect.resize(120, 120)
    rect.x = colorX
    rect.y = 290
    rect.fills = [{ type: 'SOLID', color: swatch.color }]
    rect.cornerRadius = 12
    page.appendChild(rect)

    await createText(page, colorX, 425, swatch.name, 14, 'Medium')
    colorX += 140
  }

  // Gradient showcase
  await createText(page, 100, 480, 'SIGNATURE SUN-GLOW GRADIENT', 24, 'Bold')
  const gradientRect = figma.createRectangle()
  gradientRect.resize(600, 100)
  gradientRect.x = 100
  gradientRect.y = 530
  gradientRect.cornerRadius = 12
  const angleRad = (135 * Math.PI) / 180
  const cos = Math.cos(angleRad)
  const sin = Math.sin(angleRad)
  gradientRect.fills = [
    {
      type: 'GRADIENT_LINEAR',
      gradientTransform: [
        [cos, sin, 0.5 - cos * 0.5 - sin * 0.5],
        [-sin, cos, 0.5 + sin * 0.5 - cos * 0.5],
      ],
      gradientStops: [
        { position: 0, color: { ...COLOR_PALETTE['Glow/Ocean'], a: 1 } },
        { position: 1, color: { ...COLOR_PALETTE['Glow/Coral'], a: 1 } },
      ],
    },
  ]
  page.appendChild(gradientRect)
  await createText(page, 100, 655, 'Use: CTAs, hero overlays, trust ribbons', 14, 'Regular')

  // Typography showcase
  await createText(page, 100, 720, 'TYPOGRAPHY SCALE', 24, 'Bold')
  const typeExamples = [
    { text: 'Display XL — Hero Headlines', size: 48, weight: 'Bold', y: 770 },
    { text: 'H1 Desktop — Section Titles', size: 32, weight: 'Bold', y: 840 },
    { text: 'Body Large — Easy-to-read product descriptions', size: 18, weight: 'Regular', y: 900 },
    { text: 'UI Button — Clear CTA text', size: 16, weight: 'SemiBold', y: 950 },
  ]

  for (const example of typeExamples) {
    await createText(page, 100, example.y, example.text, example.size, example.weight)
  }

  // Design principles
  await createText(page, 100, 1040, 'DESIGN PRINCIPLES', 24, 'Bold')
  const principles = [
    '✓ Clean, modern, intentional — Every element serves a purpose',
    '✓ Strong visual hierarchy — Eye flows from hero → benefits → CTA',
    '✓ Trust-first approach — Social proof, guarantees, and reviews prominently placed',
    '✓ Premium feel without pretension — Approachable luxury',
    '✓ Mobile-first thinking — Touch-friendly, fast-loading',
  ]
  let principleY = 1090
  for (const principle of principles) {
    await createText(page, 100, principleY, principle, 16, 'Regular')
    principleY += 36
  }
}

/**
 * Adds comprehensive rationale template
 */
async function populateRationalePage(page: PageNode): Promise<void> {
  await createText(page, 100, 100, 'DESIGN RATIONALE & DECISIONS', 40, 'Bold')
  await createText(
    page,
    100,
    160,
    'Why each design choice was made — Strategic thinking documented',
    18,
    'Regular'
  )

  const sections = [
    {
      title: '🎨 VISUAL DESIGN DECISIONS',
      y: 240,
      points: [
        '• Layout Structure Choice',
        '  → Why I chose [grid system/structure] for PDP and Home',
        '  → How it guides the eye through the conversion funnel',
        '',
        '• Typography Reasoning',
        '  → Font pairings selected for readability + brand elevation',
        '  → Size scale designed for desktop/mobile comfort',
        '',
        '• Color Palette Strategy',
        '  → Sun-glow gradient = beach warmth + energy + trust',
        '  → Ocean blue = reliability, Coral = excitement, Gold = premium',
        '  → Contrast ratios verified for accessibility (WCAG AA minimum)',
        '',
        '• Spacing & Hierarchy Logic',
        '  → 4px base scale = mathematical consistency',
        '  → White space creates premium feel without looking sparse',
      ],
    },
    {
      title: '💰 CRO & CONVERSION STRATEGY',
      y: 640,
      points: [
        '• Above-the-Fold Content',
        '  → Hero shows product in context (family enjoying beach)',
        '  → Primary CTA visible without scrolling',
        '  → Trust signals immediately visible (reviews, guarantees)',
        '',
        '• CTA Placement & Frequency',
        '  → Primary: Above fold, after benefits, sticky on mobile',
        '  → Secondary: Learn more, size guides, comparison tools',
        '  → Frequency balanced to drive action without overwhelming',
        '',
        '• Trust-Building Elements',
        '  → Social proof: Real customer photos, 4.9★ rating, review count',
        '  → Risk reversal: 30-day returns, free shipping, lifetime warranty',
        '  → Authority: "10,000+ families protected" social counter',
        '',
        '• Objection Handling',
        '  → FAQ section addresses common concerns',
        '  → Size guide reduces return anxiety',
        '  → Setup video shows ease of use',
      ],
    },
    {
      title: "🚀 WHAT I'D IMPROVE WITH MORE TIME",
      y: 1120,
      points: [
        '• A/B Test Ideas',
        '  → Gradient CTA vs. solid color (test conversion lift)',
        '  → Video hero vs. static image (engagement metrics)',
        '  → Product gallery order (lifestyle-first vs. product-first)',
        '',
        '• Advanced Features',
        '  → 360° product viewer with hotspots',
        '  → AR "try in your space" for size visualization',
        '  → Dynamic pricing based on cart value (bulk discounts)',
        '',
        '• Personalization',
        '  → Geo-targeted messaging (beach vs. camping vs. sports)',
        "  → Returning visitor variations (show cart, reviews they've read)",
      ],
    },
    {
      title: "📊 SUCCESS METRICS I'D TRACK",
      y: 1520,
      points: [
        '• Primary: Add-to-Cart rate, Conversion rate',
        '• Secondary: Time on page, Scroll depth, CTA click rate',
        '• Trust signals: Review clicks, Guarantee badge views',
        '• Mobile: Touch errors, Form completion rate',
      ],
    },
  ]

  for (const section of sections) {
    await createText(page, 100, section.y, section.title, 28, 'Bold')
    let pointY = section.y + 56
    for (const point of section.points) {
      const weight = point.startsWith('•') ? 'SemiBold' : 'Regular'
      const size = point.startsWith('•') ? 18 : 16
      await createText(page, 100, pointY, point, size, weight)
      pointY += point === '' ? 16 : 32
    }
  }
}

/**
 * Adds premium cover page with sun-glow branding
 */
async function populateCoverPage(page: PageNode): Promise<void> {
  const coverFrame = ensureFrame(page, 'Cover Presentation', 1600, 900, 200, 200)

  // Sun-glow gradient background
  const angleRad = (135 * Math.PI) / 180
  const cos = Math.cos(angleRad)
  const sin = Math.sin(angleRad)
  coverFrame.fills = [
    {
      type: 'GRADIENT_LINEAR',
      gradientTransform: [
        [cos, sin, 0.5 - cos * 0.5 - sin * 0.5],
        [-sin, cos, 0.5 + sin * 0.5 - cos * 0.5],
      ],
      gradientStops: [
        { position: 0, color: { ...COLOR_PALETTE['Glow/Ocean'], a: 0.85 } },
        { position: 1, color: { ...COLOR_PALETTE['Glow/Coral'], a: 0.85 } },
      ],
    },
  ]

  // Title content
  const title = await createText(coverFrame, 80, 180, 'SUN NINJA', 80, 'Bold')
  title.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]

  const subtitle = await createText(
    coverFrame,
    80,
    280,
    'Premium Beach Tent Redesign',
    40,
    'SemiBold'
  )
  subtitle.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]

  const tagline = await createText(
    coverFrame,
    80,
    340,
    'CRO-Focused · Design Taste First · TOP 1% Quality',
    24,
    'Regular'
  )
  tagline.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 }, opacity: 0.9 }]

  // Metadata
  const meta1 = await createText(coverFrame, 80, 480, 'Designer: [Your Name]', 18, 'Regular')
  meta1.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 }, opacity: 0.85 }]

  const meta2 = await createText(coverFrame, 80, 515, 'Date: February 2026', 18, 'Regular')
  meta2.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 }, opacity: 0.85 }]

  const meta3 = await createText(
    coverFrame,
    80,
    550,
    'Assignment: CRO-Focused Website Redesign',
    18,
    'Regular'
  )
  meta3.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 }, opacity: 0.85 }]

  // Navigation guide
  const navTitle = await createText(coverFrame, 80, 650, 'FILE NAVIGATION', 20, 'Bold')
  navTitle.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]

  const nav = [
    '00 → Cover (you are here)',
    '01 → Quick Audit of current sunninja.com',
    '02 → Style Direction & design system',
    '03 → Product Page — Desktop 1440px',
    '04 → Product Page — Mobile 390px',
    '05 → Homepage — Desktop 1440px',
    '06 → Homepage — Mobile 390px',
    '07 → Components & Styles library',
    '08 → Design Rationale & strategic thinking',
  ]

  let navY = 690
  for (const item of nav) {
    const navItem = await createText(coverFrame, 80, navY, item, 15, 'Regular')
    navItem.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 }, opacity: 0.85 }]
    navY += 28
  }

  // Footer note
  const footer = await createText(
    coverFrame,
    80,
    820,
    '✨ Built with sun-glow gradient signature · Premium components · CRO optimization',
    14,
    'Regular'
  )
  footer.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 }, opacity: 0.7 }]
}

// ============================================================================
// MAIN GENERATION FUNCTION
// ============================================================================

async function generateScaffold(): Promise<void> {
  figma.notify('🚀 Generating Elite Scaffold...', { timeout: 2000 })

  try {
    // Step 1: Create/ensure all pages
    const pages: Map<string, PageNode> = new Map()

    for (const pageName of PAGE_NAMES) {
      const page = ensurePage(pageName)
      if (!page) {
        figma.notify(
          '⚠️ Scaffold generation stopped - page limit reached. Use Draft file instead.',
          {
            timeout: 5000,
            error: true,
          }
        )
        return
      }
      pages.set(pageName, page)
    }

    figma.notify('✓ 8 pages created', { timeout: 1500 })

    // Step 2: Create frames in design pages
    for (const [pageName, spec] of Object.entries(FRAME_SPECS)) {
      const page = pages.get(pageName)
      if (page) {
        const frame = ensureFrame(page, spec.name, spec.width, spec.height, spec.x, spec.y)
        // Add gradient background to design frames
        frame.fills = [{ type: 'SOLID', color: { r: 0.99, g: 0.99, b: 1 } }]
      }
    }

    figma.notify('✓ Design artboards created (Desktop 1440 + Mobile 390)', { timeout: 1500 })

    // Step 3: Create elite design system styles
    ensurePaintStyles() // Colors + Sun-Glow gradients
    ensureEffectStyles() // Shadows + Glows
    await ensureTextStyles() // Typography scale

    // Step 4: Build premium components page
    const componentsPage = pages.get('07_Components_Styles')
    if (componentsPage) {
      await buildComponents(componentsPage)
      await createSpacingLabels(componentsPage)
    }

    // Step 5: Populate content pages with templates
    const auditPage = pages.get('01_Quick_Audit')
    if (auditPage) await populateAuditPage(auditPage)

    const styleDirectionPage = pages.get('02_Style_Direction')
    if (styleDirectionPage) await populateStyleDirectionPage(styleDirectionPage)

    const rationalePage = pages.get('08_Rationale_Notes')
    if (rationalePage) await populateRationalePage(rationalePage)

    const coverPage = pages.get('00_Cover')
    if (coverPage) {
      await populateCoverPage(coverPage)
      figma.currentPage = coverPage
      figma.viewport.scrollAndZoomIntoView([coverPage.children[0]])
    }

    // Final success message
    figma.notify(
      '✅ Elite Scaffold Complete! Sun-glow gradients, premium components, CRO templates ready. Start in 03_PDP_Desktop.',
      { timeout: 5000 }
    )
  } catch (error) {
    console.error('Scaffold generation error:', error)
    figma.notify(`❌ Error: ${error}`, { timeout: 5000, error: true })
  }
}

// ============================================================================
// PLUGIN INITIALIZATION
// ============================================================================

figma.showUI(__html__, { width: 360, height: 220 })

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'generate') {
    await generateScaffold()
  }

  if (msg.type === 'close') {
    figma.closePlugin()
  }
}
