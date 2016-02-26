'use strict';

const model = {};

model.render = function render({ mapSelector }) {
  const
    map = new L.Map(mapSelector),
    osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    osm = new L.TileLayer(osmUrl, {minZoom: 3, maxZoom: 14, attribution: osmAttrib});

  map.setView(new L.LatLng(30, -40), 3);
  map.scrollWheelZoom.disable();
  map.addLayer(osm);

  // Set the map size equivalent its container
  setTimeout(() => L.Util.requestAnimFrame(map.invalidateSize, map, false, map._container), 100);

  return map;
};

model.addMarker = function render({ map, lat, lon } = {}) {
  const marker = new L.Marker([lat, lon]);
  map.addLayer(marker);
  return marker;
};

model.removeMarker = function removeMarker({ map, marker }) {
  map.removeLayer(marker);
}

export default model;
