//1. Factory Pattern
var peopleFactory = function(name, age, state) {

	var temp = {};

	temp.age = age;
	temp.name = name;
	temp.state = state;

	temp.printPerson = function() {
		console.log(this.name + " , " + this.age + " , " + this.state);
	};

	return temp;
};


var person1 = peopleFactory('John', 23, 'CA');
var person2 = peopleFactory('Kim', 27, 'SC');

person1.printPerson();
person2.printPerson();



//2. Constructor Pattern
var peopleConstructor = function(name, age, state) {

	this.name = name;
	this.age = age;
	this.state = state;

	this.printPerson = function() {
		console.log(this.name + " , " + this.age + " , " + this.state);
	};
};

var person3 = new peopleConstructor('John', 23, 'CA');
var person4 = new peopleConstructor('Kim', 27, 'SC');



//3. Prototype Pattern
var peopleProto = function() {

};

peopleProto.prototype.age = 0;
peopleProto.prototype.name = "no name";
peopleProto.prototype.state = "no city";

peopleProto.prototype.printPerson = function() {
	console.log(this.name + " , " + this.age + " , " + this.state);
};

var person5 = new peopleProto();
person5.name = 'John';
person5.age = 23;
person5.state = 'CA';

person5.printPerson();

console.log('name' in person5); //true
console.log(person5.hasOwnProperty('name'));//doesn't count in the prototype, only includes in the object



//4. Dynamic Prototype Pattern
var peopleDynamicProto = function(name, age, state) {
	this.age = age;
	this.name = name;
	this.state = state;

	if(typeof this.printPerson !== 'function') {
		peopleDynamicProto.prototype.printPerson = function() {
			console.log(this.name + " , " + this.age + " , " + this.state);
		};
	}
};

var person6 = new peopleDynamicProto('John', 23, 'CA');
person6.printPerson();

console.log('name' in person6); //true
console.log(person6.hasOwnProperty('name'));//true
