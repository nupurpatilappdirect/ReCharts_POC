import React, { useEffect, useState } from 'react'
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import AreaChart from './AreaChart';
import BarChart from './BarChart';
import LineChart from './LineChart';

const Grid = (layout) => {
  const [data, setData] = useState([]);

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    fetch('http://localhost:3001/api/data')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

    // const [layout,setLayout] = useState([
    //     { i: "a", x: 0, y: 0, w: 3, h: 5 ,static: true},
    //     { i: "b", x: 1, y: 0, w: 6, h: 6},
    //     { i: "c", x: 4, y: 0, w: 1, h: 2 }
    //   ]);
//       const [layout,setLayout] = useState(data.layout);

// const handleLayoutChange = (newlayout) =>{
//  console.log(newlayout);
// }
// const layout = [
//       { i: "a", x: 0, y: 0, w: 3, h: 5 ,static: true},
//       { i: "b", x: 1, y: 0, w: 6, h: 6},
//       { i: "c", x: 4, y: 0, w: 1, h: 2 }
//     ]
// if(data){
//   const hi =  data;
//   console.log(hi);
// }

console.log(data.layout);
  return (
    <>
    <div className="container">
    <div>
    <GridLayout
    className="layout"
    layout={data?.layout}
    cols={12}
    rowHeight={30}
    width={1200}
    // onLayoutChange = {(newlayout) => handleLayoutChange(newlayout)}
  >
    <div key="a">a<AreaChart /></div>
    <div key="b">b<BarChart  /></div>
    <div key="c">c<LineChart /></div>
  </GridLayout>
  </div>
  </div>
  </>
  )
}

export default Grid;
