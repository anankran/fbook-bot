import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { HTTP } from 'meteor/http';
import { Router } from 'meteor/iron:router'
import { Messages } from '../imports/collections.js';
import './main.html';

Router.configure({
  layoutTemplate: 'noRoutesTemplate',
  template: 'noRoutesTemplate',
  notFoundTemplate: 'ironrouternotfound'
});

Template.messages.helpers({
  equals: function(a, b) {
    return a == b;
  },
  formatDate: function(date) {
    dateHour = date.toString().split(' ');
    return dateHour[0]+' '+dateHour[1]+' '+dateHour[2]+' '+dateHour[3]+' '+dateHour[4];
  },
  messages() {
    return Messages.find({}, { sort: { createdAt: 1 } });
  },
  ip() {
    return Meteor.call('getIP');
  },
});

Template.messages.events({
  'submit #send-message'(event) {
    event.preventDefault();
    var target = event.target;
    var message = target.message.value;
    Meteor.call('newMessage', message);
    target.message.value = '';
  },
});

Template.messages.events({
  'click .remove'(event) {
    event.preventDefault();
    var id = event.target.getAttribute("id");
    HTTP.call('DELETE', '/', {
      headers: {
        key: 'OFpGyNrxogbK47H505GEP22g5DeVbNKR'
      },
      data: {
        id: id
      }
    }, (error, result) => {
      if (error) {
        console.log(error);
      }
    });
  },
});
