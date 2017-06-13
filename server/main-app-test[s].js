import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { Messages } from '../imports/collections.js';
import { chai, expect } from 'meteor/practicalmeteor:chai';
import './main.js';

if(Meteor.isTest){

  describe('Messages', function () {

    it('get messages', function () {
      var messages = Messages.find({}, { sort: { createdAt: 1 } }).count();
      expect(messages).to.be.above(1);
    }),

    it('new message', function () {
      message = 'Test message';
      var id = Meteor.call('newMessage', message);
      var find = Messages.findOne({_id: id});
      expect(find).to.be.an('object');
    }),

    it('remove message', function () {
      var id = Meteor.call('newMessage', message);
      Meteor.call('removeMessage', id);
      var find = Messages.findOne({_id: id});
      expect(find).to.be.undefined;
    })

  });

}
