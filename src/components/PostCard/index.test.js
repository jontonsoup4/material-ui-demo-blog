import posts from '../../posts';
import PostCard from './index'
import React from 'react'
import { shallow } from 'enzyme';

describe('<PostCard />', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);

  const scrollToSpy = jest.fn();
  global.scrollTo = scrollToSpy;

  beforeEach(() => {
    wrapper = shallow(<PostCard post={posts[0]} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    expect(wrapper.contains('Cornua Prospicientis conamine')).toBe(true);
  });

  it('renders null if no post', () => {
    wrapper = shallow(<PostCard post={null} />);
    expect(wrapper.equals(null)).toBe(true);
  });

  it('scrolls to top when clicked link', () => {
    wrapper.find('.post-link').props().onClick();
    expect(scrollToSpy).toHaveBeenCalledWith(0, 0)
  })
});
