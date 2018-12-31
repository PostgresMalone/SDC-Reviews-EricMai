import React from 'react';
import Review from './Review.jsx';
import style from './style.css.js';

const ReadMore = (props) => {
  if (props.showMoreButton) {
    return (
      <a href='#' style={style.showReviews} onClick={props.handleSwitch}>Show all reviews</a>
    )
  } else {
    return (
      <a href='#' style={style.showReviews} onClick={props.handleSwitch}>Hide all reviews</a>
    )
  }
};
export default ReadMore;