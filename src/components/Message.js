import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Message extends Component {
  
  render() {
    const owner = (this.props.sender === this.props.user);

    return (
      <div className='message'>
        <div className={(owner) ? 'active-user' : 'inactive-user'}>

          {(this.props.sender === this.props.prevSender) ? '' : (
            <div className="messageSender">
              {this.props.sender}
            </div>
          )}

          <div className="messageText">
            {this.props.message}
          </div>

        </div>
      </div>
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
