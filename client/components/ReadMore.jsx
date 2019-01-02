import React from 'react';
import style from './style.css.js';

const ReadMore = (props) => {
  const handleMouseOver = () => {
    style.showReviews = {
      color: '#A61D55',
      textDecoration: 'underline'
    }
    console.log(style.showReviews.textDecoration)
  }
  var numberOfReviews = props.reviews.length;
  if (props.showMoreButton) {
    return (
      <a href='#' style={style.showReviews} onClick={props.handleSwitch} onMouseOver={handleMouseOver.bind(this)}>Read all {numberOfReviews} reviews</a>
    )
  } else {
    return (
      <a href='#' style={style.showReviews} onClick={props.handleSwitch}>Hide all reviews</a>
    )
  }
};
export default ReadMore;