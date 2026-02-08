#!/bin/bash

# Photo Copy Script - Copy 298 real beach photos to project
# Source: /Users/user/Downloads/Edited Pics/
# Destination: ./public/images/beach/

set -e  # Exit on error

SOURCE_DIR="/Users/user/Downloads/Edited Pics"
DEST_DIR="./public/images/beach"

echo "🏖️  Sun Ninja Photo Copy Script"
echo "================================"
echo "Source: $SOURCE_DIR"
echo "Destination: $DEST_DIR"
echo ""

# Ensure destination exists
mkdir -p "$DEST_DIR"

echo "📸 Copying photos from library..."

# Count total photos
TOTAL_PHOTOS=$(find "$SOURCE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | wc -l | xargs)
echo "Found $TOTAL_PHOTOS photos in source library"

# Copy HERO photos (wide dramatic shots)
echo ""
echo "1️⃣  Copying HERO photos..."
find "$SOURCE_DIR" -type f \( -iname "*beach*family*.jpg" -o -iname "*wide*beach*.jpg" -o -iname "*panorama*.jpg" \) | head -3 | while read -r file; do
  filename=$(basename "$file")
  cp "$file" "$DEST_DIR/hero-family.jpg" 2>/dev/null && echo "  ✓ hero-family.jpg" && break
done

find "$SOURCE_DIR" -type f \( -iname "*sunset*beach*.jpg" -o -iname "*golden*hour*.jpg" \) | head -1 | while read -r file; do
  cp "$file" "$DEST_DIR/hero-sunset.jpg" 2>/dev/null && echo "  ✓ hero-sunset.jpg"
done

# If hero photos not found, use any beach photos
if [ ! -f "$DEST_DIR/hero-family.jpg" ]; then
  find "$SOURCE_DIR" -type f -iname "*.jpg" | head -1 | while read -r file; do
    cp "$file" "$DEST_DIR/hero-family.jpg" 2>/dev/null && echo "  ✓ hero-family.jpg (fallback)"
  done
fi

if [ ! -f "$DEST_DIR/hero-sunset.jpg" ]; then
  find "$SOURCE_DIR" -type f -iname "*.jpg" | head -2 | tail -1 | while read -r file; do
    cp "$file" "$DEST_DIR/hero-sunset.jpg" 2>/dev/null && echo "  ✓ hero-sunset.jpg (fallback)"
  done
fi

# Copy PRODUCT photos (tent details)
echo ""
echo "2️⃣  Copying PRODUCT photos..."
find "$SOURCE_DIR" -type f \( -iname "*tent*.jpg" -o -iname "*product*.jpg" -o -iname "*detail*.jpg" \) | head -4 | awk 'NR==1' | while read -r file; do
  cp "$file" "$DEST_DIR/product-detail-upf.jpg" 2>/dev/null && echo "  ✓ product-detail-upf.jpg"
done

find "$SOURCE_DIR" -type f \( -iname "*stake*.jpg" -o -iname "*anchor*.jpg" \) | head -1 | while read -r file; do
  cp "$file" "$DEST_DIR/product-stakes.jpg" 2>/dev/null && echo "  ✓ product-stakes.jpg"
done

find "$SOURCE_DIR" -type f \( -iname "*bag*.jpg" -o -iname "*packed*.jpg" -o -iname "*carry*.jpg" \) | head -1 | while read -r file; do
  cp "$file" "$DEST_DIR/product-packed.jpg" 2>/dev/null && echo "  ✓ product-packed.jpg"
done

# Fallback for product photos
if [ ! -f "$DEST_DIR/product-detail-upf.jpg" ]; then
  find "$SOURCE_DIR" -type f -iname "*.jpg" | head -3 | tail -1 | while read -r file; do
    cp "$file" "$DEST_DIR/product-detail-upf.jpg" 2>/dev/null && echo "  ✓ product-detail-upf.jpg (fallback)"
  done
fi

# Copy LIFESTYLE photos (people using tent)
echo ""
echo "3️⃣  Copying LIFESTYLE photos..."
counter=1
find "$SOURCE_DIR" -type f \( -iname "*kid*.jpg" -o -iname "*family*.jpg" -o -iname "*people*.jpg" -o -iname "*beach*.jpg" \) | head -5 | while read -r file; do
  cp "$file" "$DEST_DIR/lifestyle-$counter.jpg" 2>/dev/null && echo "  ✓ lifestyle-$counter.jpg"
  counter=$((counter + 1))
done

# Fallback for lifestyle photos
for i in 1 2 3 4 5; do
  if [ ! -f "$DEST_DIR/lifestyle-$i.jpg" ]; then
    find "$SOURCE_DIR" -type f -iname "*.jpg" | head -$((3 + i)) | tail -1 | while read -r file; do
      cp "$file" "$DEST_DIR/lifestyle-$i.jpg" 2>/dev/null && echo "  ✓ lifestyle-$i.jpg (fallback)"
    done
  fi
done

# Copy SETUP photos (installation process)
echo ""
echo "4️⃣  Copying SETUP photos..."
find "$SOURCE_DIR" -type f \( -iname "*setup*.jpg" -o -iname "*install*.jpg" -o -iname "*assembly*.jpg" \) | head -2 | awk 'NR==1' | while read -r file; do
  cp "$file" "$DEST_DIR/setup-1.jpg" 2>/dev/null && echo "  ✓ setup-1.jpg"
done

find "$SOURCE_DIR" -type f \( -iname "*setup*.jpg" -o -iname "*install*.jpg" \) | head -2 | tail -1 | while read -r file; do
  cp "$file" "$DEST_DIR/setup-2.jpg" 2>/dev/null && echo "  ✓ setup-2.jpg"
done

# Fallback for setup photos
if [ ! -f "$DEST_DIR/setup-1.jpg" ]; then
  find "$SOURCE_DIR" -type f -iname "*.jpg" | head -8 | tail -1 | while read -r file; do
    cp "$file" "$DEST_DIR/setup-1.jpg" 2>/dev/null && echo "  ✓ setup-1.jpg (fallback)"
  done
fi
if [ ! -f "$DEST_DIR/setup-2.jpg" ]; then
  find "$SOURCE_DIR" -type f -iname "*.jpg" | head -9 | tail -1 | while read -r file; do
    cp "$file" "$DEST_DIR/setup-2.jpg" 2>/dev/null && echo "  ✓ setup-2.jpg (fallback)"
  done
fi

# Copy GALLERY photos (mixed shots)
echo ""
echo "5️⃣  Copying GALLERY photos..."
counter=4
find "$SOURCE_DIR" -type f -iname "*.jpg" | head -15 | tail -6 | while read -r file; do
  cp "$file" "$DEST_DIR/gallery-$counter.jpg" 2>/dev/null && echo "  ✓ gallery-$counter.jpg"
  counter=$((counter + 1))
done

# Copy DETAIL photos (close-ups)
echo ""
echo "6️⃣  Copying DETAIL photos..."
find "$SOURCE_DIR" -type f \( -iname "*mesh*.jpg" -o -iname "*window*.jpg" -o -iname "*vent*.jpg" \) | head -1 | while read -r file; do
  cp "$file" "$DEST_DIR/detail-mesh-windows.jpg" 2>/dev/null && echo "  ✓ detail-mesh-windows.jpg"
done

find "$SOURCE_DIR" -type f \( -iname "*pocket*.jpg" -o -iname "*sand*.jpg" \) | head -1 | while read -r file; do
  cp "$file" "$DEST_DIR/detail-sand-pockets.jpg" 2>/dev/null && echo "  ✓ detail-sand-pockets.jpg"
done

# Fallback for detail photos
if [ ! -f "$DEST_DIR/detail-mesh-windows.jpg" ]; then
  find "$SOURCE_DIR" -type f -iname "*.jpg" | head -16 | tail -1 | while read -r file; do
    cp "$file" "$DEST_DIR/detail-mesh-windows.jpg" 2>/dev/null && echo "  ✓ detail-mesh-windows.jpg (fallback)"
  done
fi
if [ ! -f "$DEST_DIR/detail-sand-pockets.jpg" ]; then
  find "$SOURCE_DIR" -type f -iname "*.jpg" | head -17 | tail -1 | while read -r file; do
    cp "$file" "$DEST_DIR/detail-sand-pockets.jpg" 2>/dev/null && echo "  ✓ detail-sand-pockets.jpg (fallback)"
  done
fi

# Summary
echo ""
echo "================================"
COPIED_COUNT=$(find "$DEST_DIR" -type f | wc -l | xargs)
echo "✅ Photo copy complete!"
echo "📊 Copied $COPIED_COUNT photos to $DEST_DIR"
echo ""
echo "Next steps:"
echo "1. Run 'npm run dev' to see updated photos"
echo "2. All photo references are managed in src/utils/photoManager.ts"
echo "3. Check FIGMA_DELIVERABLE_COMPLETE.md for Figma integration"
echo ""
