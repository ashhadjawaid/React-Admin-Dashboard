// Preview.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './preview.css'; // Import CSS file for styling

const Preview = () => {
  // Sample data for the line chart (daily basis)
  const data = [
    { x: '2024-01-01', pressure: 2200, flow: 200, pi: 100, soak: 240, hold: 3400, profile: 400 },
    { x: '2024-01-02', pressure: 1398, flow: 2210, pi: 2230, soak: 1210, hold: 1910, profile: 210 },
    { x: '2024-01-03', pressure: 9800, flow: 3290, pi: 2290, soak: 2290, hold: 2290, profile: 290 },
    { x: '2024-01-04', pressure: 3908, flow: 4000, pi: 2120, soak: 700, hold: 1000, profile: 300 },
    { x: '2024-01-05', pressure: 4800, flow: 5081, pi: 2181, soak: 81, hold: 2181, profile: 181 },
    { x: '2024-01-06', pressure: 3800, flow: 6000, pi: 2500, soak: 500, hold: 2500, profile: 500 },
    { x: '2024-01-07', pressure: 4300, flow: 9000, pi: 2100, soak: 100, hold: 2100, profile: 100 },
    // Add more data points as needed
  ];

  return (
    <div className="preview-container">
      <h2 className="chart-title">Line Chart Preview</h2>
      <div className="chart-wrapper">
        <LineChart
          width={1100}
          height={600}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pressure" stroke="#007bff" strokeWidth={2} />
          <Line type="monotone" dataKey="flow" stroke="#28a745" strokeWidth={2} />
          <Line type="monotone" dataKey="pi" stroke="#ffc107" strokeWidth={2} />
          <Line type="monotone" dataKey="soak" stroke="#dc3545" strokeWidth={2} />
          <Line type="monotone" dataKey="hold" stroke="#17a2b8" strokeWidth={2} />
          <Line type="monotone" dataKey="profile" stroke="#6c757d" strokeWidth={2} />
        </LineChart>
      </div>
    </div>
  );
};

export default Preview;
