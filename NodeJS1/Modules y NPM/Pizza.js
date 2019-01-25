var pizza = function (){
	var ingredientes = [];
	for (var i = 0; i < arguments.length; i++){
		ingredientes.push(arguments[i]);
	}
	console.log("Esta pizza tiene " + ingredientes.join());
}

module.exports = pizza;