$(function(){
    'use strict';

    const boton = $('#menu-puntos');

    boton.on('click', toggleMenu);

    const menuTecnologias = $('.menu-tecnologias');

    menuTecnologias.on('click', desplegar_tecnologias);

    let tecnologias = $('.tecnologias');
    tecnologias.hide();
    tecnologias.removeClass('hidden');
});

function toggleMenu(e) {
    console.log(e.target);

    let menu = $('#nav-header');

    menu.slideToggle();
    menu.css('display','flex');
}

function desplegar_tecnologias(e) {
    e.preventDefault();

    let tecnologias = e.target.parentNode.children[3];
    console.log(tecnologias);
    tecnologias.show();
}