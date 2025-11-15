// Menú hamburguesa para dispositivos móviles
const buttonMenu = document.querySelector('.encabezado__menu__nav-mobile');
const navMenu = document.querySelector('.encabezado__menu__nav-menu');

buttonMenu.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('encabezado__menu__nav-mobile__nav-open');
    navMenu.classList.toggle('encabezado__menu__open-menu');
});