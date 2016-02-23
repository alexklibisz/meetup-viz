'use strict';
import alt from 'services/Alt';
import MeetupActions from 'actions/MeetupActions';

// TODO: do the non-class syntax for stores/actions to make it clear
// how this is actually working.

class MeetupStore {
  constructor() {
    this.state = {
      rsvps: {},
      rsvpCount: 0,
      rsvpStates: {},
      rsvpCountries: {},
      rsvpNames: {}
    };
    this.bindActions(MeetupActions);
  }

  onAddRSVP(rsvp) {
    const
      {rsvps, rsvpCount, rsvpStates, rsvpCountries, rsvpNames} = this.state,
      data = JSON.parse(rsvp.data),
      country = data.group.group_country,
      state = data.group.group_state,
      name = data.member.member_name;

    rsvps[data.rsvp_id] = data;
    rsvpStates[state] = rsvpStates.hasOwnProperty(state) ? rsvpStates[state] + 1 : 1;
    rsvpCountries[country] = rsvpCountries.hasOwnProperty(country) ? rsvpCountries[country] + 1 : 1;
    rsvpNames[name] = rsvpNames.hasOwnProperty(name) ? rsvpNames[name] + 1 : 1;

    this.setState({ rsvps, rsvpCount: rsvpCount + 1, rsvpStates, rsvpCountries, rsvpNames });
  }
}

export default alt.createStore(MeetupStore, 'MeetupStore');
