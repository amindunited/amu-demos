import Link from 'next/link';



const Index = () => {
  try {
    class htmTest extends HTMLElement {
      constructor () {
        super();
      }
      connectedCallback () {
        this.innerHTML = `<div>elele</div>`
      }
    }
    customElements.define('htm-test', htmTest);
  } catch (e) {}
  return <div>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <p>Hello Next.js</p>
    <htm-test></htm-test>
  </div>
};

export default Index;