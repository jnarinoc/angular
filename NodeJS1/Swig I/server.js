var express = require('express');
app = express();
server = require('http').createServer(app);

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var _ = require("lodash");

var swig = require('swig');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
	res.write("Hola mundo");
	res.end();
});

app.get("/usuarios", function(req, res){
	var stream = fs.createReadStream(__dirname+"/base_datos.json");
	stream.setEncoding("utf8");
	var cuerpo = "";
	stream.on('data', function(chunk){
		cuerpo += chunk;
	});

	stream.on("end", function(){
		try{
			var data = JSON.parse(cuerpo);
		}catch(err){
			res.statusCode = 400;
			return res.end("Error: "+err.message);
		}
		index = swig.renderFile(__dirname+"/index.html", {usuarios: data}, function(err, output){
			if(err){
				throw err;
			}
			res.send(output);
			res.end();
		});
	});

});

var port = Number(process.env.PORT || 3000);

server.listen(port, function(){
	console.log("Servidor corriendo en puerto" + port);
});