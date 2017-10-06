import axios from 'axios';
import { LOAD_ALL_EVENTS, LOAD_VOTED_EVENT} from './types';

export function deleteOneEvent(ID) {
  return {
    type: LOAD_ALL_EVENTS,
    ID
  };
}
export function deleteEvent(id) {
  return dispatch => {
    return axios.delete('/api/events/' + id).then(res => {
      const ID = res.data;
      dispatch(deleteOneEvent(ID));
    });
  }
}

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
      dispatch(loadVoted(event));
    });
  };
}
