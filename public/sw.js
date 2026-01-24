// Service Worker for Portfolio Website
// Provides offline capabilities and caching strategies

const CACHE_VERSION = 'v1.0.0'
const CACHE_NAME = `portfolio-cache-${CACHE_VERSION}`

// Assets to cache immediately on install
const PRECACHE_ASSETS = [
  '/',
  '/manifest.json',
  '/favicon.ico',
  '/icon-192.png',
  '/icon-512.png',
  '/og-image.jpg',
]

// Cache strategies
const CACHE_STRATEGIES = {
  // Cache first, fallback to network
  CACHE_FIRST: 'cache-first',
  // Network first, fallback to cache
  NETWORK_FIRST: 'network-first',
  // Network only (no caching)
  NETWORK_ONLY: 'network-only',
  // Cache only (offline first)
  CACHE_ONLY: 'cache-only',
  // Stale while revalidate
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate',
}

// Install event - precache critical assets
self.addEventListener('install', event => {
  console.log('[ServiceWorker] Installing...')

  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => {
        console.log('[ServiceWorker] Precaching assets')
        return cache.addAll(PRECACHE_ASSETS)
      })
      .then(() => {
        console.log('[ServiceWorker] Installed successfully')
        return self.skipWaiting() // Activate immediately
      })
      .catch(error => {
        console.error('[ServiceWorker] Install failed:', error)
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Activating...')

  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              console.log('[ServiceWorker] Deleting old cache:', cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => {
        console.log('[ServiceWorker] Activated successfully')
        return self.clients.claim() // Take control immediately
      })
  )
})

// Fetch event - handle requests with appropriate caching strategy
self.addEventListener('fetch', event => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }

  // Skip chrome extension and other non-http(s) requests
  if (!url.protocol.startsWith('http')) {
    return
  }

  // Determine caching strategy based on request type
  const strategy = getCacheStrategy(url, request)

  event.respondWith(handleRequest(request, strategy))
})

// Get appropriate cache strategy for the request
function getCacheStrategy(url, request) {
  // Images: Cache first
  if (request.destination === 'image') {
    return CACHE_STRATEGIES.CACHE_FIRST
  }

  // Fonts: Cache first
  if (request.destination === 'font' || url.pathname.match(/\.(woff2?|ttf|otf|eot)$/)) {
    return CACHE_STRATEGIES.CACHE_FIRST
  }

  // CSS/JS: Stale while revalidate
  if (request.destination === 'script' || request.destination === 'style') {
    return CACHE_STRATEGIES.STALE_WHILE_REVALIDATE
  }

  // Documents: Network first
  if (request.destination === 'document') {
    return CACHE_STRATEGIES.NETWORK_FIRST
  }

  // External API calls: Network only
  if (!url.origin.includes(self.location.origin)) {
    return CACHE_STRATEGIES.NETWORK_ONLY
  }

  // Default: Stale while revalidate
  return CACHE_STRATEGIES.STALE_WHILE_REVALIDATE
}

// Handle request based on strategy
async function handleRequest(request, strategy) {
  switch (strategy) {
    case CACHE_STRATEGIES.CACHE_FIRST:
      return cacheFirst(request)

    case CACHE_STRATEGIES.NETWORK_FIRST:
      return networkFirst(request)

    case CACHE_STRATEGIES.NETWORK_ONLY:
      return fetch(request)

    case CACHE_STRATEGIES.CACHE_ONLY:
      return cacheOnly(request)

    case CACHE_STRATEGIES.STALE_WHILE_REVALIDATE:
      return staleWhileRevalidate(request)

    default:
      return fetch(request)
  }
}

// Cache first strategy
async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME)
  const cached = await cache.match(request)

  if (cached) {
    return cached
  }

  try {
    const response = await fetch(request)
    if (response.ok) {
      cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    console.error('[ServiceWorker] Fetch failed:', error)
    // Return offline fallback if available
    return new Response('Offline', { status: 503, statusText: 'Service Unavailable' })
  }
}

// Network first strategy
async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME)

  try {
    const response = await fetch(request)
    if (response.ok) {
      cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    console.error('[ServiceWorker] Network request failed, trying cache:', error)
    const cached = await cache.match(request)
    return cached || new Response('Offline', { status: 503, statusText: 'Service Unavailable' })
  }
}

// Cache only strategy
async function cacheOnly(request) {
  const cache = await caches.open(CACHE_NAME)
  return (await cache.match(request)) || new Response('Not found', { status: 404 })
}

// Stale while revalidate strategy
async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME)
  const cached = await cache.match(request)

  // Fetch in background and update cache
  const fetchPromise = fetch(request).then(response => {
    if (response.ok) {
      cache.put(request, response.clone())
    }
    return response
  })

  // Return cached version immediately if available, otherwise wait for network
  return cached || fetchPromise
}

// Handle messages from clients
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }

  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(cacheNames.map(cacheName => caches.delete(cacheName)))
      })
    )
  }
})
