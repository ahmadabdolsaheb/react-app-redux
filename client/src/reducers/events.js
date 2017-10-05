import { LOAD_ALL_EVENTS, LOAD_VOTED_EVENT } from '../actions/types';

export default (state = [], action = {}) => {
    switch(action.type) {
      case LOAD_ALL_EVENTS:
      console.log(action.events);
        return { ...state.events,
          events: action.events
        }
      case LOAD_VOTED_EVENT:

        console.log("in reducer" + action.event.options);
         return {
       ...state,
       events:{ ...events,
         events: state.events.events.map(
             (event, i) => event._id === action.event._id ? {...event, options: action.event.options} : event
         )
       }
    }
      default: return state;
    }
}
