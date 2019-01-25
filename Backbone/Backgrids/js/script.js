$(document).ready(function(){
	var grid = null;
	var gestionZapatos = {};
	var Zapato = Backbone.Model.extend({
		defaults: {
			codigo : "",
			marca : "",
			modelo: "",
			precio: "",
			cantidad : ""
		}
	});
	var Zapatos = Backbone.Collection.extend({
		model: Zapato
	});

	var zapatos = new Zapatos();
	_.extend(gestionZapatos, Backbone.Events);
	gestionZapatos.on("registrarZapato",function(){
		var zapato = new Zapato();
		zapato.set({
			codigo: $("#codigo").val(),
			marca: $("#marca").val(),
			modelo: $("#modelo").val(),
			precio: $("#precio").val(),
			cantidad: $("#cantidad").val()
		});
		grid.insertRow([{
			codigo: $("#codigo").val(),
			marca: $("#marca").val(),
			modelo: $("#modelo").val(),
			precio: $("#precio").val(),
			cantidad: $("#cantidad").val()
		}]);
		//zapatos.add(zapato);
		alert("Zapato almacenado Correctamente");
		gestionZapatos.trigger("limpiarCampos");
		gestionZapatos.trigger("listarZapatos");
	});

	gestionZapatos.on("limpiarCampos",function(){
		$("#codigo").val("");
		$("#marca").val("");
		$("#modelo").val("");
		$("#precio").val("");
		$("#cantidad").val("");
	});

	gestionZapatos.on("listarZapatos",function(){
		$("listaZapatos").append(grid.render().el);
	});

	$("#btnRegistrarZapato").on("click", function(){
		gestionZapatos.trigger("registrarZapato");
	});

	var columns = [{
		name: 'codigo',
		label: "codigo",
		editable: false,
		cell: "string"
	},{
		name: 'marca',
		label: "marca",
		editable: false,
		cell: "string"
	},{
		name: 'modelo',
		label: "modelo",
		editable: false,
		cell: "string"
	},{
		name: 'precio',
		label: "precio",
		editable: false,
		cell: "string"
	},{
		name: 'cantidad',
		label: "cantidad",
		editable: false,
		cell: "string"
	}];

	var grid = new Backgrid.Grid({
		columns: columns,
		collection: zapatos
	});

	$("#listaZapatos").append(grid.render().el);

});