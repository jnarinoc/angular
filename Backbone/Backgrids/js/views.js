var routerPrincipal;

var VistaInicio = Backbone.View.extend({
	el: $("#contenedorVistas"),
	template: _.template($("#plantillaInicio").html()),

	events: {
		"click #btnVistaRegistrarSugerencia" : function(evt){
			routerPrincipal.navigate("registrarSugerencia",{
				trigger: true
			});

		},
		"click #btnVistaListadoSugerencias" : function(){
			routerPrincipal.navigate("listaSugerencias",{
				trigger: true
			});			
		}
	},
	render: function(){
		$(this.el).html(this.template());
		return this;
	}
});

var VistaRegistroSugerencia = Backbone.View.extend({
	el: $("#contenedorVistas"),
	template: _.template($("#plantillaRegistroSugerencia").html()),
	events: {
		"click #btnSalir": function(evt){
			routerPrincipal.navigate("",{
				trigger: true
			});
		},
		"click #btnRegistrarSugerencia" : function(evt){
			evt.preventDefault();
			var sugerencia = new Sugerencia();
			sugerencia.set({
				id: $("#id").val(),
				titulo: $("#titulo").val(),
				descripcion: $("#descripcion").val()
			});

			routerPrincipal.sugerencias.add(sugerencia);
			alert("Sugerencia Registrada con exito");

			cont_id ++;
			$("#id").val(cont_id);
			$("#titulo").val("");
			$("#descripcion").val("");
		}
	},
	render: function(){
		$(this.el).html(this.template());
		return this;
	}
});


var VistaListadoSugerencias = Backbone.View.extend({
	 el: $("#contenedorVistas"),
	 template: _.template($("#plantillaListadoSugerencias").html()),
	 initialize: function(){

	 },
	 events: {
	 	"click #btnSalir": function(evt){
	 		routerPrincipal.navigate("",{
	 			trigger: true
	 		})
	 	}
	 },
	 render: function(){

		$(this.el).html(this.template());
		this.collection.each(function(sugerencia){
			$("#listaSugerencias").append('<tr><td>'+sugerencia.get("id")+'</td><td>'+sugerencia.get("titulo")+'</td><td><a href="#eliminarSugerencia/'+sugerencia.get("id")+'">Mostrar</td></tr>');
		}, this);
		return this;
	}
});