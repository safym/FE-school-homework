import { Dropdown } from "../dropdown";

const MENU_BUTTON_ID = "user-button";

export class Navigation {
  element;
  subElement;
  dropdownButton;
  menuList = ['Профиль', 'Выход']
  menu;


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

  constructor() {
    this.render();
    this.initListeners();
  }

  render() {
    this.element = this.getElement();
    this.subElement = this.getSubElement(this.element);
    this.dropdownButton = this.subElement.querySelector(`#${MENU_BUTTON_ID}`);
    this.menu = new Dropdown(this.dropdownButton, this.menuList, "dropdown_active");
  }

  getElement() {
    const element = document.createElement("div");
    element.innerHTML = this.getTemplate();

    return element.firstElementChild;
  }

  getTemplate() {
    return `
    <header class="header">
      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__list-item">
            <a class="header__button button button__size_large button__nav button__nav_active" href="#">Проекты</a>
          </li>
          <li class="header__list-item">
            <a class="header__button button button__size_large button__nav" href="#"
              >Задачи</a
            >
          </li>
          <li class="header__list-item">
            <a class="header__button button button__size_large button__nav" href="#"
              >Пользователи</a
            >
          </li>
          <li class="header__list-item">
            <a id="${MENU_BUTTON_ID}" class="header__user-button button button__size_large button__dropdown dropdown" href="#">
              <img
                class="button__image"
                src="/assets/images/user.png"
                alt="user image"
              />
              <div class="button__icon-container">
                <svg class="button__icon">
                  <use xlink:href="#dropdown-arrow-svg"></use>
                </svg>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </header>
    `;
  }

  getSubElement(element) {
    return element.firstElementChild;
  }

  initListeners() {
    document.addEventListener("click", this.onClick);
  }
}
