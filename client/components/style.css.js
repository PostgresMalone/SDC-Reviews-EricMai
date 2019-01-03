const wrapper = {
  fontFamily: 'system-ui',
  color: '#484848',
  marginLeft: '2%',
  padding: '1%',
  fontWeight: '100'
}

const reviewContentWrapper = {
  // fontFamily: 'system-ui',
  marginBottom: '10px',
  gridColumnStart: '1',
  gridColumnEnd: '3',
  gridRowStart: '2',
}

const commentWrapper = {
  fontFamily: 'system-ui',
  fontSize: '15px',
  color: '#484848',
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto auto auto',
  gridTemplateRows: 'auto auto auto ',
  marginBottom: '10px'
}

const commentComponent = {
  // fontFamily: 'system-ui',
  marginBottom: '10px',
  gridColumnStart: '1',
  gridRowStart: '3',
  marginLeft: '20px',
}
const reviewsTitle = {
  fontSize: '22px',
  fontWeight: '600',
  wordWrap: 'break-word',
  fontFamily: 'system-ui',
  color: '#484848',
  marginBottom: '2%',
}
const reviewTitle = {
  fontSize: '16px',
  fontWeight: '600',
  fontFamily: 'system-ui',
  color: '#484848',
  display: 'inline-block'
}

const borderBottom = {
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: '#EBEBEB',
  marginTop: '20px',
  // gridRowStart: '4',
  gridColumnStart: '1',
  gridColumnEnd: '4',
}

const reviewList = {
  // fontFamily: 'system-ui',
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gridGap: '10px',
  // padding: '10px',
}

const readMoreText = {
  color: '#A61D55',
}

const reviewerPicture = {
  borderRadius: '50%',
  marginTop: '1em',
  marginRight: '1em',
  justifySelf: 'end',
  display: 'inline-block'
}

const showReviews = {
  fontFamily: 'system-ui',
  color: '#A61D55',
  textDecoration: 'none'
}

const modalStyle = {
  fontFamily: 'system-ui',
  width: '720px'
};

export default {
  wrapper,
  reviewsTitle,
  reviewTitle,
  reviewList,
  readMoreText,
  reviewerPicture,
  showReviews,
  modalStyle,
  commentWrapper,
  borderBottom,
  reviewContentWrapper,
  commentComponent,
};