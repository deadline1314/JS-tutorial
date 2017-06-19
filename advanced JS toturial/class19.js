//Recursion in JS

let x = function() {
	x();
};

//1+2+3+4+...+n

let total = 0;
for(let i = 1; i <=n; i++) {
	total += i;
}
console.log(total);



let add = function(n) {
	if(n <= 0) {
		return 0;
	}
	return n + add(n-1);
}

console.log(add(3));


//add(3) => 3 + add(2);
//add(2) => 2 + add(1);
//add(1) => 1 + 0;




let third = function() {

};

let second = function() {
	third();
};

let first = function() {
	second();
};

first();