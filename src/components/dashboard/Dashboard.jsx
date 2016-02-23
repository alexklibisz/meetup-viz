'use strict';
import React from 'react';
import Header from 'components/layout/Header';
import ChartViz from 'components/data/ChartViz';
import MapViz from 'components/data/MapViz';
import DataAggregate from 'components/data/DataAggregate';
import MeetupService from 'services/MeetupService';
import MeetupActions from 'actions/MeetupActions';

export const Dashboard = React.createClass({

  displayName: 'Dashboard',

  componentWillMount() {
    const socket = MeetupService.getSocket();
    socket.onmessage = MeetupActions.addRSVP;
  },

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
