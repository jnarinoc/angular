var http = require('http');
http.createServer(function(request, response){
	response.writeHead(200);
	request.on('data', function(chunk){
		console.log(chunk.toString());
		response.write(chunk);
	});
	request.on('end', function(){
		response.end();
	});
}).listen(8000);
console.log("corriendo en el puerto 8000");