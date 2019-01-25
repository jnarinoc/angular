$(document).ready(function(){

	var gestionRecordatorios = {};

	var Recordatorio = Backbone.Model.extend({
		defaults: {
			fecha: "",
			titulo: "",
			descripcion:""
		}
	});

	var Recordatorios = Backbone.Collection.extend({
		model: Recordatorio,
		sort_key: 'titulo',
		comparator: function(item){
			return item.get(this.sort_key);
		},
		sortByField: function(fieldName){
			this.sort_key = fieldName;
			this.sort();
		}
	});

	var recordatorios = new Recordatorios([
		{
			fecha: "10/10/2015",
			titulo: "Recordatorio 1",
			descripcion: "Cumpleaños"
		},
		{
			fecha: "10/10/2015",
			titulo: "Recordatorio 2",
			descripcion: "Navidad"
		},
		{
			fecha: "10/10/2015",
			titulo: "Recordatorio 3 ",
			descripcion: "Año Nuevo"
		}
	]);
	
	//var Recordatorios = new Recordatorios();

	var VistaItemRecordatorio = Backbone.View.extend({
		tagName: "tr",
		template: _.template($("#plantillaRecordatorio").html()),
		initialize: function(){
			this.model.on("change", this.render, this);
			this.model.on("destroy", this.remove, this);
		},
		render: function(){
			$(this.el).html(this.template(this.model.toJSON()));
			return this;
		},
		eliminarRecordatorio: function(){
			this.model.destroy();
		},

		remove: function(){
			this.$el.remove();
		},
		events:{
			"click .edit": "mostrarModalEdit",
			"click .delete" : "eliminarRecordatorio"
		},
		mostrarModalEdit: function(){
			$("#modalEditRecordatorio").modal("show");
			$("#editFecha").val(this.model.get("fecha"));
			$("#editTitulo").val(this.model.get("titulo"));
			$("#editDescripcion").val(this.model.get("descripcion"));

			var me = this;

			$("#btnGuardarCambios").unbind("click");
			$("#btnGuardarCambios").on("click", function(){
				me.model.set("fecha", $("#editFecha").val());
				me.model.set("titulo", $("#editTitulo").val());
				me.model.set("descripcion", $("#editDescripcion").val());

				$("#editFecha").val("");
				$("#editTitulo").val("");
				$("#editDescripcion").val("");
				alert("Recordatorio actualizado correctamente");

				$("#modalEditRecordatorio").modal("hide");
				return false;
			});
		}
	});	

	var VistaRecordatorio = Backbone.View.extend({
		el: $("#listaRecordatorios"),
		initialize: function(){
			this.collection = recordatorios;
			this.render();
		},
		render: function(){
			this.$el.empty();
			this.collection.each(function(recordatorio){
				var vistaItemRecordatorio = new VistaItemRecordatorio({
					model: recordatorio
				});
				this.$el.append(vistaItemRecordatorio.render().el);
			}, this);
			return this;
		}
	});
	var vistaRecordatorio = new VistaRecordatorio();
});