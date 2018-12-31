import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import ReadMore from './ReadMore.jsx';
import style from './style.css.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      showModal: false,
      showMoreButton: true,
    };
    this.handleSwitch = this.handleSwitch.bind(this);
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

  handleSwitch() {
    this.setState({
      showModal: !this.state.showModal,
      showMoreButton: !this.state.showMoreButton
    })
  }

  componentDidMount() {
    this.getReviews();
  }

  render() {
    return (
      <div style={style.wrapper} >
        <div style={style.reviewsTitle}>
          Reviews
        </div>
        <ReviewList reviews={this.state.reviews} showModal={this.state.showModal} />
        <ReadMore showMoreButton={this.state.showMoreButton} handleSwitch={this.handleSwitch} />
      </div>
    );
  }
}

export default App;




