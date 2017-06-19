//callback functions

let x = function(){
	console.log("I am called from inside a function.");
}

let y = function(callback) {
	console.log("do something");
	callback();
}

y(x);


///////////////////////
//way 1
let calc = function(num1, num2, calcType) {
	if(calcType === "add") {
		return num1 + num2;
	}
	else if(calcType === "multiply") {
		return num1 * num2;
	}
};
console.log(calc(2, 3, 'add'));


//way 2 --> seprate the function 
let add = function(a, b) {
	return a + b;
};
let multiply = function(a, b) {
	return a * b;
};

let doWhatever = function(a, b) {
	console.log(`here are your two numbers back ${a}, ${b}`);
}

let calc2 = function(num1, num2, callback) {
	if(typeof callback === "function") {
		return callback(num1, num2);
	}
}

console.log(calc2(2, 3, multiply));
console.log(calc2(2, 3, doWhatever));
console.log(calc2(2, 3, function(a, b) {
	return a-b;
}));



//////////////////////////////////
var myArr = [
	{
		num: 5,
		str: 'apple'
	},
	{
		num: 7,
		str: 'cabbage'
	},
	{
		num: 1,
		str: 'ban'
	}
];

myArr.sort(function(val1, val2) {
	if(val1.str > val2.str) {
		return -1;
	}
	else {
		return 1;
	}
});

console.log(myArr);





