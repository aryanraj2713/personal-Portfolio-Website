#!/usr/bin/env node

/**
 * Performance Check Script
 * Validates optimization implementation and checks for common issues
 */

const fs = require('fs')
const path = require('path')

const COLORS = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
}

const log = {
  success: msg => console.log(`${COLORS.green}✓${COLORS.reset} ${msg}`),
  error: msg => console.log(`${COLORS.red}✗${COLORS.reset} ${msg}`),
  warning: msg => console.log(`${COLORS.yellow}⚠${COLORS.reset} ${msg}`),
  info: msg => console.log(`${COLORS.blue}ℹ${COLORS.reset} ${msg}`),
  section: msg => console.log(`\n${COLORS.cyan}${msg}${COLORS.reset}\n${'='.repeat(50)}`),
}

// Check if file exists
const checkFile = (filePath, description) => {
  const fullPath = path.join(__dirname, '..', filePath)
  if (fs.existsSync(fullPath)) {
    log.success(`${description}: Found`)
    return true
  } else {
    log.error(`${description}: Missing`)
    return false
  }
}

// Check file content for specific patterns
const checkFileContent = (filePath, pattern, description) => {
  const fullPath = path.join(__dirname, '..', filePath)
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8')
    if (pattern.test(content)) {
      log.success(`${description}: Implemented`)
      return true
    } else {
      log.warning(`${description}: Not found`)
      return false
    }
  } else {
    log.error(`${description}: File missing`)
    return false
  }
}

// Get file size
const getFileSize = filePath => {
  const fullPath = path.join(__dirname, '..', filePath)
  if (fs.existsSync(fullPath)) {
    const stats = fs.statSync(fullPath)
    const sizeKB = (stats.size / 1024).toFixed(2)
    return sizeKB
  }
  return 0
}

