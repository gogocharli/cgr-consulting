export function initMainMenu() {
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
}
