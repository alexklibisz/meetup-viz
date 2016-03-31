'use strict';
import alt from 'flux/Alt';

// TODO: non-class implementation for actions.

class MeetupActions {
  constructor() {
    this.generateActions(
      'addRSVP'
    );
  }
}

export default alt.createActions(MeetupActions);
