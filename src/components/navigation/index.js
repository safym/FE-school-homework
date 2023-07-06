import { Dropdown } from "src/components/dropdown";

const MENU_BUTTON_ID = "nav-button";

export class Navigation {
  element;

  dropdownButton;
  buttonId;
  menuList = [
    { label: "Профиль", type: "normal" },
    { label: "Выход", type: "normal" },
  ];
  menu;

  activeNavLink;

  onClick = (event) => {
    const element = event.target.closest("[data-navlink]");

    if (element) {
      const navLinkName = element.dataset.navlink;

      if (navLinkName !== this.activeNavLink) {
        this.activeNavLink = navLinkName;

        this.inactivateNavlinks();
        this.activateNavlink(element);
      }
    }
  };

  constructor() {
    this.buttonId = `${MENU_BUTTON_ID}-user`;
    this.activeNavlink = null;
    this.render();

    this.initListeners();
  }

  render() {
    this.element = this.getElement();

    this.dropdownButton = this.element.querySelector(`#${this.buttonId}`);

    this.menu = new Dropdown(
      this.dropdownButton,
      this.buttonId,
      this.menuList,
      "dropdown_active"
    );
  }

  getElement() {
    const elementWrapper = document.createElement("div");
    elementWrapper.innerHTML = this.getTemplate();

    return elementWrapper.firstElementChild;
  }

  getTemplate() {
    return `
    <header class="header">
      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__list-item">
            <a data-navlink="projects" class="header__button button button__size_large button__nav" href="#">Проекты</a>
          </li>
          <li class="header__list-item">
            <a data-navlink="tasks" class="header__button button button__size_large button__nav" href="#"
              >Задачи</a
            >
          </li>
          <li class="header__list-item">
            <a data-navlink="users" class="header__button button button__size_large button__nav" href="#"
              >Пользователи</a
            >
          </li>
          <li class="header__list-item">
            <a id="${this.buttonId}" data-dropdown="button" class="header__user-button button button__size_large button__dropdown dropdown" href="#">
              <img
                class="button__image"
                src="assets/images/user.png"
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

  activateNavlink(element) {
    element.classList.add("button__nav_active");
  }

  inactivateNavlinks() {
    const navlinks = this.element.querySelectorAll(["[data-navlink]"]);

    if (!navlinks) return;

    for (const item of navlinks) {
      item.classList.remove("button__nav_active");
    }
  }

  initListeners() {
    this.dropdownButton.addEventListener("click", this.menu.onClick);
    this.element.addEventListener("click", this.onClick);
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
