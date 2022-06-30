import React from "react";
import { WidgetWrapper } from "./WidgetWrapper";
import { Bar } from "react-chartjs-2/";
import { Chart } from "chart.js";
import * as Chartjs from "chart.js";
import { Hour } from "../../interfaces/currentForecast";
import { formatDate } from "../../utils/formatDate";
import { BarElement, CategoryScale, Legend, LinearScale } from "chart.js";

// See https://react-chartjs-2.netlify.app/docs/migration-to-v4#tree-shaking
Chart.register(BarElement, CategoryScale, LinearScale, Legend);

export const HourForecast = ({ info }: { info: Hour[] }) => {
  // eslint-disable-next-line no-console
  console.log(info);
  const labels = info.map((hour) =>
    formatDate({ hour: "numeric" }, new Date(hour.time))
  );
  const data = {
    labels: labels,
    datasets: [
      {
        data: info.map((hour) => [hour.temp_c, hour.temp_c + 3]),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
      },
    ],
  };
  return (
    <WidgetWrapper title="Hour Forecast">
      <Bar
        data={data}
        options={{
          plugins: { legend: { display: false } },
          layout: {
            padding: { top: 30 },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </WidgetWrapper>
  );
};
