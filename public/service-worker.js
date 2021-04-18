/* eslint-disable no-restricted-globals */

const CACHE_NAME = 'TriviaCache'
const CACHE_ASSETS = [
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap',
  'favicon.ico',
  '/',
  '/static/css/main.3488e832.chunk.css',
  '/static/js/runtime-main.1ce031a2.js',
  '/static/js/runtime-main.1ce031a2.js.map',
  '/static/css/2.36e6f016.chunk.css',
  '/static/js/2.d9eb85d0.chunk.js',
  '/static/js/2.d9eb85d0.chunk.js.map',
  '/index.html',
  '/static/css/2.36e6f016.chunk.css.map',
  '/static/css/main.3488e832.chunk.css.map',
  '/static/js/2.d9eb85d0.chunk.js.LICENSE.txt',
  '/static/media/background.41dbc550.png',
  '/static/media/correctAnswer.26f1d57d.svg',
  '/static/media/earth.0ddf6d68.svg',
  '/static/media/ovni.1aafc528.svg',
  '/static/media/triviaPerson.182b6171.svg',
  '/static/media/winner.d76bfdf8.svg',
  '/static/media/wrongAnswer.ae055bf0.svg'
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
