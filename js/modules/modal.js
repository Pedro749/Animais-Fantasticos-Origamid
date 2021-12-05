export default function initModal() {
  const buttonAbrir = document.querySelector('[data-modal="abrir"]');
  const buttonFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function togggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }
  function clickforaModal(event) {
    if (event.target === this) {
      togggleModal(event);
    }
  }

  if (buttonAbrir && buttonFechar && containerModal) {
    buttonAbrir.addEventListener('click', togggleModal);
    buttonFechar.addEventListener('click', togggleModal);
    containerModal.addEventListener('click', clickforaModal);
  }
}
