import Ember from "ember";

var NewPostController = {
  actions: {
    save: function() {
      var newPost = this.store.createRecord('post', {
        title: this.get('title'),
        body: this.get('body'),
      });
      var newAuthor = this.store.createRecord('author', {
        name: this.get('author')
      });
      newPost.save();
      newAuthor.save();
      newAuthor.get('posts').pushObject(newPost);
      this.transitionToRoute('posts');
    }
  }
};

export default Ember.ObjectController.extend(NewPostController);
