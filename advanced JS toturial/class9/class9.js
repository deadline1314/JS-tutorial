//---Web Worker has no access to

//1. window object
//2. document object
//3. parent object


//---Web Worker has access to

//1. The navigator object (useragent, geolocation, cookeyenabled)
//2. The location object(read-only) (host, hostname, href, pathname...etc)
//3. XMLHttpRequest
//4. setTimeout() / clearTimeout() / setInterval() / clearInterval()
//5. The application cache
//6. Importing external scripts using the importScript() method
//7. Spawning other web workers


myWorker.terminate();
