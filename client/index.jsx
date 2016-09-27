import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import ReactMixin from 'react-mixin';
import navbarInstance from '../imports/ui/navbar.jsx';
import '../imports/ui/map.jsx';

var Test = React.createClass({
    render() {
      return (
        <div>THIS SUCKS</div>
      );
    }
});

if (Meteor.isClient) {
  Meteor.startup(() => {
    GoogleMaps.load();
    render(navbarInstance, document.getElementById('nav'));
    render(<Test />, document.getElementById('app'));
  });
}
