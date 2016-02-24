'use strict';

const model = {};

model.render = function init({ svgSelector, data }) {

  svgSelector = svgSelector.charAt(0) === '#' ? svgSelector : `#${svgSelector}`;

  const
    svgElement = d3.select(svgSelector),
    height = svgElement.node().parentNode.offsetHeight - 25,
    width = svgElement.node().parentNode.offsetWidth;

  const chart = nv.models.discreteBarChart()
    .x(function(d) { return d.key })
    .y(function(d) { return d.value })
    .height(height)
    .width(width)
    .showValues(true);

  chart.tooltip.enabled = false;

  svgElement
    .datum(data)
    .call(chart);

};

export default model;
