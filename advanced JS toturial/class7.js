/**
1. How to create Objects in JS
2. Add/Remove Properties to objects
3. Add Object Method
4. How to add Private variables and private (inner) method
5. How to create closures
*/

var x = new Object();

var y = {};


var Pizza = {
	crust: 'thin',
	toppings: 3,
	hasBacon: true,
	howManyToppings: function() {
		return this.toppings;
	}
};

Pizza.price = '$12';

console.log(Pizza.howManyToppings());

delete(Pizza.crust);

//console.log(Pizza.crust);
console.log(Pizza);



//function object
var Pizza1 = function() {
	this.crust = 'thin';
	this.toppings = 3;
	this.hasBacon = true;

};

var PizzaA = new Pizza1();
var PizzaB = new Pizza1();

PizzaA.crust = 'pan';
console.log(PizzaA.crust);
console.log(PizzaB.crust);
console.log(PizzaB instanceof PizzaA); //true
console.log(PizzaB.constructor);


//object with private propertity
var Pizza2 = function() {
	var crust = 'thin'; //private prop
	this.hasBacon = true;
	var toppings = 3;

	this.getHasBacon = function() {
		return this.hasBacon;
	};
	//access private variable using public method
	this.getCrust = function() {
		return crust;
	};
	//private function
	var getToppings = function() {
		return toppings;
	};

	var temp = {};
	temp.getToppings = getToppings;
	//return object temp with a public method
	return temp;
};

var PizzaAA = new Pizza2();
console.log(pizzaAA);
console.log(pizzaAA.getHasBacon);//true
console.log(pizzaAA.getCrust); //'thin'
console.log(pizzaAA.getToppings());

