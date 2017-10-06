import React from 'react';
import { connect } from 'react-redux';
import{ loadAllEvents, deleteEvent } from '../../actions/eventActions';
import PropTypes from 'prop-types';
import EventInMyEvents from './EventInMyEvents';

class MyEventsPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      events:[]
    }
    this.props.loadAllEvents();
  }
  render(){
    var text = "";
    if(this.props.events){
      text = this.props.events.slice(0).reverse().map((event, i ) =>
            event.username === this.props.username ?
          <EventInMyEvents key={event._id} event={event} deleteEvent={this.props.deleteEvent}/>: ""
     );
    }
    return (
      <div className="jumbotron">
        <h1> My Polls </h1>
        {text}
      </div>
    );
  }
}

MyEventsPage.propTypes = {
  loadAllEvents: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  events: PropTypes.array
}
function mapStateToProps(state) {
  return {
    events: state.events.events,
    username: state.auth.user.username
  }
}

export default connect(mapStateToProps, { loadAllEvents, deleteEvent }) (MyEventsPage);
