/* Keeps a full copy of the trainer on the device so it opens with no connection.
   Every request is answered from the saved copy first; a fresh copy is fetched in the background when online. */
var CACHE = 'trainer-2e47d3bd5b';
var FILES = ["./", "index.html", "data.js", "manifest.webmanifest", "apple-touch-icon.png", "icon-192.png", "icon-512.png", "fonts/source-sans-3-latin-400-normal.woff2", "fonts/source-sans-3-latin-ext-400-normal.woff2", "fonts/source-sans-3-latin-500-normal.woff2", "fonts/source-sans-3-latin-ext-500-normal.woff2", "fonts/source-sans-3-latin-600-normal.woff2", "fonts/source-sans-3-latin-ext-600-normal.woff2", "fonts/source-sans-3-latin-700-normal.woff2", "fonts/source-sans-3-latin-ext-700-normal.woff2", "fonts/bodoni-moda-latin-500-normal.woff2", "fonts/bodoni-moda-latin-700-normal.woff2", "fonts/bodoni-moda-latin-500-italic.woff2", "fonts/bodoni-moda-latin-700-italic.woff2", "fonts/spline-sans-mono-latin-500-normal.woff2", "fonts/spline-sans-mono-latin-600-normal.woff2"];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(function (c) {
    return c.match(e.request, { ignoreSearch: true }).then(function (hit) {
      var fresh = fetch(e.request).then(function (res) { if (res && res.ok) c.put(e.request, res.clone()); return res; });
      if (hit) { fresh.catch(function () {}); return hit; }
      return fresh;
    });
  }));
});
