import React from 'react';
import ReactDOM from 'react-dom';
import ${titleCaseName} from './${kebabCaseName}';

describe('${titleCaseName}', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<${titleCaseName} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});