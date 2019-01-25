var models = require('./models'),
	Schema = models.Schema;

//var mongooseRedisCache = require('mongoose-redis-cache');

var archivosSchema = new Schema({
	usuario : String,
	ruta : String
});

//usuariosSchema.set('redisCache', true);

//mongooseRedisCache(models);
var Archivo = models.model('Archivo', archivosSchema, 'usuario_archivo');

module.exports = Archivo;
