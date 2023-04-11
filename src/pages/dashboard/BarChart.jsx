import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

export const BarChart = () => {
    const [chartOptions] = useState({
        plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: [
              "South Korea",
              "Canada",
              "United Kingdom",
              "Netherlands",
              "Italy",
              "France",
              "Japan",
              "United States",
              "China",
              "Germany",
            ],
          },
      });
    
      const [chartSeries] = useState([
        {
          data: [
            400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380,
          ],
        },
      ]);
    return (
        <div id="donutChart">
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="bar"
            height={350}
          />
        </div>
    )
}
