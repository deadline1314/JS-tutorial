// $('#parent').click(function() {
// 	console.log('parent clicked');
// });

// $('#child').click(function() {
// 	console.log('child clicked');
// });


var p = document.querySelector('#parent');

p.addEventListener('click', function() {
	console.log('parent clicked');
}, true);//use capture

var c = document.querySelector('#child');

c.addEventListener('click', function() {
	console.log('child clicked');
}, true);

