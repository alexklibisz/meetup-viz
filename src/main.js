'use strict';
// Setup fixes/polyfills for ES6/ES7
require('babel-polyfill');
Promise = require('bluebird');
Promise.onPossiblyUnhandledRejection(function(error) { throw error; });
Promise.config({ warnings: false });

require('./styles/index.scss');
require('./components/Root.jsx');
