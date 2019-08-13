import htm from 'htm';
import styles from './colour-swatch.module.scss';
import htmRenderer from '~/htm-renderer';

const html = htm.bind(htmRenderer);

class ColourSwatch extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback () {

    const styleEl = document.createElement('style');
    console.log('styles? ', styles, typeof styles);
    styleEl.innerHTML = styles;

    // shadow
    this.appendChild(styleEl);
    const varName = this.getAttribute('scss-var-name');
    const swatchClass = `var-${varName.replace('$', '')}`
    const content = html`<div>
    <div class="colour-swatch ${swatchClass}"></div>
    <div class="var-name">
      <div>${varName}</div>
    </div>
    <div class="toast hidden">Copied</div>
  </div>`;

    this.appendChild(content);
    this.addEventListener('click', () => {
      const el = this.querySelector('.var-name > div');
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(el);
      selection.removeAllRanges();
      selection.addRange(range);

      document.execCommand('copy');
      selection.removeAllRanges();
      this.querySelector('.toast').classList.remove('hidden');
      setTimeout(() => {
        this.querySelector('.toast').classList.add('hidden');
      }, 2000)
      
    });

  }
}

export default ColourSwatch;
