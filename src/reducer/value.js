import { CHANGE_VALUE } from '../action/value';

export default (state = '', action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return action.value;
    default:
      return state;
  }
};
