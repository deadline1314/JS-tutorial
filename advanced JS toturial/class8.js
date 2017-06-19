//Method chaining tutorial (function chaining)

//way 1 ----------------------
var obj = function() {

	this.i = 0;
	this.add = function(j) {
		this.i += j;

		return this;
	};

	this.substract = function(j) {
		this.i -= j;

		return this;
	};

	this.print = function() {
		console.log(this.i);
	};
};


var x = new obj();

x.add(3);
x.substract(2);
x.print(); // 1

console.log(x.add(3));

//using method chain must return the object itself
x.add(3).substract(2).print(); // 2


//way 2---------------
var obj1 = function() {
	var i = 0;
	var add = function(j) {
		i += j;
		return this;
	};
	var substract = function(j) {
		i -= j;
		return this;
	};
	var print = function() {
		console.log(i);
	};

	return {add: add, substract: substract, print: print};
};

var x1 = obj1();

x1.add(3).substract(2).print();
console.log(x1);