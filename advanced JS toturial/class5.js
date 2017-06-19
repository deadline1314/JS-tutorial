//Promise

let promiseToCleanTheRoom = new Promise(function(resolve, reject) {

	//cleaning the room

	let isClean = true;
	
	if(isClean) {
		resolve('Clean');
	}
	else {
		reject('Not clean');
	}

});


promiseToCleanTheRoom.then(function(fromResolve) {
	console.log('the room is ' + fromResolve);
}).catch(function(fromReject) {
	console.log('the room is ' + fromReject);
});



///////////////////////////////////
let cleanRoom = function() {
	return new Promise(function(resolve, reject) {
		resolve('Cleaned The Room');
	});
};

let removeGarbage = function(message) {
	return new Promise(function(resolve, reject) {
		resolve(message + 'Remove Garbage');
	});
};

let winIcecream = function(message) {
	return new Promise(function(resolve, reject) {
		resolve(message + 'Won Icecream');
	});
};


cleanRoom().then(function(result) {
	return removeGarbage(result);
}).then(function(result) {
	return winIcecream(result);
}).then(function(result) {
	console.log('Finished' + result);
});



//after all are finished, the promise is resolved
Promise.all([cleanRoom(), removeGarbage(), winIcecream()])
.then(function() {
	console.log('all finished');
});

//after any of the callback finished, the promise is resolved
Promise.race([cleanRoom(), removeGarbage(), winIcecream()])
.then(function() {
	console.log('one of them is finished');
});


