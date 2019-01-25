var fs = require('fs');
var http = require('http');

http.createServer(function(request, response){
	var new_file = new fs.createWriteStream('nueva_imagen.jpg');
	var bytes_totales = request.headers['content-length'];
	var bytes_subidos = 0;

	request.pipe(new_file);

	request.on('data', function(chunk){
		bytes_subidos += chunk.length;
		var progreso = (bytes_subidos /bytes_totales )*100;
		response.write("Progress : " + progreso + "% \n");

	});

	request.on('end', function(){
		response.end("Carga Completa");
	});
}).listen(8000);
console.log("Servidor corriendo en el puerto 8000");