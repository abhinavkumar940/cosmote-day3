var CACHE_NAME = "news-website-shell";
var urlsToCache = [
  "/",
  "/bundle.css",
  "/custom.css",
  "/normalize.css",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "/bundle.js",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Cache open successfully ");
      cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }

      return fetch(event.request);
    })
  );
});
