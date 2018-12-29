import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Review from './Review.jsx'

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    var reviewList = [];
    var reviews = this.props.reviews;
    if (this.props.reviews.length !== 0) {
      for (var i = 0; i < reviews.length; i++) {
        reviewList.push(<Review review={reviews[i]} key={i} />);
      }
    }
    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Read all reviews
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Reviews</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {reviewList}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ReviewModal;
