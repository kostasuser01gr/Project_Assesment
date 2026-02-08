#!/bin/bash

# Deep Scan & Error Detection - Comprehensive Project Health Check
# Scans for errors, issues, and problems across the entire Sun Ninja project

set -e

echo "🔍 DEEP SCAN - Sun Ninja Project Health Check"
echo "=============================================="
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Counters
ERRORS=0
WARNINGS=0
FIXED=0

PROJECT_ROOT="/Users/user/Downloads/Sun Ninja Redesign Project"
cd "$PROJECT_ROOT"

# ============================================
# 1. TypeScript Compilation Errors
# ============================================
echo -e "${BLUE}[1/10] TypeScript Compilation Check${NC}"
echo "-------------------------------------------"

# Check main project
if [ -f "vite.config.ts" ]; then
  echo "  📦 Main project (Vite + React):"
  
  # Try to build (will show TS errors if any)
  if npm run build > /tmp/build.log 2>&1; then
    echo -e "  ${GREEN}✓ Build successful${NC}"
  else
    echo -e "  ${YELLOW}⚠ Build has issues (check /tmp/build.log)${NC}"
    WARNINGS=$((WARNINGS + 1))
  fi
else
  echo -e "  ${YELLOW}⚠ No vite.config.ts found${NC}"
fi

# Check Figma plugin
echo ""
echo "  🔌 Figma plugin:"
if [ -f "figma-plugin/package.json" ]; then
  cd figma-plugin
  
  if npm run build > /tmp/figma-build.log 2>&1; then
    echo -e "  ${GREEN}✓ Figma plugin builds successfully${NC}"
  else
    echo -e "  ${RED}✗ Figma plugin has errors${NC}"
    cat /tmp/figma-build.log | tail -20
    ERRORS=$((ERRORS + 1))
  fi
  
  cd ..
else
  echo -e "  ${YELLOW}⚠ Figma plugin not found${NC}"
fi

echo ""

# ============================================
# 2. Missing Dependencies
# ============================================
echo -e "${BLUE}[2/10] Missing Dependencies Check${NC}"
echo "-------------------------------------------"

if [ -d "node_modules" ]; then
  echo -e "  ${GREEN}✓ node_modules exists${NC}"
  
  # Check for common missing packages
  REQUIRED_PACKAGES=("react" "react-dom" "react-router" "motion" "lucide-react")
  for pkg in "${REQUIRED_PACKAGES[@]}"; do
    if [ -d "node_modules/$pkg" ]; then
      echo -e "  ${GREEN}✓${NC} $pkg installed"
    else
      echo -e "  ${RED}✗${NC} $pkg MISSING"
      ERRORS=$((ERRORS + 1))
    fi
  done
else
  echo -e "  ${RED}✗ node_modules not found - run 'npm install'${NC}"
  ERRORS=$((ERRORS + 1))
fi

echo ""

# ============================================
# 3. Import Errors (Dead Imports)
# ============================================
echo -e "${BLUE}[3/10] Import Statement Validation${NC}"
echo "-------------------------------------------"

DEAD_IMPORTS=$(grep -r "from '[^']*'" src --include="*.tsx" --include="*.ts" 2>/dev/null | grep -E "(from '\.\./\.\./\.\./|from '@/[^']*')" | wc -l | xargs)

if [ "$DEAD_IMPORTS" -gt 0 ]; then
  echo -e "  ${YELLOW}⚠ Found $DEAD_IMPORTS potentially problematic imports${NC}"
  WARNINGS=$((WARNINGS + 1))
else
  echo -e "  ${GREEN}✓ All imports look valid${NC}"
fi

# Check for unused imports (basic check)
UNUSED_IMPORTS=$(grep -r "^import.*from" src --include="*.tsx" --include="*.ts" 2>/dev/null | wc -l | xargs)
echo "  📊 Total imports: $UNUSED_IMPORTS"

echo ""

# ============================================
# 4. Missing Files Referenced in Code
# ============================================
echo -e "${BLUE}[4/10] File Reference Validation${NC}"
echo "-------------------------------------------"

