import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import events from './reducers/events';

export default combineReducers({
  flashMessages,
  auth,
  events
});
