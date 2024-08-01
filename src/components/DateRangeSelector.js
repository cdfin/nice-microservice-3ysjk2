import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DateRangeSelector = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleApply = () => {
    if (startDate && endDate) {
      onDateChange(startDate, endDate);
    }
  };

  return (
    <Box display="flex" alignItems="center" mb={2}>
      <DatePicker
        label="Start Date"
        value={startDate}
        onChange={(newValue) => setStartDate(newValue)}
        renderInput={(params) => <TextField {...params} />}
      />
      <Box mx={2}>to</Box>
      <DatePicker
        label="End Date"
        value={endDate}
        onChange={(newValue) => setEndDate(newValue)}
        renderInput={(params) => <TextField {...params} />}
      />
      <Button onClick={handleApply} variant="contained" sx={{ ml: 2 }}>
        Apply
      </Button>
    </Box>
  );
};

export default DateRangeSelector;
