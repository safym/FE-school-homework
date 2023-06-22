export class Dropdown {
  isOpen;
  element;
  dropdownButton;
  activeClass;
  list;
  listHtml;

  constructor(dropdownButton, list, activeClass) {
    this.isOpen = false;
    this.list = list;
    this.dropdownButton = dropdownButton;
    this.activeClass = activeClass;

    this.render()
  }

  render() {
    this.element = this.getElement();
  }

  getElement() {
    const menu = document.createElement("div");

    const listHtml = this.getListHtml(this.list)
    
    menu.innerHTML = this.getTemplate(listHtml);

    return menu;
  }

  getTemplate(listHtml) {
    return `
    <div class="dropdown__menu">
      ${listHtml}
    </div>
    `;
  }

  getListHtml(list) {
    const listElement = document.createElement('ul')
    listElement.classList.add('dropdown__list')

    for (const item of list) {
      const listItemWrapper= document.createElement('div')

      listItemWrapper.innerHTML = this.getListItemTemplate(item);

      listElement.appendChild(listItemWrapper.firstElementChild)
    }
    
    return listElement.outerHTML
  }

  getListItemTemplate(item) {
    return `
    <li class="dropdown__list-item">
      <a class="dropdown__link" href="#">${item}</a>
    </li>
    `
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
}
