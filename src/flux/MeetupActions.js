'use strict';
import Alt from 'flux/Alt';

export default Alt.createActions({
  addRSVP(rsvp) {
    return rsvp;
  }
});

// Simple actions can be written in shorthand as:
// const MeetupActions = Alt.generateActions('addRSVP');
