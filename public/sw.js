
// Check if the browser supports the service worker and caching APIs.
if ('serviceWorker' in navigator && 'caches' in window) {
  const PRECACHE = 'precache-v1';
  const RUNTIME = 'runtime';

  // A list of local resources we always want to be cached.
  const PRECACHE_URLS = [
    '/',
    '/_offline',
    '/manifest.webmanifest'
  ];

  // The install handler takes care of precaching the resources we always need.
  self.addEventListener('install', event => {
    event.waitUntil(
      caches.open(PRECACHE)
        .then(cache => cache.addAll(PRECACHE_URLS))
        .then(self.skipWaiting())
    );
  });

  // The activate handler takes care of cleaning up old caches.
  self.addEventListener('activate', event => {
    const currentCaches = [PRECACHE, RUNTIME];
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
      }).then(cachesToDelete => {
        return Promise.all(cachesToDelete.map(cacheToDelete => {
          return caches.delete(cacheToDelete);
        }));
      }).then(() => self.clients.claim())
    );
  });

  // The fetch handler serves responses for same-origin resources from a cache.
  // If no response is found, it populates the runtime cache with the response
  // from the network.
  self.addEventListener('fetch', event => {
    // Skip cross-origin requests, like those for Google Analytics.
    if (event.request.url.startsWith(self.location.origin)) {
      event.respondWith(
        caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }

          return caches.open(RUNTIME).then(cache => {
            return fetch(event.request).then(response => {
              // Put a copy of the response in the runtime cache.
              return cache.put(event.request, response.clone()).then(() => {
                return response;
              });
            });
          });
        })
      );
    }
  });

  // Periodic Background Sync event handler
  self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'content-sync') {
      event.waitUntil(syncContent());
    }
  });

  // Function to fetch and cache content
  async function syncContent() {
    console.log('Periodic Sync: Fetching fresh content...');
    try {
      const cache = await caches.open(RUNTIME);
      // In a real app, you would fetch from an API endpoint, e.g., '/api/quotes'
      // For this example, we'll just re-cache the main page to simulate a content update.
      await cache.add('/');
      console.log('Periodic Sync: Content updated and cached.');
    } catch (error) {
      console.error('Periodic Sync failed:', error);
    }
  }

}
