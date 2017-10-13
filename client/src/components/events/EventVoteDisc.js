import React from 'react';
import PropTypes from 'prop-types';


class EventVoteDisc extends React.Component {

  render(){
    var options = this.props.options.map((option, index )=>
      <a key={index} className="list-group-item" onClick={this.props.onClick} id = {option[0]} value = {option[1]} >

      {option[0]}
        <span className="badge">{option[1]}</span>

      </a>);
    return (

      <div>
        {options}
      </div>
    );
  }
}

EventVoteDisc.propTypes = {
  options: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default EventVoteDisc;
