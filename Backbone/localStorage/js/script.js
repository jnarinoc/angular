$(document).ready(function(){

	var grid = null;

	gestionPacientes = {};

	var Paciente = Backbone.Model.extend({
		defaults:{
			id: "" ,
			nombre : "",
			peso : "",
			estatura : ""
		}
	});

	var Pacientes = Backbone.Collection.extend({
		model:Paciente,
		localStorage : new Backbone.LocalStorage("listaPacientes")
	});

	var pacientes = new Pacientes();
	pacientes.fetch(); 

	_.extend(gestionPacientes, Backbone.Events);
	gestionPacientes.on("registrarPaciente", function(){
		var paciente = new Paciente();
		paciente.set({
			id: $("#id").val() ,
			nombre : $("#nombre").val(),
			peso : $("#peso").val(),
			estatura : $("#estatura").val()
		});
		pacientes.add(paciente);
		paciente.save();

		alert("Paciente Registrado Correctamente");
		$("#id").val("");
		$("#nombre").val("");
		$("#peso").val("");
		$("#estatura").val("");

		var tablaPacientes = $("#listaPacientes");
		$(".paciente").remove();

		for (var i = 0; i < pacientes.length; i++){
			var tr = $("<tr></tr>");
			tr.attr("class", "paciente");
			var td1 = $("<td></td>").text(pacientes.at(i).get("id"));
			var td2 = $("<td></td>").text(pacientes.at(i).get("nombre"));
			var td3 = $("<td></td>").text(pacientes.at(i).get("peso"));
			var td4 = $("<td></td>").text(pacientes.at(i).get("estatura"));
			tr.append(td1);
			tr.append(td2);
			tr.append(td3);
			tr.append(td4);
			tablaPacientes.append(tr);
		}
	});

	$("#btnRegistrarPaciente").on("click", function(){
		gestionPacientes.trigger("registrarPaciente");
	});
	




});