$(document).ready(function(){
	var Persona = Backbone.Model.extend({
		defaults: function(){
			return {
				nombre:''
			};
		}
	});

	var persona = new Persona({
		nombre: 'Pedro'
	});

	var VistaPersona = Backbone.View.extend({
		render: function(){
			$(this.el).html("<h2>Hola mundo desde persona con backbone !</h2>");
			return this;
		}
	});

	var vistaPersona = new VistaPersona({
		model: persona
	});

	vistaPersona.render();
	$("#divPersona").html(vistaPersona.el);
});