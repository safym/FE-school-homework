export class EmptyPage {
  element;
  subElement;

  constructor() {
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
      <p class="empty-page__label">Не создан ни один проект</p>
      <a href="#" class="empty-page__button button button__size_large button__style_primary">
        Добавить
      </a>
    </div>
    `;
  }

  getSubElement(element) {
    return element.firstElementChild;
  }
}