// Main validation function
const runChecks = () => {
  console.log('\n🔍 Performance & SEO Optimization Validation\n')

  let totalChecks = 0
  let passedChecks = 0

  // Section 1: Core Files
  log.section('1. Core Configuration Files')
  const coreFiles = [
    ['next.config.js', 'Next.js Config'],
    ['package.json', 'Package Config'],
    ['public/manifest.json', 'PWA Manifest'],
    ['public/robots.txt', 'Robots.txt'],
    ['public/sw.js', 'Service Worker'],
  ]

  coreFiles.forEach(([file, desc]) => {
    totalChecks++
    if (checkFile(file, desc)) passedChecks++
  })

  // Section 2: Components
  log.section('2. Performance Components')
  const components = [
    ['components/ui/performance-optimizer.tsx', 'Performance Optimizer'],
    ['components/ui/web-vitals.tsx', 'Web Vitals Monitor'],
    ['components/ui/service-worker-register.tsx', 'Service Worker Register'],
  ]

  components.forEach(([file, desc]) => {
    totalChecks++
    if (checkFile(file, desc)) passedChecks++
  })

  // Section 3: Configuration Checks
  log.section('3. Next.js Configuration')
  const configChecks = [
    [
      'next.config.js',
      /formats:\s*\['image\/webp',\s*'image\/avif'\]/,
      'Image optimization (WebP/AVIF)',
    ],
    ['next.config.js', /compress:\s*true/, 'Compression enabled'],
    ['next.config.js', /optimizePackageImports/, 'Package optimization'],
    ['next.config.js', /removeConsole/, 'Console removal in prod'],
    ['next.config.js', /poweredByHeader:\s*false/, 'X-Powered-By removed'],
  ]

  configChecks.forEach(([file, pattern, desc]) => {
    totalChecks++
    if (checkFileContent(file, pattern, desc)) passedChecks++
  })

  // Section 4: Layout Optimizations
  log.section('4. Layout Optimizations')
  const layoutChecks = [
    ['app/layout.tsx', /WebVitals/, 'Web Vitals component'],
    ['app/layout.tsx', /ServiceWorkerRegister/, 'Service Worker registration'],
    ['app/layout.tsx', /preconnect/, 'Preconnect resource hints'],
    ['app/layout.tsx', /preload/, 'Preload critical resources'],
    ['app/layout.tsx', /@type.*Person/, 'Person schema (structured data)'],
    ['app/layout.tsx', /openGraph/, 'Open Graph tags'],
  ]

  layoutChecks.forEach(([file, pattern, desc]) => {
    totalChecks++
    if (checkFileContent(file, pattern, desc)) passedChecks++
  })

  // Section 5: SEO Files
  log.section('5. SEO Configuration')
  const seoFiles = [
    ['app/sitemap.ts', 'Dynamic Sitemap'],
    ['app/robots.ts', 'Dynamic Robots.txt'],
  ]

  seoFiles.forEach(([file, desc]) => {
    totalChecks++
    if (checkFile(file, desc)) passedChecks++
  })

  // Section 6: Image Analysis
  log.section('6. Image Optimization')
  const images = [
    ['public/aryan_image.jpeg', 'Profile image'],
    ['public/og-image.jpg', 'OG image'],
    ['public/icon-192.png', 'Icon 192'],
    ['public/icon-512.png', 'Icon 512'],
  ]

  images.forEach(([file, desc]) => {
    totalChecks++
    if (checkFile(file, desc)) {
      passedChecks++
      const size = getFileSize(file)
      if (size > 500) {
        log.warning(`  ${desc} is ${size}KB (consider optimizing if > 500KB)`)
      } else {
        log.info(`  ${desc}: ${size}KB`)
      }
    }
  })

  // Section 7: Dependencies
  log.section('7. Required Dependencies')
  const packageJsonPath = path.join(__dirname, '..', 'package.json')
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))

  const requiredDeps = [
    ['next', 'Next.js'],
    ['react', 'React'],
    ['framer-motion', 'Framer Motion'],
    ['web-vitals', 'Web Vitals'],
    ['@vercel/speed-insights', 'Vercel Speed Insights'],
  ]

  requiredDeps.forEach(([dep, desc]) => {
    totalChecks++
    if (packageJson.dependencies[dep] || packageJson.devDependencies?.[dep]) {
      log.success(`${desc}: Installed`)
      passedChecks++
    } else {
      log.error(`${desc}: Missing`)
    }
  })

  // Section 8: Build Scripts
  log.section('8. Build & Analysis Scripts')
  const scripts = [
    ['build', 'Build script'],
    ['start', 'Start script'],
    ['analyze', 'Bundle analyzer'],
    ['lint', 'Lint script'],
  ]

  scripts.forEach(([script, desc]) => {
    totalChecks++
    if (packageJson.scripts[script]) {
      log.success(`${desc}: Configured`)
      passedChecks++
    } else {
      log.warning(`${desc}: Missing`)
    }
  })

  // Final Summary
  log.section('Summary')
  const percentage = ((passedChecks / totalChecks) * 100).toFixed(1)
  console.log(`\nTotal Checks: ${totalChecks}`)
  console.log(`Passed: ${COLORS.green}${passedChecks}${COLORS.reset}`)
  console.log(`Failed: ${COLORS.red}${totalChecks - passedChecks}${COLORS.reset}`)
  console.log(
    `Success Rate: ${percentage >= 90 ? COLORS.green : COLORS.yellow}${percentage}%${COLORS.reset}\n`
  )

  if (percentage === 100) {
    console.log(`${COLORS.green}🎉 Perfect! All optimizations are in place!${COLORS.reset}\n`)
  } else if (percentage >= 90) {
    console.log(`${COLORS.yellow}⚠️  Almost there! Review failed checks above.${COLORS.reset}\n`)
  } else {
    console.log(
      `${COLORS.red}❌ Several optimizations are missing. Please review.${COLORS.reset}\n`
    )
  }

  // Next steps
  console.log('📋 Next Steps:')
  console.log('  1. Run: npm run build && npm run start')
  console.log('  2. Open Chrome DevTools > Lighthouse')
  console.log('  3. Run full audit (Performance, SEO, PWA)')
  console.log('  4. Check service worker in Application tab')
  console.log('  5. Monitor Core Web Vitals in console\n')

  process.exit(totalChecks === passedChecks ? 0 : 1)
}

// Run the checks
runChecks()
