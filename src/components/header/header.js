import "./header.scss";

function toggleMenu() {
	headerNav.style.display = headerNav.style.display !== 'flex' ? 'flex' : 'none';
}

const burgerButton = document.querySelector('.js-header__burger-button');
const headerNav = document.querySelector('.js-header__nav');

burgerButton.addEventListener('click', toggleMenu);
