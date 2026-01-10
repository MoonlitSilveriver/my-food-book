// sw.js
const CACHE_NAME = 'baby-food-v1007'; // 强制刷新
const urlsToCache = ['./index.html', './manifest.json'];

self.addEventListener('install', event => {
  self.skipWaiting(); // 强制立即激活
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});






