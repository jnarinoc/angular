$(document).ready(function(){
	var gestionJardin = {
		ninios: [],
		error: false
	};
	var Ninio = Backbone.Model.extend({
		defaults: {
			nombre: '',
			edad: '',
			peso: '',
			estatura: ''
		},
		validate: function(attrs, options){
			if (isNaN(attrs.estatura) || isNaN(attrs.edad)){
				return "Formatos de campos no validos";
			}
		}
	});
	_.extend(gestionJardin, Backbone.Events);

	gestionJardin.on("registrarNinio", function(){
		gestionJardin.error = false;

		var ninio = new Ninio();
		_.extend(ninio, Backbone.Events);
		ninio.on("invalid", function(model,error){
			gestionJardin.error = true;
			$("#error").html('<div class="alert alert-danger" role="alert">'+error+'</div>');
		});
		ninio.set({nombre: $("#nombre").val()});
		ninio.set({edad: parseInt($("#edad").val())},{validate:true});
		ninio.set({peso: $("#peso").val()});
		ninio.set({estatura: parseFloat($("#estatura").val())},{validate: true});

		if (gestionJardin.error == false){
			this.ninios.push(ninio);
			alert("Niño Registrado con exito");
			$("#error").html('<div></div>');
			gestionJardin.trigger("limpiarCampos");
			gestionJardin.trigger("listarNinios");
		}
	});

	gestionJardin.on("limpiarCampos", function(){
		$("#nombre").val("");
		$("#edad").val("");
		$("#peso").val("");
		$("#estatura").val("");
	});

	gestionJardin.on("listarNinios", function(){
		var tabla = $("#listaNinios");
		$(".ninio").remove();
		for(var i = 0; i < this.ninios.length; i++){
			var tr = $("<tr></tr>");
			tr.attr("class", "ninio");
			var td1 = $("<td></td>").text(this.ninios[i].get("nombre"));
			var td2 = $("<td></td>").text(this.ninios[i].get("edad"));
			var td3 = $("<td></td>").text(this.ninios[i].get("peso"));
			var td4 = $("<td></td>").text(this.ninios[i].get("estatura"));

			tr.append(td1);
			tr.append(td2);
			tr.append(td3);
			tr.append(td4);

			tabla.append(tr);
		}
	});
	$("#btnRegistrarNino").on("click", function(){
		gestionJardin.trigger("registrarNinio");
	});
});