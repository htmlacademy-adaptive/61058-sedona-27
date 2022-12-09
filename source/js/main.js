const siteNavigation = document.querySelector('.site-navigation');
const navigationToggle = siteNavigation.querySelector('.site-navigation__toggle');
const navigationList = siteNavigation.querySelector('.site-navigation__list')

const navigationListHiddenClass = 'site-navigation__list--mobile-hidden';
const navigationToggleCloseClass = 'site-navigation__toggle--close';

window.addEventListener('load', () => {
  navigationList.classList.add(navigationListHiddenClass);
  navigationToggle.classList.remove(navigationToggleCloseClass);
  navigationToggle.disabled = false;
});

navigationToggle.addEventListener('click', () => {
  navigationList.classList.toggle(navigationListHiddenClass);
  navigationToggle.classList.toggle(navigationToggleCloseClass);
});
