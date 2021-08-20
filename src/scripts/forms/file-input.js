function mountFileInput() {
  const fileInput = document.querySelector('input[type="file"]');

  const handleInputChange = updateLabel(fileInput);
  fileInput.addEventListener('change', handleInputChange);
}

function updateLabel(fileInput) {
  return function () {
    const fileLabel = fileInput.previousElementSibling;
    const fileLabelText = fileLabel.firstElementChild;
    if (fileInput.value) {
      fileLabelText.textContent = fileInput.value.slice(12).slice(0, 25);
    }
  };
}

export { mountFileInput };
