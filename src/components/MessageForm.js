import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../creators'

class MessageForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.onChange = this.onChange.bind(this);
  }
  componentWillMount() {
    // MEANSPIRITED KEYLOGGER, ROAR!
    document.addEventListener('keypress', (e) => {
      let key = e.which || e.keyCode;
      if (key === 13) {
        this.postMessage();
      }
    });
  }

  onChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  getMessage() {
    return {
      sender: this.props.user,
      message: this.state.message
    }
  }

  postMessage() {
    this.props.addPost(this.getMessage())
    this.setState({ message: '' })
    let element = document.getElementById("message-field");
    if (element.scrollHeight) {
      element.scrollTop = (element.scrollHeight);
    }
  }

  render() {
    return (
      <div className="message-form">
        <input id="messagetext"
          onChange={this.onChange}
          type="text"
          value={this.state.message}
          placeholder="How are you feeling today?"
        />
        <button onClick={() => this.postMessage()}>
          Send
        </button>
      </div>
    );
  }

}

MessageForm.propTypes = {
  addPost: PropTypes.function,
}

function mapDispatchToProps(dispatch) {
  return {
    addPost: (post) => addPost(dispatch, post),
  }
}

export default connect(null, mapDispatchToProps)(MessageForm);
