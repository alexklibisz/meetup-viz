'use strict';
import React from 'react';
import Header from 'components/layout/Header';
import ChartViz from 'components/data/ChartViz';
import MapViz from 'components/data/MapViz';
import DataAggregate from 'components/data/DataAggregate';
import MeetupService from 'services/MeetupService';
import MeetupActions from 'actions/MeetupActions';
import MeetupStore from 'stores/MeetupStore';
import AltContainer from 'alt-container';

export const Dashboard = React.createClass({

  displayName: 'Dashboard',

  render() {
    return (
      <main>
        <Header/>
        <div className='viz-container'>
          <div className='_map'>
            <MapViz rsvps={this.props.MeetupStore.rsvps} rsvpCount={this.props.MeetupStore.rsvpCount}/>
          </div>
          <div className='_charts'>
            <ChartViz vizID='barchart-countries' dataKey='Countries' dataValues={this.props.MeetupStore.rsvpCountries}/>
            {
              /*
              <ChartViz vizID='barchart-states' />
              <ChartViz vizID='barchart-names' />
               */
            }
          </div>
        </div>
        <div>
          <DataAggregate rsvpCount={this.props.MeetupStore.rsvpCount}/>
        </div>
      </main>
    );
  }

});

export const SyncComponent = React.createClass({

  displayName: 'DashboardSyncComponent',

  componentWillMount() {
    const socket = MeetupService.getRSVPSocket();
    socket.onmessage = MeetupActions.addRSVP;
  },

  render() {
    return (
      <AltContainer stores={{MeetupStore}}>
        <Dashboard />
      </AltContainer>
    );
  }

});

export default SyncComponent;
