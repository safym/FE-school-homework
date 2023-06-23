export class Tooltip {
  element;

  constructor() {
    this.render();
  }

  onPoinerOver = (event) => {
    const element = event.target.closest("[data-tooltip]");

    if (element && this.hasEllipsis(element)) {
      const tooltipContent = element.dataset.tooltip;
      this.updateElement(tooltipContent);
      this.show();

      document.addEventListener("pointermove", this.onPointerMove);
    }
  };

  onPointerMove = (event) => {
    if (this.element) {
      const tooltipWidth = this.element.offsetWidth;
      const shift = 15;
      const { clientX, clientY } = event;

      const topPosition = clientY + shift;

      let leftPosition = clientX - tooltipWidth / 2;
      if (leftPosition < 0) {
        leftPosition = 0;
      } else if (leftPosition + tooltipWidth > window.innerWidth) {
        leftPosition = window.innerWidth - tooltipWidth;
      }

      this.element.style.position = "absolute";
      this.element.style.top = `${topPosition}px`;
      this.element.style.left = `${leftPosition}px`;
    }
  };

  onPoinerOut = () => {
    if (this.element) {
      this.element.remove();
      document.removeEventListener("pointermove", this.onPointerMove);
    }
  };

  getElement() {
    const elementWrapper = document.createElement("div");
    elementWrapper.innerHTML = this.getTemplate();

    return elementWrapper.firstElementChild;
  }

  render() {
    this.element = this.getElement();
  }

  getTemplate(tooltipContent = "") {
    return `
    <div class="tooltip">
      <div class="tooltip__container">${tooltipContent}</div>
    </div>
    `;
  }

  hasEllipsis(element) {
    return (
      element.scrollWidth > element.clientWidth ||
      element.scrollHeight > element.clientHeight
    );
  }

  updateElement(tooltipContent) {
    const elementWrapper = document.createElement("div");
    elementWrapper.innerHTML = this.getTemplate(tooltipContent);

    this.element = elementWrapper.firstElementChild;
  }

  show() {
    document.body.append(this.element);
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
