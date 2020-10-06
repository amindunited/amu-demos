import ImageWrap from './web-components/image-wrap';
// import BrandHeader from './web-components/brand-header';
import BrandHeader from './wc-test/brand-header';
// import BrandHeader from '@amu-demos/web-components/dist/brand-header';
import BrandFooter from './web-components/brand-footer';
// class Header{}
// class Footer {}
const defineCustomElements = () => {
  customElements.define('image-wrap', ImageWrap);
  customElements.define('brand-header', BrandHeader);
  customElements.define('brand-footer', BrandFooter);
};

export default defineCustomElements;

