import Home from './index'
import React from 'react'
import Grid from '@material-ui/core/Grid';
import { shallow } from 'enzyme';

describe('<Home />', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    expect(wrapper.dive().dive().find('.MuiGrid-root').exists()).toBe(true)
  });
});
