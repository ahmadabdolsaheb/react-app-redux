import React from 'react';
import PropTypes from 'prop-types';
import Pie from 'organism-react-d3-piechart';





class PieChart extends React.Component {
  render(){
    let total = 0;
    this.props.options.map(function(item) {
      total += item[1];
    });

    let data = [];
    this.props.options.map(function(item) {
      if(item[1]){
        data.push({value: Math.round(item[1]/total*100, 1), label: item[0]});
      }

    });
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
