import React from 'react';
import SingleReview from './SingleReview.jsx';
import ReviewModal from './ReviewModal.jsx';
import style from './style.css.js';
const ReviewList = (props) => {
  var reviews = props.reviews;
  var reviewList = [];
  if (props.reviews.length !== 0) {
    for (var i = 0; i < 6; i++) {
      reviewList.push(<SingleReview review={reviews[i]} key={i} showModal={props.showModal} />);
    }
  }
  if (props.showModal) {
    return (
      <div>
        <ReviewModal showModal={props.showModal} />
      </div>
    )
  } else {
    return (
      <div style={style.reviewList}>
        {reviewList}
      </div>
    );
  }
};
export default ReviewList;