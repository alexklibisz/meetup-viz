'use strict';
import Alt from 'flux/Alt';
import MeetupActions from 'flux/MeetupActions';

export default Alt.createStore({
  displayName: 'MeetupStore',

  state: {
    count: 0, // the number of RSVPs that we've gotten
    states: {}, // key/value { state1: n1, state2: n2, ... }
    countries: {}, // same as states
    names: {}, // same as states
    last: {} // the last RSVP object, only storing one at a time
  },

  bindListeners: {
    handleAddRSVP: MeetupActions.addRSVP
  },

  handleAddRSVP(rsvp) {
    // Get the current state properties.
    let {count, states, countries, names, last} = this.state;

    // Get the needed properties from the RSVP object.
    let
      country = rsvp.group.group_country,
      state = rsvp.group.group_state,
      name = rsvp.member.member_name.split(' ').shift();

    // Update the state values with the RSVP properties.
    count += 1;
    last = rsvp;

    if(countries.hasOwnProperty(country))
      countries[country] += 1;
    else
      countries[country] = 1;

    if(state !== undefined && states.hasOwnProperty(state))
      states[state] += 1;
    else if(state !== undefined)
      states[state] = 1;

    if(names.hasOwnProperty(name))
      names[name] += 1;
    else
      names[name] = 1;

    // Update the store state.
    this.setState({ count, states, countries, names, last });
  }

});
