import Ember from 'ember';

export default Ember.Route.extend ({
  model() {
    return this.store.createRecord ("contact");
  },

  actions: {
    sendMessage() {
      const newMessage = this.controller.get("model");
      newMessage.save();
    }
  }
});
