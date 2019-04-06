import { combineReducers } from 'redux';

import base from './base';
import value from './value';

export default combineReducers({
  base,
  value
});
