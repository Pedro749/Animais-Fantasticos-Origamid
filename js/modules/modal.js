export default class Modal {
  constructor(btnOpen, btnClose, modal) {
    this.buttonAbrir = document.querySelector(btnOpen);
    this.buttonFechar = document.querySelector(btnClose);
    this.containerModal = document.querySelector(modal);

    this.addEventModal = this.addEventModal.bind(this);
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickforaModal = this.clickforaModal.bind(this);
  }

  addEventModal() {
    this.buttonAbrir.addEventListener('click', this.eventToggleModal);
    this.buttonFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.clickforaModal);
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  clickforaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }

  init() {
    if (this.buttonAbrir && this.buttonFechar && this.containerModal) {
      this.addEventModal();
    }
  }
}
