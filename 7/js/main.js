const siteNavigation = document.querySelector('.site-navigation');
const navigationToggle = siteNavigation.querySelector('.site-navigation__toggle');

const navigationHiddenClass = 'site-navigation--mobile-hidden';

const activateNavigationMenu = () => {
  siteNavigation.classList.remove('site-navigation--no-js');
  siteNavigation.classList.add(navigationHiddenClass);

  navigationToggle.addEventListener('click', () => {
    siteNavigation.classList.toggle(navigationHiddenClass);
  });
};

activateNavigationMenu();
