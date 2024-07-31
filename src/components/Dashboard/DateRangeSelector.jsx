import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function DateRangeSelector({ onDateChange }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleApply = () => {
    if (startDate && endDate) {
      onDateChange(startDate, endDate);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <DatePicker
          label="Start Date"
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
          renderInput={(params) => <div {...params} />}
        />
        <Box sx={{ mx: 2 }}>to</Box>
        <DatePicker
          label="End Date"
          value={endDate}
          onChange={(newValue) => setEndDate(newValue)}
          renderInput={(params) => <div {...params} />}
        />
        <Button onClick={handleApply} variant="contained" sx={{ ml: 2 }}>
          Apply
        </Button>
      </Box>
    </LocalizationProvider>
  );
}

export default DateRangeSelector;
