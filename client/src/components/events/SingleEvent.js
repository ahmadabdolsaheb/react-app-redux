import React from 'react';
import { connect } from 'react-redux';
import{ loadAllEvents } from '../../actions/eventActions';
import PropTypes from 'prop-types';

class SingleEvent extends React.Component {
  render() {
    console.log(this.props.match.params.id);
    console.log(this.props.event);
    if(!this.props.event){
      this.props.loadAllEvents();
      console.log("hello");
    }
    return(
      <div className="jumbotron">
        <h1> poll </h1>

      </div>
    );
  }
}

SingleEvent.propTypes = {
  loadAllEvents: PropTypes.func.isRequired,
  events: PropTypes.array
}

function mapStateToProps(state) {
  if(state.events.events){
    return {event: state.events.events[0]}
  }

  else {
    return {event: state.events.events}
  }
}

export default connect(mapStateToProps, { loadAllEvents}) (SingleEvent);
