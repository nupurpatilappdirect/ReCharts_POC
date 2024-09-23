import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from './utils/https';
import ErrorBlock from './ErrorBlock';
import Card from './Card';

const renderData = [{
  id:"a",
  title: "Area Chart",
},
{
  id:"b",
  title: "Bar Chart",
},
{
  id:"c",
  title: "Line Chart",
}
]

const Grid = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["data"],
    queryFn: () => fetchData(),
  });

  const handleLayoutChange = (updatedLayout) => {
    // setLayout(updatedLayout);
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

  
  return (
    <div className="container">
      {isPending && <ErrorBlock  title="loading"
      message={"Loading Data"}></ErrorBlock>}
      {isError && <ErrorBlock  title="An error occurred"
      message={"Failed to fetch data"}></ErrorBlock>}
     {data && 
     <GridLayout
      className="layout"
      layout={data.layout}
      cols={12}
      rowHeight={30}
      width={1200}
      onLayoutChange={handleLayoutChange}
    >
      {renderData.map((mapData)=>{
        return (<div key={mapData.id}>
          <Card id={mapData.id} title={mapData.title}/>
        </div>)
      })}
    </GridLayout>
    }
    </div>
  );
};

export default Grid;
