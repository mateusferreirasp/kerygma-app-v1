// Service worker mínimo do Kerygma — necessário para o navegador
// considerar o app "instalável". Estratégia: sempre busca a versão mais
// nova diretamente da rede (ignorando cache HTTP do navegador), e só
// usa a cópia salva localmente se estiver sem internet.
//
// IMPORTANTE: sempre que os arquivos do app forem atualizados, mude o
// número da CACHE_VERSION abaixo — isso faz o navegador perceber que
// existe uma versão nova e avisar o usuário (em vez de continuar usando
// a versão antiga guardada localmente).
const CACHE_VERSION = 'v7';
const CACHE_NAME = 'kerygma-shell-' + CACHE_VERSION;
const SHELL_FILES = ['./index.html', './style.css', './app.js', './manifest.json'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_FILES)).catch(() => {})
  );
  // não chama skipWaiting() aqui de propósito: a nova versão fica “esperando”
  // até o usuário confirmar (via banner “Atualizar agora” no app), evitando
  // recarregar a página no meio de uma digitação sem avisar.
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
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
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return; // deixa passar sem mexer: chamadas a APIs externas (ex: Bíblia) não devem ser interceptadas
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
