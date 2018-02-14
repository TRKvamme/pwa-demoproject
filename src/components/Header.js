import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Header extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <header>
        <ul>
          <li>
            <img
              className="logo"
              src="img/icons/android-chrome-192x192.png"
              alt="Twibbler logo, A pear."
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
