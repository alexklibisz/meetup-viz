'use strict';
// Setup fixes/polyfills for ES6/ES7
require('babel-polyfill');
Promise = require('bluebird');
Promise.onPossiblyUnhandledRejection(function(error) { throw error; });
Promise.config({ warnings: false });

require('normalize.css/normalize.css');
require('nvd3/build/nv.d3.css');

window.d3 = require('d3');
window.nv = require('nvd3');

require('styles/index.scss');
require('components/Routes.jsx');
