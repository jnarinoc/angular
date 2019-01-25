
function prepareList() {
    jQuery('#expList').find('li:has(ul)') 
    .addClass('el_collapsed')
    .children('ul').hide();
    jQuery('#expList').find('.expandIcon')
    .click( function(evt) {
        if (this == evt.target) {
            jQuery(this).toggleClass('el_expanded');
            jQuery(this).children('ul').toggle('medium');
        }
        // Impedir la propagaci&oacute;n de eventos
        if (!evt) var evt = window.event;
        evt.cancelBubble = true; // in IE
        if (evt.stopPropagation) evt.stopPropagation(); 
    });
};
 
$(document).ready( function() {
    prepareList();

    $("#package1").on('mouseenter', function(){
        lista1 = $("<ul></ul>");
        lista1.append("<li>Planificaci&oacute;n y ejecuci&oacute;n estrat&eacute;gica </li>");
        lista1.append("<li>Organizaci&oacute;n administrativa y financiera </li>");
        lista1.append("<li> Procesos asistenciales y de prestaci&oacute;n del servicio</li>");
        $("#imgpackage1").attr("src","images/icono-1_verde.jpg");
        $("#txtpackage1").css("color", "#82BC00");
        $("#descripcion").append(lista1);
        $("#descripcion").slideDown(500);
    });
    $("#package1").on('mouseleave', function(){
        $("#imgpackage1").attr("src","images/icono-1_gris.jpg");
        $("#txtpackage1").css("color", "#777");
        $("#descripcion").text("");
        $("#descripcion").hide(500);
    });

    $("#package2").on('mouseenter', function(){
        lista1 = $("<ul></ul>");
        lista1.append("<li>Desarrollo e implementaci&oacute;n de programas de calidad </li>");
        lista1.append("<li>Conformaci&oacute;n de centros de excelencia </li>");
        lista1.append("<li>Indicadores de gesti&oacute;n, est&aacute;ndares y sistemas de evaluaci&oacute;n de resultados </li>");
        lista1.append("<li>Gesti&oacute;n cl&iacute;nica en salud </li>");
        lista1.append("<li>Seguridad cl&iacute;nica y seguridad del paciente </li>");
        lista1.append("<li>Habilitaci&oacute;n y acreditaci&oacute;n de prestadores </li>");
        $("#imgpackage2").attr("src","images/icono-2_verde.jpg");
        $("#txtpackage2").css("color", "#82BC00");
        $("#descripcion").append(lista1);
        $("#descripcion").slideDown(500);
    });
    $("#package2").on('mouseleave', function(){
        $("#imgpackage2").attr("src","images/icono-2_gris.jpg");
        $("#descripcion").text("");
        $("#txtpackage2").css("color", "#777");
        $("#descripcion").hide(500);
    });

    $("#package3").on('mouseenter', function(){
        lista1 = $("<ul></ul>");
        lista1.append("<li>Dise&ntildeo, ejecuci&oacute;n, auditor&iacute;a y seguimiento a la implementaci&oacute;n del Sistema de Gesti&oacute;n de Seguridad y Salud en el Trabajo </li>");
        lista1.append("<li>Capacitaci&oacute;n y educaci&oacute;n en prevenci&oacute;n de accidentes de trabajo y enfermedad laboral</li>");
        lista1.append("<li>Sistema de vigilancia epidemiol&oacute;gica e investigaci&oacute;n de accidentes de trabajo y enfermedad profesional </li>");
        lista1.append("<li>Medicina del Trabajo. </li>");
        $("#imgpackage3").attr("src","images/icono-3_verde.jpg");
        $("#txtpackage3").css("color", "#82BC00");
        $("#descripcion").append(lista1);
        $("#descripcion").slideDown(500);
    });
    $("#package3").on('mouseleave', function(){
        $("#imgpackage3").attr("src","images/icono-3_gris.jpg");
        $("#descripcion").text("");
        $("#txtpackage3").css("color", "#777");
        $("#descripcion").hide(500);
    });

    $("#package4").on('mouseenter', function(){
        lista1 = $("<ul></ul>");
        lista1.append("<li>Apoyo en desarrollo de pol&iacute;ticas p&uacute;blicas </li>");
        lista1.append("<li>Desarrollar puentes de colaboraci&oacute;n entre instituciones de diferentes pa&iacute;ses y continentes </li>");
        $("#imgpackage4").attr("src","images/icono-4_verde.jpg");
        $("#txtpackage4").css("color", "#82BC00");
        $("#descripcion").append(lista1);
        $("#descripcion").slideDown(500);
    });
    $("#package4").on('mouseleave', function(){
        $("#imgpackage4").attr("src","images/icono-4_gris.jpg");
        $("#txtpackage4").css("color", "#777");
        $("#descripcion").text("");
        $("#descripcion").hide(500);
    });

    $("#package5").on('mouseenter', function(){
        lista1 = $("<ul></ul>");
        lista1.append("<li>Coordinaci&oacute;n y ejecuci&oacute;n de seminarios, talleres, cursos cortos, diplomados y congresos, relacionados con los temas de su inter&eacute;s</li>");
        $("#imgpackage5").attr("src","images/icono-5_verde.jpg");
        $("#txtpackage5").css("color", "#82BC00");
        $("#descripcion").append(lista1);
        $("#descripcion").slideDown(500);
    });
    $("#package5").on('mouseleave', function(){
        $("#imgpackage5").attr("src","images/icono-5_gris.jpg");
        $("#descripcion").text("");
        $("#txtpackage5").css("color", "#777");
        $("#descripcion").hide(500);
    });


});
