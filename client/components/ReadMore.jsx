import React from 'react';
import Review from './Review.jsx';
import style from './style.css.js';

const ReadMore = (props) => {
  var numberOfReviews = props.reviews.length;
  if (props.showMoreButton) {
    return (
      <a href='#' style={style.showReviews} onClick={props.handleSwitch}>Read all {numberOfReviews} reviews</a>
    )
  } else {
    return (
      <a href='#' style={style.showReviews} onClick={props.handleSwitch}>Hide all reviews</a>
    )
  }
};
export default ReadMore;