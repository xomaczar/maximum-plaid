import Ember from 'ember';
import { timeFormat } from 'd3-time-format';

export function fmtTime([fmt]/*, hash*/) {
  return timeFormat(fmt);
}

export default Ember.Helper.helper(fmtTime);
