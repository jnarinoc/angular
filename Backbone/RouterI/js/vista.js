var routerPrincipal;

var VistaInicioSesion = Backbone.View.extend({
	el: $("#contenedorVistas"),
	model: usuario,
	template: _.template($("#plantillaInicioSesion").html()),
	events: {
		"submit" : function (evt){
			evt.preventDefault();
			var nombre = $("#nombre").val();
			var clave = $("#clave").val();

			this.model.set("nombre", nombre);
			this.model.set("clave", clave);

			if (nombre == clave){
				routerPrincipal.navigate("perfil", {
					trigger: true
				});
			}

		}
	},
	render: function(){
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	}
});

var VistaPerfil = Backbone.View.extend({
	el: $("#contenedorVistas"),
	template: _.template($("#plantillaPerfil").html()),
	model: usuario,
	events: {
		"click #btnSalir" : function(evt){
			routerPrincipal.navigate("",{
				trigger: true
			});
		}
	},
	render: function(){
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	}
});

var vistaInicioSesion = new VistaInicioSesion();
var vistaPerfil = new VistaPerfil();