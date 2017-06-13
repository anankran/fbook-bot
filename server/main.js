import { Meteor } from 'meteor/meteor';
import { Router } from 'meteor/iron:router';
import { Messages } from '../imports/collections.js';

Meteor.startup(() => {

  Meteor.methods({

    newMessage: function (message) {
      return Messages.insert({
               text: message,
               ip: this.connection !== null ? this.connection.clientAddress : 'test',
               createdAt: new Date()
             });
    },

    removeMessage: function (id) {
    if (this.connection == null) {
        return Messages.remove(id);
      } else {
        throw new Meteor.Error('server-only-method', 'Sorry, this method can only be called from the server.');
      }
    },

    getIP: function () {
      return this.connection.clientAddress;
    },

  });

  Router.route('/', { where: 'server' })
    .delete(function() {
      if(this.request.headers.key == 'OFpGyNrxogbK47H505GEP22g5DeVbNKR'){
        var id = this.request.body.id;
        Meteor.call('removeMessage', id);
      }
  });

});
