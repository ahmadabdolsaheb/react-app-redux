import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import { createEvent } from '../../actions/eventActions';
import validateInput from '../../shared/validations/events';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class EventForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userName: this.props.userName,
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

  isValid(){
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  onSubmit(e){
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true});
      this.props.createEvent(this.state).then(
        (res) => this.context.router.history.push('/'),
        (err) => this.setState({ errors: err.response.data.errors, isLoading: false})
      );
    }
  }

  render() {
    const { title, errors, isLoading, options } = this.state;
    console.log(this.props.userName);
    return (
      <form onSubmit={this.onSubmit}>
        <h1> Create New Game Event </h1>

        { errors.form && <div className="alert alert-danger">{errors.form}</div> }

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
            error={errors.options}
            placeholder="e.g. eat, pray, love"
            />
        <button type="submit" disabled={isLoading} className="btn btn-primary">Create</button>
      </form>
    );
  }
}

EventForm.propTypes = {
  createEvent: PropTypes.func.isRequired,
    userName: PropTypes.string.isRequired
}

EventForm.contextTypes = {
  router: PropTypes.object.isRequired
}
function mapStateToProps(state) {
  return {
    userName: state.auth.user.username
  }
}


export default connect(mapStateToProps,  { createEvent })(EventForm);
