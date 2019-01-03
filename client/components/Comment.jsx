import React from 'react';
import ReadMoreAndLess from 'react-read-more-less';
import style from './style.css.js';
const Comment = (props) => {
  var hostComment = props.review.hostComment
  var hostName = props.review.hostName;
  var hostPicture = props.review.hostPicture;
  var createdAt = new Date(props.review.createdAt);

  var monthList = new Array();
  monthList[0] = "January";
  monthList[1] = "February";
  monthList[2] = "March";
  monthList[3] = "April";
  monthList[4] = "May";
  monthList[5] = "June";
  monthList[6] = "July";
  monthList[7] = "August";
  monthList[8] = "September";
  monthList[9] = "October";
  monthList[10] = "November";
  monthList[11] = "December";

  var month = monthList[createdAt.getMonth()];
  var year = createdAt.getFullYear();
  return (
    <div style={style.commentWrapper}>
      <img style={style.reviewerPicture} src={`${hostPicture}`} alt="profile picture" height="42" width="42" />
      <div>
        <div className='reviewTitle' style={style.reviewTitle}>
          <p>Response from {hostName}</p>
          <p style={{ fontWeight: '100' }}>{month} {year}</p>
        </div>
        <ReadMoreAndLess style={style.readMoreText} charLimit={50} readMoreText="Read more" readLessText="Read less">
          {hostComment}
        </ReadMoreAndLess>
      </div>
    </div>
  );
};

export default Comment;