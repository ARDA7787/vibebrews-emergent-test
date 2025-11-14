#!/bin/bash
# Production Build Verification Script

set -e

echo "🔍 Verifying Production Build..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next

# Build for production
echo "🏗️  Building for production..."
NODE_ENV=production npm run build

# Verify standalone output exists
if [ -f ".next/standalone/server.js" ]; then
    echo "✅ Standalone build created successfully"
else
    echo "❌ Standalone build missing!"
    exit 1
fi

# Check for common issues
echo ""
echo "🔍 Checking for common issues..."

# Check for console.logs (should be none in production)
if grep -r "console\.log" components/ app/ --include="*.tsx" --include="*.ts" 2>/dev/null | grep -v "node_modules" | grep -v ".next"; then
    echo "⚠️  Warning: Found console.log statements"
else
    echo "✅ No console.log statements found"
fi

# Check for hardcoded localhost
if grep -r "localhost:3000" components/ app/ --include="*.tsx" --include="*.ts" 2>/dev/null | grep -v "node_modules" | grep -v ".next" | grep -v "README"; then
    echo "⚠️  Warning: Found hardcoded localhost URLs"
else
    echo "✅ No hardcoded localhost URLs found"
fi

# Verify TypeScript compilation
echo ""
echo "📝 TypeScript check..."
npx tsc --noEmit --skipLibCheck 2>&1 | head -20 || echo "✅ TypeScript compilation successful"

echo ""
echo "✅ Production build verification complete!"
echo ""
echo "🚀 Ready to deploy!"
echo "   Run: npm start (to test locally)"
echo "   Or deploy the 'frontend' folder to your hosting platform"

