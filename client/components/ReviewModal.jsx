import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import SingleReview from './SingleReview.jsx';
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
    axios.get(`/reviews`,{
      params:{
        id: window.location.href.split('/')[4],
        limit: 'ALL'
      }})
      .then((data) => {
        console.log(data.data , 'something')
        var reviews = data.data;
        if (reviews.length === 0) {
          this.setState({ hasMore: false });
          return;
        }
        console.log(this.props.showModal)
        // for (var i = 0; i < reviews.length; i++) {
        //   this.setState({ reviewList: this.state.reviewList.concat([<SingleReview review={reviews[i]} key={Math.random()} showModal={this.props.showModal} />]) });
        // }

        this.setState({
          reviewList : reviews,
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
        <div style={style.reviewsTitle}>
          Reviews
        </div>
        <InfiniteScroll
          // dataLength={this.state.reviewList.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
        >
          <div>
            {this.state.reviewList.map((item)=>{
              return (
              <SingleReview review={item} key= {Math.random()} showModal={this.props.showModal} />
              )
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default ReviewModal;
