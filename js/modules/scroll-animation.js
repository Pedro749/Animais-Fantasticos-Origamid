export default class AnimacaoScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const issectionVisible = (sectionTop - this.windowMetade) < 0;
      if (issectionVisible) {
        section.classList.add('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.animaScroll();
      window.addEventListener('scroll', this.animaScroll);
    }
    return this;
  }
}
