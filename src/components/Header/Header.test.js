import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('h1').length).toBe(1);
  expect(wrapper.find('h1').text()).toEqual('Scheduler')
  expect(wrapper).toMatchSnapshot();
});

