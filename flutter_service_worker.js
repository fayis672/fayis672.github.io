'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "cc132570d6d238130e38adc59e1f998d",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"index.html": "0c91f6843c6abdd17b76fdda2f87d37d",
"/": "0c91f6843c6abdd17b76fdda2f87d37d",
"manifest.json": "9de897b07c0a4b5a0af99c69a8ad3011",
"icons/apple-icon-152x152.png": "e84458a296acf20c126ca70b80d9ccac",
"icons/ms-icon-144x144.png": "c84364223b24a5d7e078989bfc08ee99",
"icons/android-icon-72x72.png": "da12203376358f6081e59cddb0ffd8ba",
"icons/apple-icon-60x60.png": "45c4e39676af223ee2d8fcf0175d7aad",
"icons/android-icon-192x192.png": "d2c7c1a6972945e2f282754723f3a817",
"icons/apple-icon-114x114.png": "17f6111302f054326abcc3c22a238de7",
"icons/apple-icon-72x72.png": "da12203376358f6081e59cddb0ffd8ba",
"icons/favicon-16x16.png": "fd2e78e3f3e1f9b624345a5182983f8b",
"icons/ms-icon-150x150.png": "254a4ecc9ab3d3df0f8f8231327ee705",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/apple-icon-180x180.png": "c7ab679594346cc568cf140d18ebc2ee",
"icons/android-icon-144x144.png": "c84364223b24a5d7e078989bfc08ee99",
"icons/ms-icon-70x70.png": "d8fdc122c3721e50a33bea3b18d0303b",
"icons/apple-icon-144x144.png": "c84364223b24a5d7e078989bfc08ee99",
"icons/apple-icon-57x57.png": "92aaf10b7afc54bc559f12486d4a0218",
"icons/ms-icon-310x310.png": "f9032a465d4a3500cfb21891bc13e7aa",
"icons/apple-icon-76x76.png": "47ff55dea93d167913bde128dd1c9b3c",
"icons/favicon-32x32.png": "5ad21601ac2ed295f2b716c501e79630",
"icons/android-icon-48x48.png": "2ab512c1b01515dc8a79ad392c7a4b77",
"icons/apple-icon-120x120.png": "533a8c54c2d2954c8a45da85030c7e6a",
"icons/favicon-96x96.png": "5feff07717c3c0c2b0027425c6455fb6",
"icons/favicon.ico": "bebda22c03185336a0eda4a1db858475",
"icons/apple-icon.png": "d2b541a58def1746477dc1935809b83e",
"icons/apple-icon-precomposed.png": "d2b541a58def1746477dc1935809b83e",
"icons/android-icon-96x96.png": "5feff07717c3c0c2b0027425c6455fb6",
"icons/android-icon-36x36.png": "b43ca884c81c1002dc97ef22c857120e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/NOTICES": "b783d44bc0d12193f7283e77677e0c3f",
"assets/fonts/MaterialIcons-Regular.otf": "5212aef2aed9f2090abc6f8c75bc26ff",
"assets/assets/svg/cib-flutter.svg": "8a901e17ffd0f6f444e746d42062e53c",
"assets/assets/image/fayis.jpeg": "e2a7a7f71652d2fe6ecea66dcad70422",
"assets/assets/animation/devAnimation.json": "2f41a322d8da780cf282d36c13a6807a",
"assets/AssetManifest.json": "e8503918439744e6e05898afbbad8a74",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "5d0b35758371cf133c1969cab9dc0848",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "7d6806e57c64247679ab31337d299858",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "26ed8e1c5c0f6bc2eb1137b902f96746",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffd7620b5fd4afe3dc8174e350d1cf28",
"assets/AssetManifest.bin": "d922e27023693e797425f12afd8a49ad",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"main.dart.js": "caa498a9292314ba1480739d12b02f10",
"flutter_bootstrap.js": "dac5e50878b373f993ec1136c8a3f023",
"favicon.ico": "bebda22c03185336a0eda4a1db858475"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
