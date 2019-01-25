$(document).ready(function(){
	var Cliente = Backbone.Model.extend({
		defaults: {
			nombre: "",
			apellido: "",
			direccion: "",
			telefono: "",
			email: ""
		}
	});

	var Clientes = Backbone.Collection.extend({
		model: Cliente
	});

	var VistaItemCliente = Backbone.View.extend({
		tagName: "tr",
		template: _.template($("#plantillaCliente").html()),
		render: function(){
			$(this.el).html(this.template(this.model.toJSON()));
			return this;
		}
	});

	var clientes = [{
		nombre: "Juan",
		apellido: "Perez",
		direccion: "calle 123",
		telefono: "3334445",
		email: "aa@gmail.com"
	},
	{
		nombre: "felipe",
		apellido: "nariño",
		direccion: "calle 123",
		telefono: "3334445",
		email: "aa@gmail.com"
	}
	];

	var vistaCliente = Backbone.View.extend({
		el: $("#listaClientes"),
		initialize: function(){
			this.collection = new Clientes(clientes);
			this.render();
		},
		render: function(){
			var that = this;
			_.each(this.collection.models, function(item){
				that.renderCliente(item);
			}, this);
		},
		renderCliente: function(item){
			var vistaItemCliente = new VistaItemCliente({
				model: item
			});
			$(this.el).append(vistaItemCliente.render().el);
		}
	});
	var vistaCliente = new vistaCliente();
});