#!/bin/bash

# Organize Photos - Move from legacy paths to standardized asset structure
# Preserves originals, creates copies with consistent naming

set -e

PROJECT_ROOT="/Users/user/Downloads/Sun Ninja Redesign Project"
LEGACY_DIR="$PROJECT_ROOT/public/images/beach"
ASSETS_DIR="$PROJECT_ROOT/public/assets/photos"

echo "🔄 ORGANIZING PHOTOS - Sun Ninja Asset Pipeline"
echo "=============================================="
echo ""

# Ensure directories exist
mkdir -p "$ASSETS_DIR"/{hero,product,gallery,setup,ugc}

# Counters
HERO_COUNT=0
PRODUCT_COUNT=0
GALLERY_COUNT=0
SETUP_COUNT=0
UGC_COUNT=0

echo "📦 Copying from legacy structure..."
echo "Source: $LEGACY_DIR"
echo "Target: $ASSETS_DIR"
echo ""

# HERO - Main hero images
if [ -f "$LEGACY_DIR/hero-main.jpg" ]; then
  cp "$LEGACY_DIR/hero-main.jpg" "$ASSETS_DIR/hero/hero-01.jpg"
  ((HERO_COUNT++))
  echo "✓ Hero 01: hero-main.jpg"
fi

if [ -f "$LEGACY_DIR/hero-family.jpg" ]; then
  cp "$LEGACY_DIR/hero-family.jpg" "$ASSETS_DIR/hero/hero-02.jpg"
  ((HERO_COUNT++))
  echo "✓ Hero 02: hero-family.jpg"
fi

# PRODUCT - Product shots
for i in 01 02 03; do
  if [ -f "$LEGACY_DIR/product-beach-$i.jpg" ]; then
    cp "$LEGACY_DIR/product-beach-$i.jpg" "$ASSETS_DIR/product/product-$i.jpg"
    ((PRODUCT_COUNT++))
    echo "✓ Product $i: product-beach-$i.jpg"
  fi
done

# Add detail shots as product variations
if [ -f "$LEGACY_DIR/detail-sand-pockets.jpg" ]; then
  cp "$LEGACY_DIR/detail-sand-pockets.jpg" "$ASSETS_DIR/product/product-detail-01.jpg"
  ((PRODUCT_COUNT++))
  echo "✓ Product Detail 01: detail-sand-pockets.jpg"
fi

if [ -f "$LEGACY_DIR/detail-mesh-windows.jpg" ]; then
  cp "$LEGACY_DIR/detail-mesh-windows.jpg" "$ASSETS_DIR/product/product-detail-02.jpg"
  ((PRODUCT_COUNT++))
  echo "✓ Product Detail 02: detail-mesh-windows.jpg"
fi

# GALLERY - Lifestyle/environment shots
GALLERY_FILES=(
  "gallery-beach-lifestyle.jpg"
  "gallery-beach-relaxation.jpg"
  "gallery-sunny-day.jpg"
  "gallery-ocean-waves.jpg"
  "gallery-coastal-view.jpg"
  "gallery-sunny-shore.jpg"
  "gallery-8.jpg"
  "gallery-9.jpg"
  "product-main.jpg"
  "lifestyle-1.jpg"
)

for file in "${GALLERY_FILES[@]}"; do
  if [ -f "$LEGACY_DIR/$file" ]; then
    ((GALLERY_COUNT++))
    NUM=$(printf "%02d" $GALLERY_COUNT)
    cp "$LEGACY_DIR/$file" "$ASSETS_DIR/gallery/gallery-$NUM.jpg"
    echo "✓ Gallery $NUM: $file"
  fi
done

# SETUP - Step-by-step setup photos
SETUP_FILES=(
  "setup-unpacking.jpg"
  "setup-popup.jpg"
  "setup-securing.jpg"
  "setup-beach-umbrella.jpg"
)

SETUP_IDX=1
for file in "${SETUP_FILES[@]}"; do
  if [ -f "$LEGACY_DIR/$file" ]; then
    NUM=$(printf "%02d" $SETUP_IDX)
    cp "$LEGACY_DIR/$file" "$ASSETS_DIR/setup/setup-$NUM.jpg"
    ((SETUP_COUNT++))
    ((SETUP_IDX++))
    echo "✓ Setup $NUM: $file"
  fi
done

# UGC - User Generated Content style photos
UGC_FILES=(
  "ugc-beach-day.jpg"
  "ugc-kids-playing.jpg"
  "ugc-summer-fun.jpg"
  "ugc-lifestyle-beach.jpg"
  "ugc-family-fun.jpg"
  "ugc-relaxation.jpg"
  "ugc-sunset-chill.jpg"
  "ugc-sandy-shores.jpg"
)

UGC_IDX=1
for file in "${UGC_FILES[@]}"; do
  if [ -f "$LEGACY_DIR/$file" ]; then
    NUM=$(printf "%02d" $UGC_IDX)
    cp "$LEGACY_DIR/$file" "$ASSETS_DIR/ugc/ugc-$NUM.jpg"
    ((UGC_COUNT++))
    ((UGC_IDX++))
    echo "✓ UGC $NUM: $file"
  fi
done

echo ""
echo "=============================================="
echo "📊 ORGANIZATION SUMMARY"
echo "=============================================="
echo ""
echo "  Hero:    $HERO_COUNT files"
echo "  Product: $PRODUCT_COUNT files"
echo "  Gallery: $GALLERY_COUNT files"
echo "  Setup:   $SETUP_COUNT files"
echo "  UGC:     $UGC_COUNT files"
echo ""
echo "Total:   $(($HERO_COUNT + $PRODUCT_COUNT + $GALLERY_COUNT + $SETUP_COUNT + $UGC_COUNT)) files organized"
echo ""
echo "✅ Photo organization complete!"
echo ""
echo "Next: Run 'node scripts/asset-audit.mjs' to verify"
