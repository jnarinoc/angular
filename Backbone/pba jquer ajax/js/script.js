$(document).ready(function(){
	var Producto = Backbone.Model.extend({
		defaults: {
			codigo: "",
			nombre: "", 
			precio: ""
		}
	});

	var Productos = Backbone.Collection.extend({
		model: Producto,
		sort_key: 'nombre',
		comparator: function(item){
			return item.get(this.sort_key);
		},
		sortByField: function(fieldName){
			this.sort_key = fieldName;
			this.sort();
		}
	});

	var productos = new Productos();

	var VistaProducto = Backbone.View.extend({
		tagname :"li",
		model: Producto,
		render: function(){
			this.$el.html('<li class="list-group-item">'+this.model.get("nombre")+'</li>');
			return this;
		}
	});

	var VistaListaProducto = Backbone.View.extend({
		model: Productos,
		tagname: "",
		render: function(){
			this.$el.html();
			var self = this;
			for (var i = 0; i < this.model.length; i++){
				var vistaProducto = new VistaProducto({
					model: this.model.at(i)
				});
				this.$el.append(vistaProducto.$el);
				vistaProducto.render();
			}
			return this;
		}
	});

	var book1 = new Producto({
		codigo: "1",
		nombre: "Producto 1"
	});

	var book2 = new Producto({
		codigo: "2",
		nombre: "Producto 2"
	});

	var book3 = new Producto({
		codigo: "3",
		nombre: "Producto 3"
	});

	var book4 = new Producto({
		codigo: "4",
		nombre: "Producto 4"
	});

	var book5 = new Producto({
		codigo: "5",
		nombre: "Producto 5"
	});

	var bookCollection = new Productos([book1, book2, book3, book4, book5]);
	var bookList = null;

	$("#btnVista").on("click", function(){
		bookList = new VistaListaProducto({
			el: $("#bookList"),
			model: bookCollection
		});
		bookList.render();
	});

});