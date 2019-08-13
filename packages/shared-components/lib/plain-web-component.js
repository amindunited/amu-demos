class PlainWebComponent extends HTMLElement {
  constructor () {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
  }

  render () {
    const fragment = document.createDocumentFragment();
    const container = document.createElement('div');
  }

  // the custom element is added to the DOM.
  connectedCallback () { this.render(); }

  // the custom element is disconnected from the DOM
  disconnectedCallback () {}

  // custom element is moved to a new document.
  adoptedCallback () {}

  // attribute is added, removed, or changed
  // requires that observedAttributes are defined
  // observedAttributes = ['show', 'expand']
  attributeChangedCallback () {}
}