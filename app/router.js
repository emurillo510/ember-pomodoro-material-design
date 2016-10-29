import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('pomodoros', function() {
    this.route('new');
    this.route('show', { path: '/:pomodoro_id' });
    this.route('inprogress', { path: '/inprogress/:pomodoro_id' });
  });
});

export default Router;
