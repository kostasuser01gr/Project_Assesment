// Sun Ninja Scaffold Generator - Main Plugin Logic
// This plugin auto-generates the file structure for the PDP + Home redesign assignment

// ============================================================================
// CONSTANTS
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
  '08_Rationale_Notes'
];

const FRAME_SPECS = {
  '03_PDP_Desktop': { name: 'PDP — Desktop 1440', width: 1440, height: 4200, x: 0, y: 0 },
  '04_PDP_Mobile': { name: 'PDP — Mobile 390', width: 390, height: 5200, x: 0, y: 0 },
  '05_Home_Desktop': { name: 'Home — Desktop 1440', width: 1440, height: 3600, x: 0, y: 0 },
  '06_Home_Mobile': { name: 'Home — Mobile 390', width: 390, height: 4200, x: 0, y: 0 }
};

const COLOR_PALETTE = {
  'Primary': { r: 15/255, g: 59/255, b: 76/255 }, // Ocean
  'Secondary': { r: 255/255, g: 107/255, b: 90/255 }, // Coral
  'Accent': { r: 255/255, g: 184/255, b: 77/255 }, // Gold
  'Neutral/0': { r: 1, g: 1, b: 1 },
  'Neutral/50': { r: 250/255, g: 250/255, b: 250/255 },
  'Neutral/100': { r: 245/255, g: 245/255, b: 245/255 },
  'Neutral/200': { r: 229/255, g: 229/255, b: 229/255 },
  'Neutral/300': { r: 212/255, g: 212/255, b: 212/255 },
  'Neutral/400': { r: 163/255, g: 163/255, b: 163/255 },
  'Neutral/500': { r: 115/255, g: 115/255, b: 115/255 },
  'Neutral/600': { r: 82/255, g: 82/255, b: 82/255 },
  'Neutral/700': { r: 64/255, g: 64/255, b: 64/255 },
  'Neutral/800': { r: 38/255, g: 38/255, b: 38/255 },
  'Neutral/900': { r: 23/255, g: 23/255, b: 23/255 }
};

const TEXT_STYLES = [
  { name: 'H1 / Display', size: 56, weight: 'Bold', lineHeight: { value: 110, unit: 'PERCENT' } },
  { name: 'H2 / Title', size: 40, weight: 'Bold', lineHeight: { value: 120, unit: 'PERCENT' } },
  { name: 'H3 / Subtitle', size: 28, weight: 'SemiBold', lineHeight: { value: 130, unit: 'PERCENT' } },
  { name: 'Body / Large', size: 18, weight: 'Regular', lineHeight: { value: 160, unit: 'PERCENT' } },
  { name: 'Body / Medium', size: 16, weight: 'Regular', lineHeight: { value: 160, unit: 'PERCENT' } },
  { name: 'Body / Small', size: 14, weight: 'Regular', lineHeight: { value: 150, unit: 'PERCENT' } },
  { name: 'UI / Label', size: 14, weight: 'Medium', lineHeight: { value: 140, unit: 'PERCENT' } },
  { name: 'UI / Button', size: 16, weight: 'SemiBold', lineHeight: { value: 100, unit: 'PERCENT' } }
];

const SPACING_SCALE = [4, 8, 12, 16, 24, 32, 48, 64];

