import Ember from 'ember';
import layout from './template';
import GroupElement from '../../mixins/group-element';
import { scheduleOnce } from 'ember-runloop';
import { mouse } from 'd3-selection';
import { bisectLeft } from 'd3-array';
import { not } from 'ember-computed';


const TrackerComponent =  Ember.Component.extend(GroupElement, {
  layout,
  classNames: ['plot-tracker'],

  xScale: null,
  yScale: null,
  isActive: false,
  isInactive: not('isActive'),
  xPosition: 0,

  _setupHandlers() {
    // let self = this;
    // let handleMouseMove = this.handleMouseMove;
    this.selection
      .on('mouseover touchstart', () => this.set('isActive', true))
      .on('mouseout', () => this.set('isActive', false))
      .on('mousemove touchmove', () => this.handleMouseMove())

  },

  didInsertElement() {
    this._super(...arguments);
    scheduleOnce('afterRender', this, this._setupHandlers);
  },

  willDestroyElement() {
    this._super(...arguments);
    debugger;
    this.selection.off('mouseover mouseout mousemove touchstart touchmove');
  },

  handleMouseMove() {
    let attrs = this.getProperties('element', 'xScale', 'xValues');
    let mouseX = attrs.xScale.invert(mouse(attrs.element)[0]);
    let i = bisectLeft(attrs.xValues, mouseX, 1);
    let x0 = attrs.xValues[i-1];
    let x1 = attrs.xValues[i];
    let xValue = mouseX - x0 > x1 - mouseX ? x1 : x0;
    this.setProperties({
      xPosition: attrs.xScale(xValue),
      xValue,
    })
  }
});


TrackerComponent.reopenClass({
  positionalParams: ['xValues']
});

export default TrackerComponent;
