var express = require('express');
app = express();

server = require('http').createServer(app);

app.get("/", function(req, res){
	res.send("Hola mundo");
});

var port = Number(process.env.PORT || 3000);

server.listen(port, function(){
	console.log("Escuchando por el puerto " + port);
});