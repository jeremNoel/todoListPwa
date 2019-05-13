/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "9d97f469fe17ffbe9da78441484d46d9"
  },
  {
    "url": "js/index.js",
    "revision": "3439beaa8802e50c84cf2b8c8933c891"
  },
  {
    "url": "package-lock.json",
    "revision": "4ddaf24457f6009174a27c251ebb002b"
  },
  {
    "url": "package.json",
    "revision": "500827678e10ceeabe259fe6ebfdb8ea"
  },
  {
    "url": "workbox-config.js",
    "revision": "2aeb1a30cd18463899a9e51dff41ad66"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
