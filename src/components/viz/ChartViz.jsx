'use strict';
import React from 'react';
import ChartVizModel from 'components/viz/ChartVizModel';

const ChartViz = React.createClass({

  displayName: 'ChartViz',

  propTypes: {
    chartName: React.PropTypes.string,
    dataValues: React.PropTypes.object,
    vizId: React.PropTypes.string,
    barCount: React.PropTypes.number
  },

  getDefaultProps() {
    return {
      vizID: 'chart-viz-svg',
      chartName: 'Chart',
      dataValues: { key1: 30, key2: 40 },
      barCount: 10
    };
  },

  componentDidUpdate() {
    const data = this._convertDataValues(this.props.dataValues, this.props.barCount);
    ChartVizModel.render({
      svgSelector: this.props.vizID,
      data
    });
  },

  _convertDataValues(dataValues, barCount) {
    const
      all = Object.keys(dataValues).map(key => {
        return {
          key: key.toUpperCase(),
          value: dataValues[key]
        }
      }),
      sortedByValue = all.sort((a,b) => b.value - a.value),
      topColumns = sortedByValue.splice(0, barCount);

    return [{
      values: topColumns
    }];
  },

  render() {

    return (
      <div className='chart-viz'>
        <svg id={this.props.vizID}></svg>
        <div className='_title'>{this.props.chartName}</div>
      </div>
    );
  }
});

export default ChartViz;
