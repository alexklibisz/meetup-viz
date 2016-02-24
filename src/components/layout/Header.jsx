'use strict';
import React from 'react';

export const Header = React.createClass({

  render() {
    return (
      <div className='header'>
        <h2>Meetup Visualization</h2>
        <span>Developed by Alex Klibisz; uses the Meetup.com open events API.</span>
      </div>
    );
  }

});

export default Header;
