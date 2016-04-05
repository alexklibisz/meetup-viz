'use strict';
import React from 'react';

const Footer = React.createClass({

  displayName: 'Footer',

  getDefaultProps() {
    return {
      count: 0
    };
  },

  propTypes: {
    count: React.PropTypes.number
  },

  render() {
    return (
      <div className='footer'>
        <span>RSVPs received: {this.props.count}</span>
      </div>
    );
  }
});

export default Footer;
