import { LOAD_ALL_EVENTS, LOAD_VOTED_EVENT, DELETE_EVENT } from '../actions/types';

export default (state = [], action = {}) => {
    switch(action.type) {
      case LOAD_ALL_EVENTS:
        return { ...state,
          events: action.events
        }
      case LOAD_VOTED_EVENT:
      const newState = {
         ...state,
         events: state.events.map(
             (event, i) => event._id === action.event._id ? {...event, options: action.event.options} : event
         )
        }
        return newState;
      case DELETE_EVENT:
      console.log("from reducer" + action.ID);
        return {
           ...state,
           events: state.events.map(
               (event, i) => event._id === action.ID ? "" : event
           )
          }
      default: return state;
    }
}
