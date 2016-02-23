'use strict';
import React from 'react';
import Header from 'components/layout/Header';
import AltContainer from 'alt-container';
import MeetupStore from 'stores/MeetupStore';

export const MapViz = React.createClass({

  displayName: 'MapViz',

  getDefaultProps() {
    return {
      rsvps: {},
      rsvpCount: 0
    }
  },

  render() {

    return (
      <div className='map-viz'>
        <p>The map will go here</p>
      </div>
    );
  }

});

export default MapViz;
