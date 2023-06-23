import { Dropdown } from "../dropdown";

export class Item {
  elementWrapper;
  element;

  id;
  description;
  status;
  userImg;
  creator;
  createTime;
  lastEditor;
  editTime;

  dropdownButton;
  buttonId;
  menuList = [
    { label: "Редактировать", type: "normal" },
    { label: "Удалить", type: "delete" },
  ];
  menu;

  onMouseleave = (event) => {
    if (this.menu.isOpen) {
      this.menu.isOpen = false;
      this.menu.close();
    }
  };

  constructor() {}

  render() {
    this.elementWrapper = this.getElementWrapper();
    this.element = this.getElement(this.elementWrapper);

    this.dropdownButton = this.element.querySelector(`#${this.buttonId}`);
    this.menu = new Dropdown(
      this.dropdownButton,
      this.buttonId,
      this.menuList,
      "button__style_secondary_active"
    );
  }

  getElementWrapper() {
    const elementWrapper = document.createElement("div");
    elementWrapper.innerHTML = this.getTemplate();

    return elementWrapper;
  }

  getElement(elementWrapper) {
    return elementWrapper.firstElementChild;
  }

  getTemplate() {
    return `
    <div class="item-card">
      <div class="item-card__body">
        <div class="item-card__title">
          <p class="item-card__name">
            ${this.description}
          </p>
          ${this.getUserImgTemplate(this.userImg)}
        </div>
        <div class="item-card__footer">
          <div class="item-card__create-group">
            <span class="item-card__id"
              >${this.id}</span
            >
            <span class="item-card__info-label item-card__info-label__collapsed"
              >${this.creator} создал(а) ${this.createTime}</span
            >
            ${this.getStatusTemplate(this.status)}
          </div>
          <div class="item-card__edit-group">
            <span class="item-card__info-label item-card__info-label__collapsed"
              >${this.lastEditor} изменил(а) ${this.editTime}</span
            >
          </div>
        </div>
      </div>
      <div class="item-card__button-wrapper">
        <a
          id="${this.buttonId}"
          data-dropdown="button"
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
    </div>
    `;
  }

  getUserImgTemplate(userImg) {
    return userImg
      ? `<img
        class="item-card__image"
        src="/assets/images/user.png"
        alt="user image"
      />`
      : "";
  }

  getStatusTemplate(status) {
    return status
      ? `<span class="item-card__status item-card__status_draft">
        ${this.status}
        </span>`
      : "";
  }

  initListeners() {
    this.dropdownButton.addEventListener("click", this.menu.onClick);
    this.element.addEventListener("mouseleave", this.onMouseleave);
  }

  remove() {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.dropdownButton.removeEventListener("click", this.menu.onClick);
    this.element.removeEventListener("mouseleave", this.onMouseleave);
    this.element.remove();
    this.element = null;
  }
}
