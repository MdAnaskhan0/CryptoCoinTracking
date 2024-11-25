import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let chartData = [["Date", "Prices"]];
    if (historicalData?.prices) {
      historicalData.prices.map((item) => {
        chartData.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ]);
      });
      setData(chartData);
    }
  }, [historicalData]);

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md">
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        legendToggle
        options={{
          title: "Price Over Time",
          hAxis: { title: "Time" },
          vAxis: { title: "Price" },
        }}
      />
    </div>
  );
};

export default LineChart;
