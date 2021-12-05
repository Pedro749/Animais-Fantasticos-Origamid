import outSideClick from './outside-click.js';

export default function iniMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click'];

  function openMenu() {
    menuList.classList.add('active');
    menuButton.classList.add('active');
    outSideClick(menuList, eventos, () => {
      menuButton.classList.remove('active');
      menuList.classList.remove('active');
    });
  }

  if (menuButton) {
    eventos.forEach((userEvent) => {
      if (!menuButton.classList.contains('ativo')) {
        menuButton.addEventListener(userEvent, openMenu);
      }
    });
  }
}
