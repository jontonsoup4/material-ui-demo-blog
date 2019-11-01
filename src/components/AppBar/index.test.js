import * as constants from '../../utils/constants';
import AppBar from './index'
import React from 'react'
import { shallow } from 'enzyme';

describe('<AppBar />', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);

  const scrollToSpy = jest.fn();
  global.scrollTo = scrollToSpy;

  beforeEach(() => {
    wrapper = shallow(<AppBar />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    expect(wrapper.contains(constants.SITE_TITLE)).toBe(true);
  });

  it('opens drawer when menu is clicked', () => {
    wrapper.find('#menu-button').props().onClick();
    expect(setState).toHaveBeenCalledWith(true)
  });

  it('scrolls to top when clicked home', () => {
    wrapper.find('#site-logo').props().onClick();
    expect(scrollToSpy).toHaveBeenCalledWith(0, 0)
  })
});
