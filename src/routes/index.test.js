import Routes from './index'
import React from 'react'
import { shallow } from 'enzyme';

describe('<Routes />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Routes />);
  });

  it('renders without crashing', () => {
    expect(wrapper.find('BrowserRouter').exists()).toBe(true)
  });
});
