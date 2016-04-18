'use strict';
import React from 'react';
import Header from 'components/Header';
import ChartViz from 'components/viz/ChartViz';
import MapViz from 'components/viz/MapViz';
import Footer from 'components/Footer';
import MeetupActions from 'flux/MeetupActions';
import MeetupStore from 'flux/MeetupStore';
import AltContainer from 'alt-container';

const DashboardDumb = React.createClass({

  displayName: 'DashboardDumb',

  render() {

    return (
      <main>
        <div>
          <Header />
        </div>
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

const DashboardSmart = React.createClass({

  displayName: 'DashboardSmart',

  componentWillMount() {
    const socket = new WebSocket('ws://stream.meetup.com/2/rsvps');
    socket.onmessage = function(message) {
      const rsvp = JSON.parse(message.data);
      MeetupActions.addRSVP(rsvp);
    };
  },

  render() {
    return (
      <AltContainer stores={{MeetupStore}}>
        <DashboardDumb />
      </AltContainer>
    );
  }

});

export default DashboardSmart;
