var models = require('./models');
Schema = models.Schema;

var usuariosSchema = new Schema({
	nombre: String,
	edad: Number,
	genero: String,
	email: String,
	telefono: String
});

var Usuario = models.model('Usuario', usuariosSchema, 'usuarios');
module.exports = Usuario;