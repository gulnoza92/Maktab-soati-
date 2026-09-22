/* Maktab soati — offlayn kesh.
   Sahifa (index.html): avval internetdan — yangi versiya darhol ko'rinadi; internet yo'q bo'lsa — keshdan.
   Ikonkalar va manifest: keshdan. */
const KESH = "maktab-soati-v13";
const FAYLLAR = ["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(KESH).then(c => c.addAll(FAYLLAR)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== KESH).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url); if (url.origin !== self.location.origin) return;
  const sahifa = req.mode === "navigate" || /\/(index\.html)?$/.test(url.pathname);
  if (sahifa) {
    e.respondWith(fetch(req.url, { cache: "no-store", credentials: "same-origin" })
      .then(r => { if (r.ok) { const nusxa = r.clone(); caches.open(KESH).then(c => c.put("./index.html", nusxa)); } return r; })
      .catch(() => caches.match("./index.html").then(h => h || caches.match("./"))));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { if (r.ok) { const nusxa = r.clone(); caches.open(KESH).then(c => c.put(req, nusxa)); } return r; })));
});
