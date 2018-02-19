import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageForm from './MessageForm';
import Message from './Message';

class MessageBox extends Component {
  
  render() {
    let prevSender = null
    const messagelist = this.props.messages.map((e, i) => {
      let msg = <Message key={i} sender={e.sender} message={e.message} prevSender={prevSender} />
      prevSender = e.sender
      return msg
    });

    return (
      <main>
        <section className="message-field" id="message-field">
          {messagelist}
        </section>
        <MessageForm user={this.props.user} />
      </main>
    );
  }
}

MessageBox.propTypes = {
  messages: PropTypes.array,
}

export default MessageBox;
