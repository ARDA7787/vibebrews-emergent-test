# 🖼️ Image Placeholders for VibeGames Website

This document lists all the image placeholders in the website where you need to add actual images.

## 📱 Hero Section (`/app/frontend/components/Hero.tsx`)

**Location:** Line ~85-95
**Description:** iPhone/Android mockup showing VibeGames app home screen with vertical feed
**Dimensions:** 400x800px (phone mockup)
**What to show:** 
- TikTok-style swipeable interface
- Game cards in vertical feed
- App UI with navigation
- Realistic phone bezel

**Current Placeholder:**
```jsx
<div className="w-[300px] h-[600px] mx-auto rounded-[3rem] border-8 border-gray-800 bg-gray-900 shadow-2xl overflow-hidden relative">
  {/* Replace this entire div with actual phone mockup image */}
</div>
```

---

## 🎮 Features Section (`/app/frontend/components/Features.tsx`)

### Feature 1: AI Creation Studio
**Location:** Line ~19-23
**Description:** Chat interface showing AI generating a game
**Dimensions:** 500x600px
**What to show:**
- CreateChat interface
- User typing game prompts
- AI responding with generation progress
- Live preview of game being created

### Feature 2: Infinite Discovery Feed
**Location:** Line ~27-31
**Description:** Vertical scrolling game feed
**Dimensions:** 500x600px
**What to show:**
- Phone showing vertical feed
- Multiple game cards stacked
- Social interaction buttons (like, comment, share)
- Smooth scroll animation effect

### Feature 3: Multi-Project Studio
**Location:** Line ~35-39
**Description:** Desktop/tablet view of project management
**Dimensions:** 600x400px
**What to show:**
- 3 concurrent game projects in grid layout
- Status chips (Generating, Complete, Editing)
- Progress bars
- Project thumbnails

### Feature 4: Social Gaming Community
**Location:** Line ~43-47
**Description:** Community profiles and engagement
**Dimensions:** 500x500px
**What to show:**
- User profile cards with avatars
- Statistics (views, likes, games created)
- Comment threads
- Engagement metrics

**Current Placeholder Pattern:**
```jsx
<div className="glass rounded-3xl p-8 min-h-[400px] flex items-center justify-center">
  {/* Replace this div with actual feature image */}
</div>
```

---

## 🎯 Final CTA Section (`/app/frontend/components/FinalCTA.tsx`)

**Location:** Line ~68-77
**Description:** QR Code for Play Store download
**Dimensions:** 128x128px
**What to show:**
- QR code linking to: https://play.google.com/store/apps/details?id=com.nextap.vibebrews&pcampaignid=web_share

**Current Placeholder:**
```jsx
<div className="w-32 h-32 bg-white rounded-xl">
  {/* Replace with actual QR code image */}
</div>
```

**Generate QR Code:**
You can use these free services:
- https://www.qr-code-generator.com/
- https://qr.io/
- https://www.qrcode-monkey.com/

---

## 🎨 Favicon & App Icons (`/app/frontend/public/`)

### Required Files:

1. **favicon.ico**
   - Dimensions: 32x32px or 16x16px
   - Format: ICO
   - Brand: VibeGames logo

2. **apple-touch-icon.png**
   - Dimensions: 180x180px
   - Format: PNG
   - Use: iOS home screen icon

3. **icon-192.png**
   - Dimensions: 192x192px
   - Format: PNG
   - Use: Android home screen icon (small)

4. **icon-512.png**
   - Dimensions: 512x512px
   - Format: PNG
   - Use: Android home screen icon (large)

5. **og-image.png**
   - Dimensions: 1200x630px
   - Format: PNG or JPG
   - Use: Open Graph (Facebook, LinkedIn sharing)
   - Content: VibeGames branding + tagline

6. **twitter-image.png**
   - Dimensions: 1200x600px
   - Format: PNG or JPG
   - Use: Twitter Card
   - Content: VibeGames branding + tagline

---

## 📋 Image Specifications Summary

| Location | Type | Dimensions | Priority |
|----------|------|------------|----------|
| Hero Phone Mockup | Screenshot | 400x800px | HIGH |
| AI Studio Feature | Screenshot | 500x600px | HIGH |
| Feed Feature | Screenshot | 500x600px | HIGH |
| Multi-Project Feature | Screenshot | 600x400px | MEDIUM |
| Community Feature | Screenshot | 500x500px | MEDIUM |
| QR Code | Generated | 128x128px | HIGH |
| Favicon | Icon | 32x32px | HIGH |
| Apple Touch Icon | Icon | 180x180px | MEDIUM |
| Android Icons | Icon | 192x192, 512x512px | MEDIUM |
| OG Image | Banner | 1200x630px | HIGH |
| Twitter Image | Banner | 1200x600px | MEDIUM |

---

## 🎨 Image Guidelines

### Brand Colors to Use:
- Purple: `#7C3AED` (creativity, innovation)
- Blue: `#3B82F6` (social, trust)
- Green: `#10B981` (success, growth)
- Amber: `#F59E0B` (energy, progress)
- Dark: `#0F172A` (background)

### Style Guidelines:
- Use glassmorphism effects (blur, transparency)
- Modern, clean UI
- Dark theme with bright accents
- Rounded corners (border-radius: 16-24px)
- Subtle shadows and glows
- High contrast for readability

### Phone Mockup Tips:
- Use real device frames (iPhone 14/15 or modern Android)
- Show actual app interface if possible
- Include realistic lighting and reflections
- Can use tools like:
  - https://mockuphone.com/
  - https://www.screely.com/
  - https://smartmockups.com/

---

## 🔄 How to Add Images

### Method 1: Direct Replacement (Recommended)

1. Save your image in `/app/frontend/public/` directory
2. Update the component to use the image:

```jsx
// Replace placeholder div with:
<Image 
  src="/your-image.png" 
  alt="Description"
  width={500}
  height={600}
  className="rounded-3xl"
/>
```

3. Import Image component at the top:
```jsx
import Image from 'next/image'
```

### Method 2: External URL

If images are hosted elsewhere:
```jsx
<img 
  src="https://your-cdn.com/image.png" 
  alt="Description"
  className="rounded-3xl"
/>
```

---

## ✅ Checklist

Use this checklist to track your progress:

- [ ] Hero phone mockup
- [ ] AI Studio screenshot
- [ ] Infinite Feed screenshot
- [ ] Multi-Project screenshot
- [ ] Social Community screenshot
- [ ] QR Code generated
- [ ] favicon.ico
- [ ] apple-touch-icon.png
- [ ] icon-192.png
- [ ] icon-512.png
- [ ] og-image.png
- [ ] twitter-image.png

---

## 🚀 After Adding Images

1. **Optimize Images**: Use WebP format for better performance
   - Tools: https://squoosh.app/, https://tinypng.com/

2. **Update Alt Text**: Ensure all images have descriptive alt text for accessibility

3. **Test Sharing**: Check how the site looks when shared on:
   - Facebook (og-image)
   - Twitter (twitter-image)
   - LinkedIn (og-image)

4. **Test Performance**: Run Lighthouse audit to ensure images don't slow down the site

---

**Need Help?** All placeholder divs have comments indicating what image should go there. Search for `[IMAGE` in the codebase to find all placeholders.
