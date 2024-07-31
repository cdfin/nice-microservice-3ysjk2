import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const ApexAreaChart = ({ title, data }) => {
  const areaOptions = {
    chart: {
      type: "area",
      height: 350,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: true,
      },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    markers: {
      size: 5,
      colors: ["#000524"],
      strokeColor: "#00BAEC",
      strokeWidth: 3,
    },
    tooltip: {
      theme: "dark",
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          colors: "#A0AEC0",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#A0AEC0",
        },
      },
    },
  };

  const areaSeries = [
    {
      name: "Value",
      data: data.map((item) => [new Date(item.name).getTime(), item.value]),
    },
  ];

  const donutOptions = {
    chart: {
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true,
            },
          },
        },
      },
    },
    labels: data.map((item) => item.name),
    colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"],
  };

  const donutSeries = data.map((item) => item.value);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <ReactApexChart
              options={areaOptions}
              series={areaSeries}
              type="area"
              height={350}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ReactApexChart
              options={donutOptions}
              series={donutSeries}
              type="donut"
              height={350}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ApexAreaChart;
