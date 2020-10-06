function htmRenderer (type, props, ...children) {

  console.log('props: ', props);
  const frag = document.createDocumentFragment();
  const el = document.createElement(type);

  if (props) {
    Object.keys(props).forEach((key) => {
      el.setAttribute(key, props[key]);
    });
  }

  if (children.length > 0) {

    children.forEach((ch) => {
      if (!ch) { return; };
      if (typeof ch === 'string') {
        const parent = document.createElement('div');
        parent.innerHTML = ch;
        if (parent.children.length > 0) {
           [...parent.children].forEach((child) => {
              el.appendChild(child);
           });
        } else {
          const tn = document.createTextNode(ch);
          el.appendChild(tn);
        }
      } else {
        console.log('not a node? ', typeof ch, ch);
        el.appendChild(ch);
      }
    });
  }

  frag.appendChild(el);

  return frag.firstChild;
}

export default htmRenderer
