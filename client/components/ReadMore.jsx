import React from 'react';
import style from './style.css.js';

const ReadMore = (props) => {
  var numberOfReviews = props.reviews.length;
  if (props.showMoreButton) {
    return (
      <a name='reviewInput' style={style.showReviews} onClick={props.handleSwitch}>Show all {numberOfReviews} reviews</a>
    )
  } else {
    return (
      <a name='reviewInput' style={style.hideReviews} onClick={props.handleSwitch}>Hide all reviews</a>
    )
  }
};
export default ReadMore;