'use strict';
import React from 'react';
import Header from 'components/layout/Header';
import AltContainer from 'alt-container';
import MeetupStore from 'stores/MeetupStore';

export const DataAggregate = React.createClass({

  displayName: 'DataAggregate',

  render() {

    const rsvpCount = this.props.MeetupStore.rsvpCount;

    return (
      <div className='data-aggregate'>
        <h4>RSVPs received: {rsvpCount}</h4>
      </div>
    );
  }

});

export const SyncComponent = React.createClass({

  displayName: 'SyncComponent',

  render() {
    return (
      <AltContainer stores={{MeetupStore}}>
        <DataAggregate/>
      </AltContainer>
    );
  }

});

export default SyncComponent;
