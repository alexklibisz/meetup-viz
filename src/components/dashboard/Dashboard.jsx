'use strict';
import React from 'react';
import Header from 'components/layout/Header';
import ChartViz from 'components/data/ChartViz';
import MapViz from 'components/data/MapViz';
import DataAggregate from 'components/data/DataAggregate';

export const Dashboard = React.createClass({

  render() {
    return (
      <main>
        <Header/>
        <div className='viz-container'>
          <MapViz/>
          <ChartViz/>
        </div>
        <div>
          <DataAggregate/>
        </div>
      </main>
    );
  }

});

export default Dashboard;
