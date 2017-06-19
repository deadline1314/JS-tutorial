//Currying function

//add two numbers
var add = function(a) {
	return function(b) {
		return a + b;
	}
};


var addToFive = add(5);
console.log(addToFive(1));//6



//caculate average
"use strict"
var avg = function(...n) {
	let total = 0;
	for(let i = 0; i < n.length; i++) {
		total += n[i];
	}
	return total/n.length;
};

//pass in function reference
var spiceUp = function(fn, ...n) {
	return function(...m) {
		return fn.apply(this, n.concat(m));
	}
};

var doAvg = spiceUp(avg, 1, 2, 3);
console.log(doAvg(4, 5, 6));