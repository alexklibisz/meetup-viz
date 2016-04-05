'use strict';
import React from 'react';
import Header from 'components/Header';
import ChartViz from 'components/viz/ChartViz';
import MapViz from 'components/viz/MapViz';
import Footer from 'components/Footer';
import MeetupService from 'services/MeetupService';
import MeetupActions from 'flux/MeetupActions';
import MeetupStore from 'flux/MeetupStore';
import AltContainer from 'alt-container';
// import Perf from 'react-addons-perf';
// import Ax from 'axios';

export const Dashboard = React.createClass({

  displayName: 'Dashboard',

  render() {
    return (
      <main>
        <Header/>
        <div className='viz-container'>
          <div className='_map'>
            <MapViz last={this.props.MeetupStore.last} />
          </div>
          <div className='_charts'>
            <ChartViz vizID='barchart-countries'
              chartName='Most Frequent Countries'
              dataValues={this.props.MeetupStore.countries}/>
            <ChartViz vizID='barchart-states'
              chartName='Most Frequent States'
              dataValues={this.props.MeetupStore.states} />
            <ChartViz vizID='barchart-names'
              chartName='Most Frequent First Names'
              dataValues={this.props.MeetupStore.names}/>
          </div>
        </div>
        <div>
          <Footer count={this.props.MeetupStore.count}/>
        </div>
      </main>
    );
  }

});

// Perf.start();

export const SyncComponent = React.createClass({

  displayName: 'DashboardSyncComponent',

  componentWillMount() {
    const socket = MeetupService.getRSVPSocket();
    socket.onmessage = MeetupActions.addRSVP
  },

  // componentWillMount() {
  //   let count = 0, sessionId = new Date().getTime();
  //   const socket = MeetupService.getRSVPSocket();
  //   socket.onmessage = (data) => {
  //     if(count % 10 === 0) {
  //       Ax.post('http://localhost:5000/perf', {
  //         sessionId,
  //         storeState: MeetupStore.getState(),
  //         perf: Perf.getLastMeasurements()
  //       }).then((res) => console.log(res.data));
  //     }
  //     count += 1;
  //     MeetupActions.addRSVP(data);
  //   };
  // },

  // componentWillUnmount() {
  //   Perf.stop();
  // },

  render() {
    return (
      <AltContainer stores={{MeetupStore}}>
        <Dashboard />
      </AltContainer>
    );
  }

});

export default SyncComponent;
