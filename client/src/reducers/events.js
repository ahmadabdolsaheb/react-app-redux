import { LOAD_ALL_EVENTS } from '../actions/types';

export default (state = {}, action = {}) => {
    switch(action.type) {
      case LOAD_ALL_EVENTS:
      let events = action.events;
        return { ...state,
           events
        }
      default: return state;
    }
}
