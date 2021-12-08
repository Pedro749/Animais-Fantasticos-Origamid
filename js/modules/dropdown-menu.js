import outSideClick from './outside-click.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.activeClass = 'ativo';
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    this.classList.add(this.activeClass);
    outSideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }

    return this;
  }
}
