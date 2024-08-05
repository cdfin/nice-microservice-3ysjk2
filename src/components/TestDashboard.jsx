import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDashboardDataAsync, setTestData } from "../redux/dashboardSlice";

function TestDashboard() {
  const dispatch = useDispatch();
  const { kpis, lineChartData, barChartData, loading, error } = useSelector(
    (state) => state.dashboard
  );

  const handleFetchData = async () => {
    try {
      await dispatch(fetchDashboardDataAsync()).unwrap();
    } catch (err) {
      console.error("Error in handleFetchData:", err);
    }
  };

  const handleSetTestData = () => {
    dispatch(setTestData());
  };

  return (
    <div>
      <h2>Test Dashboard</h2>
      <button onClick={handleFetchData} disabled={loading}>
        {loading ? "Fetching..." : "Fetch Dashboard Data"}
      </button>
      <button onClick={handleSetTestData}>Set Test Data</button>
      {error && (
        <div style={{ color: "red", marginTop: "10px" }}>
          <p>Error: {error}</p>
          <p>Please check the console for more details.</p>
        </div>
      )}
      <h3>Dashboard State:</h3>
      <pre>
        {JSON.stringify({ kpis, lineChartData, barChartData }, null, 2)}
      </pre>
    </div>
  );
}

export default TestDashboard;
