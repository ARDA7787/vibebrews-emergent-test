# VibeGames Marketing Website

## 🎮 Overview

World-class marketing website for VibeGames - an AI-powered game creation platform that combines TikTok-style discovery with conversational AI game creation.

## ✨ Features

### Design & User Experience
- **Modern Glassmorphism UI** with blur effects and transparency
- **Color Psychology**: Purple (creativity), Blue (social), Green (success), Amber (energy)
- **Smooth Animations**: Framer Motion for scroll-triggered and hover animations
- **Mobile-First Responsive**: Optimized for all devices
- **Dark Theme**: Premium feel with gradient accents

### Technical Excellence
- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, Schema.org
- **Performance**: Optimized for 95+ Lighthouse scores
- **Accessibility**: WCAG AA compliance with proper ARIA labels

### Sections

1. **Hero Section**: Eye-catching introduction with animated background
2. **Value Proposition**: Play, Create, Share - three core experiences
3. **Features Deep-Dive**: AI Studio, Infinite Feed, Multi-Project, Social Community
4. **How It Works**: 5-step process from download to discovery
5. **Statistics**: Animated counters showing platform metrics
6. **Testimonials**: User stories from creators and players
7. **FAQ**: Comprehensive accordion with common questions
8. **Final CTA**: Download call-to-action with newsletter signup
9. **Footer**: Complete navigation and social links

## 🚀 Quick Start

### Installation

```bash
cd /app/frontend
yarn install
```

### Development

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
yarn build
yarn start
```

## 📊 Google Analytics Setup

**Important**: Replace the placeholder Google Analytics ID in `/app/frontend/app/layout.tsx`:

```typescript
// Replace 'G-XXXXXXXXXX' with your actual GA4 measurement ID
gtag('config', 'G-XXXXXXXXXX', {
  page_path: window.location.pathname,
});
```

## 🖼️ Image Placeholders

The website includes descriptive placeholders for images. Add actual images in the following locations:

### Hero Section
- **Phone Mockup**: iPhone/Android showing app feed (400x800px)
- Replace the placeholder div in `/components/Hero.tsx`

### Features Section
- **AI Creation Studio**: Chat interface screenshot (500x600px)
- **Infinite Feed**: Vertical scrolling feed (500x600px)
- **Multi-Project Studio**: Desktop view of project grid (600x400px)
- **Social Community**: Profile cards and engagement (500x500px)

### Final CTA
- **QR Code**: Play Store link QR code (128x128px)
- Replace in `/components/FinalCTA.tsx`

### Favicon & Icons
- `/public/favicon.ico`
- `/public/apple-touch-icon.png`
- `/public/icon-192.png`
- `/public/icon-512.png`
- `/public/og-image.png` (1200x630px for social sharing)
- `/public/twitter-image.png` (1200x600px)

## 🎨 Color Palette

```css
--vibe-purple: #7C3AED  /* Innovation, Creativity */
--vibe-blue: #3B82F6    /* Trust, Social */
--vibe-green: #10B981   /* Success, Growth */
--vibe-amber: #F59E0B   /* Energy, Progress */
--vibe-dark: #0F172A    /* Background */
```

## 🔗 Important Links

- **Play Store**: https://play.google.com/store/apps/details?id=com.nextap.vibebrews&pcampaignid=web_share

## 📱 Key Statistics (Update as needed)

- 5,219+ Game Views
- 814+ Games Played Daily
- 65+ Community Likes
- 15+ Active Creators
- 553+ Gaming Sessions
- <5 Minute Creation Time

## 🎯 Performance Targets

- **Lighthouse Performance**: 95+
- **Lighthouse Accessibility**: 95+
- **Lighthouse Best Practices**: 95+
- **Lighthouse SEO**: 100
- **First Contentful Paint**: <1.5s
- **Cumulative Layout Shift**: <0.1

## 🛠️ Technology Stack

- **Framework**: Next.js 14.2.0
- **Language**: TypeScript 5.3.0
- **Styling**: Tailwind CSS 3.4.0
- **Animations**: Framer Motion 11.0.0
- **Icons**: Lucide React 0.344.0
- **Utilities**: React Intersection Observer 9.8.0

## 📝 SEO Features

- Semantic HTML5 structure
- Proper heading hierarchy
- Meta tags (Open Graph, Twitter Cards)
- Structured data (Schema.org)
- Sitemap.xml generation
- Robots.txt configuration
- Alt text on images
- ARIA labels for accessibility

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Manual Deployment

```bash
yarn build
# Upload .next folder and other necessary files
```

## 📧 Contact & Support

For questions or support, reach out via the contact form on the website.

---

**Built with ❤️ for the VibeGames community**
