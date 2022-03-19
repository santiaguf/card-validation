/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
const cardValidation = 'card-validation-site-v1';
const assets = [
  '/',
  'index.html',
  'index.js',
  'card.js',
  'validator.js',
  'issuer.js',
  'img/CA2021-horizontal-logo.png',
  'img/Copa_América_2021_–_Text_logo.svg'
]

// eslint-disable-next-line arrow-parens
self.addEventListener('install', installEvent => {
  installEvent.waitUntil(
    caches.open(cardValidation).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    }),
  );
});
