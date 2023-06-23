import { Dropdown } from "../dropdown";

const MENU_BUTTON_ID = "nav-button";

export class Navigation {
  elementWrapper;
  subElement;

  dropdownButton;
  buttonId;
  menuList = [
    { label: "Профиль", type: "normal" },
    { label: "Выход", type: "normal" },
  ];
  menu;

  constructor() {
    this.buttonId = `${MENU_BUTTON_ID}-user`
    this.render();

    this.initListeners();
  }

  render() {
    this.elementWrapper = this.getElementWrapper();
    this.element = this.getElement(this.elementWrapper);

    this.dropdownButton = this.element.querySelector(`#${this.buttonId}`);

    this.menu = new Dropdown(
      this.dropdownButton,
      this.buttonId,
      this.menuList,
      "dropdown_active"
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
            <a id="${this.buttonId}" class="header__user-button button button__size_large button__dropdown dropdown" href="#">
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

  initListeners() {
    this.dropdownButton.addEventListener("click", this.menu.onClick);
  }

  remove() {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.dropdownButton.removeEventListener("click", this.menu.onClick);
    this.element.remove();
    this.element = null;
  }
}
