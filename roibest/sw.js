if (!self.define) {
  let e,
    s = {};
  const i = (i, n) => (
    (i = new URL(i + ".js", n).href),
    s[i] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, r) => {
    const l =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[l]) return;
    let t = {};
    const o = (e) => i(e, l),
      d = { module: { uri: l }, exports: t, require: o };
    s[l] = Promise.all(n.map((e) => d[e] || o(e))).then((e) => (r(...e), t));
  };
}
define(["./workbox-28fe7b12"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "assets/index-ByYplRUP.js", revision: null },
        { url: "assets/index-CovGLJd7.css", revision: null },
        { url: "assets/index-CpEq9FWA.css", revision: null },
        { url: "./index-CqFhiEtL.js", revision: null },
        { url: "assets/index-DObC8IMK.js", revision: null },
        { url: "index.html", revision: "7536ac4b9fb085ab421cc5dc9075e98f" },
        { url: "main.js", revision: "a963d527837c892b499dd5f5ce2e703c" },
        { url: "registerSW.js", revision: "1872c500de691dce40960bb85481de07" },
        { url: "logo.png", revision: "46fdfeb816da674bbf08b7bf1124dc13" },
        {
          url: "manifest.webmanifest",
          revision: "77ae33dd3e4cba324edf6ee19efa7258",
        },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))
    );
});