const COMPONENT_SPECS = [
  { name: 'Button/Primary', width: 160, height: 48 },
  { name: 'Button/Secondary', width: 160, height: 48 },
  { name: 'Button/Ghost', width: 160, height: 48 },
  { name: 'Card/Product', width: 320, height: 400 },
  { name: 'Badge/Pill', width: 80, height: 24 },
  { name: 'Rating/Stars', width: 120, height: 20 },
  { name: 'Card/Review', width: 360, height: 200 },
  { name: 'Accordion/Item', width: 600, height: 64 },
  { name: 'Mobile/StickyCart', width: 390, height: 80 },
  { name: 'Icon/Sample', width: 24, height: 24 }
];

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
    const existingPage = figma.root.children.find(p => p.name === name);
    if (existingPage && existingPage.type === 'PAGE') {
      return existingPage as PageNode;
    }

    // Try to create new page
    const newPage = figma.createPage();
    newPage.name = name;
    return newPage;
  } catch (error) {
    // Likely hit page limit
    if (String(error).includes('page') || String(error).includes('limit')) {
      figma.notify(
        `⚠️ Page limit reached. You're in a Starter TEAM file (3-page limit). Create a Draft file or run in Drafts to continue.`,
        { timeout: 8000, error: true }
      );
      return null;
    }
    throw error;
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
  const existingFrame = page.children.find(
    f => f.type === 'FRAME' && f.name === name
  ) as FrameNode | undefined;

  if (existingFrame) {
    existingFrame.resize(width, height);
    existingFrame.x = x;
    existingFrame.y = y;
    return existingFrame;
  }

  const frame = figma.createFrame();
  frame.name = name;
  frame.resize(width, height);
  frame.x = x;
  frame.y = y;
  frame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  page.appendChild(frame);
  return frame;
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
  const textNode = figma.createText();
  
  // Load font
  try {
    await figma.loadFontAsync({ family: 'Inter', style: weight });
    textNode.fontName = { family: 'Inter', style: weight };
  } catch {
    // Fallback to whatever default is available
    await figma.loadFontAsync(textNode.fontName as FontName);
  }

  textNode.characters = text;
  textNode.fontSize = size;
  textNode.x = x;
  textNode.y = y;
  parent.appendChild(textNode);
  return textNode;
}

/**
 * Creates all color styles
 */
function ensurePaintStyles(): void {
  Object.entries(COLOR_PALETTE).forEach(([name, rgb]) => {
    // Check if style exists
    const existingStyle = figma.getLocalPaintStyles().find(s => s.name === `Colors/${name}`);
    
    const style = existingStyle || figma.createPaintStyle();
    style.name = `Colors/${name}`;
    style.paints = [{ type: 'SOLID', color: rgb }];
  });
  
  figma.notify(`✓ ${Object.keys(COLOR_PALETTE).length} color styles created`);
}

/**
 * Creates all text styles
 */
async function ensureTextStyles(): Promise<void> {
  for (const spec of TEXT_STYLES) {
    const existingStyle = figma.getLocalTextStyles().find(s => s.name === `Text/${spec.name}`);
    
    const style = existingStyle || figma.createTextStyle();
    style.name = `Text/${spec.name}`;
    
    try {
      await figma.loadFontAsync({ family: 'Inter', style: spec.weight });
      style.fontName = { family: 'Inter', style: spec.weight };
    } catch {
      await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
      style.fontName = { family: 'Inter', style: 'Regular' };
    }
    
    style.fontSize = spec.size;
    style.lineHeight = spec.lineHeight as LineHeight;
  }
  
  figma.notify(`✓ ${TEXT_STYLES.length} text styles created`);
}

/**
 * Creates spacing reference labels in the Components page
 */
async function createSpacingLabels(page: PageNode): Promise<void> {
  await createText(page, 1600, 100, 'SPACING SCALE', 24, 'Bold');
  
  let yOffset = 160;
  for (const space of SPACING_SCALE) {
    await createText(page, 1600, yOffset, `${space}px`, 16, 'Medium');
    
    // Visual spacer
    const rect = figma.createRectangle();
    rect.resize(space, 16);
    rect.x = 1680;
    rect.y = yOffset;
    rect.fills = [{ type: 'SOLID', color: { r: 0.9, g: 0.9, b: 0.9 } }];
    page.appendChild(rect);
    
    yOffset += 48;
  }
}

/**
 * Creates component placeholders
 */
