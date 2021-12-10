import outSideClick from './outside-click.js';

export default class MenuMobile {
  constructor(menuButton, menuList) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.eventos = ['click'];
    this.activeClass = 'active';

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outSideClick(this.menuList, this.eventos, () => {
      this.menuButton.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }

  addEvent() {
    this.eventos.forEach((userEvent) => {
      if (!this.menuButton.classList.contains('ativo')) {
        this.menuButton.addEventListener(userEvent, this.openMenu);
      }
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addEvent();
    }

    return this;
  }
}
