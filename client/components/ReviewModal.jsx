import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import InfiniteScroll from "react-infinite-scroll-component";
import Review from './Review.jsx';
import axios from 'axios';

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.fetchMoreData = this.fetchMoreData.bind(this);

    this.state = {
      show: false,
      offset: 0,
      reviewList: [],
      hasMore: true
    };

    this.fetchMoreData()

  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  fetchMoreData() {
    var offset = this.state.offset;
    var limit = 5;
    axios.get(`/1/reviews?limit=${limit}&offset=${offset}`)
      .then((data) => {
        var reviews = data.data;

        if (reviews.length === 0) {
          this.setState({ hasMore: false });
          return;
        }

        for (var i = 0; i < reviews.length; i++) {
          this.setState({ reviewList: this.state.reviewList.concat([<Review review={reviews[i]} />]) });
          console.log(i)
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
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Read all reviews
        </Button>
        <InfiniteScroll
          dataLength={this.state.reviewList.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>You have seen it all</b>
            </p>
          }
        >
          {this.state.reviewList}
        </InfiniteScroll>
      </div>
    );
  }
}

export default ReviewModal;
