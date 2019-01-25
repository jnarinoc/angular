var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);
var path = require('path');
//var _ = require("lodash");

var usuarios = [];
var clientes = [];

app.use(express.static(path.join(__dirname)));

app.get("/", function(req, res){
	res.sendFile(__dirname+"/index.html");
});

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
		}
	});

	socket.on("new user", function(nombre){
		usuarios.push({id: socket.id, nombre: nombre});
		console.log("usuarios Conectados", JSON.stringify(usuarios));
		io.emit("new user", usuarios);
	});
});

server.listen(3000, function(){
	console.log("Server running at port 3000");
});

