'use strict';
import React from 'react';

export const DataAggregate = React.createClass({

  displayName: 'DataAggregate',

  propTypes: {
    rsvpCount: React.PropTypes.number
  },

  render() {

    return (
      <div className='data-aggregate'>
        <span>RSVPs received: {this.props.rsvpCount}</span>
      </div>
    );
  }

});

export default DataAggregate;
