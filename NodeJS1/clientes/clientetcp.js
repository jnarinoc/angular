var net = require('net');

var client = net.connect({port:'8000'}, function(){
	client.setEncoding('utf8');
	console.log('Conectado');
	client.write("Hola Servidor");
});

process.stdin.resume();

process.stdin.on('data', function(chunk){
	client.write(chunk);
});

client.on('data', function(chunk){
	client.write("repetimos"+chunk);
});

client.on('close', function(){
	console.log("Se cerro la conexion");
});

client.on('error', function(err){
	console.log("se ha perdido la conexion con el servidor");
});