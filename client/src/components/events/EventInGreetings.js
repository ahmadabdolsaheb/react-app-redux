import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class EventInGreetings extends React.Component {
  render(){
    const { title, _id } = this.props.event;
    return (


          <Link className="list-group-item" to={`/event/${_id}`}>
          {title}
          </Link>


    );
  }
}

EventInGreetings.propTypes = {
  event: PropTypes.object.isRequired
}

export default EventInGreetings;
