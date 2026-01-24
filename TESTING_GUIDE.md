# 🧪 Testing Guide - SEO & Performance Optimizations

A step-by-step guide to test and validate all SEO and performance optimizations implemented in this portfolio website.

---

## 🚀 Quick Start

### 1. Install Dependencies & Validate

```bash
# Install all dependencies
npm install

# Run performance validation check
npm run perf:check

# Expected: 100% success rate with all green checkmarks
```

### 2. Development Testing

```bash
# Start development server
npm run dev

# Open browser console and look for:
# - [Web Vitals] logs with metrics
# - [Performance Timing] navigation metrics
# - [ServiceWorker] messages (only in production)
```

### 3. Production Build & Testing

```bash
# Build for production
npm run build

# Check build output for:
# - First Load JS < 100KB
# - No build errors or warnings

# Start production server
npm run start

# Open http://localhost:3000
```

---

## 🔍 Comprehensive Testing Checklist

### Test 1: Lighthouse Audit (Chrome DevTools)

**Steps:**

1. Open Chrome browser
2. Navigate to your site (localhost:3000 or deployed URL)
3. Open DevTools (F12 or Cmd+Option+I)
4. Click "Lighthouse" tab
5. Select all categories: Performance, Accessibility, Best Practices, SEO, PWA
6. Click "Analyze page load"

**Expected Results:**

- ✅ Performance: 95-100
- ✅ Accessibility: 90-95
- ✅ Best Practices: 95-100
- ✅ SEO: 100
- ✅ PWA: 90-100 (in production only)

**Common Issues & Fixes:**

- **Low Performance**: Check for large images, bundle size
- **Low PWA Score**: Ensure service worker is registered (production only)
- **SEO Issues**: Verify meta tags and structured data

---

### Test 2: Core Web Vitals

**Steps:**

1. Open production build in browser
2. Open browser console (F12)
3. Look for `[Web Vitals]` logs
4. Interact with the page (click, scroll)
5. Wait for all metrics to report

**Expected Results:**

```
[Web Vitals] LCP: < 2500ms (Good)
[Web Vitals] FID: < 100ms (Good)
[Web Vitals] CLS: < 0.1 (Good)
[Web Vitals] FCP: < 1800ms (Good)
[Web Vitals] TTFB: < 800ms (Good)
[Web Vitals] INP: < 200ms (Good)
```

**Performance Budget Check:**

```
[Performance Budget]
✅ TTFB: XXXms (budget: 800ms)
✅ DOMContentLoaded: XXXms (budget: 1500ms)
```

---

### Test 3: Service Worker (PWA)

**Steps:**

1. Build and start production server
2. Open DevTools > Application tab
3. Navigate to "Service Workers" section
4. Verify service worker is registered

**Expected Results:**

- ✅ Service worker status: "Activated and running"
- ✅ Source: `/sw.js`
- ✅ Cache storage: Shows `portfolio-cache-v1.0.0`

**Test Caching:**

1. Go offline (DevTools > Network > Offline)
2. Reload page
3. Page should still load from cache

**Test Update Mechanism:**

1. Update service worker version in `sw.js`
2. Deploy/reload
3. Should see update notification

---

### Test 4: Image Optimization

**Steps:**

1. Open DevTools > Network tab
2. Filter by "Img"
3. Reload page
4. Check image formats and sizes

**Expected Results:**

- ✅ Images served in WebP or AVIF format
- ✅ Profile image < 500KB
- ✅ Icons properly sized (192px, 512px)
- ✅ Proper `sizes` attribute on images
- ✅ Priority loading for hero image

**Validation:**

```bash
# Check image sizes
ls -lh public/*.{jpg,jpeg,png,webp}
```

---

### Test 5: SEO & Meta Tags

**Online Tools:**

#### Google Rich Results Test

