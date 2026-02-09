#!/usr/bin/env node

import { readdirSync, statSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ASSETS_ROOT = join(__dirname, '../public/assets/photos');
const LEGACY_ROOT = join(__dirname, '../public/images/beach');

const CATEGORIES = ['hero', 'product', 'gallery', 'setup', 'ugc'];

function getFilesInDir(dir, extensions = ['.jpg', '.jpeg', '.png', '.webp']) {
  try {
    const items = readdirSync(dir);
    return items.filter(item => {
      const ext = item.substring(item.lastIndexOf('.')).toLowerCase();
      return extensions.includes(ext);
    }).map(file => {
      const stats = statSync(join(dir, file));
      return {
        name: file,
        size: stats.size,
        path: join(dir, file)
      };
    });
  } catch (err) {
    return [];
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('🔍 ASSET AUDIT - Sun Ninja Project');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

// Check new structure
console.log('📦 NEW ASSET STRUCTURE (public/assets/photos/):\n');
let totalNewFiles = 0;
let totalNewSize = 0;

CATEGORIES.forEach(cat => {
  const dir = join(ASSETS_ROOT, cat);
  const files = getFilesInDir(dir);
  totalNewFiles += files.length;
  const catSize = files.reduce((sum, f) => sum + f.size, 0);
  totalNewSize += catSize;
  
  console.log(`  ${cat.toUpperCase()}:`);
  console.log(`    Files: ${files.length}`);
  console.log(`    Size: ${formatBytes(catSize)}`);
  if (files.length > 0) {
    console.log(`    Samples: ${files.slice(0, 3).map(f => f.name).join(', ')}`);
  }
  console.log('');
});

console.log(`  TOTAL: ${totalNewFiles} files, ${formatBytes(totalNewSize)}\n`);

// Check legacy structure
console.log('📁 LEGACY STRUCTURE (public/images/beach/):\n');
const legacyFiles = getFilesInDir(LEGACY_ROOT);
const legacySize = legacyFiles.reduce((sum, f) => sum + f.size, 0);

console.log(`  Files: ${legacyFiles.length}`);
console.log(`  Size: ${formatBytes(legacySize)}\n`);

// Top 20 largest files
console.log('📊 TOP 20 LARGEST FILES:\n');
const allFiles = [...getFilesInDir(LEGACY_ROOT), 
                  ...CATEGORIES.flatMap(cat => getFilesInDir(join(ASSETS_ROOT, cat)))];
const sorted = allFiles.sort((a, b) => b.size - a.size).slice(0, 20);

sorted.forEach((file, idx) => {
  const shortPath = file.path.split('public/')[1] || file.path;
  console.log(`  ${idx + 1}. ${file.name} - ${formatBytes(file.size)}`);
  console.log(`     ${shortPath}`);
});

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('💡 SUGGESTED PICKS FOR FIGMA');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

console.log('Minimum Required:');
console.log('  Hero:    2 images  (main hero + alternate)');
console.log('  Product: 3 images  (main + detail angles)');
console.log('  Gallery: 8 images  (lifestyle variety)');
console.log('  Setup:   3 images  (step-by-step process)');
console.log('  UGC:     6 images  (authentic customer photos)');
console.log('');
console.log('Optimal Range:');
console.log('  Gallery: 8-12 images');
console.log('  UGC:     6-12 images');
console.log('');

// Auto-suggest from legacy
console.log('📌 AUTO-SUGGESTED FROM LEGACY FILES:\n');

const suggestions = {
  hero: legacyFiles.filter(f => f.name.includes('hero')).slice(0, 2),
  product: legacyFiles.filter(f => f.name.includes('product')).slice(0, 3),
  gallery: legacyFiles.filter(f => f.name.includes('gallery')).slice(0, 10),
  setup: legacyFiles.filter(f => f.name.includes('setup')).slice(0, 3),
  ugc: legacyFiles.filter(f => f.name.includes('ugc')).slice(0, 8)
};

Object.entries(suggestions).forEach(([cat, files]) => {
  console.log(`  ${cat.toUpperCase()}:`);
  files.forEach(f => console.log(`    - ${f.name}`));
  console.log('');
});

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('✅ AUDIT COMPLETE');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

console.log('Next Steps:');
console.log('1. Run: bash scripts/organize_photos.sh');
console.log('2. Review organized assets in public/assets/photos/');
console.log('3. Update photoManager.ts to use new structure');
console.log('');
