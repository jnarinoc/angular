var net = require('net');
var server = net.createServer(function(con){
	con.on('data', function(chunk){
		console.log("Dato enviado desde el cliente: "+chunk);
		con.write("repetimos"+chunk);
	});

	con.on('close', function(){
		console.log("Cliente Cerró la conexion");
	});

	con.on('error', function(){
		console.log("Se ha perdido la conexion con el cliente");
	});
}).listen(8000);
console.log ("Servidor corriendo en el puerto 8000");