'use strict';

const service = {};

service.getRSVPSocket = function getSocket(socketURL = 'ws://stream.meetup.com/2/rsvps') {
  if(!window.hasOwnProperty('WebSocket')) {
    const error = new Error('web sockets are not supported by your browser');
    console.error(error);
    alert(error.toString());
    return null;
  }
  const ws = new WebSocket(socketURL);
  ws.onopen = () => {};
  ws.onmessage = (event) => {};
  ws.onclose = () => {};
  return ws;
};

export default service;
