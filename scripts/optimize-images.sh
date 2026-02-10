#!/bin/bash
# Image Optimization Script for Sun Ninja Project
# Optimizes images using modern formats and compression

echo "🖼️  Sun Ninja Image Optimization Started..."
echo "=========================================="

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "⚠️  WebP encoder (cwebp) not found."
    echo "📦 Install with: brew install webp (macOS) or apt-get install webp (Linux)"
    exit 1
fi

# Navigate to project root
cd "$(dirname "$0")/.." || exit

# Create optimized directory if it doesn't exist
mkdir -p public/assets/photos-optimized

PHOTOS_DIR="public/assets/photos"
OUTPUT_DIR="public/assets/photos-optimized"

# Counter for processed images
PROCESSED=0
TOTAL=0

# Count total images
TOTAL=$(find "$PHOTOS_DIR" -type f \( -iname "*.jpg" -o -iname "*.png" -o -iname "*.jpeg" \) | wc -l | tr -d ' ')

echo "📊 Found $TOTAL images to optimize"
echo ""

# Process each category
for category in hero product gallery setup ugc; do
    if [ -d "$PHOTOS_DIR/$category" ]; then
        echo "📁 Processing $category directory..."
        mkdir -p "$OUTPUT_DIR/$category"
        
        # Convert to WebP with optimization
        shopt -s nullglob
        for ext in jpg png jpeg JPG PNG JPEG; do
            for img in "$PHOTOS_DIR/$category"/*."$ext"; do
                if [ -f "$img" ]; then
                    filename=$(basename "$img")
                    name="${filename%.*}"
                    
                    # Convert to WebP (85% quality, good balance)
                    cwebp -q 85 "$img" -o "$OUTPUT_DIR/$category/$name.webp" 2>/dev/null
                    
                    # Also create responsive versions (multiple sizes)
                    for size in 320 640 768 1024 1280 1920; do
                        # Use ImageMagick if available for resizing
                        if command -v convert &> /dev/null; then
                            convert "$img" -resize "${size}>" "$OUTPUT_DIR/$category/${name}-${size}w.jpg" 2>/dev/null
                            cwebp -q 85 "$OUTPUT_DIR/$category/${name}-${size}w.jpg" -o "$OUTPUT_DIR/$category/${name}-${size}w.webp" 2>/dev/null
                            rm -f "$OUTPUT_DIR/$category/${name}-${size}w.jpg"
                        fi
                    done
                    
                    PROCESSED=$((PROCESSED + 1))
                    echo "  ✓ Optimized: $filename"
                fi
            done
        done
        shopt -u nullglob
    fi
done

echo ""
echo "=========================================="
echo "✅ Optimization Complete!"
echo "📊 Processed: $PROCESSED/$TOTAL images"
echo "📂 Output: $OUTPUT_DIR"
echo ""

# Calculate space savings
if command -v du &> /dev/null; then
    ORIGINAL_SIZE=$(du -sh "$PHOTOS_DIR" | cut -f1)
    OPTIMIZED_SIZE=$(du -sh "$OUTPUT_DIR" | cut -f1)
    echo "💾 Original size: $ORIGINAL_SIZE"
    echo "💾 Optimized size: $OPTIMIZED_SIZE"
fi

echo ""
echo "🎯 Next steps:"
echo "  1. Update image imports to use optimized versions"
echo "  2. Implement <picture> elements with WebP sources"
echo "  3. Add loading='lazy' to image tags"
echo ""
