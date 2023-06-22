export class EmptyPage {
  text;
  addHref;

  element;
  subElement;

  constructor({ text, addHref = "#" }) {
    this.text = text;
    this.addHref = addHref;

    this.render();
  }

  render() {
    this.element = this.getElement();
    this.subElement = this.getSubElement(this.element);
  }

  getElement() {
    const element = document.createElement("div");
    element.innerHTML = this.getTemplate();

    return element.firstElementChild;
  }

  getTemplate() {
    return `
    <div class="empty-page">
      <p class="empty-page__label">${this.text}</p>
      <a href="${this.addHref}" class="empty-page__button button button__size_large button__style_primary">
        Добавить
      </a>
    </div>
    `;
  }

  getSubElement(element) {
    return element.firstElementChild;
  }
}
