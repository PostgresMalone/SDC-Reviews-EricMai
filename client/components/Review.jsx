import React from 'react';
import ReadMoreAndLess from 'react-read-more-less';
import style from './style.css.js';
const Review = (props) => {
  var reviewerName = props.review.reviewerName;
  var content = props.review.content;
  var reviewerPic = props.review.reviewerPicture;
  var hostName = props.review.hostName;

  return (
    <div style={style.wrapper}>
      <div style={style.reviewTitle}>
        <img style={style.reviewerPicture} src={`${reviewerPic}`} alt="profile picture" height="42" width="42" />
        {reviewerName}
      </div>
      <div>
        <ReadMoreAndLess charLimit={250} readMoreText="Read more" readLessText="Read less">
          {content}
        </ReadMoreAndLess>
      </div>
    </div>
  );
};

export default Review;