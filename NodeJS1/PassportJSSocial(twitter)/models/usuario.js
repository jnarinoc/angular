var models = require('./models'),
	Schema = models.Schema;

var usuarioSchema = new Schema({

	nombre : String,
	username : String,
	twitter : Schema.Types.Mixed	

});

var Usuario = models.model('Usuario', usuarioSchema, 'usuario_sesion');

module.exports = Usuario;