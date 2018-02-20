import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost, getPosts } from '../creators'

class MessageForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    Notification.requestPermission();
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
      setTimeout(() => this.scrollDown(), 50);
      if (this.props.messages.length > 0 &&
        newProps.messages[newProps.messages.length - 1].sender !== this.props.user) {
        this.vibrate()
        var audio = new Audio('notification.mp3');
        audio.play();
        this.notify(newProps.messages[newProps.messages.length - 1]);
      }
    }
  }

  notify(e) {
    const icon = 'img/icons/android-chrome-192x192.png';
    const options = {
      body: e.message,
      icon: icon
    }
    if (("Notification" in window)) {
      if (Notification.permission === "granted") {
        let notification = new Notification(e.sender,options);
        notification.onclick = function(){
          window.focus();
          this.close();
        };
      }
      else if (Notification.permission !== "denied") {
        Notification.requestPermission(function (e, options,permission) {
      if (permission === "granted") {
        let notification = new Notification(e.sender,options);
        notification.onclick = function(){
          window.focus();
          this.close();
        };
      }
    });
  }
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
          placeholder="Your message!"
        />
        <button onClick={() => this.postMessage()}>
          Send
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addPost: (post) => addPost(dispatch, post),
    getPosts: () => getPosts(dispatch),
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
