import React from 'react';
import { connect } from 'react-redux';
import{ loadAllEvents } from '../actions/eventActions';
import PropTypes from 'prop-types';
import Event from './events/Event'

class Greetings extends React.Component {
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
      text = this.props.events.slice(0).reverse().map((event, index )=>
          <Event key={event._id} event={event}/>
     );
    }
    return (
      <div className="jumbotron">
        <h1> Recent Polls </h1>
        {text}
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
