import React from 'react';
import PropTypes from 'prop-types';


class Event extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    console.log(this.props);
    const { title } = this.props.message;
    return (
      <div>
        {title}
      </div>
    );
  }
}

Event.propTypes = {
  title: PropTypes.sting.isRequired,
}

export default Event;
