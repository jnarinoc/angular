var models = require("./models");
Schema = models.Schema;

var recursosSchema = new Schema({
	archivos: [{
		type: String
	}],
	remitente: {type: Schema.Types.objectId, ref: 'Usuario'}.
	destinatarios [{type: String}],
	fecha: {type: Date, default: Date()},
	asunto: {type: String}
});

var Recursos = models.model("Recurso", recursosSchema, 'recursos');
module.exports = Recursos;