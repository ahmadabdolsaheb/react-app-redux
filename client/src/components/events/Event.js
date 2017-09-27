import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


class Event extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    const { title, _id } = this.props.event;
    return (
      <div
        className={classnames( 'alert','alert-success')}>
        {title}
      </div>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object.isRequired
}

export default Event;
