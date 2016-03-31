'use strict';
import React from 'react';
import ChartVizModel from 'components/viz/ChartVizModel';

export const ChartViz = React.createClass({

  displayName: 'ChartViz',

  getDefaultProps() {
    return {
      vizID: 'chart-viz-svg',
      chartName: 'Chart',
      dataValues: [
        { label: 'Default 1', value: 30 },
        { label: 'Default 2', value: 40 }
      ],
      columnCount: 10
    }
  },

  componentDidUpdate() {
    const data = [{
      key: this.props.dataKey,
      values: this._convertDataValues(this.props.dataValues, this.props.columnCount)
    }];

    ChartVizModel.render({
      svgSelector: this.props.vizID,
      data
    });
  },

  /**
   * Convert the data passed in as a prop to the format
   * required by the NVD3 chart.
   * @param  {Object} dataValues Data passed in as a prop
   * @return {Array}            Array of form {key: 'some name', value: integer value} for the top columnCount columns.
   */
  _convertDataValues(dataValues, columnCount) {
    const
      all = Object.keys(dataValues).map(key => {
        return {
          key: key.toUpperCase(),
          value: dataValues[key]
        };
      }),
      sortedByValue = all.sort((a, b) => b.value - a.value),
      topColumns = sortedByValue.splice(0, columnCount);

    return topColumns;
  },

  render() {
    return (
      <div className='chart-viz' ref='container'>
        <svg id={this.props.vizID}></svg>
        <div className='_title'>{this.props.chartName}</div>
      </div>
    );
  }

});

export default ChartViz;
