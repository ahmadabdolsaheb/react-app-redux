import React from 'react';
import { connect } from 'react-redux';
import{ loadAllEvents } from '../../actions/eventActions';
import PropTypes from 'prop-types';
import EventVoteDisc from './EventVoteDisc';

class EventVotePage extends React.Component {
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

  stateSetter(){
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
  componentDidUpdate(){
    this.stateSetter();
  }
  componentDidMount(){
    this.stateSetter();
  }

  render() {
    console.log("id: " + this.state.id);
    console.log("op: " + this.state.options);
    let text = "loading ...";

    if(this.state.id){
      text =
      <div>
        <h1> {this.state.title} </h1>
        <EventVoteDisc options = {this.state.options}/>
      </div>
    }

    return(
      <div className="jumbotron row">
        {text}
      </div>
    );
  }
}

EventVotePage.propTypes = {
  loadAllEvents: PropTypes.func.isRequired,
  events: PropTypes.array
}

function mapStateToProps(state) {
    return {events: state.events.events}
}

export default connect(mapStateToProps, { loadAllEvents}) (EventVotePage);
