var numero_limite = 10;
var i;
var fib = [];

fib[0] = 0;
fib[1] = 1;

process.stdin.setEncoding("utf8");

process.stdin.on('data', function(chunk){
	if(!isNaN(chunk)){
		iniciarFibo(chunk);
	}else{
		process.stdout.write("Numero invalido");
	}
});

process.stdin.on('end', function(){
	process.stdout.write("End");
});

function iniciarFibo(numero){
	var i = 0;
	var intervalo = setInterval(function(){
		if (i <= numero){
			var pos = i+2;
			fib[pos] = fib[pos-2] +fib[pos-1];
			process.stdout.write(fib[i] + "\n");
			i++; 
		}else{
			process.nextTick(function(){
				setTimeout(function(){
					iniciarFibo(i);
				},5000);
			});
			process.stdout.write("Serio Fibo hasta "+(i-1));
			process.stdout.write("En 5 segundos empezara la misma serie con el numero " + i + "\n");
			clearInterval(intervalo);
		}
	},1000);
}