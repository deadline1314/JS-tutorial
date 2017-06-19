//ES6 rest and spread operator

var x = function(...n) {
	console.log(n);
};

//without spread operator
var x1 = function() {
	var args = Array.prototype.slice.call(arguments, 0);
	var args = [].slice.call(arguments, 0);
};


x(1,2,3,4);


var nn = [1,2,3];

var x2 = function(a,b,c, ...nn) {


};



var dowhatever = ['have fun', 'have more fun', 'have even more fun'];

var life = ['born', 'learn to walk', 'learn js', ...dowhatever, 'go to heaven'];
console.log(life);


var a = [1,2,3];
var b = [4,5,6];

//way 1
a.push(...b);
//way 2
Array.prototype.push.apply(a, b);

console.log(a);
