import { test } from 'qunit';
import moduleForAcceptance from 'ember-liquidfire/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | pomodoros/show');

test('visiting /pomodoros/:id', function(assert) {
  visit('/pomodoros/new');

  fillIn('input.form-control', 'Some Pomodoro');

  click('.add-pomodoro');

  andThen(()=> {
    assert.equal(currentURL(), '/');

    click('a#1');

    andThen( () => {
      assert.equal(currentURL(), '/pomodoros/1');
    });

  });
});


test("clicking let\'s start", (assert) => {

  //click()

  //andThen()


});

test("click complete", (assert) => {

  //click()

  //andThen()

});

test("click notes", (assert) => {

  //click()

  //andThen()

});
