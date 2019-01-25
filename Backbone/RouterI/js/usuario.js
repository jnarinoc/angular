var Usuario = Backbone.Model.extend({
	defaults: {
		nombre:"",
		clave: ""
	}
});

var usuario = new Usuario();