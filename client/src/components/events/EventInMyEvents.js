import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

class EventInMyEvents extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(){
    this.props.deleteEvent(this.props.event._id);
  }
  render(){
    const { title, _id } = this.props.event;
    return (

        <div
          className={classnames( 'alert','alert-info')}>
        <Link to={`/event/${_id}`}>

          {title}
        </Link>
        <button onClick={this.onClick} className="close"><span>&times;</span></button>
        </div>

    );
  }
}

EventInMyEvents.propTypes = {
  event: PropTypes.object.isRequired
}

export default EventInMyEvents;
