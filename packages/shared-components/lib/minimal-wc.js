class MinimalWc extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
  }
  connecedCallback () {
    this.shadow.innerHTML = `Shadowy!`;
  }
}

export default MinimalWc;