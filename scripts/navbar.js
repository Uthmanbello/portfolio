const navIcon = document.querySelector('.nav-icon');
const menuOverlay = document.getElementById('menu-overlay');
const menuLinks = document.querySelectorAll('.menu-content a');

navIcon.addEventListener('click', function () {
  navIcon.classList.toggle('active');
  menuOverlay.classList.toggle('active');
  document.body.style.overflow = menuOverlay.classList.contains('active') ? 'hidden' : 'auto';
});

menuLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const topOffset = target.offsetTop;

    window.scrollTo({
      top: topOffset,
      behavior: 'smooth'
    });

    menuOverlay.classList.remove('active');
    navIcon.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
});