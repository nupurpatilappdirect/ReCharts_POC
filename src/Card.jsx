import GraphCard from "./GraphCard";
import AreaChartComponent from "./AreaChart";
import BarChartComponent from "./BarChart";
import LineChartComponent from "./LineChart";

function Card({ id, title }) {
  return (
    <div id="Card">
      <GraphCard title={title} />
      {id === "a" && <AreaChartComponent />}
      {id === "b" && <BarChartComponent />}
      {id === "c" && <LineChartComponent />}
    </div>
  );
}

export default Card;
