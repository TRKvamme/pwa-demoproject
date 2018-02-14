import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageForm from './MessageForm';
import Message from './Message';

class MessageBox extends Component {
  render() {
    const messagelist = this.props.messages.map((e, i) =>
      <Message key={i} sender={e.sender} message={e.message} />
    );

    return (
      <main>
        <section className="message-field" id="message-field">
          <ul>
            {messagelist}
          </ul>
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
