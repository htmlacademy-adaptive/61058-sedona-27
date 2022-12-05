const siteNavigation = document.querySelector('.site-navigation');
const navigationToggle = siteNavigation.querySelector('.site-navigation__toggle');

window.addEventListener('load', () => {
  siteNavigation.classList.add('site-navigation--hidden');
  navigationToggle.disabled = false;
});

navigationToggle.addEventListener('click', () => {
  siteNavigation.classList.toggle('site-navigation--hidden');
});
