// import { mountFileInput, validateForm, linkForms } from './forms/index.js';

// var lang = document.documentElement.lang;
// var mainForm = document.querySelector('.form form');
// var containsHelper = mainForm.getAttribute('data-size') !== 'full';

// var mq = window.matchMedia('(min-width: 40em)');
// mq.addListener(handleSizeChange);

// if (!containsHelper) {
//   mountFileInput();
// } else {
//   linkForms(mainForm);
//   validateForm(mainForm, lang);
// }

const bodyEl = document.querySelector('body');
const menuToggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('#menu');

menuToggle.addEventListener('click', (e) => {
  bodyEl.classList.toggle('is-menu-open');
  const isMenuVisible = menuToggle.getAttribute('aria-expanded') == 'true';
  const newMenuState = !isMenuVisible;

  menuToggle.setAttribute('aria-expanded', !isMenuVisible);
  menu.setAttribute('aria-hidden', isMenuVisible);

  menuToggle.setAttribute('data-inverted', !isMenuVisible);
  menuToggle.textContent = isMenuVisible ? 'Menu' : 'Close';
});

const menuItems = menu.querySelector('ul');

menuItems.addEventListener('click', (e) => {
  bodyEl.classList.remove('is-menu-open');

  menuToggle.setAttribute('aria-expanded', false);
  menu.setAttribute('aria-hidden', true);
  menuToggle.setAttribute('data-inverted', false);
  menuToggle.textContent = 'Menu';
});
