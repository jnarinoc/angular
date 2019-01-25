var express = require ('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);

var path = require('path');
app.use(express.static(path.join(__dirname)));

app.get("/", function(req, res){
	res.sendFile(__dirname+"/index.html");
});

io.on('connection', function(socket){
	console.log("A user connected");
	socket.on('disconnect', function(){
		console.log("User disconnect");
	});

	socket.on('chat message', function(msj){
		io.emit('chat message', msj);
	});
});

server.listen(3000, function(){
	console.log("Server running at port 3000");
});