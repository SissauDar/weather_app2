// cache on install
self.addEventListener('install', (event) => {
    event.waitUntil(async function () {
        const cache = await caches.open('todo-app');
        await cache.addAll([
            '/css',
            '/img',
            'index.html'
        ]);
    }());
});

// On network response
self.addEventListener('fetch', (event) => {
    event.respondWith(
        // Try the network
        fetch(event.request)
            .then(function (res) {
                return caches.open(CACHE_DYNAMIC_NAME)
                    .then(function (cache) {
                        // Put in cache if succeeds
                        cache.put(event.request.url, res.clone());
                        return res;
                    })
            })
            .catch(function (err) {
                // Fallback to cache
                return caches.match(event.request);
            })
    );
    // event.respondWith(async function () {
    //     const cache = await caches.open('todo-app');
    //     const cachedResponse = await cache.match(event.request);
    //     if (cachedResponse) return cachedResponse;
    //     const networkResponse = await fetch(event.request);
    //     event.waitUntil(
    //         cache.put(event.request, networkResponse.clone())
    //     );
    //     return networkResponse;
    // }());
});
