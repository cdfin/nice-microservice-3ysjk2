import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardContent, Typography } from "@mui/material";

const ApexMixedChart = ({ title, data }) => {
  const options = {
    chart: {
      height: 350,
      type: "line",
      stacked: false,
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true,
        },
      },
    },
    stroke: {
      width: [0, 2, 5],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: data.map((item) => item.date),
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      title: {
        text: "Points",
      },
      min: 0,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
  };

  const series = [
    {
      name: "Income",
      type: "column",
      data: data.map((item) => item.income),
    },
    {
      name: "Cashflow",
      type: "column",
      data: data.map((item) => item.cashflow),
    },
    {
      name: "Revenue",
      type: "line",
      data: data.map((item) => item.revenue),
    },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={350}
        />
      </CardContent>
    </Card>
  );
};

export default ApexMixedChart;
