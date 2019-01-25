var express = require('express');
app = express(),
server = require('http').createServer(app);

var logger = require("morgan");
var cookieParser =  require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var _ = require("lodash");
var swig = require('swig');

app.engine('html',swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname+"/views");

app.set('view cache', false);
swig.setDefaults({cache: false});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'views')));

swig.setFilter('uniqObject', function(input, f){
	return _.uniq(input, f);
});

app.get("/", function(rec, res){
	res.write("HM");
	res.end();
})

app.get('/usuarios', function(req, res){
	var stream = fs.createReadStream(__dirname+"/base_datos.json");
	stream.setEncoding("utf8");
	var cuerpo = '';
	stream.on('data', function(chunk){
		cuerpo += chunk;
	});

	stream.on('end', function(){
		try{
			var data = JSON.parse(cuerpo);
		}catch(err){
			res.statusCode = 400;
			return res.end('error:' + err.message);
		}

		res.render('index',{
			usuarios: data
		});
	});
});

var port = Number(process.env.Port || 3000);
server.listen(port, function(){
	console.log('Servidor corriendo en puerto' + port);
});