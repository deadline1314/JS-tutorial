// call apply and bind

var obj = { num: 2 };
var obj2 = {num: 5};

var addToThis = function(a,b,c) {
	return this.num + a + b + c;
};

//functionName.call(obj, arg1, arg2, arg3);
addToThis.call(obj, 3); 
console.log(addToThis.call(obj, 1, 2, 3));


//functionName.apply(obj, [arg1,arg2,arg3]);
var arr = [1,2,3];
console.log(addToThis.apply(obj, arr));
console.log(addToThis.apply(obj2, arr));


var bound = addToThis.bind(obj); 
//return a function back
console.log(bound);
//bound(arg1, arg2, arg3);
console.log(bound(1,2,3));
