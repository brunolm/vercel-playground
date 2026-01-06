self.addEventListener("install", (event) => {
  console.log("[Service worker] User Agent:", navigator.userAgent);
  setInterval(() => {
    console.log("[Service worker] User Agent:", navigator.userAgent);
  }, 10000);
});

self.addEventListener("activate", (event) => {
  console.log("[Service worker] User Agent:", navigator.userAgent);
});

self.addEventListener("fetch", (event) => {
  console.log("[Service worker] User Agent:", navigator.userAgent);
});
