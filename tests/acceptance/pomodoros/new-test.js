import { test } from 'qunit';
import moduleForAcceptance from 'ember-liquidfire/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | pomodoros/new');

test('visiting /pomodoros/new', (assert) => {
  visit('/pomodoros/new');

  andThen(()=> {
    assert.equal(currentURL(), '/pomodoros/new');
  });
});


test('click back button', (assert) => {
  visit('/pomodoros/new');

  click('.back-btn');

  andThen(() => {
    assert.equal(currentURL(), '/');
  });

});

test('add pomodoro via click', (assert) => {
  visit('/pomodoros/new');

  fillIn('input.form-control', 'Some Pomodoro');

  click('.add-pomodoro');

  andThen(()=> {
    assert.equal(currentURL(), '/');
    assert.equal(find('h4.media-heading').text(), 'Some Pomodoro');
    assert.equal(find('div.media-body p').text(), 'open');
  });

});

/* this test case needs work */
test('add pomodoro via enter', (assert) => {
  visit('/pomodoros/new');

  fillIn('input.form-control', 'Some Pomodoro');
  //keyEvent('input.form-control', 'keydown', 13);
  andThen(() => {
    assert.equal(currentURL(), '/pomodoros/new');
  });



});

