import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('plaid-tracker', 'Integration | Component | plaid tracker', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{plaid-tracker}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#plaid-tracker}}
      template block text
    {{/plaid-tracker}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
