var controlador = require('../controladores/controlador');

var routes = function (app){
	app.get("/", function(rec,res){
		res.write('Hola mundo');
		res.end();
	});
	app.get("/usuarios/crear", function(rec,res){
		res.render('crear_usuario');
	});
	app.get("/usuarios", controlador.obtener_usuarios, function(req, res ){
		res.render('index',{
			usuarios: req.usuarios
		});
	});

	app.post("/usuario", controlador.agregar_usuario,function(rec,res){
		res.redirect('/usuarios');
	});

	app.put("/usuario",controlador.editar_usuario);
	app.delete("/usuario",controlador.eliminar_usuario);

};

module.exports = routes;