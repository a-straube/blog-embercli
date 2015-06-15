import Ember from "ember";

var PostController = {
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    delete: function() {
      if (confirm("Are you sure?")) {
        this.get('model').destroyRecord();
      }
    },
    doneEditing: function() {
      this.set('isEditing', false);
    }
  }
};

export default Ember.ObjectController.extend(PostController);
