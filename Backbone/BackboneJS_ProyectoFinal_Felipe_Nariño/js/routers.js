var RouterPrincipal = Backbone.Router.extend({
	initialize: function (){
		this.clientes = new Clientes();
		this.clientes.fetch();
		this.vistaInicio = new VistaInicio();
		this.vistaRegistroCliente = new VistaRegistroCliente();
		this.vistaListadoClientes = new VistaListadoClientes();
	},
	routes: {
		"" : "inicio",
		"registrarCliente" : "mostrarRegistrarCliente",
		"listarClientes" : "mostrarListarClientes",
		"verCliente/:id" : "mostrarVerCliente",
		"eliminarCliente/:id" : "eliminarCliente" 
	},
	inicio : function(){
		this.vistaInicio.render();
	},
	mostrarRegistrarCliente: function(){
		this.vistaRegistroCliente.render();
	},
	mostrarListarClientes: function(){
		this.vistaListadoClientes.render();
	},
	mostrarVerCliente: function(id){
		cliente = this.clientes.findWhere({"id": id});
		$("#detalleId").val(cliente.get("id"));
		$("#detalleNombre").val(cliente.get("nombre"));
		$("#detalleApellido").val(cliente.get("apellido"));
		$("#detalleEdad").val(cliente.get("edad"));
		$("#detalleEmail").val(cliente.get("email"));
		$("#detalleTelefono").val(cliente.get("telefono"));
		$("#modalMostrarCliente").modal("show");

	},
	eliminarCliente: function(id){
		cliente = this.clientes.findWhere({"id": id});
		this.clientes.remove(cliente);
		this.vistaListadoClientes.render();
	}

});