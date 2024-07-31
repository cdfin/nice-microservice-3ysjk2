import React from "react";
import { Typography, Container, Box } from "@mui/material";

function AdminDashboard() {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>
        <Typography variant="body1">
          This page is only accessible to users with admin role.
        </Typography>
      </Box>
    </Container>
  );
}

export default AdminDashboard;
