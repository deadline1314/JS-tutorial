//ES6 fat-arrow function

"use strict";

var getA = function(a) {
	return a;
};

let getA = a => a;
let square = (a) => { return a * a };

console.log(getA(1));//1
console.log(square(3));//9


var aa = 4;
let square1 = () => {return aa * aa};

console.log(square1());//16


let mult = (a, b) => { return a * b };
console.log(mult(2, 4));


//"bind this"
//way 1
var x = function() {
	//store 'this' reference
	var that = this;
	this.val = 1;
	setTimeout(function() {
		that.val++;
		console.log(that.val);
	}, 1)
};

var xx = new x();


//way 2
var x1 = function() {
	this.val = 1;
	//using fat-arrow
	setTimeout(() => {
		this.val++;
		console.log(this.val);
	}, 1)
};
var xx1 = new x1();


//when you want to pass arguments
var x = (...n) => {
	console.log(n[0])
};
x(1,2,3);//1


var x = function() {
	console.log(arguments[0]);
};
x(4,5,6);//4


