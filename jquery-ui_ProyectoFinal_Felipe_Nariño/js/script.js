		$(document).ready(function(){
			listaremover = [];
			listaremoverrojo = [];
			puntosazules = 0;
			puntosrojos = 0;
			tabla = "";
			for(var i=0;  i<8 ; i++){

				tabla += '<tr>';
				for(var j=0; j<8 ; j++){
					if ((i+j)%2 == 0){
						background = "black";
						tabla += '<td><div class="cuadro casillanegra" id= "'+i+"-"+j+'" style="background-color:'+background+'" ></div></td>';
					}
					else{
						background = "white";	
						tabla += '<td><div class="cuadro" id= "'+i+"-"+j+'" style="background-color:'+background+'"></div></td>';
					}
						
					
				}
				tabla += '</tr>';
			}
			$("#tabla").html(tabla);
			for(var i=0;  i<8 ; i++){
				for(var j=0; j<8 ; j++){
					if ((i<3 ) && ((i+j)%2 == 0)){
						$('#'+i+"-"+j).html('<div class="ficha" ></div>');

					}
					if ((i>4 ) && ((i+j)%2 == 0)){
						$('#'+i+"-"+j).html('<div class="ficharoja" ></div>');
					}
				}
			}



			$(".ficha").draggable({
				cursor:'move',
				containment: '#tabla',

				drag: function( event, ui ) {
					origenficha = $(this).parent();
					origenficha = (origenficha.attr("id"));
					clase = "ficha";
				},
				stop: function( event, ui ) {
					$(this).remove();
				}

			});

			$(".ficharoja").draggable({
				cursor:'move',
				containment: '#tabla',

				drag: function( event, ui ) {
					origenficha = $(this).parent();
					origenficha = (origenficha.attr("id"));
					clase = "ficharoja";
				},
				stop: function( event, ui ) {
					$(this).remove();

				}

			});


			$(".cuadro").hover(function(){
				origen = this.id;
			});



			$(".cuadro").droppable({
				accept: ".ficha, .ficharoja",
				drop: function(event, ui){
					


					final = event.target.id;

					$(".ficha").draggable({
						cursor:'move',
						containment: '#tabla',

						drag: function( event, ui ) {
							clase = "ficha";
						},
						stop: function( event, ui ) {

							if (clase == "ficha"){

								estado = validarmovimiento (origen,final);
								if (estado == "devolver"){
									listaremover = [];
									origenficha = $(this).parent();
									origenficha = (origenficha.attr("id"));
									
									$(this).remove();
									$("#"+origenficha).html('<div class="'+clase+'" ></div>');
									$("#"+origenficha).find("."+clase).draggable();

								}
								else{

									
									$(this).remove();
									

									for(var i=0; i<listaremover.length-1; i++){
										if ($("#"+listaremover[i]).find('.ficharoja').length > 0){
											puntosazules ++;
											$("#azules").text(puntosazules);
											if (puntosazules == 12){
												finalizarjuego("Azul");
											}

										}
										$("#"+listaremover[i]).find('.ficharoja').remove();
									}
									listaremover = [];
								}
							}




						}
					});

					$(".ficharoja").draggable({
						cursor:'move',
						containment: '#tabla',

						drag: function( event, ui ) {
							clase = "ficharoja";
						},
						stop: function( event, ui ) {
							if (clase == "ficharoja"){

								estado = validarmovimientorojo (origen,final);
								if (estado == "devolver"){
									listaremoverrojo = [];
									origenficha = $(this).parent();
									origenficha = (origenficha.attr("id"));
									
									$(this).remove();
									$("#"+origenficha).html('<div class="'+clase+'" ></div>');
									$("#"+origenficha).find("."+clase).draggable();


								}
								else{
									$(this).remove();
									for(var i=0; i<listaremoverrojo.length-1; i++){
										if ($("#"+listaremoverrojo[i]).find('.ficha').length > 0){
											puntosrojos ++;
											$("#rojos").text(puntosrojos);
											if (puntosazules == 12){
												finalizarjuego("Rojo");
											}

										}
										$("#"+listaremoverrojo[i]).find('.ficha').remove();
									}
									listaremoverrojo = [];
									
								}
							}


						}
					});
					



					if(clase == "ficha"){
						estado = validarmovimiento (origen,final);
						if (estado != "devolver"){
							$(".ficha").draggable('disable');
							$(".ficharoja").draggable('enable');
							cambiarturno("rojo","red");
							$(this).append('<div class="'+clase+'" ></div>');		//pone la ficha en la posicion final
						}
						
					}
					if(clase == "ficharoja"){
						
						estado = validarmovimientorojo (origen,final);
						if (estado != "devolver"){
							$(".ficharoja").draggable('disable');
							$(".ficha").draggable('enable');
							cambiarturno("azul","blue");
							$(this).append('<div class="'+clase+'" ></div>');		//pone la ficha en la posicion final
						}
						
					}
				},
				over: function(event,ui){
					if (typeof clase !== 'undefined'){
						if ( clase == "ficha" )
							listaremover.push($(this).attr("id"));
						if ( clase == "ficharoja" )
							listaremoverrojo.push($(this).attr("id"));
					}
					
				}
			});
				
		});
		// validacion de movimientos de fichas de color azul
		function validarmovimiento (ori,des){
			
			var orig = ori.split("-"); 
			var origx = orig[1];
			var origy = orig[0];
			var dest = des.split("-"); 
			var destx = dest[1];
			var desty = dest[0];
		    estado  = ""; 
		    if(origx == destx){
		    	estado = "devolver";
		    }
			if (desty < origy){
				estado = "devolver";
			}
			var suma = (parseInt(desty) + parseInt(destx));
			if ( (suma % 2) == 1 ){
				estado = "devolver";
			}
			if((desty - origy) >2){
				estado = "devolver";
			}
			casillallena = $("#"+des+"").find(".ficharoja");
			if(casillallena.length > 0){
				estado = "devolver";
			}
			return estado;

		}
		// validacion de movimientos de fichas de color rojo
		
		function validarmovimientorojo (ori,des){
			var orig = ori.split("-"); 
			var origx = orig[1];
			var origy = orig[0];
			var dest = des.split("-"); 
			var destx = dest[1];
			var desty = dest[0];
		    estado  = ""; 
		    if(origx == destx){
		    	estado = "devolver";
		    }
			if (desty > origy){
				estado = "devolver";
			}
			var suma = (parseInt(desty) + parseInt(destx));
			if ( (suma % 2) == 1 ){
				estado = "devolver";
			}
			if((desty - origy) >2){
				estado = "devolver";
			}
			casillallena = $("#"+des+"").find(".ficha");
			if(casillallena.length > 0){
				estado = "devolver";
			}
			return estado;

		}
		// reiniciar el juego una vez halla un ganador, alertar el equipo ganador
		function finalizarjuego(equipo){
			$("#ventana").css("visibility","visible");
			$("#ventana").append("<p>EL EQUIPO GANADOR ES EL  "+equipo.toUpperCase()+"!</p><br><br>");
			boton = $("#reiniciar").button();
			$("#ventana").append(boton);
			$("#ventana").dialog({
				 width: 500
			});
			$("#reiniciar").click(function(){
				location.reload();
			});
		}
		// bloquear el movimiento de un equipo y habilitar el movimiento del otro equipo
		function cambiarturno(equipo, color){
			$("#turno").text("TURNO DEL EQUIPO "+equipo.toUpperCase());
			$("#turno").css("color", color);
		}


	