import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext('2d');
	
    chartInstance.current = new Chart(myChartRef, {
      type: "pie",
      data: {
		
        labels: ["Apple", "Grapes", "Banana", "Mango"]  ,
		
        datasets: [{
          data: [10, 25, 20,30],
          backgroundColor: [
            'rgb(250, 215, 160)',
            'rgb(248, 196, 113 )',
            'rgb(245, 176, 65)',
            'rgb(243, 156, 18)'
          ],
        }]
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ width: '250px', height: '250px' , marginLeft:'35px'}} >
      <canvas ref={chartRef}  style={{ width:'60%', height:'100%' }} />
    </div>
  );
};

export default PieChart;
