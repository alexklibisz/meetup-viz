'use strict';
import React from 'react';
import AltContainer from 'alt-container';
import MapVizModel from 'components/viz/MapVizModel';

export const MapViz = React.createClass({

  displayName: 'MapViz',

  getDefaultProps() {
    return {
      lastRSVP: {},
      rsvpCount: 0
    }
  },

  // Render the map when the component mounts.
  // Assign it to the _map variable to be used in other functions.
  componentDidMount() {
    this._map = MapVizModel.render({ mapSelector: 'map-viz' });
  },

  // Check if the nextProps.lastRSVP object has a venue property.
  // If it does, grab the latitude and longitude and append a marker
  // to the map. Remove the marker after 90 seconds.
  componentWillReceiveProps(nextProps) {
    if(nextProps.lastRSVP.venue === undefined) return;
    const
      {lat, lon} = nextProps.lastRSVP.venue,
      marker = MapVizModel.addMarker({ map: this._map, lat, lon }),
      removeAfter = 90 * 1000;
    setTimeout(() => MapVizModel.removeMarker({map: this._map, marker}), removeAfter);
  },

  render() {
    return (<div id='map-viz'></div>);
  }

});

export default MapViz;
