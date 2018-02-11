import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MessageForm extends Component {

  static propTypes = {
    handleClick: PropTypes.function

  };

  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  render() {
    return (
      <div className="message-form">
        <input onChange={this.onChange} type="text" value={this.state.message}/>
        <button onClick={() => this.props.handleClick(this.state.message)}>
          Send
        </button>
      </div>
    );
  }

}

export default MessageForm;