async function buildComponents(page: PageNode): Promise<void> {
  let xOffset = 100;
  let yOffset = 100;
  const columnWidth = 400;

  for (const spec of COMPONENT_SPECS) {
    const frame = figma.createFrame();
    frame.name = spec.name;
    frame.resize(spec.width, spec.height);
    frame.x = xOffset;
    frame.y = yOffset;
    
    // Style based on component type
    if (spec.name.includes('Button/Primary')) {
      frame.fills = [{ type: 'SOLID', color: COLOR_PALETTE.Primary }];
      const label = await createText(frame, spec.width / 2 - 30, spec.height / 2 - 10, 'Primary', 16, 'SemiBold');
      label.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    } else if (spec.name.includes('Button/Secondary')) {
      frame.fills = [];
      frame.strokes = [{ type: 'SOLID', color: COLOR_PALETTE.Primary }];
      frame.strokeWeight = 2;
      await createText(frame, spec.width / 2 - 40, spec.height / 2 - 10, 'Secondary', 16, 'SemiBold');
    } else if (spec.name.includes('Button/Ghost')) {
      frame.fills = [{ type: 'SOLID', color: { r: 0.95, g: 0.95, b: 0.95 } }];
      await createText(frame, spec.width / 2 - 25, spec.height / 2 - 10, 'Ghost', 16, 'SemiBold');
    } else {
      frame.fills = [{ type: 'SOLID', color: { r: 0.98, g: 0.98, b: 0.98 } }];
      frame.strokes = [{ type: 'SOLID', color: { r: 0.9, g: 0.9, b: 0.9 } }];
      frame.strokeWeight = 1;
      await createText(frame, 16, 16, spec.name.split('/')[1] || spec.name, 14, 'Medium');
    }
    
    page.appendChild(frame);
    
    // Create component from frame
    const component = figma.createComponentFromNode(frame);
    
    // Layout management
    yOffset += spec.height + 40;
    if (yOffset > 1000) {
      yOffset = 100;
      xOffset += columnWidth;
    }
  }
  
  figma.notify(`✓ ${COMPONENT_SPECS.length} components created`);
}

/**
 * Adds template content to audit page
 */
async function populateAuditPage(page: PageNode): Promise<void> {
  await createText(page, 100, 100, 'QUICK AUDIT — Sun Ninja Current Site', 32, 'Bold');
  
  const bullets = [
    '• Homepage analysis: first impressions, value prop clarity',
    '• Product page analysis: visual hierarchy, CTA placement',
    '• Mobile experience: usability issues, friction points',
    '• Trust signals: reviews, guarantees, shipping info',
    '• Overall UX flow: navigation, cart, checkout preview',
    '',
    'Findings & Opportunities:',
    '(Add screenshots + annotations below)'
  ];
  
  let yOffset = 180;
  for (const bullet of bullets) {
    await createText(page, 100, yOffset, bullet, 16, 'Regular');
    yOffset += 32;
  }
}

/**
 * Adds template content to rationale page
 */
async function populateRationalePage(page: PageNode): Promise<void> {
  await createText(page, 100, 100, 'DESIGN RATIONALE & NOTES', 32, 'Bold');
  
  const sections = [
    { title: 'DESIGN DECISIONS', y: 200 },
    { title: '• Why this layout structure', y: 240 },
    { title: '• Typography choices (readability + brand elevation)', y: 270 },
    { title: '• Color palette reasoning (trust, energy, warmth)', y: 300 },
    { title: '• Spacing & hierarchy logic', y: 330 },
    { title: '', y: 370 },
    { title: 'CRO CONSIDERATIONS', y: 410 },
    { title: '• Above-the-fold content strategy', y: 450 },
    { title: '• CTA placement & frequency', y: 480 },
    { title: '• Trust-building elements', y: 510 },
    { title: '• Social proof integration', y: 540 },
    { title: '', y: 580 },
    { title: 'TRADE-OFFS & FUTURE IMPROVEMENTS', y: 620 },
    { title: '• What would I change with more time', y: 660 },
    { title: '• A/B test ideas', y: 690 }
  ];
  
  for (const section of sections) {
    const weight = section.title.startsWith('•') ? 'Regular' : 'Bold';
    const size = section.title.startsWith('•') ? 16 : 20;
    await createText(page, 100, section.y, section.title, size, weight);
  }
}

