import React from 'react';
import EventForm from './NewEventForm';
import { connect } from 'react-redux';

class NewEventPage extends React.Component {
  render() {
    return(
      <div>
        <EventForm />
      </div>
    );
  }
}

export default NewEventPage;
