import outSideClick from './outside-click.js';

export default function dropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  function handleClick(event) {
    event.preventDefault();
    this.classList.add('ativo');
    outSideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('ativo');
    });
  }

  dropdownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
