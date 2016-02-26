'use strict';
import React from 'react';

export const DataAggregate = React.createClass({

  displayName: 'DataAggregate',

  propTypes: {
    rsvpCount: React.PropTypes.number
  },

  render() {

    const
      perf = window.performance,
      memoryUsed = (perf.memory !== undefined) ? perf.memory.usedJSHeapSize / 1000000 : -1;

    return (
      <div className='data-aggregate'>
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

export default DataAggregate;
