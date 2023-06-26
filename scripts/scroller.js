const container = document.querySelector('.popup-images-container');
const images = document.querySelector('.popup-images');
let isScrolling = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
  isScrolling = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
  isScrolling = false;
});

container.addEventListener('mouseup', () => {
  isScrolling = false;
});

container.addEventListener('mousemove', (e) => {
  if (!isScrolling) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = x - startX;
  container.scrollLeft = scrollLeft - walk;
});

container.addEventListener('touchstart', (e) => {
  isScrolling = true;
  startX = e.touches[0].pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('touchend', () => {
  isScrolling = false;
});

container.addEventListener('touchmove', (e) => {
  if (!isScrolling) return;
  e.preventDefault();
  const x = e.touches[0].pageX - container.offsetLeft;
  const walk = x - startX;
  container.scrollLeft = scrollLeft - walk;
});
