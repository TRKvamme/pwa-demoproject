self.addEventListener('push', function (event) {
    console.log('push event:')
    console.log(event)
});

self.addEventListener('fetch', function (event) {
    console.log('fetch request:')
    console.log(event.request)
});
