$(document).ready(function(){
	var gestionArticulos = {
		articulos: []
	};

	var Articulo = Backbone.Model.extend({
		defaults: {
			codigo: "",
			nombre: "",
			descripcion: "",
			precio: 0.0
		},
		calcularIva: function(){
			var precio = this.get("precio");
			var iva = precio * 0.16;
			return iva;
		}
	});
	_.extend(gestionArticulos, Backbone.Events);

	gestionArticulos.on("registrarArticulos", function(){
		var articulo = new Articulo();
		articulo.set("codigo", $("#codigo").val());
		articulo.set("nombre", $("#nombre").val());
		articulo.set("descripcion", $("#descripcion").val());
		articulo.set("precio", parseFloat($("#precio").val()));

		this.articulos.push(articulo);
		alert("Articulo Registrado correctamente");
	});
	gestionArticulos.on("limpiarCampos", function(){
		$("#codigo").val("");
		$("#nombre").val("");
		$("#descripcion").val("");
		$("#precio").val("");
	});
	gestionArticulos.on("listarArticulos", function(){
		var tablaArticulos = $("#listaArticulos");
		$(".articulo").remove();
		for(var i = 0; i < this.articulos.length; i++){
			var tr = $("<tr></tr>");
			tr.attr("class", "articulo");
			td1 = $("<td></td>").text(this.articulos[i].get("codigo"));
			td2 = $("<td></td>").text(this.articulos[i].get("nombre"));
			td3 = $("<td></td>").text(this.articulos[i].get("descripcion"));
			td4 = $("<td></td>").text(this.articulos[i].get("precio"));
			td5 = $("<td></td>").text(this.articulos[i].calcularIva());

			tr.append(td1);
			tr.append(td2);
			tr.append(td3);
			tr.append(td4);
			tr.append(td5);
			tablaArticulos.append(tr);
		}
	});
	$("#btnRegistrarArticulo").on("click", function(){
		gestionArticulos.trigger("registrarArticulos");
		gestionArticulos.trigger("limpiarCampos");
		gestionArticulos.trigger("listarArticulos");
	});
});