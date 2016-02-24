'use strict';
import React from 'react';
import Header from 'components/layout/Header';
import ChartVizModel from 'components/data/ChartVizModel';

export const ChartViz = React.createClass({

  displayName: 'ChartViz',

  getDefaultProps() {
    return {
      vizID: 'chart-viz-svg',
      chartName: 'Chart',
      dataValues: [
        {
          label: 'Stuff 1',
          value: 30
        },
        {
          label: 'Stuff 2',
          value: 40
        }
      ],
      columnCount: 10
    }
  },

  componentDidMount() {

  },

  componentDidUpdate() {
    const data = [{
      key: this.props.dataKey,
      values: this._convertDataValues(this.props.dataValues)
    }];

    ChartVizModel.render({
      svgSelector: this.props.vizID,
      data
    });
  },

  _convertDataValues(dataValues) {
    const
      all = Object.keys(dataValues)
      .map(key => {
        return {
          key,
          value: dataValues[key]
        };
      }),
      sortedByValue = all.sort((a, b) => b.value - a.value ),
      topColumns = sortedByValue.splice(0,this.props.columnCount);
      // sortedByName = topColumns.sort((a, b) => a.key.localeCompare(b.key));

    return topColumns;
  },

  render() {
    return (
      <div className='chart-viz' ref='container'>
        <svg id={this.props.vizID}></svg>
        <h6>{this.props.chartName}</h6>
      </div>
    );
  }

});

export default ChartViz;
