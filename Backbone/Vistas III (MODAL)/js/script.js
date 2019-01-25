$(document).ready(function(){
	var gestionVehiculos = {};

	var Vehiculo = Backbone.Model.extend({
		defaults: {
			placa: "",
			marca: "",
			modelo: "",
			color: ""
		}
	});

	var Vehiculos = Backbone.Collection.extend({
		model: Vehiculo,
		sort_key: 'placa',
		comparator: function(item){
			return item.get(this.sort_key);
		},
		sortByField: function(fieldName){
			this.sort_key = fieldName;
			this.sort();
		}
	});

	var vehiculos = new Vehiculos();

	var VistaItemVehiculo = Backbone.View.extend({
		tagName: "tr",
		template: _.template($("#plantillaVehiculo").html()),
		render: function(){
			$(this.el).html(this.template(this.model.toJSON()));
			return this;
		},
		events: {
			'click .edit': 'mostrarModalEdit'
		},
		mostrarModalEdit: function(){
			$("#modalEditVehiculo").modal("show");
			$("#editPlaca").val(this.model.get("placa"));
			$("#editModelo").val(this.model.get("modelo"));
			$("#editColor").val(this.model.get("color"));
			$("#editMarca").val(this.model.get("marca"));

			var me = this;
			$("#btnGuardarCambios").unbind("click");
			$("#btnGuardarCambios").click(function(event){
				me.model.set("placa", $("#editPlaca").val());
				me.model.set("modelo", $("#editModelo").val());
				me.model.set("color", $("#editColor").val());
				me.model.set("marca", $("#editMarca").val());

				$("#editPlaca").val("");
				$("#editModelo").val("");
				$("#editColor").val("");
				$("#editMarca").val("");

				me.render();
				alert("Registro Actualizado Correctamente");
				$("#modalEditVehiculo").modal("hide");
			});

		}
	});

	var VistaVehiculo = Backbone.View.extend({
		el: $("#listaVehiculos"),
		initialize: function(){
			this.collection= vehiculos;
			this.render();
		},
		render: function(){
			this.$el.empty();
			this.collection.each(function(vehiculo){
				var vistaItemVehiculo = new VistaItemVehiculo({
					model: vehiculo
				});
				this.$el.append(vistaItemVehiculo.render().el);
			}, this);
			return this;
		}
	});

	_.extend(gestionVehiculos, Backbone.Events);
	gestionVehiculos.on("registrarVehiculo", function(){
		var vehiculo = new Vehiculo();
		vehiculo.set("placa", $("#placa").val());
		vehiculo.set("modelo", $("#modelo").val());
		vehiculo.set("color", $("#color").val());
		vehiculo.set("marca", $("#marca").val());

		vehiculos.add(vehiculo);
		alert("vehiculo registrado con exito");
		vistaVehiculo.collection.add(vehiculo);
		vistaVehiculo.render();

		gestionVehiculos.trigger("limpiarCampos");
	});

	gestionVehiculos.on("limpiarCampos", function(){
		$("#placa").val("");
		$("#modelo").val("");
		$("#color").val("");
	    $("#marca").val("");
	});

	$("#btnRegistrarVehiculo").on("click", function(){
		gestionVehiculos.trigger("registrarVehiculo");
	});

	var vistaVehiculo = new VistaVehiculo();

});