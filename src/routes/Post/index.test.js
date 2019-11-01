import Post from './index'
import React from 'react'
import { shallow } from 'enzyme';

describe('<Home />', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);
  const props = {
    match: {
      params: {
        id: "1"
      }
    }
  };

  beforeEach(() => {
    wrapper = shallow(<Post {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    expect(wrapper.contains('Cornua Prospicientis conamine')).toBe(true);
  });
});
