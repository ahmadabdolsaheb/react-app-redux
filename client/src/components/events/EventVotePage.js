import React from 'react';
import { connect } from 'react-redux';
import{ loadAllEvents, updateEvent } from '../../actions/eventActions';
import PropTypes from 'prop-types';
import EventVoteDisc from './EventVoteDisc';
import PieChart from '../common/PieChart';
import InputForAdd from '../common/InputForAdd';

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
    this.onAdd = this.onAdd.bind(this);
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
  }
  onAdd(e){
    let array = this.state.options;
    let newOption = [String(e), 0];
    console.log(array.push(newOption));
    //options.push([e, 0])
  }
  render() {
    console.log(this.props.id);
    let text = "loading ...";
    if(this.state.id){
      text =
      <div>
        <h1> {this.state.title} </h1>
        <div className="col-md-6" >
             <EventVoteDisc options = {this.state.options} onClick = {this.onClick}/>
             { this.props.id ? <InputForAdd onAdd = {this.onAdd} />: null }
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
    return {
      events: state.events.events,
      id: state.auth.user.id
    }
}

export default connect(mapStateToProps, {loadAllEvents, updateEvent}) (EventVotePage);
