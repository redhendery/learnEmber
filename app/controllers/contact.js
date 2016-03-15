import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    saveMessage() {
      this.set('responseMessage', `Thank you! We will respond to you shortly! ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  }

});