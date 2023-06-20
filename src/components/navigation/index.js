export class Navigation {
  element;
  subElement;

  onClick = (event) => {
    alert('navigation click')
  }

  constructor() {
    this.render()
    this.initListeners()
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
    <header class="header">
      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__list-item">
            <a class="header__button button button__nav button__nav_active" href="#">Проекты</a>
          </li>
          <li class="header__list-item">
            <a class="header__button button button__nav" href="#"
              >Задачи</a
            >
          </li>
          <li class="header__list-item">
            <a class="header__button button button__nav" href="#"
              >Пользователи</a
            >
          </li>
          <li class="header__list-item">
            <a class="header__user-button button button__dropdown" href="#">
              <img
                class="button__image"
                src="/assets/images/user.png"
                alt="user image"
              />
              <svg
                class="button__icon"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.99974 4.95L2.04974 0L0.635742 1.414L6.99974 7.778L13.3637 1.414L11.9497 0L6.99974 4.95Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
    `
  }

  getSubElement(element) {
    return element.firstElementChild
  }

  initListeners() {
    this.subElement.addEventListener('click', this.onClick)
  }
}
