//Hoisting in JavaScript and function scope issues with 'var'


var x = function() {

	var y = 1;

	var z = function() {
		console.log(y);
	}

	z();
}

x();


//ES5
Object.defineProperty(window, 'PI', {
	value: 3.14,
	writable: false
});

//ES6
const PI = 3.14;




//block scope, no hoisting
let x = function() {
	if(true) {
		console.log(y); //error
		let y = 1;
	}
	console.log(y);//error
}