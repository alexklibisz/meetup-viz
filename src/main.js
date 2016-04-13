'use strict';
// Pulling in Google Analytics for all the page views.
require('./ga.js');
// Pulling the scss stylesheet, applied at runtime to the page.
require('./styles/index.scss');
// Pulling in the root component.
require('./components/Root.jsx');


window.onerror = function (message, source, lineno, colno, error) {
  const report = { message, source, lineno, colno, error };
  localStorage.setItem('crashReport', JSON.stringify(report));
};
