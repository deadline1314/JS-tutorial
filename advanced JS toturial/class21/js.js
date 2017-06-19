let tID;

$('#setTimeout').click(() => {
	tID = setTimeout(() => {
		console.log('from timeout');
	}, 5000);
});

$('#cancelTimeout').click(() => {
	clearTimeout(tID);
});