#!/bin/bash

# Import Photos from FIGMA_IMPORT to standardized asset structure
# Does NOT delete originals - only copies and renames

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
SOURCE_DIR="/Users/user/Downloads/Sun Ninja Redesign Project 2/FIGMA_IMPORT/02_Photos/00_All"
DEST_BASE="$PROJECT_ROOT/public/assets/photos"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}📸 Photo Import Utility${NC}"
echo "═══════════════════════════════════════════════════════════"
echo ""

# Check source directory
if [ ! -d "$SOURCE_DIR" ]; then
  echo -e "${YELLOW}⚠️  Source directory not found:${NC}"
  echo "   $SOURCE_DIR"
  echo ""
  echo "Please ensure FIGMA_IMPORT photos exist at this location."
  exit 1
fi

# Count source files
SOURCE_COUNT=$(find "$SOURCE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | wc -l | tr -d ' ')
echo -e "📦 Found ${GREEN}${SOURCE_COUNT}${NC} source images"
echo ""

# Function to copy and rename
copy_category() {
  local CATEGORY=$1
  local PATTERN=$2
  local PREFIX=$3
  local MIN_COUNT=$4
  
  echo -e "${BLUE}Processing ${CATEGORY}...${NC}"
  
  # Create destination
  mkdir -p "$DEST_BASE/$CATEGORY"
  
  # Find matching files
  local FILES=($(find "$SOURCE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) -iname "*${PATTERN}*" | head -${MIN_COUNT}))
  
  local COUNT=0
  for FILE in "${FILES[@]}"; do
    COUNT=$((COUNT + 1))
    local EXT="${FILE##*.}"
    local DEST_FILE="$DEST_BASE/$CATEGORY/${PREFIX}-$(printf "%02d" $COUNT).${EXT}"
    
    cp "$FILE" "$DEST_FILE"
    echo "  ✓ ${PREFIX}-$(printf "%02d" $COUNT).${EXT}"
  done
  
  echo -e "  ${GREEN}Copied ${COUNT} files${NC}"
  echo ""
}

# Import by category
copy_category "hero" "beach" "hero" 3
copy_category "product" "tent" "product" 5
copy_category "gallery" "" "gallery" 12
copy_category "setup" "setup" "setup" 3
copy_category "ugc" "" "ugc" 10

echo "═══════════════════════════════════════════════════════════"
echo -e "${GREEN}✓ Import complete!${NC}"
echo ""
echo "Next steps:"
echo "  1. Run: node scripts/asset-audit.mjs"
echo "  2. Review images in /public/assets/photos"
echo "  3. Remove any unwanted images"
echo "  4. Run: npm run dev"
echo ""
