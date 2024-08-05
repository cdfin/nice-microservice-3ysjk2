import { useEffect, useState } from "react";
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
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        await Promise.all([
          dispatch(fetchDashboardDataAsync()),
          dispatch(fetchKPIDataAsync()),
          dispatch(fetchChartDataAsync("line")),
          dispatch(fetchChartDataAsync("bar")),
        ]);
      } catch (error) {
        console.error("Error loading dashboard data:", error);
      } finally {
        setIsInitialLoad(false);
      }
    };

    if (isInitialLoad) {
      loadData();
    }
  }, [dispatch, isInitialLoad]);

  return {
    kpis,
    lineChartData,
    barChartData,
    loading: loading || isInitialLoad,
    error,
  };
};
