'use strict';
// Setup fixes/polyfills for ES6/ES7
require('babel-polyfill');
Promise = require('bluebird');
Promise.onPossiblyUnhandledRejection(function(error) { throw error; });
Promise.config({ warnings: false });

window.debugId = new Date().getTime();
window.onerror = function(message, source, lineno, colno, error) {
  ga('send', 'event', 'RSVPs', window.debugId, { message, source, error });
};

require('./styles/index.scss');
require('./components/Root.jsx');
