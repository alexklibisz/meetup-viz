'use strict';
import alt from 'services/Alt';
import MeetupActions from 'actions/MeetupActions';

// TODO: do the non-class syntax for stores/actions to make it clear
// how this is actually working.

class MeetupStore {
  constructor() {
    this.state = {
      rsvpCount: 0,
      rsvpStates: {},
      rsvpCountries: {},
      rsvpNames: {},
      lastRSVP: {}
    };
    this.bindActions(MeetupActions);
  }

  onAddRSVP(rsvp) {
    const
      {rsvpCount, rsvpStates, rsvpCountries, rsvpNames} = this.state,
      data = JSON.parse(rsvp.data),
      country = data.group.group_country,
      state = data.group.group_state,
      name = data.member.member_name.split(' ').shift().toLowerCase() || 'N/A';

    if(state !== undefined) {
      rsvpStates[state] = rsvpStates.hasOwnProperty(state) ? rsvpStates[state] + 1 : 1;
    }
    rsvpCountries[country] = rsvpCountries.hasOwnProperty(country) ? rsvpCountries[country] + 1 : 1;
    rsvpNames[name] = rsvpNames.hasOwnProperty(name) ? rsvpNames[name] + 1 : 1;

    this.setState({ rsvpCount: rsvpCount + 1, rsvpStates, rsvpCountries, rsvpNames, lastRSVP: data });
  }
}

export default alt.createStore(MeetupStore, 'MeetupStore');
