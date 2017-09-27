import React from 'react';
import { connect } from 'react-redux';
import{ loadAllEvents } from '../actions/eventActions';
import PropTypes from 'prop-types';

class Greetings extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      events:[]
    }
    this.props.loadAllEvents();
  }
  render(){

    var text = "loading";
    if(this.props.events){
      console.log(this.props.events[0].username);
      text = this.props.events[0].username;
    }

    return (
      <div className="jumbotron">
        <h1> Hi </h1>
        <h2> {text}</h2>
      </div>
    );
  }
}

Greetings.propTypes = {
  loadAllEvents: PropTypes.func.isRequired,
  events: PropTypes.array
}
function mapStateToProps(state) {
  return {
    events: state.events.events
  }
}

export default connect(mapStateToProps, { loadAllEvents }) (Greetings);
