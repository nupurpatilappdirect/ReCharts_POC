import React, { useEffect, useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import AreaChart from './AreaChart';
import BarChart from './BarChart';
import LineChart from './LineChart';

const Grid = () => {
  const [data, setData] = useState(null);  
  const [layout, setLayout] = useState([]);  

  useEffect(() => {
    fetch('http://localhost:3001/api/data')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLayout(data.layout || []);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleLayoutChange = (updatedLayout) => {
    setLayout(updatedLayout);
    fetch('http://localhost:3001/api/updateData', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ layout: updatedLayout }),
    })
      .then((response) => response.json())
      .then((updatedData) => console.log('Layout updated:', updatedData))
      .catch((error) => console.error('Error updating layout:', error));
  };

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
        onLayoutChange={handleLayoutChange}
      >
        <div key="a"><AreaChart /></div>
        <div key="b"><BarChart /></div>
        <div key="c"><LineChart /></div>
      </GridLayout>
    </div>
  );
};

export default Grid;
