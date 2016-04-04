'use strict';
import Alt from 'flux/Alt';

export default Alt.createActions({
  addRSVP(item) {
    return item;
  }
});

// Simple actions can be written in shorthand as:
// const MeetupActions = alt.generateActions('addRSVP');
