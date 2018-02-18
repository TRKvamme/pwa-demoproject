import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost, getPosts } from '../creators'

class MessageForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.props.getPosts();
    this.onChange = this.onChange.bind(this);
  }

  scrollDown() {
    let element = document.getElementById("message-field");
    if (element.scrollHeight) {
      element.scrollTop = element.scrollHeight;
    };
  }

  vibrate() {
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if (navigator.vibrate) {
      window.navigator.vibrate(200);
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.props.getPosts();
    }, 3000);
    document.addEventListener('keypress', (e) => {
      let key = e.which || e.keyCode;
      if (key === 13) {
        this.postMessage();
      }
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.messages.length !== this.props.messages.length) {
      this.scrollDown()
      this.vibrate()
    }
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
    getPosts: () => getPosts(dispatch),
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
