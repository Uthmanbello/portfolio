const toggleSections = document.querySelectorAll('.toggle-section');

toggleSections.forEach((section) => {
  section.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});
