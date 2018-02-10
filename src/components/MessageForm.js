import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MessageForm extends Component {

  static propTypes = {
    handleClick: PropTypes.function

  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="message-form">
        <input type="text" onClick={this.props.handleClick}/>
        <button >Send</button>
      </div>
    );
  }

}

export default MessageForm;
