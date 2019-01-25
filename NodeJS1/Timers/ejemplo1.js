process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk){
	if (!isNaN(chunk)){
		decremento(chunk);
	}else{
		process.stdout.write("No es un numero Valido");
	}
});

process.stdin.on('end', function(){
	process.stdout.write("End");
});

function decremento (numero){
	var intervalo = setInterval(function(){
		numero -= 1 ;
		process.stdout.write(numero + "\n");
		if(numero == 0){
			process.stdout.write("Secuencia Terminada");
			clearInterval(intervalo);	
		}
	},1000);
}