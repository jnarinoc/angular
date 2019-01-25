total = 1;
process.stdin.setEncoding("utf8");
process.stdin.on('data', function (chunk) {
	if(!isNaN(chunk)){
		factorial(chunk);
	}else{
		process.stdout.write("Numero invalido");
	}
});

process.stdin.on('end', function(){
	process.stdout.write("End");
});

function factorial (numero ){
	var intervalo = setInterval(function(){
		if(numero > 0){
			total = total * numero;
			process.stdout.write(total+"\n");
			numero --;

		}
		else{
			process.stdout.write("Secuencia Terminada");
			clearInterval(intervalo);
			total = 1;
		}
	}, 1000);
}