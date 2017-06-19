//Prototype inheritance  part 2 in class10

//1. Creating subClass (subConstructor)
//2. Overriding in Prototype Chain  -> prototype
//3. Adding prototype to Master Object -> __proto__

var x = function(j) {

	this.i = 0;
	this.j = j;

	this.getJ = function() {
		return this.j;
	};
};

x.prototype.getJJ = function() {
	return this.j;
};


var x1 = new x(1);
var x2 = new x(2);

console.log(x1.getJ());

//will look up to its parents and check
console.log(x1.getJJ());

console.log(x2.getJ());


//////////////Master Object

//__proto__ means parent or creator
var y = function() {

};