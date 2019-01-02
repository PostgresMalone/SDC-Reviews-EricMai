import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App.jsx';
import ReviewList from '../components/ReviewList';
import ReadMore from '../components/ReadMore';
describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);

    expect(component).toMatchSnapshot();
  });
  it('should render correctly with no props', () => {
    const component = shallow(<App />);

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