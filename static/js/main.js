$(function(){
    'use strict';

    const boton = $('#menu-puntos');

    boton.on('click', toggleMenu);

    const menuTecnologias = $('.menu-tecnologias');

    menuTecnologias.on('click', desplegar_tecnologias);

});

function toggleMenu(e) {
    console.log(e.target);

    let menu = $('#nav-header');

    menu.slideToggle();
    menu.css('display','flex');
}