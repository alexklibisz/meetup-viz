'use strict';
import React from 'react';

export const DataAggregate = React.createClass({

  displayName: 'DataAggregate',

  propTypes: {
    rsvpCount: React.PropTypes.number
  },

  render() {

    const memoryUsed = window.performance.memory.usedJSHeapSize / 1000000;

    return (
      <div className='data-aggregate'>
        <span>RSVPs received: {this.props.rsvpCount}</span>,
        <span>&nbsp; memory used: {memoryUsed}</span>
      </div>
    );
  }

});

export default DataAggregate;
