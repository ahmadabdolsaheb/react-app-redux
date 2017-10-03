import React from 'react';
import { connect } from 'react-redux';
import{ loadAllEvents, updateEvent } from '../../actions/eventActions';
import PropTypes from 'prop-types';
import EventVoteDisc from './EventVoteDisc';
import PieChart from './PieChart';

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
    }
    this.onClick = this.onClick.bind(this);
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
  onClick(e){
    let options = this.state.options.map(function(option, index ){
      if(option[0] === e.currentTarget.getAttribute("id")){
        option[1] ++;
      }
      return option;
    });
    this.props.updateEvent({
      _id:this.state.id,
      options:options
    });
    console.log("id: " + e.currentTarget.getAttribute("id"));
    console.log("value:" + e.currentTarget.getAttribute("value"));
    console.log("event_id: " + this.state.id);
  }
  render() {
    let text = "loading ...";

    if(this.state.id){
      text =
      <div>
        <h1> {this.state.title} </h1>
        <div className="col-md-6" >
             <EventVoteDisc options = {this.state.options} onClick = {this.onClick}/>
         </div>
         <div className='col-md-6'>
        <PieChart options = {this.state.options}/>
        </div>
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

export default connect(mapStateToProps, {loadAllEvents, updateEvent}) (EventVotePage);
