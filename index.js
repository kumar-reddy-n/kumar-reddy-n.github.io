const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
  });
});
