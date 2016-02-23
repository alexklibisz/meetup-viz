'use strict';
import React from 'react';
import Header from 'components/layout/Header';
import AltContainer from 'alt-container';
import MeetupStore from 'stores/MeetupStore';

export const MapViz = React.createClass({

  displayName: 'MapViz',

  render() {

    return (
      <div className='map-viz'>
        Map Viz
      </div>
    );
  }

});

export const SyncComponent = React.createClass({

  displayName: 'SyncComponent',

  render() {
    return(
      <AltContainer stores={{MeetupStore}}>
        <MapViz />
      </AltContainer>
    );
  }

})

export default SyncComponent;
