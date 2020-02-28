$(function(){
    'use strict';

    const boton = $('#menu-puntos');

    boton.on('click', toggleMenu);

    const enviar_correo = $('#enviar_correo');
    enviar_correo.on('click', enviarCorreo);
});

function toggleMenu(e) {

    let menu = $('#nav-header');

    menu.slideToggle();
    menu.css('display','flex');
}

function enviarCorreo(e) {
    e.preventDefault();

    const nombre = $('#nombre')[0].value; 
    const email = $('#email')[0].value;
    const numero = $('#numero')[0].value;
    const mensaje = $('#mensaje')[0].value;

    $.ajax(
        {
            url : window.location.href + '/includes/funciones/enviar_correo.php',
            type: "POST",
            data : {
                'nombre' : nombre,
                'email' : email,
                'numero' : numero,
                'mensaje' : mensaje 
            }
        })
        .done(function(data) {
            console.log(JSON.parse(data));
        })
        .fail(function(data) {
            console.log(data);
        })
        .always(function(data) {
            console.log('completado');
        });
}