import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import { createEvent } from '../../actions/eventActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

class EventForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      options: '',
      errors: {},
      isLoading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.createEvent(this.state);
  }

  render() {
    const { title, errors, isLoading, options } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1> Create New Game Event </h1>

        <TextFieldGroup
          field="title"
          label="Event Title"
          name="title"
          value={title}
          onChange={this.onChange}
          error={errors.title}
          />
          <TextFieldGroup
            field="options"
            label="Options"
            name="options"
            value={options}
            onChange={this.onChange}
            error={errors.title}
            placeholder="input e.g.: option1, option2,"
            />
        <button type="submit" disabled={isLoading} className="btn btn-primary">Create</button>
      </form>
    );
  }
}

EventForm.propTypes = {
  createEvent: PropTypes.func.isRequired
}

export default connect(null, { createEvent })(EventForm);
