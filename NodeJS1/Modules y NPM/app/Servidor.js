var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type" : "text/plain"});

	request.on('data', function(chunk){
		console.log("Recibiendo datos.." + chunk.toString());
		response.write(chunk);
	});

	request.on("end", function(){
		response.end();
	});
}).listen(8000);

console.log("Servidor corriendo en el puerto 8000");