import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Message extends Component {
  render() {
    const owner = (this.props.sender === this.props.user);
    const sender = 'sender';
    const message = 'messagetext';
    return (
      <li className={(!owner) ?
        'inactive-user' : 'active-user'}>
          <div className={(!owner) ?
            sender + ' inactive-user' : sender + ' active-user'}>{this.props.sender}:</div>
          <p className={(!owner) ?
            message + ' inactive-user' : message + ' active-user'}>{this.props.message}</p>
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
