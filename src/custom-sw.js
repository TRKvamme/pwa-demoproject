import idbKeyval from 'idb-keyval'

self.addEventListener('fetch', function (event) {
    let req = event.request

    if (!navigator.onLine && req.url === 'https://tkvamme.tk/twibblerapi/api/messages') {

        if (req.method === 'GET') {

            event.respondWith(idbKeyval.get('messages').then(function (messages) {

                return new Response(JSON.stringify(messages))

            }))

        } else if (req.method === 'POST') {

            // TODO: Save post-request until online sync

        }

    }

})