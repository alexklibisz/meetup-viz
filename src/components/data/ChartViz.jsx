'use strict';
import React from 'react';
import Header from 'components/layout/Header';
import ChartVizModel from 'components/data/ChartVizModel';

export const ChartViz = React.createClass({

  displayName: 'ChartViz',

  getDefaultProps() {
    return {
      vizID: 'chart-viz-svg'
    }
  },

  componentDidMount() {
    const sampleData = [{
      key: 'Stuff',
      values: [
        {
          label: 'Stuff 1',
          value: 30
        },
        {
          label: 'Stuff 2',
          value: 40
        }
      ]
    }];

    ChartVizModel.init({
      svgSelector: this.props.vizID,
      data: sampleData
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
