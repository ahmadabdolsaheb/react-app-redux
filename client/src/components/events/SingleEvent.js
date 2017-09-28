import React from 'react';
import { connect } from 'react-redux';
import{ loadAllEvents } from '../../actions/eventActions';
import PropTypes from 'prop-types';

class SingleEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: false,
      title: false,
      username: false,
      options:[]
    }
    if(!this.props.events){
      this.props.loadAllEvents();
      console.log("Loading events");
    }
  }

  eventFinder(events, id){
    return events.find(
      function ( item ){
        return item._id === id;
      }
    );
  }
  componentDidUpdate(){
    if(!this.state.id && this.props.events){
      let eventId = this.eventFinder(this.props.events, this.props.match.params.id);
      this.setState({
        id: eventId._id,
        title: eventId.title,
        username: eventId.username,
        options: eventId.options
      })
    }
  }

  render() {
    console.log("id: " + this.state.id);
    console.log("op: " + this.state.options);
    let text = "loading ...";

    if(this.state.id){
      text = this.state.id;
    }

    return(
      <div className="jumbotron">
        <h3>{text}</h3>
      </div>
    );
  }
}

SingleEvent.propTypes = {
  loadAllEvents: PropTypes.func.isRequired,
  events: PropTypes.array
}

function mapStateToProps(state) {
    return {events: state.events.events}
}

export default connect(mapStateToProps, { loadAllEvents}) (SingleEvent);
