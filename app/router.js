import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('about', function() {
    this.resource('contact');
  });
  this.resource('posts', function() {
    this.resource('post', { path: ":post_id"});
    this.resource('new-post');
  });
});

export default Router;
