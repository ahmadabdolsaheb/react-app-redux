import React from 'react';
import PropTypes from 'prop-types';
import Pie from 'organism-react-d3-piechart';

class PieChart extends React.Component {
  render(){
    let data = [];


    this.props.options.map((item, index )=>
    data.push({value: item[1], label: item[0]})
     );

    return (
      <Pie
         data={data}
         style={{maxWidth:300}}
      />
    );
  }
}

PieChart.propTypes = {
  options: PropTypes.array
}

export default PieChart;
