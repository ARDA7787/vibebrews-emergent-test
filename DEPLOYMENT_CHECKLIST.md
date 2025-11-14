# ✅ Production Deployment Checklist

Use this checklist before deploying your website.

## Pre-Deployment

- [ ] **Test production build locally**
  ```bash
  cd frontend
  npm install
  npm run build
  npm start
  ```
  Visit http://localhost:3000 and verify everything works

- [ ] **Google Analytics** (Optional)
  - [ ] Get GA4 Measurement ID from https://analytics.google.com
  - [ ] Set `NEXT_PUBLIC_GA_ID` environment variable OR
  - [ ] Edit `frontend/app/layout.tsx` and replace `G-XXXXXXXXXX`

- [ ] **Update site URL** (if different from vibebrews.com)
  - [ ] Edit `frontend/app/layout.tsx` metadata if needed
  - [ ] Set `NEXT_PUBLIC_SITE_URL` environment variable

- [ ] **Verify images**
  - [ ] All images are in `/frontend/public` folder
  - [ ] Images are optimized (WebP format recommended)

## Deployment

- [ ] **Choose hosting platform**
  - [ ] Vercel (recommended - easiest)
  - [ ] Netlify
  - [ ] Docker/Container hosting
  - [ ] Traditional Node.js hosting

- [ ] **Deploy**
  - [ ] Follow instructions in `PRODUCTION_QUICKSTART.md` or `DEPLOYMENT.md`
  - [ ] Set environment variables in hosting dashboard (if using)
  - [ ] Wait for build to complete

## Post-Deployment

- [ ] **Verify site loads**
  - [ ] Visit your domain
  - [ ] Check HTTPS is working (SSL certificate)

- [ ] **Test functionality**
  - [ ] All pages load correctly
  - [ ] Images display properly
  - [ ] Links work (especially Play Store link)
  - [ ] Mobile responsive design works

- [ ] **Performance check**
  - [ ] Run Lighthouse audit (target: 95+ scores)
  - [ ] Check page load speed
  - [ ] Verify images are optimized

- [ ] **SEO verification**
  - [ ] Check meta tags: https://metatags.io
  - [ ] Verify Open Graph tags
  - [ ] Test social media sharing preview

- [ ] **Analytics** (if configured)
  - [ ] Check Google Analytics Real-Time reports
  - [ ] Verify tracking is working

- [ ] **Security**
  - [ ] HTTPS is enforced
  - [ ] Security headers are present (check in browser DevTools)

## Optional Enhancements

- [ ] **Custom domain**
  - [ ] Configure DNS settings
  - [ ] Add domain in hosting platform
  - [ ] Wait for SSL certificate

- [ ] **Monitoring**
  - [ ] Set up uptime monitoring
  - [ ] Configure error tracking (optional)

- [ ] **Backup**
  - [ ] Keep a copy of your code
  - [ ] Document your deployment process

---

## 🎉 You're Done!

Your website is live and production-ready!

**Need help?** Check `DEPLOYMENT.md` for troubleshooting.

