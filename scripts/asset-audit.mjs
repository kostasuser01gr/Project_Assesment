#!/usr/bin/env node

/**
 * Asset Audit Script
 * Scans public/assets/photos/** and generates comprehensive report
 */

import { readdirSync, statSync, existsSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = join(__dirname, '..');
const ASSETS_DIR = join(ROOT_DIR, 'public/assets/photos');
const LEGACY_DIR = join(ROOT_DIR, 'public/images/beach');

const CATEGORIES = ['hero', 'product', 'gallery', 'setup', 'ugc'];
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

console.log('🔍 ASSET AUDIT - Sun Ninja Project');
console.log('═'.repeat(60));
console.log('');

// Scan function
function scanDirectory(dir) {
  if (!existsSync(dir)) return [];
  
  const files = [];
  const items = readdirSync(dir);
  
  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...scanDirectory(fullPath));
    } else if (IMAGE_EXTENSIONS.includes(extname(item).toLowerCase())) {
      files.push({
        name: item,
        path: fullPath,
        size: stat.size,
        sizeKB: Math.round(stat.size / 1024),
      });
    }
  }
  
  return files;
}

// Scan each category
const categoryStats = {};
let totalFiles = 0;
let totalSize = 0;

console.log('📊 CATEGORY BREAKDOWN');
console.log('─'.repeat(60));

for (const category of CATEGORIES) {
  const categoryDir = join(ASSETS_DIR, category);
  const files = scanDirectory(categoryDir);
  
  const size = files.reduce((sum, f) => sum + f.size, 0);
  categoryStats[category] = {
    count: files.length,
    size,
    sizeKB: Math.round(size / 1024),
    sizeMB: (size / 1024 / 1024).toFixed(2),
    files
  };
  
  totalFiles += files.length;
  totalSize += size;
  
  console.log(`  ${category.toUpperCase().padEnd(10)} │ ${files.length} files │ ${categoryStats[category].sizeMB} MB`);
}

console.log('─'.repeat(60));
console.log(`  TOTAL      │ ${totalFiles} files │ ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
console.log('');

// Check legacy images
console.log('📁 LEGACY IMAGES (public/images/beach)');
console.log('─'.repeat(60));
if (existsSync(LEGACY_DIR)) {
  const legacyFiles = scanDirectory(LEGACY_DIR);
  console.log(`  Found ${legacyFiles.length} legacy files (${(legacyFiles.reduce((s, f) => s + f.size, 0) / 1024 / 1024).toFixed(2)} MB)`);
  console.log(`  ℹ️  These should be organized into /assets/photos categories`);
} else {
  console.log(`  ✓ No legacy directory`);
}
console.log('');

// Top 20 largest files
const allFiles = Object.values(categoryStats).flatMap(c => c.files);
const sorted = [...allFiles].sort((a, b) => b.size - a.size).slice(0, 20);

if (sorted.length > 0) {
  console.log('📦 TOP 20 LARGEST FILES');
  console.log('─'.repeat(60));
  sorted.forEach((file, i) => {
    console.log(`  ${(i + 1).toString().padStart(2)}. ${file.name.padEnd(40)} ${file.sizeKB.toString().padStart(6)} KB`);
  });
  console.log('');
}

// Suggested picks
console.log('✨ SUGGESTED PICKS FOR FIGMA');
console.log('─'.repeat(60));
console.log(`  Hero:    ${categoryStats.hero.count >= 2 ? '✓' : '⚠️'} ${categoryStats.hero.count}/2 minimum (showing above-fold impact)`);
console.log(`  Product: ${categoryStats.product.count >= 3 ? '✓' : '⚠️'} ${categoryStats.product.count}/3 minimum (main + angles)`);
console.log(`  Gallery: ${categoryStats.gallery.count >= 8 ? '✓' : '⚠️'} ${categoryStats.gallery.count}/8-12 recommended`);
console.log(`  Setup:   ${categoryStats.setup.count >= 3 ? '✓' : '⚠️'} ${categoryStats.setup.count}/3 minimum (3-step process)`);
console.log(`  UGC:     ${categoryStats.ugc.count >= 6 ? '✓' : '⚠️'} ${categoryStats.ugc.count}/6-12 recommended (social proof grid)`);
console.log('');

// Recommendations
console.log('💡 RECOMMENDATIONS');
console.log('─'.repeat(60));

const recommendations = [];

if (totalFiles === 0) {
  recommendations.push('⚠️  No images found in /public/assets/photos');
  recommendations.push('   Run: bash scripts/import_figma_import_photos.sh');
}

if (categoryStats.hero.count < 2) {
  recommendations.push('⚠️  Need at least 2 hero images (primary + alternate)');
}

if (categoryStats.product.count < 3) {
  recommendations.push('⚠️  Need at least 3 product images (main + detail shots)');
}

if (categoryStats.gallery.count < 8) {
  recommendations.push('⚠️  Need 8-12 gallery images for lifestyle showcase');
}

if (categoryStats.setup.count < 3) {
  recommendations.push('⚠️  Need 3 setup images for "How It Works" section');
}

if (categoryStats.ugc.count < 6) {
  recommendations.push('⚠️  Need 6-12 UGC images for social proof grid');
}

if (recommendations.length === 0) {
  console.log('  ✓ All image requirements met!');
} else {
  recommendations.forEach(r => console.log(`  ${r}`));
}

console.log('');
console.log('═'.repeat(60));
console.log('✓ Audit complete');
console.log('');
