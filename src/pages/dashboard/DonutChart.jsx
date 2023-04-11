import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

export const DonutChart = () => {
    const [chartOptions] = useState({
        chart: {
          title: "Chart Rates",
          height: 350,
          type: "donut",
          toolbar: {
            show: true,
          },
        },
        labels: [
          "January",
          "February",
          "Match",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      });
    
      const [chartSeries] = useState([
        12, 55, 13, 43, 22, 14, 32, 100, 32, 10, 32, 11,
      ]);
    return (
        <div id="donutChart">
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="donut"
            height={350}
          />
        </div>
    )
}