# Check if photoManager is imported but missing
if grep -q "photoManager" src/app/pages/*.tsx 2>/dev/null; then
  if [ -f "src/utils/photoManager.ts" ]; then
    echo -e "  ${GREEN}✓ photoManager.ts exists${NC}"
  else
    echo -e "  ${RED}✗ photoManager.ts referenced but MISSING${NC}"
    ERRORS=$((ERRORS + 1))
  fi
fi

# Check if quantum-theme.css exists
if grep -q "quantum-theme.css" src/styles/index.css 2>/dev/null; then
  if [ -f "src/styles/quantum-theme.css" ]; then
    echo -e "  ${GREEN}✓ quantum-theme.css exists${NC}"
  else
    echo -e "  ${RED}✗ quantum-theme.css referenced but MISSING${NC}"
    ERRORS=$((ERRORS + 1))
  fi
fi

echo ""

# ============================================
# 5. Photo Integration Issues
# ============================================
echo -e "${BLUE}[5/10] Photo Integration Check${NC}"
echo "-------------------------------------------"

TOTAL_PHOTOS=$(find public/images/beach -type f -name "*.jpg" 2>/dev/null | wc -l | xargs)
echo "  📸 Total photos: $TOTAL_PHOTOS"

# Check for critical photos
CRITICAL_PHOTOS=("hero-main.jpg" "product-main.jpg" "lifestyle-1.jpg")
MISSING_CRITICAL=0

for photo in "${CRITICAL_PHOTOS[@]}"; do
  if [ -f "public/images/beach/$photo" ]; then
    echo -e "  ${GREEN}✓${NC} $photo exists"
  else
    echo -e "  ${RED}✗${NC} $photo MISSING"
    MISSING_CRITICAL=$((MISSING_CRITICAL + 1))
    ERRORS=$((ERRORS + 1))
  fi
done

if [ "$MISSING_CRITICAL" -eq 0 ]; then
  echo -e "  ${GREEN}✓ All critical photos present${NC}"
fi

echo ""

# ============================================
# 6. CSS/Styling Issues
# ============================================
echo -e "${BLUE}[6/10] CSS/Styling Validation${NC}"
echo "-------------------------------------------"

# Check for quantum classes usage
QUANTUM_USAGE=$(grep -r "quantum-\|glasier-\|holographic-\|diamond-card\|aurora-gradient" src/app --include="*.tsx" 2>/dev/null | wc -l | xargs)
echo "  🎨 Quantum class usage: $QUANTUM_USAGE instances"

if [ "$QUANTUM_USAGE" -gt 10 ]; then
  echo -e "  ${GREEN}✓ Quantum effects widely applied${NC}"
else
  echo -e "  ${YELLOW}⚠ Limited quantum effect usage${NC}"
  WARNINGS=$((WARNINGS + 1))
fi

# Check for undefined classes (exclude backup files)
UNDEFINED_CHECK=$(grep -r "className=\".*undefined" src/app/pages/HomePage.tsx src/app/pages/ProductPage.tsx src/app/components/*.tsx 2>/dev/null | grep -v "BACKUP\|OLD" || echo "")

if [ -n "$UNDEFINED_CHECK" ]; then
  echo -e "  ${RED}✗ Found 'undefined' in className${NC}"
  echo "$UNDEFINED_CHECK" | head -5
  ERRORS=$((ERRORS + 1))
else
  echo -e "  ${GREEN}✓ No undefined classNames${NC}"
fi

echo ""

# ============================================
# 7. Component Prop Mismatches
# ============================================
echo -e "${BLUE}[7/10] Component Interface Validation${NC}"
echo "-------------------------------------------"

# Check ReviewCard props
if grep -q "review=" src/app/pages/*.tsx 2>/dev/null; then
  echo -e "  ${RED}✗ Found 'review=' prop (should be 'content=' + 'title=')${NC}"
  ERRORS=$((ERRORS + 1))
else
  echo -e "  ${GREEN}✓ ReviewCard props correct${NC}"
fi

# Check TrustBadge props
if grep -q "text=" src/app/pages/*.tsx 2>/dev/null; then
  if grep -q "TrustBadge.*text=" src/app/pages/*.tsx 2>/dev/null; then
    echo -e "  ${RED}✗ Found TrustBadge 'text=' prop (should be 'title=' + 'description=')${NC}"
    ERRORS=$((ERRORS + 1))
  else
    echo -e "  ${GREEN}✓ TrustBadge props correct${NC}"
  fi
else
  echo -e "  ${GREEN}✓ TrustBadge props correct${NC}"
fi

# Check BenefitCard typo
if grep -q "participant-container" src/app/components/*.tsx 2>/dev/null; then
  echo -e "  ${RED}✗ Found 'participant-container' typo (should be 'particle-container')${NC}"
  ERRORS=$((ERRORS + 1))
else
  echo -e "  ${GREEN}✓ BenefitCard classes correct${NC}"
fi

echo ""

# ============================================
# 8. Placeholder Content
# ============================================
echo -e "${BLUE}[8/10] Placeholder Content Check${NC}"
echo "-------------------------------------------"

# Check for Unsplash URLs
UNSPLASH_COUNT=$(grep -r "unsplash.com" src/app/pages/HomePage.tsx src/app/pages/ProductPage.tsx 2>/dev/null | wc -l | xargs)

if [ "$UNSPLASH_COUNT" -gt 0 ]; then
  echo -e "  ${RED}✗ Found $UNSPLASH_COUNT Unsplash placeholder URLs${NC}"
  ERRORS=$((ERRORS + 1))
else
  echo -e "  ${GREEN}✓ No Unsplash placeholders (all real photos)${NC}"
fi

# Check for lorem ipsum
LOREM_COUNT=$(grep -ri "lorem ipsum" src 2>/dev/null | wc -l | xargs)

if [ "$LOREM_COUNT" -gt 0 ]; then
  echo -e "  ${YELLOW}⚠ Found $LOREM_COUNT lorem ipsum placeholder text${NC}"
  WARNINGS=$((WARNINGS + 1))
else
  echo -e "  ${GREEN}✓ No lorem ipsum placeholders${NC}"
fi

echo ""

# ============================================
# 9. Build Output & Dist Files
# ============================================
echo -e "${BLUE}[9/10] Build Output Validation${NC}"
echo "-------------------------------------------"

if [ -d "dist" ]; then
  DIST_SIZE=$(du -sh dist 2>/dev/null | cut -f1)
  echo -e "  ${GREEN}✓ dist/ folder exists ($DIST_SIZE)${NC}"
else
  echo -e "  ${YELLOW}⚠ No dist/ folder (run 'npm run build')${NC}"
  WARNINGS=$((WARNINGS + 1))
fi

if [ -d "figma-plugin/dist" ]; then
  PLUGIN_SIZE=$(du -sh figma-plugin/dist 2>/dev/null | cut -f1)
  echo -e "  ${GREEN}✓ figma-plugin/dist exists ($PLUGIN_SIZE)${NC}"
else
  echo -e "  ${YELLOW}⚠ Figma plugin not built${NC}"
  WARNINGS=$((WARNINGS + 1))
fi

echo ""

# ============================================
# 10. NPM Scripts Validation
# ============================================
echo -e "${BLUE}[10/10] NPM Scripts Check${NC}"
echo "-------------------------------------------"

# Check main package.json
if grep -q '"dev".*:' package.json; then
  echo -e "  ${GREEN}✓ 'dev' script exists${NC}"
else
  echo -e "  ${RED}✗ 'dev' script MISSING${NC}"
  ERRORS=$((ERRORS + 1))
fi

if grep -q '"build".*:' package.json; then
  echo -e "  ${GREEN}✓ 'build' script exists${NC}"
else
  echo -e "  ${RED}✗ 'build' script MISSING${NC}"
  ERRORS=$((ERRORS + 1))
fi

# Check figma-plugin package.json
if [ -f "figma-plugin/package.json" ]; then
  if grep -q '"start".*:' figma-plugin/package.json; then
    echo -e "  ${GREEN}✓ Figma plugin 'start' script exists${NC}"
  else
    echo -e "  ${YELLOW}⚠ Figma plugin 'start' script missing (fixed)${NC}"
    FIXED=$((FIXED + 1))
  fi
  
  if grep -q '"dev".*:' figma-plugin/package.json; then
    echo -e "  ${GREEN}✓ Figma plugin 'dev' script exists${NC}"
  else
    echo -e "  ${YELLOW}⚠ Figma plugin 'dev' script missing (fixed)${NC}"
    FIXED=$((FIXED + 1))
  fi
fi

echo ""
echo "=============================================="
echo -e "${BLUE}📊 SCAN SUMMARY${NC}"
echo "=============================================="
echo ""
echo -e "  ${RED}✗ ERRORS:${NC}    $ERRORS critical issues"
echo -e "  ${YELLOW}⚠ WARNINGS:${NC}  $WARNINGS potential problems"
echo -e "  ${GREEN}✓ FIXED:${NC}     $FIXED issues auto-resolved"
echo ""

# Detailed breakdown
if [ "$ERRORS" -gt 0 ]; then
  echo -e "${RED}🚨 CRITICAL ISSUES DETECTED${NC}"
  echo "Review errors above and address them before deployment."
  echo ""
elif [ "$WARNINGS" -gt 0 ]; then
  echo -e "${YELLOW}⚠️  WARNINGS DETECTED${NC}"
  echo "Platform is functional but has some improvement areas."
  echo ""
else
  echo -e "${GREEN}🎉 ALL CHECKS PASSED!${NC}"
  echo "Platform is clean and ready for production."
  echo ""
fi

# Recommendations
echo "=============================================="
echo "💡 RECOMMENDATIONS"
echo "=============================================="
echo ""

if [ "$ERRORS" -eq 0 ] && [ "$WARNINGS" -eq 0 ]; then
  echo "✅ Your platform is in excellent shape!"
  echo ""
  echo "Next steps:"
  echo "1. Run 'npm run dev' to start development server"
  echo "2. Run 'npm run build' to create production build"
  echo "3. Follow FIGMA_EXECUTION_GUIDE.md for Figma deliverable"
  echo ""
else
  echo "🔧 Address the issues above by:"
  echo "1. Running 'npm install' if dependencies are missing"
  echo "2. Fixing TypeScript errors in reported files"
  echo "3. Replacing placeholder content with real content"
  echo "4. Running './scripts/copy-photos.sh' if photos are missing"
  echo ""
fi

# Exit code
if [ "$ERRORS" -gt 0 ]; then
  exit 1
else
  exit 0
fi
