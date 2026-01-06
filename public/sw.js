self.addEventListener("install", (event) => {
  console.log("Service Worker installed");
  console.log("User Agent:", navigator.userAgent);
  setInterval(() => {
    console.log("Service Worker is alive");
    console.log("User Agent:", navigator.userAgent);
  }, 10000);
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activated");
  console.log("User Agent:", navigator.userAgent);
});

self.addEventListener("fetch", (event) => {
  console.log("Fetch event:", event.request.url);
  console.log("User Agent:", navigator.userAgent);
});
