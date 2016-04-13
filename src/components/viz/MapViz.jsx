'use strict';
import React from 'react';
import MapVizModel from 'components/viz/MapVizModel';

const MapViz = React.createClass({

  displayName: 'MapViz',

  propTypes: {
    last: React.PropTypes.object
  },

  getDefaultProps() {
    return {
      last: {}
    };
  },

  componentDidMount() {
    this._map = MapVizModel.render({ mapSelector: 'map-viz' });
  },

  componentWillReceiveProps(nextProps) {
    const
      lat = nextProps.last.group.group_lat,
      lon = nextProps.last.group.group_lon,

      marker = MapVizModel.addMarker({ map: this._map, lat, lon }),

      removeAfter = 90 * 1000;

    setTimeout(() => MapVizModel.removeMarker({ map: this._map, marker }), removeAfter);
    
  },

  render() {

    return (
      <div id='map-viz'></div>
    );
  }

});

export default MapViz;
