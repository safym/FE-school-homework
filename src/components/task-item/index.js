export class TaskItem {
  id;
  description;
  status;
  creator;
  createTime;
  lastEditor;
  editTime;

  element;
  subElement;

  constructor({
    id,
    description,
    status,
    creator,
    createTime,
    lastEditor,
    editTime,
  }) {
    this.id = id;
    this.description = description;
    this.status = status;
    this.creator = creator;
    this.createTime = createTime;
    this.lastEditor = lastEditor;
    this.editTime = editTime;

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
    <div class="item-card">
      <div class="item-card__body">
        <div class="item-card__title">
          <p class="item-card__name">
            ${this.description}
          </p>
          <img
            class="item-card__image"
            src="/assets/images/user.png"
            alt="user image"
          />
        </div>
        <div class="item-card__footer">
          <div class="item-card__create-group">
            <span class="item-card__id"
              >${this.id}</span
            >
            <span class="item-card__info-label item-card__info-label__collapsed"
              >${this.creator} создал(а) ${this.createTime}</span
            >
            <span class="item-card__status item-card__status_draft"
              >${this.status}</span
            >
          </div>
          <div class="item-card__edit-group">
            <span class="item-card__info-label item-card__info-label__collapsed"
              >${this.lastEditor} изменил(а) ${this.editTime}</span
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
    `;
  }

  getSubElement(element) {
    return element.firstElementChild;
  }
}
