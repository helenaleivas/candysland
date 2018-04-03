var CACHE_NAME = 'static-v1';
    self.addEventListener('install', function (event) {
    event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
    return cache.addAll([
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/manifest.js',
    '/vendor.js',
]);
})

 var CACHE_NAME = 'static-v1';
 self.addEventListener('activate', function activator(event) {
 event.waitUntil(
 caches.keys().then(function (keys) {
 return Promise.all(keys
 .filter(function (key) {
 return key.indexOf(CACHE_NAME) !== 0;
 })
 .map(function (key) {
 return caches.delete(key);
 })
 );
 })
 );
 });


 self.addEventListener('fetch', function (event) {
 event.respondWith(
 caches.match(event.request).then(function (cachedResponse) {
 return cachedResponse || fetch(event.request);
 })
 );
 });


caches.open(cacheName)

 caches.open('example-cache').then(function(cache) {
 cache.add('/example-file.html');
});
 Procurar no cache
 match:dada uma requisição, ela é procurada no cache. Ao (se) encontra-la a mesma é
etornada.
 MatchAll: todos itens que fecharem com o parametro serão retornados e podem ser usados
 caches.open('example-cache').then(function(cache) {
 cache.matchAll('/images/').then(function(response) {
 response.forEach(function(element, index, array) {
 cache.delete(element);
 });
 });
 })


 delete(): deleta um elemento do cache
 cache.keys(request): se request não é informado retorna todos itens do cache. Se
ão retorna os correspondentes a requisição
