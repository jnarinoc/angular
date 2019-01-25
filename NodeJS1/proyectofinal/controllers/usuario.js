var Usuario = require('../models/usuarios');
var Archivo = require('../models/archivos');
var formidable = require('formidable');
var fs = require('fs');
var models = require('../models/models');

exports.registro = function(req, res, next){
	var user = new Usuario({
		nombre : req.body.nombre,
		usuario : req.body.usuario,
		password : req.body.pass
	});

	user.save(function (err, usuario){
		if (!err) {
			res.status(201);
			next();
		}else{
			res.status(500);
			res.send('Ha ocurrido un problema!');
		}
	});
};


exports.subirarchivo = function(req, res, next){
	nombre_galeria = "galeria";
	var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
	    var oldpath = files.filetoupload.path;
	    newpath = __dirname+"/../public"+'/galeria/' + files.filetoupload.name;
	    fs.rename(oldpath, newpath, function (err) {
	        if (err) throw err;

	        var imagen = new Archivo({
				usuario : req.session.passport.user.nombre,
				ruta: files.filetoupload.name
			});
			imagen.save(function (err, archivo){
				if (!err) {
					res.status(201);
					next();
				}else{
					res.status(500);
					res.send('Ha ocurrido un problema!');
				}
			});
	  	});
	});
};




