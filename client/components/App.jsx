import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import ReviewModal from './ReviewModal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  getReviews() {
    axios.get('/1/reviews')
      .then((data) => {
        this.setState({ reviews: data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getReviews();
  }

  render() {
    return (
      <div id='wrapper' >
        <div className='reviews-title'>
          Reviews
        </div>
        <ReviewList reviews={this.state.reviews} />
        <ReviewModal reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;




