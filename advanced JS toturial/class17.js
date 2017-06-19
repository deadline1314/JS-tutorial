//ES6 template strings and string functions


let str = 'hello\n' + 'world';
let str1 = "hello";
let str2 = `hello
world`;


let x = `Bond`;

let bondlin = `my name is ${x}, James ${x}`;

console.log(bondlin);


let one = 1;
let two = 2;

let sum = `adding ${one} and ${two} gives me ${one + two}`;


let tagged = function(strArr, ...vals) {
	console.log(strArr);
	console.log(vals);
};


'hello world'.startsWith('hell');
'hello world'.endsWith('rld');
'hello world'.includes('wo');
'hello world'.repeat(3);


let raw = String.raw` Not a newline:\n`;//show \n
let raw1 = String` Not a newline:\n`;//not show \n

console.log(raw);
console.log(raw1);
