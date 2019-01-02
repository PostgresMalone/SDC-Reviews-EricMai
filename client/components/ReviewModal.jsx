import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import Review from './Review.jsx';
import axios from 'axios';
import style from './style.css.js';

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      offset: 0,
      reviewList: [],
      hasMore: true
    };

    this.fetchMoreData = this.fetchMoreData.bind(this);
    this.fetchMoreData();

  }

  fetchMoreData() {
    var offset = this.state.offset;
    var limit = 10;
    axios.get(`/1/reviews?limit=${limit}&offset=${offset}`)
      .then((data) => {
        var reviews = data.data;

        if (reviews.length === 0) {
          this.setState({ hasMore: false });
          return;
        }

        for (var i = 0; i < reviews.length; i++) {
          this.setState({ reviewList: this.state.reviewList.concat([<Review review={reviews[i]} key={Math.random()} showModal={this.props.showModal} />]) });
        }

        this.setState({
          offset: this.state.offset + reviews.length
        });

      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {

    return (
      <div style={style.modalStyle}>
        <InfiniteScroll
          dataLength={this.state.reviewList.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
        >
          <div>
            {this.state.reviewList}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default ReviewModal;
