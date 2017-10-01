import { LOAD_ALL_EVENTS } from '../actions/types';

export default (state = [], action = {}) => {
    switch(action.type) {
      case LOAD_ALL_EVENTS:
      console.log(action.events)
        return { ...state,
          events: action.events
        }
      default: return state;
    }
}
