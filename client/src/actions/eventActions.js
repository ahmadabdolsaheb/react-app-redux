import axios from 'axios';
import { LOAD_ALL_EVENTS } from './types';

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
    return axios.put('/api/events', event)
  };
}
