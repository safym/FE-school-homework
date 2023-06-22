export class Navigation {
  element;
  subElement;

  onClick = (event) => {
    alert("navigation click");
  };

  constructor() {
    this.render();
    this.initListeners();
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
            <a class="header__user-button button button__size_large button__dropdown" href="#">
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
    this.subElement.addEventListener("click", this.onClick);
  }
}
