var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);
var path = require('path');
var redis = require('redis');
var client = redis.createClient();

var _ = require("lodash");

var usuarios = [];
var clientes = [];

app.use(express.static(path.join(__dirname)));

app.get("/", function(req, res){
	res.sendFile(__dirname+"/index.html");
});

function storeMessages(nombre, mensaje){
	var dato = JSON.stringify({usuario:nombre, mensaje: mensaje});
	client.lpush("mensajes", dato, function(err, response){
		client.ltrim("mensajes",0,10);
	});
}

io.on("connection", function(socket){
	console.log("A user Connected");
	
	socket.on("disconnect", function(){
		console.log("A user Disconnected");
	});

	socket.on("chat message", function(msj){
		var match = /@([^@]+)@/.exec(msj.mensaje);
		if(match != null){
			var id = __.find(usuarios,{"nombre":match[1]}).id;
			console.log(socket.id);
			socket.emit('chat message', msj);
			socket.broadcast.in(id).emit("chat message", msj);
		}else{
			io.emit("chat message", msj);
			console.log(msj);
			storeMessages(msj.usuario, msj.mensaje);
		}
	});

	socket.on("new user", function(nombre){
		usuarios.push({id: socket.id, nombre: nombre});
		console.log("usuarios Conectados", JSON.stringify(usuarios));
		io.emit("new user", usuarios);
		client.lrange("mensajes",0,-1, function(err, mensajes){
			mensajes = mensajes.reverse();

			mensajes.forEach(function(mensaje, i){
				mensaje = JSON.parse(mensaje);
				socket.emit("chat message", mensaje);
			});
		});
	});
});

server.listen(3000, function(){
	console.log("Server running at port 3000");
});

