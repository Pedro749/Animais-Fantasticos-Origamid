export default function initNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach((number) => {
      const numero = number;
      const total = +numero.innerText;
      let start = 0;
      const incremento = Math.floor(total / 100);
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      });
    }, 25 * Math.random());
  }
  const observerTarget = document.querySelector('.numeros');
  let observer;

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }

  observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, { attributes: true });
}
