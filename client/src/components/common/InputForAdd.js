import React from 'react';
import PropTypes from 'prop-types';


class InputForAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onClick(){
    this.props.onAdd("potatoes");
  }
  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render(){
    console.log(this.state.input)
    return (

      <div className="input-group">
      <input type="text" onChange = {this.onChange} className="form-control" placeholder="Search for..."/>
            <span className="input-group-btn">
              <button className="btn btn-secondary" onClick = {this.onClick} type="button">Go!</button>
            </span>
      </div>

    );
  }
}

InputForAdd.propTypes = {
  onAdd: PropTypes.func.isRequired
}

export default InputForAdd;
