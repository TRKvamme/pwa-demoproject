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
    this.setState({ message: '' })
    this.props.addPost(this.getMessage())
  }

  render() {
    return (
      <div className="message-form">
        <input onChange={this.onChange} type="text" value={this.state.message} />
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
