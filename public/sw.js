
import { warm_cache } from 'next-pwa/cache';
import { PrecacheController } from 'next-pwa/precaching';

class CustomPrecacheController extends PrecacheController {
  constructor(options) {
    super(options);
    self.addEventListener('periodicsync', (event) => {
      if (event.tag === 'content-sync') {
        event.waitUntil(this.warmCache());
      }
    });
  }

  async warmCache() {
    console.log('Warming cache for periodic sync...');
    const cache = await self.caches.open(this.cacheName);
    // This will fetch and cache the main page, which includes the data for categories.
    await cache.add('/'); 
    console.log('Cache warmed up successfully.');
  }
}

const controller = new CustomPrecacheController();

self.addEventListener('install', (event) => {
  event.waitUntil(controller.install());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(controller.activate());
});

self.addEventListener('fetch', (event) => {
  controller.fetch(event);
});
