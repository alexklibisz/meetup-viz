'use strict';
import React from 'react';
import Header from 'components/layout/Header';
import AltContainer from 'alt-container';
import MeetupStore from 'stores/MeetupStore';
import MapVizModel from 'components/data/MapViz';

export const MapViz = React.createClass({

  displayName: 'MapViz',

  getDefaultProps() {
    return {
      lastRSVP: {},
      rsvpCount: 0
    }
  },

  componentDidMount() {
    const
      map = new L.Map('map-viz'),
      osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      osm = new L.TileLayer(osmUrl, {minZoom: 3, maxZoom: 14, attribution: osmAttrib});

  	map.setView(new L.LatLng(30, -40), 3);
    map.scrollWheelZoom.disable();
  	map.addLayer(osm);

    // Set the map size equivalent its container
    setTimeout(() => L.Util.requestAnimFrame(map.invalidateSize, map, false, map._container), 100);
    this._map = map;
  },

  componentWillReceiveProps(nextProps) {
    if(nextProps.lastRSVP.hasOwnProperty('venue')) {
      const
        latlng = [nextProps.lastRSVP.venue.lat, nextProps.lastRSVP.venue.lon],
        marker = new L.Marker(latlng, {draggable:true});
      this._map.addLayer(marker);
      setTimeout(() => this._map.removeLayer(marker), 90 * 1000);
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
