import Ember from 'ember';
import box from '../utils/box-expression';

export function area([width, height], hash) {
  let margin = hash.margin ? box(hash.margin) : { top: 0, right: 0, bottom: 0, left: 0 };
  let padding = hash.padding ? box(hash.padding) : { top: 0, right: 0, bottom: 0, left: 0 };

  let coerceHeight =  height - margin.top - margin.bottom;
  let coerceWidth = width - margin.left - margin.right;

  return {
    top: margin.top,
    left: margin.left,
    bottom: height - margin.bottom,
    right: width - margin.right,
    height: coerceHeight >= 0 ? coerceHeight  - padding.top - padding.bottom : 0,
    width: coerceWidth >= 0 ? coerceWidth - padding.left - padding.right : 0,
    outerHeight: height,
    outerWidth: width,
    margin,
    padding,
  };
}

export default Ember.Helper.helper(area);
