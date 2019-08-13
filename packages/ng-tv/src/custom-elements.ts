import ImageWrap from './app/web-components/image-wrap';
import BrandHeader from './app/web-components/brand-header';
import BrandFooter from './app/web-components/brand-footer';
// class Header{}
// class Footer {}
const defineCustomElements = () => {
  customElements.define('image-wrap', ImageWrap);
  customElements.define('brand-header', BrandHeader);
  customElements.define('brand-footer', BrandFooter);
};

export default defineCustomElements;

