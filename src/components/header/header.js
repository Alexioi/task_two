import "./header.scss";

function toggleMenu() {
	headerNav.style.display = headerNav.style.display !== 'flex' ? 'flex' : 'none';
}

const burgerButton = document.querySelector('.js-header__burger-button');
const headerNav = document.querySelector('.js-header__nav');

if (burgerButton !== null) {
	burgerButton.addEventListener('click', toggleMenu);
}
