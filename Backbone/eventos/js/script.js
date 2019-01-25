$(document).ready(function(){
	var gestionEmpleados = {
		empleados: []
	};
	_.extend(gestionEmpleados, Backbone.Events);

	gestionEmpleados.on("RegistrarEmpleado",function(){
		var empleado = {
			id: $("#id").val(),
			nombre: $("#nombre").val(),
			edad: $("#edad").val(),
			salario: $("#salario").val()
		}
		this.empleados.push(empleado);
		alert("Empleado registrado con exito");
	});

	gestionEmpleados.on("LimpiarCampos",function(){
		$("#id").val("");
		$("#nombre").val("");
		$("#edad").val("");
		$("#salario").val("");
	});

	gestionEmpleados.on("ListarEmpleados",function(){
		var tablaEmpleados = $("#listaEmpleados");
		$(".empleado").remove();
		for(var i = 0; i < this.empleados.length; i++){
			var tr = $("<tr></tr>");
			tr.attr("class", "empleado");
			var td1 = $("<td></td>").text(this.empleados[i].id);
			var td2 = $("<td></td>").text(this.empleados[i].nombre);
			var td3 = $("<td></td>").text(this.empleados[i].edad);
			var td4 = $("<td></td>").text(this.empleados[i].salario);

			tr.append(td1);
			tr.append(td2);
			tr.append(td3);
			tr.append(td4);

			tablaEmpleados.append(tr);
		}
	});

	$("#btnRegistrarEmpleado").on("click", function(){
		gestionEmpleados.trigger("RegistrarEmpleado");
		gestionEmpleados.trigger("LimpiarCampos");
		gestionEmpleados.trigger("ListarEmpleados");
	});
});