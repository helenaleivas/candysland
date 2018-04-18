//NEW
//This is the "Offline copy of pages" wervice worker
//Install stage sets up the index page (home page) in the cahche and opens a new cache
self.addEventListener('install', function (event) {
  var indexPage = new Request('index.html');
  event.waitUntil(
      fetch(indexPage).then(function (response) {
          caches.open('pwabuilder-offline').then(function (cache) {
              console.log('[PWA Builder] Cached index page during Install' + response.url);
              return cache.addAll(['/final/public/', '/final/public/index.html', '/final/public/bebida.html',
                  '/final/public/bolo.html', '/final/public/cardapio.html',
                  '/final/public/cadastro.html', '/final/public/cadastro2.html',
                  '/final/public/cadastro3.html', '/final/public/contato.html',
                  '/final/public/carrinho.html', '/final/public/doce.html',
                  '/final/public/login.html', '/final/public/final.html',
                  '/final/public/perfil.html', '/final/public/finalizando.html',
                  '/final/public/perfil2.html', '/final/public/local.html',
                  '/final/public/politica.html','/final/public/produto.html',
                  '/final/public/termos.html', '/final/public/salgado.html',
                   '/final/public/salvo.html', '/final/public/visitante.html',
                   '/final/public/sobre.html','/final/public/css/home.css',
                   '/final/public/css/cadastro.css','/final/public/css/cardapios.css',
                   '/final/public/css/carrinho.css','/final/public/css/contato.css',
                   '/final/public/css/finalizando.css','/final/public/css/info.css',
                   '/final/public/css/local.css','/final/public/css/login.css',
                   '/final/public/css/perfil.css','/final/public/css/produto.css',
                  '/final/public/css/salvo.css','/final/public/sw.js',
                  '/final/public/doce/doce.jpeg', '/final/public/doce/doce2.jpeg',
                  '/final/public/doce/doce3.jpeg', '/final/public/doce/doce4.jpeg',
                  '/final/public/doce/doce5.jpeg', '/final/public/doce/doce6.jpeg',
                  '/final/public/doce/doce7.jpeg', '/final/public/doce/doce8.jpeg',
                  '/final/public/doce/doce9.jpeg', '/final/public/doce/doce10.jpeg',
                  '/final/public/doce/doce11.jpeg', '/final/public/doce/doce12.jpeg',
                  '/final/public/salgado/salgado1.jpeg', '/final/public/salgado/salgado2.jpeg',
                  '/final/public/salgado/salgado3.jpeg', '/final/public/salgado/salgado4.jpeg',
                  '/final/public/salgado/salgado5.jpeg', '/final/public/salgado/salgado6.jpeg',
                  '/final/public/salgado/salgado7.jpeg', '/final/public/salgado/salgado8.jpeg',
                  '/final/public/salgado/salgado9.jpeg', '/final/public/salgado/salgado10.jpeg',
                  '/final/public/salgado/salgado11.jpeg', '/final/public/salgado/salgado12.jpeg',
                  '/final/public/salgado/risoles.jpeg', '/final/public/salgado/tortaFrango.jpeg',
                  '/final/public/bolos/bolo.jpeg', '/final/public/bolos/bolo2.jpeg',
                  '/final/public/bolos/bolo3.jpeg', '/final/public/bolos/bolo4.jpeg',
                  '/final/public/bolos/bolo5.jpeg', '/final/public/bolos/bolo6.jpeg',
                  '/final/public/bolos/bolo7.jpeg', '/final/public/bolos/bolo8.jpeg',
                  '/final/public/bolos/bolo9.jpeg', '/final/public/bolos/bolo10.jpeg',
                  '/final/public/bolos/bolo11.jpeg', '/final/public/bolos/bolo6.jpeg',
                  '/final/public/bebidas/bebida.jpeg', '/final/public/bebidas/bebida2.jpeg',
                  '/final/public/bebidas/bebida3.jpeg', '/final/public/bebidas/bebida4.jpeg',
                  '/final/public/bebidas/bebida5.jpeg', '/final/public/bebidas/bebida6.jpeg',
                  '/final/public/bebidas/bebida7.jpeg', '/final/public/bebidas/bebida8.jpeg',
                  '/final/public/bebidas/bebida9.jpeg', '/final/public/bebidas/bebida10.jpeg',
                  '/final/public/bebidas/bebida11.jpeg', '/final/public/bebidas/bebida12.jpeg',
                  '/final/public/imgGeral/doce.png', '/final/public/imgGeral/img1.jpeg',
                  '/final/public/imgGeral/img2.jpeg', '/final/public/imgGeral/img3.jpeg',
                  '/final/public/imgGeral/img4.jpeg', '/final/public/imgGeral/img5.jpeg',
                  '/final/public/imgGeral/img6.jpeg', '/final/public/imgGeral/img7.jpeg',
                  '/final/public/imgGeral/img8.jpeg', '/final/public/imgGeral/img9.jpeg',
                  '/final/public/imgGeral/img10.jpeg', '/final/public/imgGeral/local.jpeg',
                  '/final/public/imgGeral/local2.jpeg', '/final/public/imgGeral/local3.jpeg',

              ]);
          });
      })
  );
});


//If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener('fetch', function(event) {
var updateCache = function(request){
  return caches.open('pwabuilder-offline').then(function (cache) {
    return fetch(request).then(function (response) {
      console.log('[PWA Builder] add page to offline'+response.url)
      return cache.put(request, response);
    });
  });
};

event.waitUntil(updateCache(event.request));

event.respondWith(
  fetch(event.request).catch(function(error) {
    console.log( '[PWA Builder] Network request Failed. Serving content from cache: ' + error );

    //Check to see if you have it in the cache
    //Return response
    //If not in the cache, then return error page
    return caches.open('pwabuilder-offline').then(function (cache) {
      return cache.match(event.request).then(function (matching) {
        var report =  !matching || matching.status == 404?Promise.reject('no-match'): matching;
        return report
      });
    });
  })
);
})
