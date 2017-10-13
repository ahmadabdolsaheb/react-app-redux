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
    this.props.onAdd(this.state.input);
    this.setState({
      input: ""
    });
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
      <input  name = "input"value = {this.state.input} type="text" onChange = {this.onChange} className="form-control" placeholder="Insert a new option"/>
            <span className="input-group-btn">
              <button className="btn btn-secondary" onClick = {this.onClick} type="button">ADD</button>
            </span>
      </div>

    );
  }
}

InputForAdd.propTypes = {
  onAdd: PropTypes.func.isRequired
}

export default InputForAdd;
