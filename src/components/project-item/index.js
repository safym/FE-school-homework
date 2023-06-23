import { Dropdown } from "../dropdown";

const MENU_BUTTON_ID = "project-button";

export class ProjectItem {
  elementWrapper;
  element;

  id;
  description;
  creator;
  createTime;
  lastEditor;
  editTime;

  dropdownButton;
  menuList = [
    { label: "Редактировать", type: "normal" },
    { label: "Удалить", type: "delete" },
  ];
  menu;

  onMouseleave = (event) => {
    if (this.menu.isOpen) {
      this.menu.isOpen = false;
      this.menu.remove();
    }
  };

  onClick = (event) => {
    const target = event.target;
    const closestMenuButton = target.closest(`#${MENU_BUTTON_ID}`);

    if (closestMenuButton) {
      if (!this.menu.isOpen) {
        this.menu.open();
      } else {
        if (this.menu.element) {
          this.menu.close();
        }
      }
    } else {
      if (this.menu.isOpen && this.menu.element) {
        this.menu.close();
      }
    }
  };

  constructor({ id, description, creator, createTime, lastEditor, editTime }) {
    this.id = id;
    this.description = description;
    this.creator = creator;
    this.createTime = createTime;
    this.lastEditor = lastEditor;
    this.editTime = editTime;

    this.render();
    this.initListeners();
  }

  render() {
    this.elementWrapper = this.getElementWrapper();
    this.element = this.getElement(this.elementWrapper);

    this.dropdownButton = this.element.querySelector(`#${MENU_BUTTON_ID}`);
    this.menu = new Dropdown(
      this.dropdownButton,
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
        </div>
        <div class="item-card__footer">
          <div class="item-card__create-group">
            <span class="item-card__id"
              >${this.id}</span
            >
            <span class="item-card__info-label item-card__info-label__collapsed"
              >${this.creator} создал(а) ${this.createTime}</span
            >
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
          id="${MENU_BUTTON_ID}"
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

  initListeners() {
    document.addEventListener("click", this.onClick);
    this.element.addEventListener("mouseleave", this.onMouseleave);
  }

  remove() {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy() {
    document.removeEventListener("click", this.onClick);
    this.element.removeEventListener("mouseleave", this.onMouseleave);
    this.element.remove();
    this.element = null;
  }
}
