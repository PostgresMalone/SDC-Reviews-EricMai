import React from 'react';
import Review from './Review.jsx';

const ReadMore = (props) => {
  if (props.showMoreButton) {
    return (
      <a href='#' onClick={props.handleSwitch}>Show all reviews</a>
    )
  } else {
    return (
      <a href='#' onClick={props.handleSwitch}>Hide all reviews</a>
    )
  }
};
export default ReadMore;