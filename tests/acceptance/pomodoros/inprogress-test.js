import { test } from 'qunit';
import moduleForAcceptance from 'ember-liquidfire/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | pomodoros/inprogress');

test('visiting /pomodoros/inprogress', function(assert) {
  visit('/pomodoros/inprogress');

  andThen(function() {
    assert.equal(currentURL(), '/pomodoros/inprogress');
  });
});

test('click set pomodoro', (assert) => {

});

test('click set short break', (assert) => {

});

test('click set long break', (assert) => {

});

test('click start', (assert) => {

});

test('click stop', (assert) => {

});

test('click reset', (assert) => {


});

test('click reflect', (assert) => {

});

