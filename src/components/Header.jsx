'use strict';
import React from 'react';

const Header = React.createClass({

  displayName: 'Header',

  render() {

    return (
      <div className='header'>
        <h3>Meetup.com RSVP Visualization</h3>
        <span>Developed by <a href='http://alex.klibisz.com' target='_blank'>Alex Klibisz</a>;
          uses the <a href='http://www.meetup.com/meetup_api/docs/rsvp/' target='_blank'>
          Meetup.com open events RSVP API.</a></span>
      </div>
    );

  }
});

export default Header;
