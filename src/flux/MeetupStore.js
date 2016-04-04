'use strict';
import Alt from 'flux/Alt';
import MeetupActions from 'flux/MeetupActions';

export default Alt.createStore({
  displayName: 'MeetupStore',

  bindListeners: {
    onAddRSVP: MeetupActions.addRSVP
  },

  state: {
    count: 0,
    states: {},
    countries: {},
    names: {},
    last: {}
  },

  onAddRSVP(rsvp) {
    const
      {count, states, countries, names} = this.state,
      data = JSON.parse(rsvp.data),
      country = data.group.group_country,
      state = data.group.group_state,
      name = data.member.member_name.split(' ').shift();

    if(state !== undefined) states[state] = states.hasOwnProperty(state) ? states[state] + 1 : 1;
    countries[country] = countries.hasOwnProperty(country) ? countries[country] + 1 : 1;
    names[name] = names.hasOwnProperty(name) ? names[name] + 1 : 1;
    this.setState({ count: count + 1, states, countries, names, last: data });
  }

});
