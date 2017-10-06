import axios from 'axios';
import { LOAD_ALL_EVENTS, LOAD_VOTED_EVENT} from './types';

export function createEvent(event) {
  return dispatch => {
    return axios.post('/api/events', event)
  };
}

export function loadEvents(events) {
  return {
    type: LOAD_ALL_EVENTS,
    events
  };
}

export function loadVoted(event) {
  return {
    type: LOAD_VOTED_EVENT,
    event
  };
}

export function loadAllEvents() {
  return dispatch => {
    return axios.get('/api/events').then(res => {
      const events = res.data.events;
      dispatch(loadEvents(events));
    });
  }
}

export function updateEvent(event) {
  return dispatch => {
    return axios.put('/api/events', event).then(res => {
      const event = res.data;
<<<<<<< HEAD
      dispatch(loadVoted(event));
      console.log("back from server: " + event.options);
=======
      console.log("back from server: " + event);
      dispatch(loadVoted(event));
>>>>>>> 3c7f32c8bb53e32629f1b26f437aa08ed11462ea
    });
  };
}
