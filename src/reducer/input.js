import { CHANGE_INPUT } from '../action/input';

export default (state = '', action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return action.input;
    default:
      return state;
  }
};
