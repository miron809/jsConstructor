export class Site {
  constructor(element, model) {
    this.$el = document.querySelector(element);
    this.model = model;

    this.init();
  }

  init() {
    this.model.forEach(block => {
      this.$el.insertAdjacentHTML('beforeend', block.toHTML())
    })
  }

}
