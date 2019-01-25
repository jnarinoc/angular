var models = require('./models'),
	Schema = models.Schema;

var mensajeSchema = new Schema({
	usuario : String,
	color : String,
	x: String,
	y: String,
	visible: Number
});

var Mensajes = models.model('Mensaje', mensajeSchema, 'mensajes');

module.exports = Mensajes;