import React, { Component } from 'react';
import Header from './components/Header';
import MessageBox from './components/MessageBox';
import { connect } from 'react-redux';

class App extends Component {


  render() {
    return (
      <div className="container">
        <Header title="Twibbler" user={this.props.user} />
        <MessageBox user={this.props.user} messages={this.props.messages} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    messages: state.messages,
  }
}

export default connect(mapStateToProps, null)(App);
