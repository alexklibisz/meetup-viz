'use strict';
import React from 'react';

export const Footer = React.createClass({

  displayName: 'Footer',

  propTypes: {
    rsvpCount: React.PropTypes.number
  },

  render() {

    const
      perf = window.performance,
      memoryUsed = (perf.memory !== undefined) ? perf.memory.usedJSHeapSize / 1000000 : -1;

    return (
      <div className='footer'>
        <span>RSVPs received: {this.props.rsvpCount}</span>,
        {
          (memoryUsed > 0) ? (
            <span>&nbsp; memory used: {memoryUsed} mb</span>
          ) : null
        }
      </div>
    );
  }

});

export default Footer;
