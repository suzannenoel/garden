const CACHE_NAME ="task-manager-v1";

const ASSETS_TO_CACHE = [
"/",
"/index.html", 

"/pages/about.html",
"/pages/contact.html", 
  "/css/materialize.min.css", 
"/js/materialize.min.js",
"/js/ui.js",
"/img/task.png",
"/img/garden.png",
];
//Install event
self.addEventListener("install",event=>{
    console.log("Service worker: Installing...");
    event.waitUntil(caches.open(CACHE_NAME).then(cache =>{
    event.waitUntil(caches.open(CACHE_NAME).then(cache =>{
    event.waitUntil(caches.open(CACHE_NAME).then(cache =>{
    event.waitUntil(caches.open(CACHE_NAME).then(cache =>{
    event.waitUntil(caches.open(CACHE_NAME).then(cache =>{
    event.waitUntil(caches.open(CACHE_NAME).then(cache =>{
        console.log('Service worker: caching files');
        return cache.addAll(ASSETS_TO_CACHE);
    })
    event.waitUntil(caches.open(CACHE_NAME).then(cache =>{
);
});


//activate event
self.addEventListener("activate",event =>{
    console.log("Service Worker activated");
    event.waitUntil(caches.keys().then(cachesNames =>{
        return Promise.all(cachesNames.map((cache) =>{
        if(cache !== CACHE_NAME){
            console.log("service worker: Deleting old cache");
            return caches.delete(cache);
        }
    })
);
});

self.addEventListener("fetch",(event)=>){
    console.log("Service Worker: fetching...", event.request.url);
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});