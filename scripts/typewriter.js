const textElement = document.getElementById('typewriter-text');
const texts = ["Developer"];
let textIndex = 0;
let index = 0;
let isDeleting = false;
let displayText = '';

function type() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    displayText = currentText.substring(0, displayText.length - 1);
  } else {
    displayText = currentText.substring(0, displayText.length + 1);
  }

  textElement.innerHTML = displayText;

  const typingSpeed = isDeleting ? 50 : 150;
  let delay = typingSpeed;

  if (!isDeleting && displayText === currentText) {
    isDeleting = true;
    delay = 500;
  } else if (isDeleting && displayText === '') {
    isDeleting = false;
    textIndex++;
    if (textIndex >= texts.length) {
      textIndex = 0;
    }
    delay = 1500;
  }

  setTimeout(type, delay);
}

type();