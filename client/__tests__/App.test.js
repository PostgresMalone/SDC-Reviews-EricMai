import React from 'react';
import { shallow } from 'enzyme';
import Review from '../components/Review';
import ReviewList from '../components/ReviewList';
import ReadMore from '../components/ReadMore';
import Comment from '../components/Comment';
import SingleReview from '../components/SingleReview';
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
  });
});

describe('ReadMore tests', () => {

  it('renders readMore', () => {
    const items = ['one', 'two', 'three'];
    const wrapper = shallow(<ReadMore reviews={items} />);
    expect(wrapper.find('.readMore')).toBeDefined();
  });
});

describe('Comment tests', () => {
  var review = {
    "_id": "5c2a93876324232a6da25858",
    "id": 1,
    "listingId": 1,
    "content": "Dignissimos ducimus velit quis quos voluptatem cum. Velit dolores itaque molestiae. Saepe magnam rerum quam dolore reprehenderit beatae voluptates voluptatem. Sunt ab at consequuntur quo dignissimos quisquam et officia at. Dignissimos necessitatibus iste reprehenderit suscipit ab qui molestias impedit similique. Occaecati assumenda fugiat.",
    "reviewerName": "Rose Conn",
    "reviewerPicture": "https://randomuser.me/api/portraits/women/41.jpg",
    "hostComment": "Quidem ut quia. Iure corrupti ut quia voluptas. Atque omnis necessitatibus error rerum ea eaque est ut doloribus. Quo velit nam sed quos.",
    "hostName": "Jadyn Kertzmann DDS",
    "hostPicture": "https://randomuser.me/api/portraits/women/5.jpg",
    "createdAt": "2018-12-31T15:10:44.558Z",
    "__v": 0
  }
  it('renders Comment', () => {
    const wrapper = shallow(<Comment review={review} />);
    expect(wrapper.find('.comment')).toBeDefined();
  });
});

describe('SingleReview tests', () => {
  var review = {
    "_id": "5c2a93876324232a6da25858",
    "id": 1,
    "listingId": 1,
    "content": "Dignissimos ducimus velit quis quos voluptatem cum. Velit dolores itaque molestiae. Saepe magnam rerum quam dolore reprehenderit beatae voluptates voluptatem. Sunt ab at consequuntur quo dignissimos quisquam et officia at. Dignissimos necessitatibus iste reprehenderit suscipit ab qui molestias impedit similique. Occaecati assumenda fugiat.",
    "reviewerName": "Rose Conn",
    "reviewerPicture": "https://randomuser.me/api/portraits/women/41.jpg",
    "hostComment": "Quidem ut quia. Iure corrupti ut quia voluptas. Atque omnis necessitatibus error rerum ea eaque est ut doloribus. Quo velit nam sed quos.",
    "hostName": "Jadyn Kertzmann DDS",
    "hostPicture": "https://randomuser.me/api/portraits/women/5.jpg",
    "createdAt": "2018-12-31T15:10:44.558Z",
    "__v": 0
  }
  it('renders Comment', () => {
    const wrapper = shallow(<SingleReview review={review} />);
    expect(wrapper.find('.singleReview')).toBeDefined();
  });
});