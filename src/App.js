import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header title="Twibbler" />
      </div>
    );
  }
}

export default App;
