//Closure

var addTo = function(passed) {
	var inner = 2;
	return passed + inner;
};

console.log(addTo(3));
console.dir(addTo);





var addTo = function(passed) {
	var add = function(inner) {
		return passed + inner;
	};
	return add;
}

console.dir(addTo(3));

var addThree = new addTo(3);
var addFour = new addTo(4);

console.dir(addThree);
console.dir(addFour);

console.log(addThree(1));
console.log(addFour(2));