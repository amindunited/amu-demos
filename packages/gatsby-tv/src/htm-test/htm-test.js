import htm from 'htm';
import styles from './htm-test.module.scss';
import htmRenderer from '../htm-renderer';

const html = htm.bind(htmRenderer);

class HtmTest extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback () {
    const shadow = this.attachShadow({mode: 'closed'});
    const styleEl = document.createElement('style');
    styleEl.innerText = styles;

    shadow.appendChild(styleEl);
    const content = html`<div>htm-test Works!</div>`;

    shadow.appendChild(content);

  }
}

export default HtmTest;
