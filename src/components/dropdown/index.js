export class Dropdown {
  element;

  isOpen;
  dropdownButton;
  buttonId;
  activeClass;
  list;
  listHtml;

  onClick = (event) => {
    const target = event.target;
    const closestMenuButton = target.closest(`#${this.buttonId}`);

    if (closestMenuButton) {
      if (!this.isOpen) {
        this.open();
      } else {
        if (this.element) {
          this.close();
        }
      }
    }
  };

  constructor(dropdownButton, buttonId, list, activeClass) {
    this.isOpen = false;
    this.list = list;
    this.dropdownButton = dropdownButton;
    this.buttonId = buttonId;
    this.activeClass = activeClass;

    this.render();
  }

  render() {
    this.element = this.getElement();
  }

  getElement( ) {
    const elementWrapper = document.createElement("div");
    const listHtml = this.getListHtml(this.list);

    elementWrapper.innerHTML = this.getTemplate(listHtml);

    return elementWrapper.firstElementChild;
  }

  getTemplate(listHtml) {
    return `
    <div class="dropdown__menu" data-dropdown="list">
      ${listHtml}
    </div>
    `;
  }

  getListHtml(list) {
    const listElement = document.createElement("ul");
    listElement.classList.add("dropdown__list");

    for (const item of list) {
      const listItemWrapper = document.createElement("div");

      listItemWrapper.innerHTML = this.getListItemTemplate(item);

      listElement.appendChild(listItemWrapper.firstElementChild);
    }

    return listElement.outerHTML;
  }

  getListItemTemplate(item) {
    const linkStyleClass = `dropdown__link_style_${item.type}`;

    return `
    <li class="dropdown__list-item">
      <a class="dropdown__link ${linkStyleClass}" href="#">${item.label}</a>
    </li>
    `;
  }

  open() {
    this.isOpen = true;

    this.dropdownButton.parentElement.append(this.element);
    this.dropdownButton.classList.add(this.activeClass);
  }

  close() {
    this.isOpen = false;
    this.dropdownButton.classList.remove(this.activeClass);
    this.element.remove();
  }

  remove() {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.element.remove();
    this.element = null;
  }
}
