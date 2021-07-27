import errorMessages from './error-messages.js';
import { initPaths } from '../utils/svg-path.js';

/**
 * Use the form helper to display relevant error messages on invalid inputs
 * @param {HTMLElement} form The form to validate
 * @param {string} lang The error message languages
 */
function validateForm(form, lang) {
  // Default to english if the language isn't supported
  lang = lang.startsWith('en') || lang.startsWith('fr') ? lang : 'en';

  var invalidInputs = [];
  var formHelper = document.querySelector('.form__helper');
  var requiredInputs = form.querySelectorAll('input[required]');

  // Will be animated on error
  var paths = formHelper.querySelectorAll('path');
  initPaths(paths);

  for (let input of requiredInputs) {
    input.addEventListener('invalid', bubbleEvent);
  }

  form.addEventListener('submit', handleSubmit);
  form.addEventListener('invalidinput', (event) => {
    // originalTarget is needed since we forced the event to bubble up
    invalidInputs.push(event.originalTarget);

    // Show errors for one input at a time
    highlightFirstError();
  });

  function highlightFirstError() {
    // Get the first invalid input
    var [input] = invalidInputs;
    var name = input.name;
    var inputParent = input.parentElement;

    // If input's parent wasn't highlighted, show error, focus and wait for a change
    if (!inputParent.getAttribute('data-variant')) {
      showErrorOnInput(inputParent, name);
      input.focus();
      var removeErrorForInput = removeError(input);
      input.addEventListener('blur', removeErrorForInput);
    }
  }

  /**
   * Initialize a function to remove the error from an element
   * @param {HTMLElement} input
   * @returns {Function}
   */
  function removeError(input) {
    var oldInputValue = input.value;
    return function removeErrorForInput(event) {
      if (event.target.value !== oldInputValue) {
        hideErrorOnInput(input);

        // Assume the element will be corrected and remove from invalid list
        invalidInputs.shift();

        // Check if the previous value was changed and remove error styles
        input.removeEventListener('blur', removeErrorForInput);

        // Check if it was the last error, otherwise show the next one
        if (invalidInputs.length == 0) {
          formHelper.removeAttribute('data-variant');
        } else {
          highlightFirstError();
        }
      }
    };
  }

  /**
   * Shows the relevant error by targeting the input's parent.
   * @param {HTMLElement} inputParent
   * @param {string} inputName
   */
  function showErrorOnInput(inputParent, inputName) {
    inputParent.setAttribute('data-variant', 'error');

    // Style the helper
    formHelper.setAttribute('data-variant', 'error');

    var template = formHelper.querySelector('template');
    var errorEl = template.content.cloneNode(true);
    var errorPs = errorEl.querySelectorAll('p');

    errorPs[0].textContent = errorMessages[inputName][lang].message;
    errorPs[1].textContent = errorMessages[inputName][lang].example;

    paths.forEach(animatePath);
    formHelper.querySelector('.error').appendChild(errorEl);
  }

  /**
   * Removes the error styling on the field along with its associated error messages
   * @param {HTMLElement} input
   */
  function hideErrorOnInput(input) {
    // Remove error attribute
    input.parentElement.removeAttribute('data-variant');

    var errorPs = formHelper.querySelectorAll('p');
    errorPs.forEach((p) => p.remove());
  }

  // -----------------
  var baseAnimationProps = {
    duration: 700,
    easing: 'cubic-bezier(0.17,0.84,0.44,1)',
    fill: 'forwards',
  };

  function animatePath(path, index, paths) {
    var player = path.animate(
      [{ opacity: 0.8 }, { opacity: 1, strokeDashoffset: 0 }],
      {
        ...baseAnimationProps,
        delay: index * 50,
      },
    );

    if (index == paths.length - 3) {
      player.onfinish = animateErrorMessages;
    }
  }

  function animateErrorMessages() {
    var errorMessages = formHelper.querySelectorAll('p');
    errorMessages.forEach((el, index) => {
      el.animate(
        [
          { opacity: 0.5, transform: 'translateY(-2ex)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        {
          ...baseAnimationProps,
          duration: 500,
          delay: index * 100,
        },
      );
    });
  }
}

function handleSubmit(event) {
  event.preventDefault();
  var form = event.target;
  var formData = new FormData(form);
  window
    .fetch('/', {
      method: 'POST',
      headers: { 'Content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
    .then(() => console.log('Form successfully submitted'))
    .catch((error) => console.error(error));
}

/**
 * Bubbles an event which doesn't bubble from an element to its parents
 * @param {HTMLEvent} event
 */
function bubbleEvent({ target }) {
  var invalidInput = new CustomEvent('invalidinput', {
    bubbles: true,
    detail: { value: target.value },
  });

  this.dispatchEvent(invalidInput);
}

export { validateForm };
