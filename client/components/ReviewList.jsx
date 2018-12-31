import React from 'react';
import Review from './Review.jsx';
import ReviewModal from './ReviewModal.jsx';
import style from './style.css.js';
const ReviewList = (props) => {
  var reviews = props.reviews;
  var reviewList = [];
  if (props.reviews.length !== 0) {
    for (var i = 0; i < 6; i++) {
      reviewList.push(<Review review={reviews[i]} key={i} />);
    }
  }
  if (props.showModal) {
    return (
      <ReviewModal />
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