import React from 'react';
import Review from './Review.jsx';

const ReviewList = (props) => {
  var reviews = props.reviews;
  var reviewList = [];
  if (props.reviews.length !== 0) {
    for (var i = 0; i < 6; i++) {
      reviewList.push(<Review review={reviews[i]} key={i} />);
    }
  }
  return (
    <div id="review-list">
      {reviewList}
    </div>
  );
};
export default ReviewList;