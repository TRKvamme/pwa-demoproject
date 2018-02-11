import React, { Component } from 'react';
import Header from './components/Header';
import MessageBox from './components/MessageBox';

import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header title="Twibbler" />
        <MessageBox messages={this.props.messages} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
  }
}

export default connect(mapStateToProps)(App);
