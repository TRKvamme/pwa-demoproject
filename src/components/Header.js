import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Header extends Component {

  static propTypes = {
    title: PropTypes.string
  };

  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
      </header>
    );
  }

}

export default Header;
