export default class AbstractView {

  get className() {
    return `main`;
  }

  get tagName() {
    return `section`;
  }

  get template() {
    throw new Error(`You have to define template for view`);
  }

  render() {
    return this.createElement(this.template);
  }

  createElement(template) {
    const element = document.createElement(this.tagName);
    element.className = this.className;
    element.innerHTML = template;
    return element;
  }

  bind() {

  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }
    return this._element;
  }

}
