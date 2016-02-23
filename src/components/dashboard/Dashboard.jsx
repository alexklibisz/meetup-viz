'use strict';
import React from 'react';
import Header from 'components/layout/Header';
import ChartViz from 'components/data/ChartViz';
import MapViz from 'components/data/MapViz';
import DataAggregate from 'components/data/DataAggregate';

export const Dashboard = React.createClass({

  render() {
    return (
      <div>
        <Header/>
        <div>
          <MapViz/>
          <ChartViz/>
        </div>
        <div>
          <DataAggregate/>
        </div>
      </div>
    );
  }

});

export default Dashboard;
