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

const typingHeading = document.querySelector('.typing-heading');
if (typingHeading) {
  const text = 'Hi, I’m Kumar.';
  let charIndex = 0;

  const updateTyping = () => {
    typingHeading.textContent = text.slice(0, charIndex);
    if (charIndex <= text.length) {
      charIndex += 1;
      setTimeout(updateTyping, 90);
    } else {
      setTimeout(() => {
        typingHeading.classList.add('typing-complete');
      }, 1200);
    }
  };

  updateTyping();
}

const revealSections = document.querySelectorAll('.section.reveal');
if (revealSections.length) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    });
  }, {
    threshold: 0.15,
  });

  revealSections.forEach(section => observer.observe(section));
}

const scrollTopButton = document.querySelector('.scroll-top');
if (scrollTopButton) {
  const updateScrollButton = () => {
    if (window.scrollY > 300) {
      scrollTopButton.classList.add('visible');
    } else {
      scrollTopButton.classList.remove('visible');
    }
  };

  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', updateScrollButton);
  updateScrollButton();
}

