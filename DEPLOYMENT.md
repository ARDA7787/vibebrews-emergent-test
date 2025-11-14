# 🚀 Production Deployment Guide

This guide will help you deploy your VibeBrews website to production-ready hosting platforms.

## 📦 Pre-Deployment Checklist

- [ ] Replace Google Analytics ID in `frontend/app/layout.tsx` (replace `G-XXXXXXXXXX`)
- [ ] Update site URL in metadata if different from `https://vibebrews.com`
- [ ] Ensure all images are optimized and in `/public` folder
- [ ] Test the production build locally: `npm run build && npm run start`

---

## 🎯 Quick Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Best for:** Drag-and-drop deployment, automatic SSL, CDN, zero config

1. **Install Vercel CLI** (optional, or use web interface):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   cd frontend
   vercel
   ```
   Or drag-and-drop the `frontend` folder at [vercel.com](https://vercel.com)

3. **Configure**:
   - Framework Preset: Next.js
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Environment Variables** (if using .env):
   - Add `NEXT_PUBLIC_GA_ID` in Vercel dashboard
   - Add `NEXT_PUBLIC_SITE_URL` if needed

**Done!** Your site will be live with HTTPS and CDN.

---

### Option 2: Netlify (Drag-and-Drop)

**Best for:** Simple drag-and-drop, great free tier

1. **Build locally** (optional, Netlify can build):
   ```bash
   cd frontend
   npm install
   npm run build
   ```

2. **Deploy**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `frontend` folder OR the `.next` folder
   - Or connect your Git repository

3. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Base directory: `frontend` (if deploying from root)

4. **Environment Variables**:
   - Add in Netlify dashboard → Site settings → Environment variables

**Done!** Your site is live.

---

### Option 3: Static Export (Any Static Host)

**Best for:** GitHub Pages, AWS S3, Cloudflare Pages, etc.

1. **Update next.config.js** (already done):
   ```js
   output: 'standalone' // or 'export' for fully static
   ```

2. **Build**:
   ```bash
   cd frontend
   npm install
   npm run build
   ```

3. **Deploy the `.next` folder**:
   - Upload `.next` folder contents to your static host
   - Configure server to serve `index.html` for all routes

**Note:** For fully static export, you may need to adjust dynamic routes.

---

### Option 4: Docker (Any VPS/Cloud)

**Best for:** Full control, custom servers, VPS hosting

1. **Create Dockerfile** (already created):
   ```bash
   cd frontend
   docker build -t vibebrews-website .
   docker run -p 3000:3000 vibebrews-website
   ```

2. **Deploy to**:
   - AWS EC2
   - DigitalOcean Droplet
   - Google Cloud Run
   - Azure Container Instances
   - Any Docker-compatible host

---

### Option 5: Node.js Server (Traditional Hosting)

**Best for:** Shared hosting with Node.js support, VPS

1. **Build**:
   ```bash
   cd frontend
   npm install --production
   npm run build
   ```

2. **Upload**:
   - Upload entire `frontend` folder to your server
   - Ensure Node.js 18+ is installed

3. **Run**:
   ```bash
   npm start
   ```

4. **Use PM2 for production**:
   ```bash
   npm install -g pm2
   pm2 start npm --name "vibebrews" -- start
   pm2 save
   pm2 startup
   ```

---

## 🔧 Environment Setup

### Required Environment Variables

Create a `.env.local` file in the `frontend` folder:

```env
NEXT_PUBLIC_GA_ID=G-YOUR-ACTUAL-ID
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NODE_ENV=production
```

**Important:** 
- Variables starting with `NEXT_PUBLIC_` are exposed to the browser
- Never commit `.env.local` to Git (already in .gitignore)

---

## 📊 Post-Deployment Verification

After deployment, verify:

1. **Site loads**: Visit your domain
2. **HTTPS works**: Check SSL certificate
3. **Images load**: Verify all images display correctly
4. **Analytics**: Check Google Analytics Real-Time reports
5. **Performance**: Run Lighthouse audit (target: 95+ scores)
6. **Mobile**: Test on mobile devices
7. **SEO**: Check meta tags with [metatags.io](https://metatags.io)

---

## 🐛 Troubleshooting

### Build Fails

**Error: Module not found**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Error: TypeScript errors**
```bash
npm run lint
# Fix any TypeScript errors shown
```

### Site Shows 404

- **Vercel/Netlify**: Check routing configuration
- **Static Host**: Ensure `index.html` fallback is configured
- **Custom Server**: Check server routing configuration

### Images Not Loading

- Check image paths (should start with `/`)
- Verify images exist in `/public` folder
- Check Next.js image domains in `next.config.js`

### Analytics Not Working

- Verify GA ID is replaced (not `G-XXXXXXXXXX`)
- Check browser console for errors
- Disable ad blockers for testing
- Verify in GA4 Real-Time reports

---

## 📈 Performance Optimization

The site is already optimized for production:

✅ **Next.js Standalone Output** - Minimal deployment size  
✅ **Image Optimization** - WebP/AVIF formats  
✅ **Compression** - Gzip enabled  
✅ **Security Headers** - HSTS, XSS protection  
✅ **Code Splitting** - Automatic route-based splitting  
✅ **Font Optimization** - Next.js font optimization  

---

## 🔒 Security Checklist

- [x] Security headers configured
- [x] HTTPS enforced (via hosting platform)
- [x] Environment variables secured
- [x] No sensitive data in code
- [x] Dependencies up to date

---

## 📞 Support

For deployment issues:
1. Check hosting platform documentation
2. Review Next.js deployment docs: https://nextjs.org/docs/deployment
3. Check build logs in hosting dashboard

---

## 🎉 You're Ready!

Your website is production-ready. Choose your deployment method above and go live!

**Recommended:** Start with **Vercel** for the easiest drag-and-drop experience.

