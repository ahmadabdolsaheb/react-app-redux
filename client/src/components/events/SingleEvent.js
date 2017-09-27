import React from 'react';
import { connect } from 'react-redux';

function matched (event, id){
  return event._id === id
}

class NewEventPage extends React.Component {
  render() {
    console.log(this.props.match.params.id);
    console.log(this.props.event);
    return(
      <div className="jumbotron">
        <h1> poll </h1>

      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    event: state.events.events.find(event => event._id === this.props.match.params.id)
  }
}

export default connect(mapStateToProps, {}) (NewEventPage);
