import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const options = {
  scales: {
    x: {
      display: true,
      grid: {
        display: false, // Hide vertical grid lines for x-axis
      },
      ticks: {
        // stepSize: 2, // Set the step size between ticks to 2
        padding: 20
      },
    },
    y: {
      min: 0,
      max: 10, // Adjust the max value to your desired upper limit
      ticks: {
        stepSize: 2, // Set the step size between ticks to 2
        padding: 20
      },
      grid: {
        // display: false,
        color: "#eeedf0"
      },
      border:{
        display: false,
      }
    },
  },
  plugins: {
    legend: {
      position: 'top', // Move the legend to the top
      align: 'end', // Align the legend to the start (left)
      labels: {
        boxWidth: 5, // Adjust the box width for the legend items
        boxHeight:5,
        useBorderRadius:true,
        borderRadius:1.5,
      },
    },
  },
};

const data = {
  labels: labels,
  datasets: [
    {
      label: 'visitors',
      data: [2, 5, 6, 4, 3, 7, 6],
      backgroundColor: '#4d2c77',
      borderWidth: 4,
      borderColor: '#4d2c77',
      pointRadius: [0, 0, 0, 0, 0, 0, 2], 
      cubicInterpolationMode: 'monotone', // Use 'monotone' for smooth curve
    },
    {
      label: 'customers',
      data: [4, 7, 3, 5, 8, 8, 5],
      backgroundColor: '#d054a4',
      borderWidth: 4,
      borderColor: '#d054a4',
      pointRadius: [0, 0, 0, 0, 0, 0, 2], 
      cubicInterpolationMode: 'monotone', // Use 'monotone' for smooth curve
    },
  ],
};

const LineChart = () => {
  return (
    <div style={{ width: "100%",  }}>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
