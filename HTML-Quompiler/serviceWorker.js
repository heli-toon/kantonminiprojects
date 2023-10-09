self.addEventListener("install", e =>{
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(['./', './css/style.css', './js/script.js', './images/iconh_192x192.png']);
        })
    );  
});

self.addEventListener("fetch", e=> {
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request);
        })
    );
});