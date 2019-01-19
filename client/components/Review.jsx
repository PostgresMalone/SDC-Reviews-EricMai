import React from "react";
import axios from "axios";
import ReviewList from "./ReviewList.jsx";
import ReadMore from "./ReadMore.jsx";
import style from "./style.css.js";


class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      showModal: false,
      showMoreButton: true
    };
    this.handleSwitch = this.handleSwitch.bind(this);
    this.reviewInput = React.createRef();
  }

  getReviews() {
    axios
      .get("/reviews", {
        params:{
          id: window.location.href.split('/')[4],
          limit: 10
        }})
      .then(data => {
        this.setState({ reviews: data.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleSwitch() {
    this.setState({
      showModal: !this.state.showModal,
      showMoreButton: !this.state.showMoreButton
    });
  }

  componentDidMount() {
    this.getReviews();
  }

  render() {
    return (
      <div style={style.wrapper}>
        <div ref={this.reviewInput} className="reviewInput">
          <ReviewList
            className="reviewList"
            reviews={this.state.reviews}
            showModal={this.state.showModal}
          />
          <ReadMore
            showMoreButton={this.state.showMoreButton}
            handleSwitch={this.handleSwitch}
            reviews={this.state.reviews}
          />
        </div>
      </div>
    );
  }
}

export default Review;
