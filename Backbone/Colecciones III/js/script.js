$(document).ready(function(){
	var gestionMedico = {};
	var Medico = Backbone.Model.extend({
		defaults: {
			id: "",
			nombre: "",
			especialidad: "",
			telefono: "",
			correo: ""
		}
	});

	var Medicos = Backbone.Collection.extend({
		model: Medico,
		sort_key: 'nombre',
		comparator: function(item){
			return item.get(this.sort_key);
		},
		sortByField: function(fieldName){
			this.sort_key = fieldName;
			this.sort();
		}
	});

	var medicos = new Medicos();

	_.extend(gestionMedico, Backbone.Events);

	gestionMedico.on("registrarMedico", function(){
		var medico = new Medico();
		medico.set("id",$("#id").val());
		medico.set("nombre",$("#nombre").val());
		medico.set("especialidad",$("#especialidad").val());
		medico.set("telefono",$("#telefono").val());
		medico.set("correo",$("#correo").val());

		medicos.add(medico);
		alert("Medico registrado Corectamente");
		gestionMedico.trigger("limpiarCampos");
		gestionMedico.trigger("listarMedicos");

	});

	gestionMedico.on("limpiarCampos", function(){
		$("#id").val("");
		$("#nombre").val("");
		$("#especialidad").val("");
		$("#telefono").val("");
		$("#correo").val("");
	});

	gestionMedico.on("listarMedicos", function(){
		var tablaMedicos = $("#listaMedicos");
		$(".medico").remove();
		for(var i = 0; i < medicos.length; i++){
			var tr = $("<tr></tr>");
			tr.attr("class","medico");
			var td1 = $("<td></td>").text(medicos.at(i).get("id"));
			var td2 = $("<td></td>").text(medicos.at(i).get("nombre"));
			var td3 = $("<td></td>").text(medicos.at(i).get("especialidad"));
			var td4 = $("<td></td>").text(medicos.at(i).get("telefono"));
			var td5 = $("<td></td>").text(medicos.at(i).get("correo"));

			tr.append(td1);
			tr.append(td2);
			tr.append(td3);
			tr.append(td4);
			tr.append(td5);

			tablaMedicos.append(tr);
		}
	});

	$("#btnRegistrarMedico").on("click", function(){
		gestionMedico.trigger("registrarMedico");
	});

	$("#btnBuscarMedico").on("click", function(){
		var tablaMedicos = $("#listaMedicos");
		$(".medico").remove();

		var busquedaMedico = $("#busquedaMedico").val();
		var criterioBusqueda = $("#criterioBusqueda").val();

		if (criterioBusqueda = "especialidad"){
			var resultado = medicos.where({especialidad: busquedaMedico}); 
			for(var i = 0; i < resultado.length; i++){
				var tr = $("<tr></tr>");
				tr.attr("class","medico");
				var td1 = $("<td></td>").text(resultado[i].get("id"));
				var td2 = $("<td></td>").text(resultado[i].get("nombre"));
				var td3 = $("<td></td>").text(resultado[i].get("especialidad"));
				var td4 = $("<td></td>").text(resultado[i].get("telefono"));
				var td5 = $("<td></td>").text(resultado[i].get("correo"));

				tr.append(td1);
				tr.append(td2);
				tr.append(td3);
				tr.append(td4);
				tr.append(td5);

				tablaMedicos.append(tr);
			}
		}

		if (criterioBusqueda == "Nombre"){
			var resultado = medicos.findWhere({nombre: busquedaMedico}); 
			
				var tr = $("<tr></tr>");
				tr.attr("class","medico");
				var td1 = $("<td></td>").text(resultado["id"]);
				var td2 = $("<td></td>").text(resultado["nombre"]);
				var td3 = $("<td></td>").text(resultado["especialidad"]);
				var td4 = $("<td></td>").text(resultado["telefono"]);
				var td5 = $("<td></td>").text(resultado["correo"]);

				tr.append(td1);
				tr.append(td2);
				tr.append(td3);
				tr.append(td4);
				tr.append(td5);

				tablaMedicos.append(tr);
			
		}


	});

});