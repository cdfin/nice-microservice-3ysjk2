import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDashboardDataAsync,
  fetchKPIDataAsync,
  fetchChartDataAsync,
} from "../redux/dashboardSlice";

export const useDashboardData = () => {
  const dispatch = useDispatch();
  const { kpis, lineChartData, barChartData, loading, error } = useSelector(
    (state) => state.dashboard
  );

  useEffect(() => {
    const loadData = async () => {
      await dispatch(fetchDashboardDataAsync());
      await dispatch(fetchKPIDataAsync());
      await dispatch(fetchChartDataAsync("line"));
      await dispatch(fetchChartDataAsync("bar"));
    };
    loadData();
  }, [dispatch]);

  return { kpis, lineChartData, barChartData, loading, error };
};
