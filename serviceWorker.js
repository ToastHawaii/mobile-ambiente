self.addEventListener("fetch", event => {});

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("mobile-ambiente").then(function (cache) {
      return cache.addAll([
        "/inspiration.html",
        "https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js",
        "/semantic/dist/semantic.min.css",
        "/semantic/dist/semantic.min.js",
        "/style.css",
        "/script.js"
      ]);
    })
  );
});
