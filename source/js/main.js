const header = document.querySelector('.header');
const siteNavigation = header.querySelector('.site-navigation');
const navigationToggle = siteNavigation.querySelector('.site-navigation__toggle');

const navigationHiddenClass = 'site-navigation--mobile-hidden';

const activateNavigationMenu = () => {
  header.classList.remove('header--no-js');
  siteNavigation.classList.add(navigationHiddenClass);
  navigationToggle.disabled = false;

  navigationToggle.addEventListener('click', () => {
    siteNavigation.classList.toggle(navigationHiddenClass);
  });
};

activateNavigationMenu();
