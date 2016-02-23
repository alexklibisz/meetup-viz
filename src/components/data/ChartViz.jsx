'use strict';
import React from 'react';
import Header from 'components/layout/Header';
import ChartVizModel from 'components/data/ChartVizModel';

export const ChartViz = React.createClass({

  displayName: 'ChartViz',

  getDefaultProps() {
    return {
      vizID: 'chart-viz-svg',
      dataKey: 'Stuff',
      dataValues: [
        {
          label: 'Stuff 1',
          value: 30
        },
        {
          label: 'Stuff 2',
          value: 40
        }
      ]
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
    return Object.keys(dataValues).map(key => {
      return {
        key,
        value: dataValues[key]
      };
    });
  },

  render() {
    return (
      <div className='chart-viz' ref='container'>
        <svg id={this.props.vizID}></svg>
      </div>
    );
  }

});

export default ChartViz;
