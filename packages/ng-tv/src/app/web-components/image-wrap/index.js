
class ImageWrap extends HTMLElement {

  observedAttributes = ['url'];

  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback () { this.render(); }
  render () {
    console.log('connected?');
    this.shadow.innerHTML = '';
    const fragmentOne = document.createDocumentFragment();
    const containerOne = document.createElement('div');
    containerOne.innerHTML = `
      <slot></slot>
    `;
    fragmentOne.appendChild(containerOne);
    this.shadow.appendChild(fragmentOne);

    const fragmentTwo = document.createDocumentFragment();
    const containerTwo = document.createElement('div');
    containerTwo.innerHTML = `
      <div class="image-wrap">
        <img/>
        <div class="image-loading">
          <div></div><div></div><div></div><div></div>
        </div>
      </div>
    `;
    fragmentTwo.appendChild(containerTwo);
    this.appendChild(fragmentTwo);
    this.loadImage();

  }

  loadImage () {
    let url = this.getAttribute('url');
    if (!url) {
      setTimeout(() => {
        url = this.getAttribute('url');
        fetch(url)
        .then(response => response.blob())
        .then(images => {
          this.querySelector('img').setAttribute('src', url);
          this.querySelector('.image-loading').classList.add('hidden');
          this.querySelector('img').classList.add('loaded');
        });
      }, 1000)

    } else {
      fetch(url)
        .then(response => response.blob())
        .then(images => {
          this.querySelector('img').setAttribute('src', url);
          this.querySelector('.image-loading').classList.add('hidden');
          this.querySelector('img').classList.add('loaded');
        });
    }


  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }
}

export default ImageWrap;
