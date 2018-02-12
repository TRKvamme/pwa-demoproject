import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Message extends Component {
  render() {
    const owner = (this.props.sender === this.props.user);
    const sender = 'sender';
    const message = 'messagetext';
    return (
      <li>
        <div className="message">
          <div className={(owner) ?
            sender : sender + ' active'}>{this.props.sender}:</div>
          <div className={(owner) ?
            message : message + ' active'}><p>{this.props.message}</p></div>
        </div>
      </li>
    );
  }
}

Message.propTypes = {
  sender: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Message);
