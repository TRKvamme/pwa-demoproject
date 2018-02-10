import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageForm from './MessageForm';
import Message from './Message';

class MessageBox extends Component {

  static propTypes = {
    messages: PropTypes.array
  };

  constructor(props) {
    super(props);

    this.state = {
      messages: this.props.messages
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    
  }

  render() {
    const messagelist = this.props.messages.map((e,i) =>
        <Message key={i} sender={e.sender} message={e.message} />
    );

    return (
      <main>
        <section className="message-field">
        <ul>
          {messagelist}
        </ul>
        </section>
        <MessageForm />
      </main>
    );
  }

}

export default MessageBox;
