const CACHE_NAME = 'main-portal-cache-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/manifest.webmanifest',
    '/icons/icon-192.png',
    '/icons/icon-512.png'
    // Мы НЕ кэшируем файлы из папок /bar и /akush1 здесь.
    // Они закэшируются автоматически при первом заходе в них.
];

// Установка Service Worker и кэширование главных файлов
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    self.skipWaiting(); // Активируем сразу
});

// Активация и удаление старого кэша
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Перехват запросов (Стратегия: Сначала сеть, потом кэш)
self.addEventListener('fetch', (event) => {
    // Пропускаем только GET запросы
    if (event.request.method !== 'GET') return;

    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // Если сеть есть, клонируем ответ и кладем в кэш
                const responseClone = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseClone);
                });
                return response;
            })
            .catch(() => {
                // Если сети нет — ищем в кэше
                return caches.match(event.request);
            })
    );
});