//JavaScript Iterators

let anObject = {
	name: 'bob',
	age: 20,
	friends: ['john', 'kim', 'peter'],
	getName: function() {
		return this.name;
	}
}

for(let key in anObject) {
	console.log(key);
}




let myArray = [1, 2, 3, 4, 5];
let iterator = myArray[Symbol.iterator]();
console.log(iterator.next());