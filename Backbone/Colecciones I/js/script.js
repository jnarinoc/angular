$(document).ready(function(){
	var gestionPelicula = {};

	 var Pelicula = Backbone.Model.extend({
	 	defaults: {
	 		titulo: "",
	 		genero: "",
	 		protagonistas : "",
	 		anio: "",
	 		sinopsis:""
	 	}
	 });

	 var Peliculas = Backbone.Collection.extend({
	 	model: Pelicula
	 });

	 var peliculas = new Peliculas();

	 _.extend(gestionPelicula,Backbone.Events);

	 gestionPelicula.on("registrarPelicula", function(){
	 	var pelicula = new Pelicula();
	 	pelicula.set("titulo", $("#titulo").val());
	 	pelicula.set("genero", $("#genero").val());
	 	pelicula.set("protagonistas", $("#protagonistas").val());
	 	pelicula.set("anio", $("#anio").val());
	 	pelicula.set("sinopsis", $("#sinopsis").val());

	 	peliculas.add(pelicula);
	 	alert("Pelicula Registrada con Exito");
	 	gestionPelicula.trigger("limpiarCampos");
	 	gestionPelicula.trigger("listarPeliculas");
	 });

	gestionPelicula.on("limpiarCampos", function(){
	 	$("#titulo").val("");
	 	$("#genero").val("");
	 	$("#protagonistas").val("");
	 	$("#anio").val("");
	 	$("#sinopsis").val("");
	 });

	gestionPelicula.on("listarPeliculas", function(){
	 	var tabla = $("#listaPeliculas");
	 	$(".pelicula").remove();
	 	for(var i = 0; i < peliculas.length; i++){
	 		var tr = $("<tr></tr>");
	 		tr.attr("class","pelicula");
	 		var td1 = $("<td></td>").text(peliculas.at(i).get("titulo"));
	 		var td2 = $("<td></td>").text(peliculas.at(i).get("genero"));
	 		var td3 = $("<td></td>").text(peliculas.at(i).get("protagonistas"));
	 		var td4 = $("<td></td>").text(peliculas.at(i).get("anio"));
	 		var td5 = $("<td></td>").text(peliculas.at(i).get("sinopsis"));

	 		tr.append(td1);
	 		tr.append(td2);
	 		tr.append(td3);
	 		tr.append(td4);
	 		tr.append(td5);

	 		tabla.append(tr);
	 	}
	 });

	$("#btnRegistrarPelicula").on("click", function(){
		gestionPelicula.trigger("registrarPelicula");
	});

});