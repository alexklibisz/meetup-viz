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
      rsvps: {},
      rsvpCount: 0
    }
  },

  componentDidMount() {
    // var map = L.map('map-viz').setView([-10, 50], 3);
    // L.tileLayer('http://{s}.tiles.mapbox.com/v3/utkpiracyscience.n97d5l62/{z}/{x}/{y}.png', {
    //   maxZoom: 14
    // }).addTo(map);
    // map.scrollWheelZoom.disable();

    const
      map = new L.Map('map-viz'),
      osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      osm = new L.TileLayer(osmUrl, {minZoom: 3, maxZoom: 14, attribution: osmAttrib});

  	map.setView(new L.LatLng(30, -100), 4);
    map.scrollWheelZoom.disable();
  	map.addLayer(osm);

    setTimeout(() => L.Util.requestAnimFrame(this._map.invalidateSize,this._map,!1,this._map._container), 200);

    this._map = map;

  },

  componentDidUpdate() {
    ;
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
