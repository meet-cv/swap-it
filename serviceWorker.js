var cacheName = 'swap-it-v1';
var contentToCache = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './serviceWorker.js',  
  './style/mobile_500px.css',
  './style/desktop.css',
  './style/components.css',
  './scripts/darkMode.js',
  './scripts/ui.js',
  './assets/icons8-home.svg',
  './assets/icons8-home-128.png',
  './assets/icons8-home-512.png',
          
];


self.addEventListener('install',(e)=>{
   console.log('service worker instl');
    e.waitUntil(
        caches.open(cacheName).then((cache)=>{
            console.log('caching all');
            return cache.addAll(contentToCache);
        })
    );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => {
          console.log('Fetching resource: '+e.request.url);
      return r || fetch(e.request).then((response) => {
                return caches.open(cacheName).then((cache) => {
          console.log('Caching new resource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
          return Promise.all(keyList.map((key) => {
        if(key !== cacheName) {
          return caches.delete(key);
        }
      }));
    })
  );
});
