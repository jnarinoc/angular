var models = require("./models");
Schema = models.Schema;

var usuarioSchema = new Schema({
	nombre: String,
	edad: String,
	usuario: String,
	password: String
});

var Usuario = models.model('Usuario', usuarioSchema, 'usuario_sesion');
module.exports = Usuario;