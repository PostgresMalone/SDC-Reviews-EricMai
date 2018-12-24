import React from 'react';
import ReadMoreAndLess from 'react-read-more-less';
const Review = (props) => {
  var reviewerName = props.reviews.reviewerName;
  var content = props.reviews.content;
  var reviewerPic = props.reviews.reviewerPicture;
  var hostName = props.hostName;
  return (
    <div>
      < div className="review-title" >
        <img className="reviewer-picture" src={`${reviewerPic}`} alt="profile picture" height="42" width="42" />
        {reviewerName}
      </div >
      <div>
        <ReadMoreAndLess className="read-more-content" charLimit={250} readMoreText="Read more" readLessText="Read less">
          {content}
        </ReadMoreAndLess>
      </div>

    </div>
  );
};

export default Review;