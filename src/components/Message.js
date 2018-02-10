import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Message extends Component {

  static propTypes = {
    sender: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  };

  render() {
    const owner = (this.props.sender === 'Bill');
    const sender = 'sender';
    const message = 'messagetext';
    return (
      <li>
        <div className="message">
        <div className={(owner) ?
        sender : sender + ' active'}>{this.props.sender}:</div>
        <div className={(owner) ?
        message : message + ' active'}>{this.props.message}</div>
        </div>
      </li>
    );
  }

}

export default Message;
