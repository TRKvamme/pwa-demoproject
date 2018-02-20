import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Header extends Component {

  componentDidMount(){
    document.getElementById('header').addEventListener('touchmove', (e) => {
      e.preventDefault()
    })
  }

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  vibrate() {
    window.navigator.vibrate(200);
  }

  render() {
    return (
      <header id="header">
        <ul>
          <li>
            <img
              className="logo"
              src="img/icons/android-chrome-192x192.png"
              alt="Twibbler logo, A pear."
              onClick={() => this.vibrate()}
            />
          </li>
          <li><h1>{this.props.title}</h1></li>
          <li><p>{this.props.user}</p></li>
        </ul>
      </header>
    );
  }

}

export default Header;
