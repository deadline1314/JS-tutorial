//IIFE

//Fundation
function increment(i) {
	return i + 1;
};

//function expression

// (function(inner arg){})(outer arg);
(function(i) {
	return i + 1;
})(j);


//if not return value back
!function() { /* code here*/ }();


//minifying it

(function($) {

	$(this).addClass("MyClass");

})(window.JQuery);


//example 1

var counter = (function() {
	var i = 0;

	return {
		get: function() {
			return i;
		},
		set: function(val) {
			i = val;
		},
		increment: function() {
			i++;
		}
	}
})();

console.log(counter.get()); //0
counter.set(5); //5
counter.increment();
console.log(counter.get());//6