import { test } from 'qunit';
import moduleForAcceptance from 'ember-liquidfire/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /', (assert) => {
  visit('/');

  andThen( () => {
    assert.equal(currentURL(), '/');
  });
});

test('click "All Pomodoros" ', (assert) => {
  visit('/');

  click('a.all-pomodoros');

  andThen( () => {
    assert.equal(currentURL(), '/pomodoros');
  });
});

test('click add button', (assert) => {
  visit('/');

  click('a.mdl-button');

  andThen( () => {
    assert.equal(currentURL(), '/pomodoros/new');
  });

});

