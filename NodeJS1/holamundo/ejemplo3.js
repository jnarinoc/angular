var http = require('http');
var url = require('url');

http.createServer(function(request, response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	var params = url.parse(request.url, true).query;
	var numero = params.numero;
	response.write("Descendiendo "+numero+" a 0 \n");

	for (var i = numero ; i >= 0; i--){
		response.write("-"+i+"\n");
	}
	response.end();
}).listen(3000);
console.log ("Servidor corriendo en http://127.0.0.1:3000");