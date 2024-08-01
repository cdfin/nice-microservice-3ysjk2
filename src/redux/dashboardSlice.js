import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchDashboardData,
  fetchKPIData,
  fetchChartData,
} from "../services/api";

export const fetchDashboardDataAsync = createAsyncThunk(
  "dashboard/fetchDashboardData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchDashboardData();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchKPIDataAsync = createAsyncThunk(
  "dashboard/fetchKPIData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchKPIData();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchChartDataAsync = createAsyncThunk(
  "dashboard/fetchChartData",
  async (chartType, { rejectWithValue }) => {
    try {
      const response = await fetchChartData(chartType);
      return { chartType, data: response.data };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  kpis: [],
  lineChartData: [],
  barChartData: [],
  loading: false,
  error: null,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Dashboard Data
      .addCase(fetchDashboardDataAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboardDataAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.kpis = action.payload.kpis;
        state.lineChartData = action.payload.lineChartData;
        state.barChartData = action.payload.barChartData;
      })
      .addCase(fetchDashboardDataAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // KPI Data
      .addCase(fetchKPIDataAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchKPIDataAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.kpis = action.payload;
      })
      .addCase(fetchKPIDataAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Chart Data
      .addCase(fetchChartDataAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChartDataAsync.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.chartType === "line") {
          state.lineChartData = action.payload.data;
        } else if (action.payload.chartType === "bar") {
          state.barChartData = action.payload.data;
        }
      })
      .addCase(fetchChartDataAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default dashboardSlice.reducer;