/**
 * Adds cover page content
 */
async function populateCoverPage(page: PageNode): Promise<void> {
  const coverFrame = ensureFrame(page, 'Cover', 1200, 800, 200, 200);
  coverFrame.fills = [{ 
    type: 'SOLID', 
    color: { r: 246/255, g: 232/255, b: 213/255 } // Sand color
  }];
  
  await createText(coverFrame, 80, 200, 'SUN NINJA', 72, 'Bold');
  await createText(coverFrame, 80, 300, 'CRO-Focused Redesign', 40, 'Medium');
  await createText(coverFrame, 80, 360, 'Product Page + Homepage', 24, 'Regular');
  
  await createText(coverFrame, 80, 500, 'Designer: [Your Name]', 18, 'Regular');
  await createText(coverFrame, 80, 530, 'Date: February 2026', 18, 'Regular');
  
  await createText(coverFrame, 80, 650, 'Navigation:', 16, 'Bold');
  const nav = [
    '01 → Quick Audit',
    '02 → Style Direction',
    '03-04 → Product Page (Desktop + Mobile)',
    '05-06 → Homepage (Desktop + Mobile)',
    '07 → Components & Styles',
    '08 → Design Rationale'
  ];
  
  let navY = 680;
  for (const item of nav) {
    await createText(coverFrame, 80, navY, item, 14, 'Regular');
    navY += 24;
  }
}

// ============================================================================
// MAIN GENERATION FUNCTION
// ============================================================================

async function generateScaffold(): Promise<void> {
  figma.notify('🚀 Generating scaffold...', { timeout: 2000 });
  
  try {
    // Step 1: Create/ensure all pages
    const pages: Map<string, PageNode> = new Map();
    
    for (const pageName of PAGE_NAMES) {
      const page = ensurePage(pageName);
      if (!page) {
        figma.notify('⚠️ Scaffold generation stopped due to page limit', { timeout: 4000, error: true });
        return;
      }
      pages.set(pageName, page);
    }
    
    figma.notify('✓ Pages created', { timeout: 1500 });
    
    // Step 2: Create frames in design pages
    for (const [pageName, spec] of Object.entries(FRAME_SPECS)) {
      const page = pages.get(pageName);
      if (page) {
        ensureFrame(page, spec.name, spec.width, spec.height, spec.x, spec.y);
      }
    }
    
    figma.notify('✓ Artboards created', { timeout: 1500 });
    
    // Step 3: Create styles
    ensurePaintStyles();
    await ensureTextStyles();
    
    // Step 4: Build components page
    const componentsPage = pages.get('07_Components_Styles');
    if (componentsPage) {
      await buildComponents(componentsPage);
      await createSpacingLabels(componentsPage);
    }
    
    // Step 5: Populate content pages
    const auditPage = pages.get('01_Quick_Audit');
    if (auditPage) await populateAuditPage(auditPage);
    
    const rationalePage = pages.get('08_Rationale_Notes');
    if (rationalePage) await populateRationalePage(rationalePage);
    
    const coverPage = pages.get('00_Cover');
    if (coverPage) {
      await populateCoverPage(coverPage);
      figma.currentPage = coverPage;
      figma.viewport.scrollAndZoomIntoView([coverPage.children[0]]);
    }
    
    // Final success message
    figma.notify('✅ Scaffold complete! Start designing in 03_PDP_Desktop', { timeout: 4000 });
    
  } catch (error) {
    console.error('Scaffold generation error:', error);
    figma.notify(`❌ Error: ${error}`, { timeout: 5000, error: true });
  }
}

// ============================================================================
// PLUGIN INITIALIZATION
// ============================================================================

figma.showUI(__html__, { width: 360, height: 220 });

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'generate') {
    await generateScaffold();
  }
  
  if (msg.type === 'close') {
    figma.closePlugin();
  }
};
