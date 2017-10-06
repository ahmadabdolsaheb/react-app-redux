import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

class EventInGreetings extends React.Component {
  render(){
    const { title, _id } = this.props.event;
    return (

        <div
          className={classnames( 'alert','alert-info')}>
          <Link to={`/event/${_id}`}>
          {title}
          </Link>
        </div>

    );
  }
}

EventInGreetings.propTypes = {
  event: PropTypes.object.isRequired
}

export default EventInGreetings;
