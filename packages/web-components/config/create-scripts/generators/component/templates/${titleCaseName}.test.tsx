import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ${titleCaseName} from './${titleCaseName}';

configure({
  adapter: new Adapter()
});

describe('${titleCaseName} ', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<${titleCaseName} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.html()).toContain('${titleCaseName} Works!');
  });

});
