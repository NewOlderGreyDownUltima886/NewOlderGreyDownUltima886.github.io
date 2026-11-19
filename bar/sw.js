
const CACHE_NAME = 'bar-app-cache-v2';

const ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './data.js',
    './icons/icon-192.png',
    './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        (async () => {
            const cache = await caches.open(CACHE_NAME);

            // Загружаем файлы независимо друг от друга
            await Promise.allSettled(
                ASSETS.map(async (asset) => {
                    const response = await fetch(asset);
                    if (response.ok) {
                        await cache.put(asset, response);
                    }
                })
            );

            await self.skipWaiting();
        })()
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        (async () => {
            const keys = await caches.keys();

            await Promise.all(
                keys
                    .filter(key => key.startsWith('bar-app-cache-') && key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            );

            await self.clients.claim();
        })()
    );
});

self.addEventListener('fetch', (event) => {
    const request = event.request;

    if (request.method !== 'GET') return;

    const url = new URL(request.url);
    const isImage = request.destination === 'image';


    // Фотографии: сначала сеть, при ошибке — кэш
    if (isImage) {
        event.respondWith(
            (async () => {
                const cache = await caches.open(CACHE_NAME);

                try {
                    const response = await fetch(request);

                    if (response.ok || response.type === 'opaque') {
                        await cache.put(request, response.clone());
                    }

                    return response;
                } catch (error) {
                    const cached = await cache.match(request);

                    if (cached) return cached;

                    return new Response('', {
                        status: 503,
                        statusText: 'Image unavailable offline'
                    });
                }
            })()
        );

        return;
    }


    // Остальные файлы приложения: сеть с резервом из кэша
    if (url.origin === self.location.origin) {
        event.respondWith(
            (async () => {
                try {
                    const response = await fetch(request);

                    if (response.ok) {
                        const cache = await caches.open(CACHE_NAME);
                        await cache.put(request, response.clone());
                    }

                    return response;
                } catch (error) {
                    const cached = await caches.match(request);
                    return cached || new Response('Нет подключения к интернету', {
                        status: 503,
                        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
                    });
                }
            })()
        );
    }
});
