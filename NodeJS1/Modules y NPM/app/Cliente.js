var request = require('request');

process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on('data', function(chunk){
	request.post("http://127.0.0.1:8000", {form: {dato: chunk.toString()}}, function(err, httpResponse, body){
		if (err){
			console.log(err);
		}
		console.log(body);
	});
});

process.stdin.on('end', function(){
	process.stdout.write("End");
});
