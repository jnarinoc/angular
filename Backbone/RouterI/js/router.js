var RouterPrincipal = Backbone.Router.extend({
	routes: {
		"" : "inicioSesion",
		"perfil" : "perfil"
	},
	inicioSesion: function(){
		vistaInicioSesion.render();
	},
	perfil: function(){
		vistaPerfil.render();
	}
});