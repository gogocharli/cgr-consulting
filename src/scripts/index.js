import { mountFileInput } from './forms/index.js';

const mainForm = document.querySelector('form');

/** Menu Open and Close */
const bodyEl = document.querySelector('body');
const menuToggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('#menu');

menuToggle.addEventListener('click', (e) => {
  bodyEl.classList.toggle('is-modal-open');
  const isMenuVisible = menuToggle.getAttribute('aria-expanded') == 'true';
  const newMenuState = !isMenuVisible;

  menuToggle.setAttribute('aria-expanded', !isMenuVisible);
  menu.setAttribute('aria-hidden', isMenuVisible);

  menuToggle.setAttribute('data-inverted', !isMenuVisible);
  menuToggle.textContent = isMenuVisible ? 'Menu' : 'Close';
});

const menuItems = menu.querySelector('ul');

menuItems.addEventListener('click', (e) => {
  bodyEl.classList.remove('is-modal-open');

  menuToggle.setAttribute('aria-expanded', false);
  menu.setAttribute('aria-hidden', true);
  menuToggle.setAttribute('data-inverted', false);
  menuToggle.textContent = 'Menu';
});

/* Modal Logic */
const modalEl = document.querySelector('[role="dialog"]');
const modalToggle = document.querySelector('#modal-toggle');

modalToggle.addEventListener('click', () => {
  modalToggle.setAttribute('aria-expanded', true);
  bodyEl.classList.add('is-modal-open');
  modalEl.classList.add('is-visible');
  modalEl.querySelector('form input').focus();

  const closeButton = modalEl.querySelector('#dialog-close');

  closeButton.addEventListener('click', handleModalClose);
  mountFileInput();
});

function handleModalClose(e) {
  modalToggle.setAttribute('aria-expanded', false);
  modalEl.classList.remove('is-visible');
  bodyEl.classList.remove('is-modal-open');

  e.target.removeEventListener('click', handleModalClose);
}
