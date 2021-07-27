function mountFileInput() {
  var fileInput = document.querySelector('input[type="file"]');

  updateLabel();
  fileInput.addEventListener('change', updateLabel);
}

function updateLabel() {
  var fileLabel = fileInput.previousElementSibling;
  var fileLabelText = fileLabel.firstElementChild;
  if (fileInput.value) {
    fileLabelText.textContent = fileInput.value.slice(12).slice(0, 25);
  }
}

export { mountFileInput };
