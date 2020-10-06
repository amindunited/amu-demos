class PlainWebComponent extends HTMLElement {
  constructor () {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
  }

  render () {
    const fragment = document.createDocumentFragment();
    const container = document.createElement('div');
    container.innerHTML = `<p>He's some text</p>`;
    fragment.appendChild(container);
    this.shadow.appendChild(fragment);
    // if you don't want to use the shadow DOM:
    // and don't create the shadow!
    // this.appendChild(fragment);
  }

  // the custom element is added to the DOM.
  connectedCallback () { this.render(); }

}