import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

class Event extends React.Component {
  render(){
    const { title, _id } = this.props.event;
    console.log(_id);
    return (
      <Link to={`/event/${_id}`}>
        <div
          className={classnames( 'alert','alert-info')}>
          {title}
        </div>
      </Link>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object.isRequired
}

export default Event;
