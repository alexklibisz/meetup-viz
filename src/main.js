'use strict';
// Setup fixes/polyfills for ES6/ES7
require('babel-polyfill');
Promise = require('bluebird');
Promise.onPossiblyUnhandledRejection(function(error) { throw error; });
Promise.config({ warnings: false });

require('skeleton-css/css/normalize.css');
require('skeleton-css/css/skeleton.css');

// Launch the app
require('components/Routes.jsx');
require('styles/index.scss');
