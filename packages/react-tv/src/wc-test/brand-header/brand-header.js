/* eslint import/no-webpack-loader-syntax: off */
import headerCSS from '!!raw-loader!sass-loader!./brand-header.string.scss';

class BrandHeader extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
    console.log('headerCSS', headerCSS);
  }

  connectedCallback () {
    console.log('connected?');
    const fragment = document.createDocumentFragment();
    const container = document.createElement('div');
    const styleTag = document.createElement('style');
    styleTag.innerHTML = headerCSS;
    container.innerHTML = `
      <slot>
        <header class="grid">
          <div class="col-span-1-12">
            <a aria-label="Link to TV Maze" href="https://tvmaze.com">TV Maze</a>
          </div>
          <div class="col-span-1-12">
            <a aria-label="Link to Github" href="https://github.com/amindunited">Github</a>
          </div>
          <div class="col-span-1-12">
            <a aria-label="Link to Twitter" href="https://twitter.com/amindunited">Twitter</a>
          </div>
        </header>
      </slot>
    `;
    fragment.appendChild(styleTag);
    fragment.appendChild(container);
    this.shadow.appendChild(fragment);
  }
}

export default BrandHeader;
