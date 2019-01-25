$(document).ready(function(){
	var gestionMedicamentos = {};
	var Medicamento = Backbone.Model.extend({
		defaults: {
			nombre:"",
			contenidoTotal:"",
			laboratorio: "",
			formaFarmaceutica: "",
			fechaCaducidad : "",
			precio: 0.0
		}
	});
	var Medicamentos = Backbone.Collection.extend({
		model: Medicamento,
		sort_key: 'nombre',
		comparator: function(item){
			return item.get(this.sort_key);
		},
		sortByField: function(fieldName){
			this.sort_key = fieldName;
			this.sort();
		}
	});

	var medicamentos = new Medicamentos();

	_.extend(gestionMedicamentos, Backbone.Events);

	gestionMedicamentos.on("registrarMedicamento", function(){
		var medicamento = new Medicamento();
		medicamento.set("nombre", $("#nombre").val());
		medicamento.set("contenidoTotal", $("#contenidoTotal").val());
		medicamento.set("laboratorio", $("#laboratorio").val());
		medicamento.set("formaFarmaceutica", $("#formaFarmaceutica").val());
		medicamento.set("fechaCaducidad", $("#fechaCaducidad").val());
		medicamento.set("precio", $("#precio").val());

		medicamentos.add(medicamento);
		alert("Medicamento Registrado Correctamente");
		gestionMedicamentos.trigger("limpiarCampos");
		gestionMedicamentos.trigger("listarMedicamentos");
	});

	gestionMedicamentos.on("limpiarCampos", function(){
		$("#nombre").val("");
		$("#contenidoTotal").val("");
		$("#laboratorio").val("");
		$("#formaFarmaceutica").val("");
		$("#fechaCaducidad").val("");
		$("#precio").val("");
	});

	gestionMedicamentos.on("listarMedicamentos", function(){
	 	var tabla = $("#listaMedicamentos");
	 	$(".medicamento").remove();
	 	for(var i = 0; i < medicamentos.length; i++){
	 		var tr = $("<tr></tr>");
	 		tr.attr("class","medicamento");

	 		var td1 = $("<td></td>").text(medicamentos.at(i).get("nombre"));
	 		var td2 = $("<td></td>").text(medicamentos.at(i).get("contenidoTotal"));
	 		var td3 = $("<td></td>").text(medicamentos.at(i).get("laboratorio"));
	 		var td4 = $("<td></td>").text(medicamentos.at(i).get("formaFarmaceutica"));
	 		var td5 = $("<td></td>").text(medicamentos.at(i).get("fechaCaducidad"));
	 		var td6 = $("<td></td>").text(medicamentos.at(i).get("precio"));

	 		tr.append(td1);
	 		tr.append(td2);
	 		tr.append(td3);
	 		tr.append(td4);
	 		tr.append(td5);
	 		tr.append(td6);

	 		tabla.append(tr);
	 	}
	 });

	$("#btnRegistrarMedicamento").on("click", function(){
		gestionMedicamentos.trigger("registrarMedicamento");
	});

	$("#columnaPrecio").on("click", function(){
		medicamentos.sortByField("precio");
		gestionMedicamentos.trigger("listarMedicamentos");
	});

	$("#columnaNombre").on("click", function(){
		medicamentos.sortByField("nombre");
		gestionMedicamentos.trigger("listarMedicamentos");
	})

});