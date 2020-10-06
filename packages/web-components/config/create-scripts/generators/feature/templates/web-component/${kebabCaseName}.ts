
import './${kebabCaseName}.scss';

class ${titleCaseName} extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback () {

    const container = document.createElement('div');
    const content = `<div>${titleCaseName} Works!</div>`;
    container.innerHTML = content;
    this.appendChild(container.firstChild);
  }
}

export default ${titleCaseName};
