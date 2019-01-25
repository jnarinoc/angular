var _= require('lodash');
var Usuario = require('../models/usuarios');
exports.obtener_usuarios = function(req,res,next){
	Usuario.find(function(err, usuarios){
		if(!err){
			req.usuarios = usuarios;
			next();
		}else{
			console.log(err);
			res.status(500).send("Algo malo ha ocurrido");
		}
	});
};

exports.agregar_usuario = function(req,res,next){
	var user = new Usuario({
		nombre: req.body.nombre,
		edad: req.body.edad,
		genero: req.body.genero,
		email: req.body.email,
		telefono: req.body.telefono
	});
	user.save(function(err,usuario){
		if (!err){
			res.status(201);
			next();
		}else{
			console.log(err);
			res.status(500).send("Algo malo ha ocurrido guardando");
		}
	})
};

exports.editar_usuario = function(req,res,next){
	
};
exports.eliminar_usuario = function(req,res,next){
	
};