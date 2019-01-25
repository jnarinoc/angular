var routerPrincipal;

var VistaInicio = Backbone.View.extend({
	el: $("#contenedorVistas"),
	template: _.template($("#plantillaInicio").html()),
	events:{
		"click #btnVistaRegistrarCliente" : function(evt){
			routerPrincipal.navigate("registrarCliente",{
				trigger: true
			});
		},
		"click #brnVistaListadoClientes" : function(evt){
			routerPrincipal.navigate("listarClientes",{
				trigger: true
			});
		}
	},
	render: function(){
		$(this.el).html(this.template());
		return this;
	}
});

var VistaRegistroCliente = Backbone.View.extend({
	el: $("#contenedorVistas"),
	template: _.template($("#plantillaRegistroCliente").html()),
	events: {
		"click #btnSalir": function(evt){
			evt.preventDefault();
			routerPrincipal.navigate("",{
				trigger: true
			});
		},
		"click #btnLimpiarCampos" : function(){
			$("#id").val("");
			$("#nombre").val("");
			$("#apellido").val("");
			$("#edad").val("");
			$("#telefono").val("");
			$("#email").val("");
		},
		"click #btnRegistrarCliente" : function(evt){
			evt.preventDefault();
			var cliente = new Cliente();
			cliente.set({
				id: $("#id").val(),
				nombre: $("#nombre").val(),
				apellido: $("#apellido").val(),
				edad: $("#edad").val(),
				telefono: $("#telefono").val(),
				email: $("#email").val()
			});

			routerPrincipal.clientes.add(cliente);
			cliente.save();
			alert("Cliente Registrado Correctamente");

			routerPrincipal.navigate("",{
				trigger: true
			});
		}
	},
	render: function(){
		$(this.el).html(this.template());
		return this;
	}

});

var VistaListadoClientes = Backbone.View.extend({
	el: $("#contenedorVistas"),
	template: _.template($("#plantillaListaClientes").html()),

	render: function(){
		$(this.el).html(this.template());
		routerPrincipal.clientes.each(function(cliente){
			var tr = $("<tr></tr>");
			var td1 = $("<td></td>").text(cliente.get("id"));
			var td2 = $("<td></td>").text(cliente.get("nombre"));
			var td3 = $("<td></td>").text(cliente.get("apellido"));
			var td4 = $("<td></td>").text(cliente.get("edad"));
			var td5 = $("<td></td>").text(cliente.get("telefono"));
			var td6 = $("<td></td>").text(cliente.get("email"));
			var td7 = $("<td></td>");

			var btnMostrar = $('<button>Ver</button>');
			btnMostrar.attr("class","btn btn-primary");
			

			btnMostrar.on("click", function(){
				routerPrincipal.navigate("verCliente/"+cliente.get("id"),{
					trigger: true
				});
			});

			td7.append(btnMostrar);

			btnEliminar = $('<button>Eliminar</button>');
			btnEliminar.attr("class","btn btn-danger");
			btnEliminar.on("click", function(){
				routerPrincipal.navigate("eliminarCliente/"+cliente.get("id"),{
					trigger: true
				});
			});

			var td8 = $("<td></td>");
			td8.append(btnEliminar);



			tr.append(td1);
			tr.append(td2);
			tr.append(td3);
			tr.append(td4);
			tr.append(td5);
			tr.append(td6);
			tr.append(td7);
			tr.append(td8);

			$("#listaClientes").append(tr);
		}, this);
		return this;
	}
});
