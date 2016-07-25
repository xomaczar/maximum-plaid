import Ember from 'ember';
import layout from './template';
import box from '../../utils/box-expression';
import GroupElement from '../../mixins/group-element';
import computed, { or } from 'ember-computed';
import { scheduleOnce } from 'ember-runloop';

const {
  isNone
} = Ember;

export default Ember.Component.extend(GroupElement, {
  layout,
  tagName: 'g',
  classNames: 'plot-dimension',
  attributeBindings: ['transform'],
  fill: '#fff',
  rx: 3,
  ry: 3,
  padding: '0 0 0 0',

  xCenter: 0,
  y: 0,

  maxWidth: 0,
  height: 0,

  _padding: computed('padding', {
    get() {
      return box(this.get('padding'));
    }
  }).readOnly(),

  didReceiveAttrs() {
    this._super(...arguments);
    scheduleOnce('afterRender', this, this._sizeInnerText);
  },

  _sizeInnerText() {
    debugger;

    let text = this.selection.select('text');
    let padding = this.get('_padding');
    let textLength = text.node() ? text.node().getComputedTextLength() : 0;

    let rectWidth = textLength + padding.left + padding.right;

    this.set('_rectWidth', rectWidth);
    this.set('_rectX', -rectWidth/2);
    // Find x, y, and width. Height is provided.

  },

  _rectHeight: computed('height', 'padding', {
    get() {
      return this.get('height');
    }
  }).readOnly(),

  transform: computed('maxWidth', 'xCenter', '_rectWidth', '_padding', {
    get() {

      let maxWidth = this.get('maxWidth');
      let halfWidth = this.get('_rectWidth') / 2;
      let centeredX = this.get('xCenter');
      let translateX = 0;

      if (centeredX < halfWidth) {
        translateX = halfWidth - this.get('_padding.left') - centeredX;
      } else if (centeredX + halfWidth > maxWidth) {
        translateX = -halfWidth + this.get('_padding.left') + (maxWidth - centeredX);
      }

      return `translate(${translateX}, 0)`
    }
  }).readOnly(),

});
