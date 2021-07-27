export function linkForms(mainForm) {
  var ctaForm = document.querySelector('.hero__form');
  ctaForm.addEventListener('submit', deferForm(mainForm));
}

function deferForm(handlerForm) {
  return function handleSubmit(event) {
    // Populate email field and scroll to main form
    event.preventDefault();
    var formData = new FormData(event.target);
    var emailValue = formData.get('email-cta');
    var emailField = handlerForm.querySelector('input[type="email"]');
    emailField.value = emailValue;
    window.scrollTo({
      top: handlerForm.getBoundingClientRect().top,
      left: 0,
      behavior: 'smooth',
    });
  };
}
