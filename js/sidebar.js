const toggleButton = document.querySelector('.header__btn');
const body = document.querySelector('.body');
const icon = document.querySelector(".fa-outdent");

function toggleSidebar() {
    body.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
    icon.classList.toggle('fa-outdent');
    icon.classList.toggle('fa-indent');
}