var my = {};
my.DatosEjemplo = (function(my){
	"use strict";
	var datos = {
		productos: [
			{
				"codigo":1,
				"nombre": "Gorra Nike",
				"precio" : 30000
			},
			{
				"codigo":2,
				"nombre": "Tenis Le coq Sportif",
				"precio" : 270000
			},
			{
				"codigo":3,
				"nombre": "Buso Polo",
				"precio" : 300000
			}

		]
	};
	return {datos: datos};
})(my);