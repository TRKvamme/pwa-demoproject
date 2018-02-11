import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addPost } from '../creators'

class MessageForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      post: {
        user: props.user,
        message: ''
      }
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      post: {
        user: this.props.user,
        message: e.target.value
      }
    });
  }

  render() {
    return (
      <div className="message-form">
        <input onChange={this.onChange} type="text" value={this.state.message} />
        <button onClick={() => this.props.addPost(this.state.post)}>
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
