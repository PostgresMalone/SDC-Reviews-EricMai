import React from 'react';
import Review from './Review.jsx';

const ReviewList = (props) => {
  var listing = props.listing;
  var reviewList = [];
  if (props.listing.length !== 0) {
    for (var i = 0; i < 6; i++) {
      reviewList.push(<Review reviews={listing.reviews[i]} key={i} hostName={listing.hostName} hostPicture={listing.hostPicture} />);
    }
  }
  return (
    <div id="review-list">
      {reviewList}
    </div>
  );
};
export default ReviewList;