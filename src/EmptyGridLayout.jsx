import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

// const ResponsiveGridLayout = WidthProvider(Responsive);

const generateGridLayout = (numRows, numCols) => {
  let layout = [];
  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      layout.push({
        w: 1, // Each grid cell has width 1
        h: 1, // Each grid cell has height 1
        x: y, // Horizontal position
        y: x, // Vertical position
        i: `${x}-${y}`, // Unique key for each cell
        static: true, // Background grid is static
      });
    }
  }
  return layout;
};

const EmptyGrid = ({ rows=24,column=12 }) => {
  const layout = generateGridLayout(rows,column);

  return (
    <GridLayout
      className="emptylayout background-layer"
      layout={layout}
      // breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      // cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      cols={12}
      rows={24}
      rowHeight={30}
      width={600}
      isDraggable={false}
      isResizable={false}
      // items={500}
    >
      {layout.map((item) => (
        <div key={item.i} className="empty-grid-item">
          <div></div>
        </div>
      ))}
    </GridLayout>
  );
};

export default EmptyGrid;
