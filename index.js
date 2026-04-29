const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const yearEl = document.getElementById('year');
const themeSwitch = document.querySelector('.theme-switch');
const themeIcon = themeSwitch?.querySelector('.theme-switch__icon');

const getPreferredTheme = () => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) return storedTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const applyTheme = theme => {
  document.body.classList.toggle('dark-theme', theme === 'dark');
  if (themeSwitch && themeIcon) {
    const nextTooltip = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
    themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
    themeSwitch.setAttribute('aria-label', nextTooltip);
    themeSwitch.setAttribute('title', nextTooltip);
    themeSwitch.dataset.tooltip = nextTooltip;
    themeSwitch.classList.toggle('dark', theme === 'dark');
  }
  localStorage.setItem('theme', theme);
};

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (themeSwitch) {
  themeSwitch.addEventListener('click', () => {
    const nextTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
    applyTheme(nextTheme);
  });
  applyTheme(getPreferredTheme());
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
