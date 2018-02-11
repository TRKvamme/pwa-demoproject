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
      messages: this.props.messages,
      user: 'Bill'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let newmessages = this.state.messages
    newmessages.push({sender:this.state.user, message: e})
    this.setState({
        messages:newmessages
    });
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
        <MessageForm handleClick={this.handleClick}/>
      </main>
    );
  }

}

export default MessageBox;