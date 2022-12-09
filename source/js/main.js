const siteNavigation = document.querySelector('.site-navigation');
const navigationToggle = siteNavigation.querySelector('.site-navigation__toggle');
const navigationList = siteNavigation.querySelector('.site-navigation__list')

const navigationListHiddenClass = 'site-navigation__list--mobile-hidden';

window.addEventListener('load', () => {
  navigationList.classList.add(navigationListHiddenClass);
  navigationToggle.disabled = false;
});

navigationToggle.addEventListener('click', () => {
  navigationList.classList.toggle(navigationListHiddenClass);
});
