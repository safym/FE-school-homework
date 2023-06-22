const MENU_BUTTON_ID = "user-button";

export class Navigation {
  dropdownButton;
  dropdownIcon;
  menuIsOpen;
  menuElement;

  element;
  subElement;

  onClick = (event) => {
    const target = event.target;
    const closestMenuButton = target.closest(`#${MENU_BUTTON_ID}`);

    if (closestMenuButton) {
      if (!this.menuIsOpen) {
        this.openMenu();
      } else {
        if (this.menuElement) {
          this.closeMenu();
        }
      }
    } else {
      if (this.menuIsOpen && this.menuElement) {
        this.closeMenu();
      }
    }
  };

  constructor() {
    this.menuIsOpen = false;

    this.render();
    this.initListeners();
  }

  render() {
    this.element = this.getElement();
    this.subElement = this.getSubElement(this.element);
    this.dropdownButton = this.subElement.querySelector(`#${MENU_BUTTON_ID}`);
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

  getMenuElement() {
    const menu = document.createElement("div");
    menu.innerHTML = this.getMenuTemplate();

    return menu;
  }

  getMenuTemplate() {
    return `
    <div class="dropdown__menu">
      <ul class="dropdown__list">
        <li class="dropdown__list-item">
          <a class="dropdown__link" href="#">Профиль</a>
        </li>
        <li class="dropdown__list-item">
          <a class="dropdown__link" href="#">Выход</a>
        </li>
      </ul>
    </div>
    `;
  }

  openMenu() {
    this.menuIsOpen = true;
    this.menuElement = this.getMenuElement();

    this.dropdownButton.parentElement.append(this.menuElement);
    this.dropdownButton.classList.add("dropdown_active");
  }

  closeMenu() {
    this.menuIsOpen = false;
    this.dropdownButton.classList.remove("dropdown_active");
    this.menuElement.remove();
  }

  getSubElement(element) {
    return element.firstElementChild;
  }

  initListeners() {
    document.addEventListener("click", this.onClick);
  }
}
