'use strict';
import alt from 'services/Alt';

class MeetupActions {
  constructor() {
    this.generateActions(
      'addRSVP'
    );
  }
}

export default alt.createActions(MeetupActions);
