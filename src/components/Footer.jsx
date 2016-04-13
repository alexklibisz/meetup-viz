'use strict';
import React from 'react';

const Footer = React.createClass({

  displayName: 'Footer',

  propTypes: {
    count: React.PropTypes.number
  },

  getDefaultProps() {
    return {
      count: 0
    };
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
