import footerCSS from './brand-footer.mod.scss';

class BrandFooter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
    console.log('footerCSS', footerCSS);
  }

  connectedCallback () {
    const fragment = document.createDocumentFragment();
    const container = document.createElement('div');
    const styleTag = document.createElement('style');
    styleTag.innerHTML = footerCSS;
    container.innerHTML = `
      <slot>
        <footer>
          <div class="grid">
            <div class="col-span-2-12">
              © 2019 Amindunited
            </div>
          </div>
        </footer>
      </slot>
    `;
    fragment.appendChild(styleTag);
    fragment.appendChild(container);
    this.shadow.appendChild(fragment);
  }
}

export default BrandFooter;