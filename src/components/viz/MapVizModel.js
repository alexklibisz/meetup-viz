'use strict';

const model = {};

// TODO: specific link to the leaflet example for setting up the map.

/**
 * Render function takes a mapSelector, which should be an element id.
 * The leaflet map is set up with open street map tiles and the map is returned.
 */
model.render = function render({ mapSelector }) {

  // Configure Open Street Map tiles as the base map layer.
  const
    osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    osm = new L.TileLayer(osmUrl, {minZoom: 3, maxZoom: 14, attribution: osmAttrib});

  // Define the leaflet map and attach the OSM layer.
  const map = new L.Map(mapSelector);
  map.addLayer(osm);

  // Map settings.
  map.setView(new L.LatLng(30, -40), 3);
  map.scrollWheelZoom.disable();

  // Set the map size equivalent its container
  // http://stackoverflow.com/questions/10762984/leaflet-map-not-displayed-properly-inside-tabbed-panel
  setTimeout(() => L.Util.requestAnimFrame(map.invalidateSize, map, false, map._container), 100);

  return map;
};

/**
 * Create marker with lat and lon, add as a layer to the map, return the marker.
 * @param {[type]} {   map           [description]
 * @param {[type]} lat [description]
 * @param {[type]} lon }             =             {} [description]
 */
model.addMarker = function addMarker({ map, lat, lon } = {}) {
  const marker = new L.Marker([lat, lon]);
  map.addLayer(marker);
  return marker;
};

/**
 * Remove the marker that was created as a layer.
 */
model.removeMarker = function removeMarker({ map, marker }) {
  map.removeLayer(marker);
}

export default model;
