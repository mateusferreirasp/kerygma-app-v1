// Service worker mínimo do Kerygma — necessário para o navegador
// considerar o app "instalável". Estratégia: sempre busca a versão mais
// nova diretamente da rede (ignorando cache HTTP do navegador), e só
// usa a cópia salva localmente se estiver sem internet.
//
// IMPORTANTE: sempre que os arquivos do app forem atualizados, mude o
// número da CACHE_VERSION abaixo — isso força todo mundo a receber a
// versão nova automaticamente, sem precisar limpar dados manualmente.
const CACHE_VERSION = 'v2';
const CACHE_NAME = 'kerygma-shell-' + CACHE_VERSION;
const SHELL_FILES = ['./index.html', './style.css', './app.js', './manifest.json'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_FILES)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request, { cache: 'no-store' })
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});
