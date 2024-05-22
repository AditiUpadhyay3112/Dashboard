// AnyComponent.js

import React from 'react';
import PieChart from './PieChart';

const AnyComponent = () => {
  // Example data for the pie chart
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <h1>This is any component</h1>
      <PieChart data={data} />
    </div>
  );
};

export default AnyComponent;
