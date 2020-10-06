
class ImageWrap extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback () {
    console.log('connected?');
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
    const url = this.getAttribute('url')
    fetch(url)
      .then(response => response.blob())
      .then(images => {
        this.querySelector('img').setAttribute('src', url);
        this.querySelector('.image-loading').classList.add('hidden');
        this.querySelector('img').classList.add('loaded');
      });
  }
}

export default ImageWrap;
