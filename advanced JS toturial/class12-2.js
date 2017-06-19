var sayWhat = function(a) {
	return function(b) {
		return function(c) {
			console.log('saying ' + a + ' to ' + b + ' using ' + c);
		}
	}
};

//sayWhat('hello')('friends')('JavaScript');

var sayHi = sayWhat('hi');
var sayHiToMe = sayHi('me');
var sayHiToMeUsingNothing = sayHiToMe('nothing');