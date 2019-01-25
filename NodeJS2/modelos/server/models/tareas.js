var models = require("./models");
Schema = models.Schema;

var tareasSchema = new Schema({
	descripcion: String,
	usuario: {type: Schema.types.objectId, ref: 'Usuario'},
	finalizada: {
		estado: {type: boolean, default: false},
		fecha: Date
	}
});

var Tareas = models.model("Tarea", tareasSchema, "tareas");

module.exports = Tareas;