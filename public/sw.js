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

self.addEventListener("message", (event) => {
  if (event.data.type === "GET_USER_AGENT") {
    // Send response back
    event.ports[0].postMessage({
      userAgent: navigator.userAgent,
      timestamp: Date.now(),
    });
  }
});
