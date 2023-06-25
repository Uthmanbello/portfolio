const navIcon = document.querySelector('.nav-icon');
const menuOverlay = document.getElementById('menu-overlay');

navIcon.addEventListener('click', function () {
  navIcon.classList.toggle('active');
  menuOverlay.classList.toggle('active');
  document.body.style.overflow = menuOverlay.classList.contains('active') ? 'hidden' : 'auto';
});
