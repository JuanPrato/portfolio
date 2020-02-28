$(function(){
    'use strict';

    const boton = $('#menu-puntos');

    boton.on('click', toggleMenu);

    enviar_correo = $('#enviar_correo');
    enviar_correo.on('click', enviarCorreo);
});

function toggleMenu(e) {
    console.log(e.target);

    let menu = $('#nav-header');

    menu.slideToggle();
    menu.css('display','flex');
}

function enviarCorreo(e) {
    e.preventDefault();

    const nombre = $('#nombre').value; 
    const email = $('#nombre').value;
    const numero = $('#numero').value;
    const mensaje = $('#mensaje').value;

    $.ajax(
        {
            url : '../../includes/funciones/enviar_correo.php',
            type: "POST",
            data : {
                'nombre' : nombre,
                'email' : email,
                'numero' : numero,
                'mensaje' : mensaje 
            }
        })
        .done(function(data) {
            console.log(data);
        })
        .fail(function(data) {
            console.log(data);
        })
        .always(function(data) {
            console.log('completado');
        });
}