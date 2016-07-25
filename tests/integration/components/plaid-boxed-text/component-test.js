import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('plaid-boxed-text', 'Integration | Component | plaid boxed text', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{plaid-boxed-text}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#plaid-boxed-text}}
      template block text
    {{/plaid-boxed-text}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
