'use strict';
import alt from 'flux/Alt';

class MeetupActions {
  constructor() {
    this.generateActions(
      'addRSVP'
    );
  }
}

export default alt.createActions(MeetupActions);
