net = require('net');

var clientes = [];

net.createServer(function(socket){
	socket.name = socket.remoteAddress + ":" + socket.remotePort;
	clientes.push(socket);
	socket.write("Welcome "+ socket.name+ "\n");
	broadcast(socket.name + " joined to the chat \n" , socket);

	socket.on('data', function(data){
		broadcast(socket.name + "> " +data, socket);
	});

	socket.on('end', function(){
		clientes.splice(clientes.indexOf(socket), 1);
		broadcast(socket.name + "left the chat \n");
	});

	function broadcast(mensaje, remitente){
		clientes.forEach(function(client){
			if (client === remitente) return ;
			client.write(mensaje);
		});
		process.stdout.write(mensaje+"\n");
	}
}).listen(8000);
console.log("Servidor corriendo en puerto 8000 \n");