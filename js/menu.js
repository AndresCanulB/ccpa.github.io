const toggleButton = document.querySelector('.header__button');
const icon = document.querySelector(".fa-outdent");
const menu = document.querySelector(".header__menu");

function toggleMenu() {
    menu.classList.toggle('menu--active');
    icon.classList.toggle('fa-outdent');
    icon.classList.toggle('fa-indent');
}