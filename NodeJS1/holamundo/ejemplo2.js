var http = require('http');
var url = require('url');

http.createServer(function(request,response){
	response.writeHead(200, {'Content-Type':'text/plain'});
	var params = url.parse(request.url, true).query;
	var nombre = params.nombre;
	response.end("Hola "+nombre);
}).listen(3000);
console.log ("Servidor corriendo en http://127.0.0.1:3000");