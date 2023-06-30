const cardsContainer = document.querySelector('.cards');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', () => {
  cardsContainer.scrollBy({
    left: -cardsContainer.offsetWidth,
    behavior: 'smooth'
  });
});

rightArrow.addEventListener('click', () => {
  cardsContainer.scrollBy({
    left: cardsContainer.offsetWidth,
    behavior: 'smooth'
  });
});

cardsContainer.addEventListener('scroll', () => {
  const scrollPosition = cardsContainer.scrollLeft;
  const maxScroll = cardsContainer.scrollWidth - cardsContainer.clientWidth;

  if (scrollPosition <= 0) {
    leftArrow.classList.add('disabled');
  } else {
    leftArrow.classList.remove('disabled');
  }

  if (scrollPosition >= maxScroll) {
    rightArrow.classList.add('disabled');
  } else {
    rightArrow.classList.remove('disabled');
  }
});
