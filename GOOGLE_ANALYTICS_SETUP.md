# 📊 Google Analytics 4 Setup Guide

## Current Status
✅ Google Analytics 4 code is **already integrated** in the website
⚠️ You need to **replace the placeholder ID** with your actual GA4 Measurement ID

---

## 🎯 Quick Setup (5 minutes)

### Step 1: Get Your GA4 Measurement ID

1. **Go to Google Analytics**: https://analytics.google.com/
2. **Sign in** with your Google account
3. **Create a new property** (if you don't have one):
   - Click "Admin" (bottom left)
   - Click "Create Property"
   - Name: "VibeBrews Website"
   - Timezone: Your timezone
   - Currency: Your currency
   - Click "Next"
   - Fill in business details
   - Click "Create"

4. **Set up Data Stream**:
   - Platform: "Web"
   - Website URL: `https://vibebrews.com` (or your domain)
   - Stream name: "VibeBrews Website"
   - Click "Create stream"

5. **Copy Measurement ID**:
   - You'll see a Measurement ID like: `G-XXXXXXXXXX`
   - Copy this ID (it starts with "G-")

---

### Step 2: Update the Website Code

**File to edit:** `/app/frontend/app/layout.tsx`

**Find these lines** (around line 86-87):

```typescript
src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"

...

gtag('config', 'G-XXXXXXXXXX', {
```

**Replace** `G-XXXXXXXXXX` with your actual Measurement ID.

**Example:**
```typescript
// Before
src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"

// After (with your real ID)
src="https://www.googletagmanager.com/gtag/js?id=G-ABC1234567"
```

Do this replacement in **TWO places** in the same file.

---

### Step 3: Verify Setup

1. **Save the file** (it will auto-reload with hot reload)
2. **Open your website** in a browser
3. **Open Chrome DevTools** (F12)
4. **Go to Console tab**
5. **Type:** `gtag`
6. You should see a function (not "undefined")

**Alternative verification:**

1. Install **Google Tag Assistant** Chrome extension
2. Visit your website
3. Click the extension icon
4. It should show your GA4 tag as "working"

---

### Step 4: Test in Real-Time

1. Go back to **Google Analytics**
2. Click **Reports** → **Realtime**
3. Open your website in another tab
4. You should see **1 active user** in GA4 (that's you!)
5. Navigate between sections
6. Watch real-time data update

---

## 📈 What's Being Tracked?

The current implementation tracks:

### Automatic Events (Built-in)
- ✅ Page views
- ✅ First visit
- ✅ Session start
- ✅ User engagement
- ✅ Scroll depth

### Custom Events (Ready to Add)

You can easily add custom events for:

**CTA Clicks:**
```typescript
onClick={() => {
  gtag('event', 'click_download_button', {
    button_location: 'hero',
    button_text: 'Download Now'
  })
}}
```

**Form Submissions:**
```typescript
onSubmit={() => {
  gtag('event', 'newsletter_signup', {
    form_location: 'final_cta'
  })
}}
```

**Video Plays:**
```typescript
onPlay={() => {
  gtag('event', 'video_play', {
    video_title: 'VibeBrews Demo'
  })
}}
```

---

## 🎯 Recommended Custom Events to Add

### 1. Download Button Clicks

**Hero Section** (`/components/Hero.tsx` line ~55):
```typescript
onClick={() => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click_download', {
      button_location: 'hero',
      link: 'play_store'
    })
  }
}}
```

**Final CTA** (`/components/FinalCTA.tsx` line ~62):
```typescript
onClick={() => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click_download', {
      button_location: 'final_cta',
      link: 'play_store'
    })
  }
}}
```

### 2. Newsletter Signup

**Final CTA** (`/components/FinalCTA.tsx` line ~91):
```typescript
onClick={() => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'newsletter_signup', {
      form_location: 'final_cta'
    })
  }
  // Your signup logic here
}}
```

### 3. FAQ Interactions

**FAQ Component** (`/components/FAQ.tsx` line ~72):
```typescript
onClick={() => {
  setIsOpen(!isOpen)
  if (!isOpen && typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'faq_open', {
      question: faq.question
    })
  }
}}
```

---

## 🔍 Advanced Tracking (Optional)

### Scroll Depth Tracking

Add this to `/app/frontend/lib/analytics.ts` (create file):

```typescript
export const trackScrollDepth = () => {
  let maxScroll = 0
  const milestones = [25, 50, 75, 100]
  
  window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    
    milestones.forEach(milestone => {
      if (scrollPercent >= milestone && maxScroll < milestone) {
        maxScroll = milestone
        if (window.gtag) {
          window.gtag('event', 'scroll', {
            percent: milestone
          })
        }
      }
    })
  })
}
```

Then call it in your main layout or page component:

```typescript
useEffect(() => {
  trackScrollDepth()
}, [])
```

---

## 📊 Key Metrics to Monitor

### Traffic Metrics
- **Users**: Total unique visitors
- **Sessions**: Total visits
- **Page Views**: Total pages viewed
- **Bounce Rate**: % who leave after viewing 1 page
- **Average Session Duration**: How long people stay

### Engagement Metrics
- **Events per Session**: How many actions users take
- **Conversion Rate**: % who click download button
- **Newsletter Signups**: Email capture rate
- **FAQ Interactions**: Which questions are most popular

### Acquisition Channels
- **Organic Search**: Google/Bing traffic
- **Direct**: Typed URL or bookmark
- **Social**: Twitter, LinkedIn, etc.
- **Referral**: Other websites linking to you

---

## 🎯 Goals & Conversions

Set up these conversions in GA4:

1. **Download App** (Primary Goal)
   - Event: `click_download`
   - Value: High

2. **Newsletter Signup**
   - Event: `newsletter_signup`
   - Value: Medium

3. **Watch Demo**
   - Event: `video_play`
   - Value: Medium

4. **Scroll to Bottom**
   - Event: `scroll` with percent = 100
   - Value: Low (indicates engagement)

### How to Create Conversions:

1. Go to **Admin** → **Events**
2. Find your custom event
3. Click toggle to "Mark as conversion"
4. Done!

---

## 🚨 Common Issues & Solutions

### Issue 1: Not Seeing Data
**Check:**
- Did you replace `G-XXXXXXXXXX` with real ID?
- Is the website running?
- Are you testing from localhost? (might be blocked)
- Check browser console for errors

**Solution:**
- Use browser in non-incognito mode
- Disable ad blockers
- Check DevTools Network tab for GA requests

### Issue 2: Duplicate Tracking
**Check:**
- Only one GA code snippet in layout.tsx
- No other GA code in other files

**Solution:**
- Search codebase for "gtag" and remove duplicates

### Issue 3: TypeScript Errors
**Problem:** `window.gtag` TypeScript error

**Solution:** Add to `/app/frontend/types/gtag.d.ts`:
```typescript
interface Window {
  gtag: (...args: any[]) => void;
  dataLayer: any[];
}
```

---

## 📱 Testing Checklist

- [ ] Replaced placeholder ID with real Measurement ID
- [ ] Saved file and server reloaded
- [ ] Opened website in browser
- [ ] Checked Chrome DevTools for `gtag` function
- [ ] Verified in GA4 Real-Time reports
- [ ] Clicked download button (test event)
- [ ] Scrolled through page (test scroll tracking)
- [ ] Checked for console errors
- [ ] Tested on mobile device
- [ ] Tested with ad blocker disabled

---

## 🎓 Resources

### Official Documentation
- **GA4 Setup Guide**: https://support.google.com/analytics/answer/9304153
- **Event Reference**: https://support.google.com/analytics/answer/9267735
- **Measurement Protocol**: https://developers.google.com/analytics/devguides/collection/protocol/ga4

### Useful Tools
- **Google Tag Assistant**: Chrome extension for debugging
- **GA Debugger**: Chrome extension for detailed logs
- **Realtime Reports**: See live traffic

### Video Tutorials
- Search YouTube for: "Google Analytics 4 setup for Next.js"
- Recommended channel: Measureschool

---

## ✅ Quick Checklist

- [ ] Created GA4 property
- [ ] Got Measurement ID (G-XXXXXXXXXX)
- [ ] Replaced ID in layout.tsx (2 places)
- [ ] Tested with Real-Time reports
- [ ] Verified events are firing
- [ ] Set up conversion goals
- [ ] Added custom events (optional)
- [ ] Documented for team

---

**Current Placeholder ID:** `G-XXXXXXXXXX`  
**File Location:** `/app/frontend/app/layout.tsx` (lines 86 & 93)

**Action Required:** Replace with your actual GA4 Measurement ID!
