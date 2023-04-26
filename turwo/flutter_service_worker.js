'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d17c50bdbdc9992eb5773219f6cac775",
"index.html": "1732e0115825c663bf7bb4ac89f409c0",
"/": "1732e0115825c663bf7bb4ac89f409c0",
"styles.css": "37415c92e7efbc9440e8a92c6cdca50b",
"main.dart.js": "441e2d46040a9e0f4c35e06dfefda0ff",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "3a856d47fed1c1b2ed804973cc70d699",
"icons/Icon-192.png": "76e6cc481ba6c965e6604df7c267b6a8",
"icons/Icon-maskable-192.png": "76e6cc481ba6c965e6604df7c267b6a8",
"icons/Icon-maskable-512.png": "b669b2ac341271653550c33a0f1939b7",
"icons/Icon-512.png": "b669b2ac341271653550c33a0f1939b7",
"manifest.json": "b87d04dbf388f00014f245d805e6690e",
"assets/images/Lock.png": "53e9201334cbdff1319f23dc79a6215c",
"assets/images/map_blurred.png": "7521dfa03c907c70eebca5398c3e56c4",
"assets/images/turwo_logo.svg": "83573956025f1b15340decab0b0c0d20",
"assets/images/Logo.png": "c00fb446d34a3b5da2cd9d416eb8f55d",
"assets/AssetManifest.json": "09bfb285b44372a8e6f931710c67fe20",
"assets/NOTICES": "95ebd5062fc2192e24c3bc052be7b99e",
"assets/json/driver_locations.json": "665b20ff5a466592efde957dd48c22ae",
"assets/json/login.json": "6418345478679aef5ea0fe57e28d961e",
"assets/json/routes_summery.json": "fbabbf5a5fe020d8180d119c00ac6692",
"assets/json/routes.json": "ac74cf6fcaa2143bef3648bd3416a4c1",
"assets/FontManifest.json": "fb9c799f63d0b57fdf1a204e14cfae0e",
"assets/icons/waiting_icon.svg": "df5503ca86339a5d3fd1dad1eb96e6d1",
"assets/icons/late_icon.svg": "a4eb3b0bdd556fa70d3da49809bcf92d",
"assets/icons/search_icon.svg": "b00192a9abdd72d0af0a8b7f4d4682fe",
"assets/icons/stop_icon.svg": "e47d5eb98c892b7cbb6d2cbe6dc3b9c8",
"assets/icons/trip_icon.svg": "8a26394c2bc89fbc3a0daffe5b8a6188",
"assets/icons/first-stop_icon.svg": "2673b749a7daabf5d169cea242d7b9cc",
"assets/icons/package_icon.svg": "8d911016331a0b5ec07c2d7406c64ef9",
"assets/icons/first_scan_icon.svg": "a903ccf82be366a78ad03e141f79256f",
"assets/icons/pin_icon.svg": "96be11f1dc92ff2b6b3d83c92722abde",
"assets/icons/drop_off_icon.svg": "d4c9de28e9f61704c377a3e03a47f809",
"assets/icons/rider_icon.svg": "1104a32f83022c99d16c3a74c15d9b0f",
"assets/icons/last_stop_icon.svg": "23f849a7eb60a38a025baa10b793e5c6",
"assets/icons/time_icon.svg": "77eabdb3c0f257204c7d30dea379efcd",
"assets/icons/inprogress_icon.svg": "85cb3abb4a9c48f30acaf0b237f6b10e",
"assets/icons/driver_icon.svg": "b2137830d22de96ae427bacacd8607e1",
"assets/icons/pick_up_icon-1.svg": "144d3f2a59348c8d5e4e6f63c93eb430",
"assets/icons/running_late_icon.svg": "9b085800d30ce011f071b6a2eaa3f7b9",
"assets/icons/done_icon.svg": "380162df4e03ab8bab5c98e65ce4cdff",
"assets/icons/unassign_icon.svg": "f03a1b9b7b286ba1fee5d11255fa4f69",
"assets/icons/delievered-icon.svg": "d36a74a54597430fd23f311e9d653762",
"assets/icons/rout_icon.svg": "07cf53170410807867a91994e4efc700",
"assets/icons/assign_icon.svg": "daa5b269d3e32df39c26e9fb77ce8231",
"assets/icons/last_scan_icon.svg": "e9c59945a38ed0d6996a2ba708eeed48",
"assets/icons/pick_up_icon.svg": "4be56e32feb762753a52406a3b0424ab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/fonts/turwo_icons.ttf": "d9b4faf5d07a73891bda3365ba11859e",
"assets/fonts/RobotoCondensed-Regular.ttf": "0134dd8fe6fe708de73909a71d842780",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/Lock.png": "53e9201334cbdff1319f23dc79a6215c",
"assets/assets/images/map_blurred.png": "7521dfa03c907c70eebca5398c3e56c4",
"assets/assets/images/turwo_logo.svg": "83573956025f1b15340decab0b0c0d20",
"assets/assets/images/Logo.png": "c00fb446d34a3b5da2cd9d416eb8f55d",
"assets/assets/images/avatars/8.jpg": "62eb7c714779e8e8ac6a02a505fdb610",
"assets/assets/images/avatars/9.jpg": "97942dac7ba315b905f83b3111657e41",
"assets/assets/images/avatars/14.jpg": "c5fb15a7af5b24cadecb1c0657ea6aa8",
"assets/assets/images/avatars/12.jpg": "46268987f32ec0dc7a40fcb894ecd15d",
"assets/assets/images/avatars/13.jpg": "e1f99ab0ca6a0da5dd29fe9fb846a50c",
"assets/assets/images/avatars/11.jpg": "ef16f52dbb36cd6d6bd02a65890c83a0",
"assets/assets/images/avatars/10.jpg": "825af15a6df4db44071ba9de3fa940ae",
"assets/assets/images/avatars/4.jpg": "03c0e9e5cc25b9283a25ec648978e6b1",
"assets/assets/images/avatars/5.jpg": "599f86327a45a40cc0d2a9f009350844",
"assets/assets/images/avatars/7.jpg": "5ad14c4e8d7a513e89d0daffa8c16f00",
"assets/assets/images/avatars/6.jpg": "881b3fc3588fd7a5bd81dda4880fb2c6",
"assets/assets/images/avatars/2.jpg": "d62f583324cebe1eebf22b675bb296c6",
"assets/assets/images/avatars/3.jpg": "f4a7b0f0a2348477a2f05b37a7e2bea5",
"assets/assets/images/avatars/1.jpg": "d1de6b4fb68873bd24ef2ab38c39f567",
"assets/assets/images/turwo_logo.png": "dc615fe80893620b45d9543a0e5ecfcb",
"assets/assets/json/driver_locations.json": "665b20ff5a466592efde957dd48c22ae",
"assets/assets/json/login.json": "5d076900d3e1a361f5e0ba1d38770e37",
"assets/assets/json/routes_summery.json": "fbabbf5a5fe020d8180d119c00ac6692",
"assets/assets/json/routes.json": "cb740f45d4f192804ec4060e42796576",
"assets/assets/icons/waiting_icon.svg": "df5503ca86339a5d3fd1dad1eb96e6d1",
"assets/assets/icons/late_icon.svg": "a4eb3b0bdd556fa70d3da49809bcf92d",
"assets/assets/icons/search_icon.svg": "b00192a9abdd72d0af0a8b7f4d4682fe",
"assets/assets/icons/stop_icon.svg": "e47d5eb98c892b7cbb6d2cbe6dc3b9c8",
"assets/assets/icons/trip_icon.svg": "8a26394c2bc89fbc3a0daffe5b8a6188",
"assets/assets/icons/first-stop_icon.svg": "2673b749a7daabf5d169cea242d7b9cc",
"assets/assets/icons/package_icon.svg": "8d911016331a0b5ec07c2d7406c64ef9",
"assets/assets/icons/first_scan_icon.svg": "a903ccf82be366a78ad03e141f79256f",
"assets/assets/icons/pin_icon.svg": "96be11f1dc92ff2b6b3d83c92722abde",
"assets/assets/icons/drop_off_icon.svg": "d4c9de28e9f61704c377a3e03a47f809",
"assets/assets/icons/rider_icon.svg": "1104a32f83022c99d16c3a74c15d9b0f",
"assets/assets/icons/last_stop_icon.svg": "23f849a7eb60a38a025baa10b793e5c6",
"assets/assets/icons/time_icon.svg": "77eabdb3c0f257204c7d30dea379efcd",
"assets/assets/icons/inprogress_icon.svg": "85cb3abb4a9c48f30acaf0b237f6b10e",
"assets/assets/icons/driver_icon.svg": "b2137830d22de96ae427bacacd8607e1",
"assets/assets/icons/pick_up_icon-1.svg": "144d3f2a59348c8d5e4e6f63c93eb430",
"assets/assets/icons/running_late_icon.svg": "9b085800d30ce011f071b6a2eaa3f7b9",
"assets/assets/icons/done_icon.svg": "380162df4e03ab8bab5c98e65ce4cdff",
"assets/assets/icons/unassign_icon.svg": "f03a1b9b7b286ba1fee5d11255fa4f69",
"assets/assets/icons/delievered-icon.svg": "d36a74a54597430fd23f311e9d653762",
"assets/assets/icons/rout_icon.svg": "07cf53170410807867a91994e4efc700",
"assets/assets/icons/assign_icon.svg": "daa5b269d3e32df39c26e9fb77ce8231",
"assets/assets/icons/last_scan_icon.svg": "e9c59945a38ed0d6996a2ba708eeed48",
"assets/assets/icons/pick_up_icon.svg": "4be56e32feb762753a52406a3b0424ab",
"assets/assets/animations/door_delivery.json": "c0995c34e01a84f1717e6d8c2958305f",
"assets/assets/animations/delivery_truck.json": "d40806188d3fdb5f9ad497936f6e6806",
"assets/assets/animations/delivery_bike.json": "6538ce89720e2f07aa9fc23e4c2b0738",
"assets/assets/animations/delivery-truck_3.json": "4650d067b328d0284daa31f6478de785",
"assets/assets/animations/manger_check.json": "9a6374403d7ffb884a837b4cdf785599",
"assets/animations/door_delivery.json": "c0995c34e01a84f1717e6d8c2958305f",
"assets/animations/delivery_truck.json": "d40806188d3fdb5f9ad497936f6e6806",
"assets/animations/delivery_bike.json": "6538ce89720e2f07aa9fc23e4c2b0738",
"assets/animations/delivery-truck_3.json": "4650d067b328d0284daa31f6478de785",
"assets/animations/manger_check.json": "9a6374403d7ffb884a837b4cdf785599",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
