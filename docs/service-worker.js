/* eslint-disable no-restricted-globals */

const CACHE_NAME = 'TriviaCache'
const CACHE_ASSETS = [
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap',
  'favicon.ico',
  '/triviaApp/static/css/main.8da33de3.chunk.css',
  '/triviaApp/static/js/main.959591c8.chunk.js',
  '/triviaApp/static/js/main.959591c8.chunk.js.map',
  '/triviaApp/static/js/runtime-main.b264da37.js',
  '/triviaApp/static/js/runtime-main.b264da37.js.map',
  '/triviaApp/static/css/2.36e6f016.chunk.css',
  '/triviaApp/static/js/2.d9eb85d0.chunk.js',
  '/triviaApp/static/js/2.d9eb85d0.chunk.js.map',
  '/triviaApp/index.html',
  '/triviaApp/static/css/2.36e6f016.chunk.css.map',
  '/triviaApp/static/css/main.8da33de3.chunk.css.map',
  '/triviaApp/static/js/2.d9eb85d0.chunk.js.LICENSE.txt',
  '/triviaApp/static/media/background.41dbc550.png',
  '/triviaApp/static/media/correctAnswer.26f1d57d.svg',
  '/triviaApp/static/media/earth.0ddf6d68.svg',
  '/triviaApp/static/media/ovni.1aafc528.svg',
  '/triviaApp/static/media/triviaPerson.182b6171.svg',
  '/triviaApp/static/media/winner.d76bfdf8.svg',
  '/triviaApp/static/media/wrongAnswer.ae055bf0.svg'
]

// Call Install Event
self.addEventListener('install', e => {
  console.log('Service Worker: Installed')
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Service Worker: Caching Files')
      cache.addAll(CACHE_ASSETS)
    }).then(() => self.skipWaiting())
  )
})

// Call Activate Event
self.addEventListener('activate', e => {
  console.log('Service Worker: Activated')
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        // eslint-disable-next-line array-callback-return
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Clearing Old Cache ', cache)
            return caches.delete(cache)
          }
        })
      )
    })
  )
})

function isInArray (string, array) {
  let cachePath
  if (string.indexOf(self.origin) === 0) {
    cachePath = string.substring(self.origin.length)
  } else {
    cachePath = string
  }
  return array.indexOf(cachePath) > -1
}

self.addEventListener('fetch', e => {
  const requestURL = new URL(e.request.url)
  if (/https/.test(requestURL.protocol)) {
    if (isInArray(e.request.url, CACHE_ASSETS)) {
      console.log(`  %cService Worker found in cache ${e.request.url}`, 'color: #28a745')
      e.respondWith(caches.match(e.request))
    } else {
      e.respondWith(async function () {
        const cacheResponse = await caches.match(e.request)
        if (cacheResponse) return cacheResponse
        try {
          const fetchResponse = await fetch(e.request)
          console.log('%cService Worker new data cached ' + e.request.url, 'color:#ffc107')
          const cache = await caches.open(CACHE_NAME)
          cache.put(e.request.url, fetchResponse.clone())
          return fetchResponse
        } catch (err) {
          console.log('ERROR')
          console.error(err)
        }
      }())
    }
  }
})
