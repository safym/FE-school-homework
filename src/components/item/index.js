import { Dropdown } from "../dropdown";
import { Tooltip } from "../tooltip";

export class Item {
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

  tooltip;

  onMouseleave = (event) => {
    if (this.menu.isOpen) {
      this.menu.isOpen = false;
      this.menu.close();
    }
  };

  constructor() {}

  render() {
    this.element = this.getElement();

    this.dropdownButton = this.element.querySelector(`#${this.buttonId}`);
    this.menu = new Dropdown(
      this.dropdownButton,
      this.buttonId,
      this.menuList,
      "button__style_secondary_active"
    );

    this.tooltip = new Tooltip();
  }

  getElement() {
    const elementWrapper = document.createElement("div");
    elementWrapper.innerHTML = this.getTemplate();

    return elementWrapper.firstElementChild;
  }

  getTemplate() {
    return `
    <div class="item-card">
      <div class="item-card__body">
        <div class="item-card__title">
          <p data-tooltip="${this.description}" class="item-card__name">
            ${this.description}
          </p>
          ${this.getUserImgTemplate(this.userImg)}
        </div>
        <div class="item-card__footer">
          <div class="item-card__create-group">
            <span data-tooltip="${this.id}" class="item-card__id"
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
    this.element.addEventListener("pointerout", this.tooltip.onPoinerOut);
    this.element.addEventListener("pointerover", this.tooltip.onPoinerOver);
  }

  remove() {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.dropdownButton.removeEventListener("click", this.menu.onClick);
    this.element.removeEventListener("mouseleave", this.onMouseleave);
    this.element.removeEventListener("pointerout", this.tooltip.onPoinerOut);
    this.element.removeEventListener("pointerover", this.tooltip.onPoinerOver);
    this.element.remove();
    this.element = null;
  }
}
