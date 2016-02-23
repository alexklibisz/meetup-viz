'use strict';

const model = {};

model.init = function init({ svgSelector, data }) {

  svgSelector = svgSelector.charAt(0) === '#' ? svgSelector : `#${svgSelector}`;

  const chart = nv.models.discreteBarChart()
    .x(function(d) { return d.label })
    .y(function(d) { return d.value })
    // .height(containerNode.parentNode.offsetHeight)
    // .width(this.refs.container.parentNode.offsetWidth);

  d3.select(svgSelector)
    .datum(data)
    .call(chart);

};

model.update = function update({ svgSelector, data }) {

};

export default model;