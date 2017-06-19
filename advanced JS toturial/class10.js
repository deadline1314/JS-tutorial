//prototype inheritance (part 2) part 1 in class6

//base class
var Job = function() {
	this.pays = true;
};


//prototype method
Job.prototype.print = function() {
	console.log(this.pays ?'Please hire me' : 'no thank you');
};


//subclass
var TechJob = function(title, pays) {
	Job.call(this);//call the constructor, inheritance from Job

	this.title = title;
	this.pays = pays;
};

//inheritance from Job.prototype
TechJob.prototype = Object.create(Job.prototype);

TechJob.prototype.constructor = TechJob;

TechJob.prototype.print = function() {
	console.log(this.pays ? this.title + 'Job is great! Please hire me' : 'no thank you');
};

// Object.prototype.print = function() {
// 	console.log('I am executing from the Master Object');
// };

//If TechJob has print method, it will directly read from it
//else it will look up to its' parents prototype and check

var softwarePosition = new TechJob('JavaScript Programmer', true);
console.log(softwarePosition.print());

var softwarePosition2 = new TechJob('VB Programmer', false);
console.log(softwarePosition2.print());