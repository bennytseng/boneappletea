import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import navbarInstance from './ui/navbar.jsx';

import GoogleMap from 'google-map-react';

Meteor.startup(() => {
  render(navbarInstance, document.getElementById('nav'));
  render(<Test />, document.getElementById('app'));
});

var Test = React.createClass({

  render() {
    return (
      <h1> oh god </h1>
    );
  }
});
