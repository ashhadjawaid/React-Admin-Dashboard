import React from 'react';
import { Pie } from 'react-chartjs-2';

const TankPieChart = ({ filledLevel, maxCapacity }) => {
  // Calculate percentage filled
  const percentageFilled = (filledLevel / maxCapacity) * 100;
  const percentageEmpty = 100 - percentageFilled;

  // Data for the pie chart
  const chartData = {
    labels: ['Filled', 'Empty'],
    datasets: [{
      data: [percentageFilled, percentageEmpty],
      backgroundColor: [
        'blue', // Filled
        'lightgrey' // Empty
      ],
      hoverBackgroundColor: [
        'rgba(54, 162, 235, 0.6)', // Filled on hover
        'rgba(192,192,192, 0.6)' // Empty on hover
      ]
    }]
  };

  return (
    <div>
      <h2>Tank Pie Chart</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default TankPieChart;
