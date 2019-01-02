const wrapper = {
  fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important',
  color: '#484848',
  marginLeft: '2%',
  padding: '1%',
}

const textContentWrapper = {
  marginBottom: '20px',
}

const commentWrapper = {
  fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important',
  color: '#484848',
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto auto auto',
  gridTemplateRows: 'auto',

}
const reviewsTitle = {
  fontSize: '22px',
  fontWeight: '600',
  wordWrap: 'break-word',
  fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
  color: '#484848',
  marginBottom: '2%'
}
const reviewTitle = {
  fontSize: '16px',
  fontWeight: '600',
  fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
  color: '#484848',
  gridColumnStart: '2',
  gridColumnEnd: '3',
}

const borderBottom = {
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: '#EBEBEB',
  marginTop: '20px',
}

const reviewList = {
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gridGap: '30px',
  padding: '10px',
}

const readMoreText = {
  // color: '#A61D55',
  color: 'red'
}

const readMoreContent = {
  fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
  color: '#484848',
}

const reviewerPicture = {
  borderRadius: '50%',
  marginRight: '1em',
  justifySelf: 'end',
}

const showReviews = {
  color: '#A61D55',
  textDecoration: 'none'
}


const modalStyle = {
  width: '720px'
};

export default {
  wrapper,
  reviewsTitle,
  reviewTitle,
  reviewList,
  readMoreText,
  reviewerPicture,
  readMoreContent,
  showReviews,
  modalStyle,
  commentWrapper,
  textContentWrapper,
  borderBottom
};