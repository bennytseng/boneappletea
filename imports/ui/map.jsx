import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import ReactMixin from 'react-mixin';
import { Markers } from '../../shared/markers.js'
import './map.html';

Template.map.helpers({
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(-37.8136, 144.9631),
        zoom: 8
      };
    }
  }
});

Template.map.onCreated(function() {
  GoogleMaps.ready('map', function(map) {
    google.maps.event.addListener(map.instance, 'click', function(event) {
      Markers.insert({ lat: event.latLng.lat(), lng: event.latLng.lng() });
    });
    var markers = {};

    Markers.find().observe({
      //create a marker for document
      added: function(document) {
        var marker = new google.maps.Marker({
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: new google.maps.LatLng(document.lat, document.lng),
          map: map.instance,
          id: document._id
        });
        //updating markers when dragging listener
        google.maps.event.addListener(marker, 'dragend', function(event){
          Markers.update(marker.id, { $set: {lat: event.latLng.lat(), lng: event.latLng.ln() }});
        });
        //saves marker instance in markers object
        markers[document._id] = marker;
      },
      changed: function(newDocument, oldDocument) {
        markers[newDocument._id].setPosition({lat: newDocument.lat, lng: newDocument.lng});
      },
      removed: function(oldDocument) {
        markers[oldDocument._id].setMap(null);
        google.maps.event.clearInstanceListeners(
          markers[oldDocument._id]);
        delete markers[oldDocument._id];
      }
    });

  });
});
