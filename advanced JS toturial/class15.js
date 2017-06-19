//JavaScript Generators


let i = [1, 2, 3, 4];

let iterator = i[Symbol.iterator]();

console.log(iterator.next());//value: 1, done: false
console.log(iterator.next());//value: 2, done: false
console.log(iterator.next());//3, false
console.log(iterator.next());//4, false
console.log(iterator.next());//undefined, true



//eg 1
function *generator() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
};

let iterator1 = generator();

console.log(iterator1.next());



//eg 2
function *infiniteMaker() {
	let i = 0;
	while(true) {
		yield i;
		i++;
	}
};

let iterator2 = infiniteMaker();



//eg 3
function *generator1() {
	yield 1;
	yield *anotherGenerator();
	return 'hello'; //this will be the last value
	yield 3;
};

fucntion *anotherGenerator() {
	yield 2;
};



//eg 4
function request(url) {
	return new Promise( function(resolve, reject) {
		makeAjaxCall( url, function(err, text) {
			if(err) reject(err);
			else resolve(text);
		});
	});
};

function *generator2() {
	//only when the first request is resolved 
	//the second request will be executed
	yield request('url1');
	yield request('url2');
};