1. Visit: [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
2. Enter your URL
3. Check for Person, Organization, Website schemas

**Expected Results:**

- ✅ All structured data valid
- ✅ No errors or warnings
- ✅ Rich results eligible

#### Schema Markup Validator

1. Visit: [validator.schema.org](https://validator.schema.org/)
2. Enter your URL or paste HTML
3. Validate all schemas

**Expected Schemas:**

- Person
- Website
- BreadcrumbList
- Organization (multiple)
- ProfessionalService
- ScholarlyArticle

#### Open Graph Debugger

1. Visit: [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug/)
2. Enter your URL
3. Click "Scrape Again"

**Expected Results:**

- ✅ Title: 50-60 characters
- ✅ Description: 150-160 characters
- ✅ Image: 1200x630px
- ✅ All tags present

#### Twitter Card Validator

1. Visit: [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)
2. Enter your URL
3. Preview card

**Expected Results:**

- ✅ Card type: summary_large_image
- ✅ All fields populated
- ✅ Image displays correctly

---

### Test 6: Mobile Optimization

**Google Mobile-Friendly Test:**

1. Visit: [search.google.com/test/mobile-friendly](https://search.google.com/test/mobile-friendly)
2. Enter your URL
3. Check results

**Expected Results:**

- ✅ Page is mobile-friendly
- ✅ Text is readable without zooming
- ✅ Content fits screen
- ✅ Touch targets are appropriately sized

**Manual Mobile Testing:**

1. Open DevTools (F12)
2. Toggle device toolbar (Cmd+Shift+M)
3. Test various device sizes:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - iPad (768px)
   - Desktop (1920px)

**Check:**

- Layout adapts properly
- No horizontal scrolling
- Touch targets are 44px minimum
- Images are responsive

---

### Test 7: Performance Metrics

**PageSpeed Insights:**

1. Visit: [pagespeed.web.dev](https://pagespeed.web.dev/)
2. Enter your URL
3. Analyze both mobile and desktop

**Expected Results:**

- ✅ Mobile Performance: 90+
- ✅ Desktop Performance: 95+
- ✅ Core Web Vitals: All green
- ✅ Opportunities: Minimal

**Web.dev Measure:**

1. Visit: [web.dev/measure](https://web.dev/measure/)
2. Enter your URL
3. Review detailed metrics

---

### Test 8: Sitemap & Robots.txt

**Sitemap Test:**

```bash
# Visit sitemap in browser
open http://localhost:3000/sitemap.xml

# Check for:
# - All pages listed
# - Proper lastmod dates
# - Correct priorities
# - Valid XML format
```

**Robots.txt Test:**

```bash
# Visit robots.txt
open http://localhost:3000/robots.txt

# Verify:
# - User-agent: *
# - Allow: /
# - Sitemap location
# - No sensitive paths blocked
```

**Google Search Console:**

1. Submit sitemap: `https://your-domain.com/sitemap.xml`
2. Wait 24-48 hours
3. Check coverage report

---

### Test 9: Bundle Size Analysis

**Steps:**

```bash
# Run bundle analyzer
npm run analyze

# Opens visualization in browser
# Check for:
# - Large dependencies (>100KB)
# - Duplicate dependencies
# - Unused code
```

**Expected First Load JS:**

- **Page JS**: ~6KB
- **Shared Chunks**: ~87KB
- **Total First Load**: ~93KB ✅

**Optimization Tips:**

- Remove unused dependencies
- Use dynamic imports for large components
- Tree-shake icon libraries

---

### Test 10: Accessibility (a11y)

**Automated Testing:**

1. Lighthouse accessibility score (target: 90+)
2. WAVE browser extension
3. axe DevTools extension

**Manual Testing:**

1. **Keyboard Navigation**:
   - Tab through all interactive elements
   - Ensure focus is visible
   - Verify tab order is logical

2. **Screen Reader**:
   - Enable VoiceOver (Mac) or NVDA (Windows)
   - Navigate through page
   - Ensure all content is readable

3. **Color Contrast**:
   - Use DevTools contrast checker
   - Verify WCAG AA compliance (4.5:1)

---

### Test 11: Security Headers

**Steps:**

```bash
# Check headers with curl (requires production URL)
curl -I https://your-domain.com

# Or use online tool:
# Visit: securityheaders.com
```

**Expected Headers:**

- ✅ Content-Security-Policy
- ✅ X-Frame-Options: DENY
- ✅ X-Content-Type-Options: nosniff
- ✅ Referrer-Policy: strict-origin-when-cross-origin
- ✅ Permissions-Policy
- ✅ Cross-Origin-Embedder-Policy
- ✅ Cross-Origin-Opener-Policy

---

### Test 12: Load Testing

**Simple Load Test:**

```bash
# Install Apache Bench (if not installed)
# macOS: brew install httpd
# Linux: apt-get install apache2-utils

# Run load test (100 requests, 10 concurrent)
ab -n 100 -c 10 http://localhost:3000/

# Check:
# - Time per request < 500ms
# - No failed requests
# - Consistent response times
```

**Expected Results:**

- ✅ 0 failed requests
- ✅ Average response time < 500ms
- ✅ Server handles concurrent requests

---

## 🐛 Debugging Common Issues

### Issue 1: Service Worker Not Registering

**Symptoms**: No service worker in DevTools > Application
**Solutions**:

- Verify you're running production build (`npm run build && npm run start`)
- Check console for service worker errors
- Ensure `/sw.js` is accessible
- Clear browser cache and reload

### Issue 2: Low Performance Score

**Symptoms**: Lighthouse performance < 90
**Solutions**:

- Check bundle size with `npm run analyze`
- Optimize images (compress, convert to WebP)
- Remove unused dependencies
- Check for render-blocking resources

### Issue 3: Failed Structured Data

**Symptoms**: Schema validation errors
**Solutions**:

- Validate JSON-LD syntax
- Check for required properties
- Ensure proper nesting
- Use Schema.org validator

### Issue 4: Poor Mobile Score

**Symptoms**: Mobile usability issues
**Solutions**:

- Increase touch target sizes (min 44px)
- Fix viewport issues
- Optimize for mobile networks
- Test on real devices

### Issue 5: Slow Web Vitals

**Symptoms**: LCP > 2.5s, CLS > 0.1
**Solutions**:

- Preload critical images
- Add width/height to images
- Avoid layout shift (reserve space)
- Optimize font loading

---

## 📊 Performance Benchmarks

### Target Metrics

```
First Contentful Paint (FCP): < 1.8s
Largest Contentful Paint (LCP): < 2.5s
First Input Delay (FID): < 100ms
Cumulative Layout Shift (CLS): < 0.1
Time to Interactive (TTI): < 3.8s
Total Blocking Time (TBT): < 300ms
Speed Index: < 3.4s
```

### Bundle Size Targets

```
First Load JS: < 100KB
Page-specific JS: < 10KB
CSS: < 20KB
Images: < 500KB total
```

---

## ✅ Final Verification Checklist

Before deployment, ensure:

- [ ] All tests pass with expected results
- [ ] Lighthouse scores: Performance 95+, SEO 100
- [ ] Core Web Vitals all green
- [ ] Service worker registers in production
- [ ] Structured data validates
- [ ] Social media previews work
- [ ] Mobile-friendly test passes
- [ ] Bundle size within budget
- [ ] No console errors
- [ ] All links work
- [ ] Images optimized
- [ ] HTTPS enabled (production)

---

## 🚨 Emergency Rollback

If issues occur after deployment:

```bash
# 1. Revert to previous version
git revert HEAD
git push

# 2. Clear service worker cache
# In DevTools > Application > Service Workers
# Click "Unregister"

# 3. Clear all caches
# DevTools > Application > Storage > Clear site data

# 4. Redeploy stable version
npm run build
# Deploy to hosting platform
```

---

## 📞 Support & Resources

### Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Web.dev Learn](https://web.dev/learn/)
- [MDN Web Docs](https://developer.mozilla.org/)

### Community

- [Next.js GitHub](https://github.com/vercel/next.js)
- [Web Performance Slack](https://webperformance.slack.com/)
- [SEO Stack Exchange](https://webmasters.stackexchange.com/)

### Tools

- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)

---

**Last Updated**: January 25, 2026  
**Version**: 1.0.0  
**Tested On**: Chrome 120+, Firefox 120+, Safari 17+
