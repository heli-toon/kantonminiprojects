self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll([
        "./",
        "./css/style.css",
        "./css/bootstrap-icons.woff",
        "./css/bootstrap-icons.min.css",
        "./js/script.js",
        "./js/matter.js",
        "./js/soundjs.min.js",
        "./js/favicon.png",
        "./sounds/bigBoom.mp3",
        "./sounds/bonus.mp3",
        "./sounds/end.mp3",
        "./sounds/sbomb.mp3",
        "./sounds/selected.mp3",
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
