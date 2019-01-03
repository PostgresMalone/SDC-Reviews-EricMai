import React from 'react';
import { shallow } from 'enzyme';
import Review from '../components/Review.jsx';
import ReviewList from '../components/ReviewList';
import ReadMore from '../components/ReadMore';
describe('Review', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Review debug />);

    expect(component).toMatchSnapshot();
  });
  it('should render correctly with no props', () => {
    const component = shallow(<Review />);

    expect(component).toMatchSnapshot();
  });

});

describe('ReviewList tests', () => {

  it('renders reviewList', () => {
    const items = ['one', 'two', 'three'];
    const wrapper = shallow(<ReviewList reviews={items} />);
    expect(wrapper.find('.reviewList')).toBeDefined();
    // expect(wrapper.find('.item')).toHaveLength(items.length);
  });
});

describe('ReadMore tests', () => {

  it('renders readMore', () => {
    const items = ['one', 'two', 'three'];
    const wrapper = shallow(<ReadMore reviews={items} />);
    expect(wrapper.find('.readMore')).toBeDefined();
    // expect(wrapper.find('.item')).toHaveLength(items.length);
  });
});