import { mountFileInput } from './file-input';

export function initFormModal() {
  const bodyEl = document.querySelector('body');

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
}
