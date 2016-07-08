import Ember from 'ember';
import layout from './template';
import Dimensions from '../../mixins/dimensions';
import computed, { or } from 'ember-computed';

const {
  isNone
} = Ember;

export default Ember.Component.extend(Dimensions, {
  layout,
  classNames: 'plot-dimension',

  height: 0,
  width: 0,
  
  init() {
    this._super(...arguments);

    this._initHeight = this.height;
    this._initWidth = this.width;
  },

  actualHeight: or('_initHeight', 'height').readOnly(),
  actualWidth: or('_initWidth', 'width').readOnly(),
});
