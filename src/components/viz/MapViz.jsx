'use strict';
import React from 'react';
import Header from 'components/layout/Header';
import AltContainer from 'alt-container';
import MeetupStore from 'stores/MeetupStore';
import MapVizModel from 'components/viz/MapVizModel';

export const MapViz = React.createClass({

  displayName: 'MapViz',

  getDefaultProps() {
    return {
      lastRSVP: {},
      rsvpCount: 0
    }
  },

  componentDidMount() {
    this._map = MapVizModel.render({ mapSelector: 'map-viz' });
  },

  componentWillReceiveProps(nextProps) {
    if(nextProps.lastRSVP.hasOwnProperty('venue')) {
      const
        {lat, lon} = nextProps.lastRSVP.venue,
        marker = MapVizModel.addMarker({ map: this._map, lat, lon }),
        removeAfter = 90 * 1000;
      setTimeout(() => MapVizModel.removeMarker({map: this._map, marker}), removeAfter);
    }
  },

  render() {

    return (
      <div className='map-viz'>
        <div id='map-viz'></div>
      </div>
    );
  }

});

export default MapViz;
