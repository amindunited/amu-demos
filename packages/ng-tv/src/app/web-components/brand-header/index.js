import headerCSS from './brand-header.scss';

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
            <a href="https://tvmaze.com">TV Maze</a>
          </div>
          <div class="col-span-1-12">
            <a href="https://github.com/amindunited">Github</a>
          </div>
          <div class="col-span-1-12">
            <a href="https://twitter.com/amindunited">Twitter</a>
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
