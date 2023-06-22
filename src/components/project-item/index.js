export class ProjectItem {
  element;
  subElement;

  constructor() {
    this.render()
  }

  render() {
    this.element = this.getElement();
    this.subElement = this.getSubElement(this.element);
  }

  getElement() {
    const element = document.createElement('div');
    element.innerHTML = this.getTemplate();

    return element.firstElementChild;
  }

  getTemplate() {
    return `
    <div class="item-card">
      <div class="item-card__body">
        <div class="item-card__title">
          <p class="item-card__name">
            Название
          </p>
        </div>
        <div class="item-card__footer">
          <div class="item-card__create-group">
            <span class="item-card__id"
              >#1</span
            >
            <span class="item-card__info-label item-card__info-label__collapsed"
              >Иванов И.И. создал(а) 1 час назад</span
            >
          </div>
          <div class="item-card__edit-group">
            <span class="item-card__info-label item-card__info-label__collapsed"
              >Баранов В.В. изменил(а) 1 минуту назад</span
            >
          </div>
        </div>
      </div>
      <a
        href="#"
        class="item-card__edit-button button button__style_secondary button__size_small"
      >
        <div class="button__icon-container">
          <svg class="button__icon">
            <use xlink:href="#dots-svg"></use>
          </svg>
        </div>
      </a>
    </div>
    `
  }

  getSubElement(element) {
    return element.firstElementChild
  }
}
