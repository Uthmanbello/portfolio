document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.popup-images-container');
  const images = document.querySelector('.popup-images');
  const dots = document.querySelectorAll('.popup-dot');

  let isScrolling = false;
  let startX;
  let scrollLeft;
  let currentIndex = 0;
  let interval;

  function setActiveDot(index) {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function scrollToImage(index) {
    const imageWidth = container.offsetWidth;
    container.scrollLeft = imageWidth * index;
    currentIndex = index;
    setActiveDot(currentIndex);
  }

  function startSwipeInterval() {
    interval = setInterval(() => {
      if (currentIndex < images.children.length - 1) {
        scrollToImage(currentIndex + 1);
      } else {
        scrollToImage(0);
      }
    }, 5000);
  }

  container.addEventListener('mousedown', (e) => {
    clearInterval(interval);
    isScrolling = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', () => {
    isScrolling = false;
    startSwipeInterval();
  });

  container.addEventListener('mouseup', () => {
    isScrolling = false;
    startSwipeInterval();
  });

  container.addEventListener('mousemove', (e) => {
    if (!isScrolling) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = x - startX;
    container.scrollLeft = scrollLeft - walk;
  });

  container.addEventListener('touchstart', (e) => {
    clearInterval(interval);
    isScrolling = true;
    startX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('touchend', () => {
    isScrolling = false;
    startSwipeInterval();
  });

  container.addEventListener('touchmove', (e) => {
    if (!isScrolling) return;
    e.preventDefault();
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = x - startX;
    container.scrollLeft = scrollLeft - walk;
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      scrollToImage(index);
      clearInterval(interval);
      startSwipeInterval();
    });
  });

  startSwipeInterval();
});
