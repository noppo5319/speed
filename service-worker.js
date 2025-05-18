self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('speed-app-v1').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icon-192.png',
        './icon-512.png',
        'https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
