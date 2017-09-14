import React from 'react';
import { connect } from 'react-redux';
import{ loadAllEvents } from '../actions/eventActions';
import PropTypes from 'prop-types';

class Greetings extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allEvents:this.props.loadAllEvents()
    }
  }
  render(){
    return (
      <div className="jumbotron">
        <h1> Hi </h1>
        <h2> {this.state.events} </h2>
      </div>
    );
  }
}

Greetings.propTypes = {
  loadAllEvents: PropTypes.func.isRequired
}

export default connect(null, { loadAllEvents }) (Greetings);
