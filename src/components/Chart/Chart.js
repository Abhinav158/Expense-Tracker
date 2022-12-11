import React from 'react';

// We want to render all the chartbars in our main chart 
import ChartBar from './ChartBar';

import './Chart.css';

const Chart = (props) => {

    // grab all the data points of expenses in that year 
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);


    // Map every single chart bar component as a datapoint 
    // Also max value will be the maximum expense in the year - found with totalMaximum

  return (
    <div className='chart'>    
      {props.dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />
      ))}
    </div>
  );
};

export default Chart;