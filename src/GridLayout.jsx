// import { Responsive, WidthProvider } from "react-grid-layout";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchData, queryClient, UpdateData } from "./utils/https";
import ErrorBlock from "./ErrorBlock";
import Card from "./Card";
import EmptyGrid from "./EmptyGridLayout";
import { useState } from "react";
import ReactGridLayout from "react-grid-layout";

// const ResponsiveGridLayout = WidthProvider(Responsive);
const renderData = [
  {
    id: "a",
    title: "Area Chart",
  },
  {
    id: "b",
    title: "Bar Chart",
  },
  {
    id: "c",
    title: "Line Chart",
  },
];

const Grid = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["data"],
    queryFn: () => fetchData(),
  });
  const { mutate } = useMutation({
    mutationFn: (updateLayout) => UpdateData(updateLayout),
    onMutate: async ()=>{
      await queryClient.invalidateQueries({ queryKey: ['data'], exact: true })
    }
  });
  // console.log(data?.layout)
  // const [updatedLayout, setupdatedLayout] = useState(data?.layout);

  // const handleLayoutChange = (updateLayout) => {
  //   setupdatedLayout(updateLayout);
  //   fetch("http://localhost:3001/api/updateData", {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ layout: updatedLayout }),
  //   })
  //     .then((response) => response.json())
  //     .then((updatedData) => console.log("Layout updated:", updatedData))
  //     .catch((error) => console.error("Error updating layout:", error));
  // };
  const handleLayoutChange = (updateLayout) => {
    mutate(updateLayout);
  };
  return (
    <div className="container">
      {isLoading && (
        <ErrorBlock title="loading" message={"Loading Data"}></ErrorBlock>
      )}
      {isError && (
        <ErrorBlock
          title="An error occurred"
          message={"Failed to fetch data"}
        ></ErrorBlock>
      )}
      {data &&
        !isLoading &&(
          <>
          {console.log(data)}
            <div className="pocComponent">
              <EmptyGrid />
              {/* <ResponsiveGridLayout
                className="layout gridbg"
                layout={data.layout}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                rowHeight={30}
                width={1200}
                onLayoutChange={handleLayoutChange}
                verticalCompact={false}
              >
                {renderData.map((mapData) => {
                  return (
                    <div key={mapData.id}>
                      <Card id={mapData.id} title={mapData.title} />
                    </div>
                  );
                })}
              </ResponsiveGridLayout> */}
              <ReactGridLayout
              className="layout"
              layout={data.layout}
              cols={12}
              rowHeight={70}
              width={1200}
              onLayoutChange={handleLayoutChange}
              compactType= {null}
              >
                  {renderData.map((mapData) => {
                  return (
                    <div key={mapData.id}>
                      <Card id={mapData.id} title={mapData.title} />
                    </div>
                  );
                })}
              </ReactGridLayout>
            </div>
          </>
        )}
    </div>
  );
};

export default Grid;
