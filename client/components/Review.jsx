import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import ReadMore from './ReadMore.jsx';
import style from './style.css.js';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      showModal: false,
      showMoreButton: true,
    };
    this.handleSwitch = this.handleSwitch.bind(this);
    this.scroll = this.scroll.bind(this);
    this.reviewInput = React.createRef();
  }

  getReviews() {
    axios.get('/1/reviews')
      .then((data) => {
        this.setState({ reviews: data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleSwitch() {
    this.scroll();
    this.setState({
      showModal: !this.state.showModal,
      showMoreButton: !this.state.showMoreButton
    });
  }

  scroll() {
    var that = this;
    window.scrollTo({
      top: that.reviewInput.current.offsetTop,
      behavior: "smooth",
    });
  }

  componentDidMount() {
    this.getReviews();
  }

  render() {
    return (
      <div>
        <div style={{ width: '100px', height: '100px' }}></div>
        <div style={{ width: '100px', height: '100px' }}></div>
        <div style={{ width: '100px', height: '100px' }}></div>
        <div style={{ width: '100px', height: '100px' }}></div>
        <div style={{ width: '100px', height: '100px' }}></div>
        <div style={{ width: '100px', height: '100px' }}></div>
        <div style={{ width: '100px', height: '100px' }}></div>
        <div style={{ width: '100px', height: '100px' }}></div>
        <div style={{ width: '100px', height: '100px' }}></div>
        <div style={style.wrapper} >
          <div ref={this.reviewInput}>
            <ReviewList className='reviewList' reviews={this.state.reviews} showModal={this.state.showModal} />
            <ReadMore showMoreButton={this.state.showMoreButton} handleSwitch={this.handleSwitch} reviews={this.state.reviews} />
          </div>
        </div>
      </div>
    );
  }
}

export default Review;




