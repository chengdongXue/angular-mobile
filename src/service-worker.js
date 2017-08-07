var log = console.log.bind(console);
var error = console.error.bind(console);

var version = 1;
var cacheName = 'pwa-client-v' + version;
var dataCacheName = 'pwa-client-data-v' + version;
var appShellFilesToCache = [
  './',
  './index.html',
  './inline.bundle.js',
  './main.bundle.js',
  './polyfills.bundle.js',
  './styles.bundle.js',
  './vendor.bundle.js'
];

// prod
// var appShellFilesToCache = [
//   './',
//   './index.html',
//   './inline.*.bundle.js',
//   './main.*.bundle.js',
//   './polyfills.*.bundle.js',
//   './styles.*.bundle.js',
//   './vendor.*.bundle.js'
// ];

self.addEventListener('install', function(e) {
  e.waitUntil(self.skipWaiting());
  log('Service Worker: Installed');
  
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      log('Service Worker: Caching App Shell');
      return cache.addAll(appShellFilesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(self.clients.claim());
  log('Service Worker: Active');
  
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        
        if (key !== cacheName) {
          log('Service Worker: Removing old cache ', key);
          return caches.delete(key);
        }
        
      }));
    })
  );
});

self.addEventListener('fetch', function(e) {
  log('Service Worker: Fetch URL ', e.request.url);
  
  // Match requests for data and handle them separately
  e.respondWith(
    caches.match(e.request.clone()).then(function(response) {
      return response || fetch(e.request.clone()).then(function(r2) {
        return caches.open(dataCacheName).then(function(cache) {
          console.log('Service Worker: Fetched & Cached URL ', e.request.url);
          
          cache.put(e.request.url, r2.clone());
          return r2.clone();
        });
      });
    })
  );
  
});
