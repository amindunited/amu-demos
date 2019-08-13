import htm from 'htm';
import styles from './${kebabCaseName}.module.scss';
import htmRenderer from '~/htm-renderer';

const html = htm.bind(htmRenderer);

class ${titleCaseName} extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback () {
    const shadow = this.attachShadow({mode: 'closed'});
    const styleEl = document.createElement('style');
    styleEl.innerText = styles;

    shadow.appendChild(styleEl);
    const content = html`<div>${kebabCaseName} Works!</div>`;

    shadow.appendChild(content);

  }
}

export default ${titleCaseName};
