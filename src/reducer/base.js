import { SELECT_BASE } from '../action/base';

export default (state = 10, action) => {
  switch (action.type) {
    case SELECT_BASE: {
      const base = action.base;
      switch (base) {
        case 2:
        case 8:
        case 10:
        case 16:
          return base;
        default:
          return state;
      }
    }
    default:
      return state;
  }
};
