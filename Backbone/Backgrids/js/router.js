var routerPrincipal = Backbone.Router.extend({
	initialize: function(){
		this.sugerencias = new Sugerencias();
		this.vistaInicio = new VistaInicio();
		this.vistaRegistroSugerencia = new VistaRegistroSugerencia();
		this.vistaListadoSugerencias = new VistaListadoSugerencias({
			collection: this.sugerencias
		});
	},
	routes: {
		"": "inicio",
		"registrarSugerencia": "mostrarRegistrarSugerencia",
		"listarSugerencias" : "mostrarListadoSugerencias",
		"eliminarSugerencia/:idSugerencia": "eliminarSugerencia" 
	},
	inicio : function(){
		this.vistaInicio.render();
	},
	mostrarRegistrarSugerencia: function(){
		this.vistaRegistroSugerencia.render();
		$("#id").val(cont_id);
	},
	mostrarListadoSugerencias: function(){
		this.vistaListadoSugerencias.render();
	},
	eliminarSugerencia: function(idSugerencia){
		var sugerencia = this.vistaListadoSugerencias.collection.findWhere({
			id: idSugerencia
		});

		$("#detalleID").val(sugerencia.get("id"));
		$("#detalleTitulo").val(sugerencia.get("titulo"));
		$("#detalleDescripcion").val(sugerencia.get("descripcion"));
		$("#modalMostrarSugerencia").modal("show")

	}

});

