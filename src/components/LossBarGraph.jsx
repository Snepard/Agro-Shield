import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
// CORRECTED: Import 'patternomaly' as a default export (no curly braces)
import patternomaly from 'patternomaly';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const LossBarGraph = () => {
  const data = {
    labels: ['2020', '2021', '2022', '2023', '2024', '2025 (Projected)'],
    datasets: [
      {
        label: 'Financial Loss (in Million USD)',
        data: [250, 280, 220, 350, 310, 420],
        // This line now works correctly because patternomaly is properly imported
        backgroundColor: patternomaly.draw('diagonal', 'rgba(34, 197, 94, 0.7)'),
        borderColor: 'rgba(22, 163, 74, 1)',
        borderWidth: 2,
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.9)',
        titleFont: { size: 16, weight: 'bold' },
        bodyFont: { size: 14 },
        padding: 12,
        cornerRadius: 6,
        callbacks: {
          label: function(context) {
            return `Loss: $${context.raw} Million`;
          }
        }
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Year',
          font: { size: 16, weight: 'bold' },
          color: '#1f2937',
        },
        grid: {
          display: false,
        },
        ticks: {
          font: { size: 12 },
          color: '#4b5567',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Losses (in Million USD)',
          font: { size: 16, weight: 'bold' },
          color: '#1f2937',
        },
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return '$' + value + 'M';
          },
          font: { size: 12 },
          color: '#4b5567',
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.3)',
        },
      },
    },
  };

  return (
    <div className="py-12 mt-12 mb-8 mx-auto w-full max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Financial Impact of Crop Disease Over Time
      </h2>
      <div className="h-[450px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default LossBarGraph;