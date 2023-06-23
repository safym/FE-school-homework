export class EmptyPage {
  text;
  addHref;

  element;

  constructor({ text, addHref = "#" }) {
    this.text = text;
    this.addHref = addHref;

    this.render();
  }

  render() {
    this.element = this.getElement();
  }

  getElement() {
    const elementWrapper = document.createElement("div");
    elementWrapper.innerHTML = this.getTemplate();

    return elementWrapper.firstElementChild;
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
}
