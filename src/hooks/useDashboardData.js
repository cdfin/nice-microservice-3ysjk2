import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardDataAsync } from "../redux/dashboardSlice";

export const useDashboardData = () => {
  const dispatch = useDispatch();
  const { kpis, lineChartData, barChartData, loading, error } = useSelector(
    (state) => state.dashboard
  );

  useEffect(() => {
    dispatch(fetchDashboardDataAsync());
  }, [dispatch]);

  return { kpis, lineChartData, barChartData, loading, error };
};
