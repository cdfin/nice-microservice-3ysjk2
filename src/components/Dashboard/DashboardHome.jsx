import React from "react";
import { Grid, Typography, Button, CircularProgress, Box } from "@mui/material";
import KPICard from "./KPICard";
import ChartCard from "./ChartCard";
import BarChartCard from "./BarChartCard";
import ApexAreaChart from "./ApexAreaChart";
import DateRangeSelector from "./DateRangeSelector";
import { useDashboardData } from "../../hooks/useDashboardData";
import { useDispatch } from "react-redux";
import {
  fetchKPIDataAsync,
  fetchChartDataAsync,
  fetchDashboardDataAsync,
} from "../../redux/dashboardSlice";

function DashboardHome() {
  const dispatch = useDispatch();
  const { kpis, lineChartData, barChartData, loading, error } =
    useDashboardData();

  const handleRefreshKPIs = () => {
    dispatch(fetchKPIDataAsync());
  };

  const handleRefreshCharts = () => {
    dispatch(fetchChartDataAsync("line"));
    dispatch(fetchChartDataAsync("bar"));
  };

  const handleDateChange = (startDate, endDate) => {
    console.log("Date range selected:", startDate, endDate);
    dispatch(fetchDashboardDataAsync());
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box>
        <Typography variant="h6" color="error">
          Error: {error}
        </Typography>
        <Button
          onClick={() => dispatch(fetchDashboardDataAsync())}
          variant="contained"
          color="primary"
        >
          Retry
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <DateRangeSelector onDateChange={handleDateChange} />
      <Grid container spacing={3}>
        {kpis.map((kpi, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <KPICard {...kpi} />
          </Grid>
        ))}
        <Grid item xs={12} md={6}>
          <ChartCard title="Revenue Trend" data={lineChartData} />
        </Grid>
        <Grid item xs={12} md={6}>
          <BarChartCard title="Category Distribution" data={barChartData} />
        </Grid>
        <Grid item xs={12}>
          <ApexAreaChart title="Market Trends" data={lineChartData} />
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={handleRefreshKPIs}
            variant="contained"
            color="primary"
          >
            Refresh KPIs
          </Button>
          <Button
            onClick={handleRefreshCharts}
            variant="contained"
            color="secondary"
            sx={{ ml: 2 }}
          >
            Refresh Charts
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DashboardHome;
