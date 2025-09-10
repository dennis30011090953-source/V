// Simple placeholder service worker for PWA
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>clients.claim());
