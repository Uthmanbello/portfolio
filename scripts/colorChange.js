const textElements = document.querySelectorAll('.color-change');

function changeColor() {
  let isColorOne = true;

  setInterval(() => {
    textElements.forEach((textElement) => {
      if (isColorOne) {
        textElement.style.color = '#000';
      } else {
        textElement.style.color = '#ffc107';
      }
    });

    isColorOne = !isColorOne;
  }, 1000);
}

changeColor();
