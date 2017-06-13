import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { chai, expect } from 'meteor/practicalmeteor:chai';
import './main.html';
import './main.js';

if(Meteor.isTest){

  describe('Messages', function () {

    it('helpers ip', function () {
      var ip = Template.messages.__helpers[' ip'].apply;
    }),

    it('helpers messages', function () {
      var messages = Template.messages.__helpers[' messages'].apply;
    })

  });

}
