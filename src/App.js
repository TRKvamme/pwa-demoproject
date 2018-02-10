import React, { Component } from 'react';
import Header from './components/Header';
import MessageBox from './components/MessageBox';

class App extends Component {

  constructor(props) {
    super(props)

// Hardcoded messages
    this.state = {
      messages: [{
        sender:'Steve',
        message:'Hello!'
      },
      {
        sender:'Bill',
        message:'Hi Steve, how are you?'
      },
      {
        sender:'Steve',
        message:'Dead.'
      }],
      username: 'Bill'
    }
  }

  render() {
    return (
      <div className="container">
        <Header title="Twibbler" />
        <MessageBox messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
