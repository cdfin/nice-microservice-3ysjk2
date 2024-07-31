import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { fetchDashboardDataAsync } from "../redux/dashboardSlice";
import ApexMixedChart from "../Dashboard/ApexMixedChart";
import ApexAreaChart from "../Dashboard/ApexAreaChart";
import useDataRefresh from "../../hooks/useDataRefresh";

const useDataRefresh = (initialInterval = 30000) => {
  const [refreshInterval, setRefreshInterval] = useState(initialInterval);
  const dispatch = useDispatch();

  const refreshData = useCallback(() => {
    dispatch(fetchDashboardDataAsync());
  }, [dispatch]);

  useEffect(() => {
    const intervalId = setInterval(refreshData, refreshInterval);

    return () => clearInterval(intervalId);
  }, [refreshInterval, refreshData]);

  const setNewRefreshInterval = (newInterval) => {
    setRefreshInterval(newInterval);
  };

  return { refreshData, setNewRefreshInterval };
};

export default useDataRefresh;
