const primaryNav = document.querySelector('.primary-navigation');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const toggleIcon = document.querySelector('#toggle-icon');

mobileNavToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true);
    mobileNavToggle.setAttribute('aria-expanded', true);
    toggleIcon.setAttribute('class', 'fa-solid fa-xmark');
  } else if (visibility === 'true') {
    primaryNav.setAttribute('data-visible', false);
    mobileNavToggle.setAttribute('aria-expanded', false);
    toggleIcon.setAttribute('class', 'fas fa-bars');
  }
});
