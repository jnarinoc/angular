var usuario = require('../controllers/usuario');
var Archivo = require('../models/archivos');

var rutas = function(app){

	app.get('/registro', function (req, res){
		res.render('registro');
	});

	app.get('/subirarchivo', function (req, res){
		res.render('subirarchivo',{
			usuario : req.session.passport.user.nombre
		});
	});

	app.get('/galeria',function (req, res){
		var imagenes;
		Archivo.find(function (err, results) {
    		imagenes = results;
    		
      		res.render('galeria',{
				usuario : req.session.passport.user.nombre,
				galeria: imagenes
			});
  		});
	});

	app.get('/', function (req, res){
		res.render('login');
	});


	app.get('/chat', function (req, res){
		res.render('index',{
			usuario : req.session.passport.user.nombre
		});
	});

	app.get('/error', function (req, res){
		res.send(req.session.flash.error[0]);
	});


	app.post('/registro', usuario.registro, function(req, res){
		res.redirect('/');
	});

	app.post('/subirarchivo', usuario.subirarchivo, function(req, res){
		res.redirect('/galeria');
	});

	app.post('/editarimagen' , function(req, res){
		
		res.render('index',{
			usuario : req.session.passport.user.nombre,
			imagen: "galeria/"+req.body.rutaimg
		});
	});

};

module.exports = rutas;