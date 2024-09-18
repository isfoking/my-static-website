var cacheName = "PWAinstallDemo-9.8.2024/13:51:13",
  filesToCache = ["./pwa-install/", "./manifest.json"];
function sendMessage(e, n) {
  return new Promise(function (t, s) {
    var a = new MessageChannel();
    e.postMessage(n, [a.port2]);
  });
}
function sendMessageToAll(e, n) {
  clients.matchAll().then((t) => {
    t.forEach((n) => {
      sendMessage(n, e);
    }),
      n && "function" == typeof n && n();
  });
}
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (e) {
      return e.addAll(filesToCache);
    })
  ),
    self.skipWaiting();
}),
  self.addEventListener("activate", function (e) {
    return (
      e.waitUntil(
        caches.keys().then(function (e) {
          return Promise.all(
            e.map(function (e) {
              if (e !== cacheName)
                return sendMessageToAll("NEW_VERSION"), caches.delete(e);
            })
          );
        })
      ),
      self.clients.claim()
    );
  }),
  self.addEventListener("fetch", function (e) {
    e.respondWith(
      caches.match(e.request, { ignoreSearch: !0 }).then(function (n) {
        return n || fetch(e.request);
      })
    );
  }),
  self.addEventListener("message", (e) => {
    e && e.data && e.data.message;
  });
