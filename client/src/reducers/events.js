import { LOAD_ALL_EVENTS } from '../actions/types';

export default (state = {}, action = {}) => {
    switch(action.type) {
      case LOAD_ALL_EVENTS:
        return {
          events: action.events
        }
      default: return state;
    }
}
