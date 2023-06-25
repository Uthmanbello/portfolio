class Typewriter {
    constructor(elementId, texts) {
      this.textElement = document.getElementById(elementId);
      this.texts = texts;
      this.textIndex = 0;
      this.isDeleting = false;
      this.displayText = '';
    }

    type() {
      const currentText = this.texts[this.textIndex];

      if (this.isDeleting) {
        this.displayText = currentText.substring(0, this.displayText.length - 1);
      } else {
        this.displayText = currentText.substring(0, this.displayText.length + 1);
      }

      this.textElement.innerHTML = this.displayText;

      const typingSpeed = this.isDeleting ? 50 : 150;
      let delay = typingSpeed;

      if (!this.isDeleting && this.displayText === currentText) {
        this.isDeleting = true;
        delay = 500;
      } else if (this.isDeleting && this.displayText === '') {
        this.isDeleting = false;
        this.textIndex++;
        if (this.textIndex >= this.texts.length) {
          this.textIndex = 0;
        }
        delay = 1500;
      }

      setTimeout(() => this.type(), delay);
    }
  }

  const typewriter1 = new Typewriter('element1', ["Developer"]);
  const typewriter2 = new Typewriter('element2', ["Projects"]);

  typewriter1.type();
  typewriter2.type();