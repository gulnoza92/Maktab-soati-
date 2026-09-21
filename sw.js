/* Maktab soati — offlayn kesh. Fayllar bir marta yuklanadi, keyin internetsiz ham ochiladi. */
const KESH = "maktab-soati-v9";
const FAYLLAR = ["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(KESH).then(c => c.addAll(FAYLLAR)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== KESH).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(r => {
      const copy = r.clone(); caches.open(KESH).then(c => c.put(e.request, copy)); return r;
    }).catch(() => caches.match("./index.html")))
  );
});
