import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function KPICard({ title, value, unit }) {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="div">
          {value}
          <Typography variant="caption" component="span">
            {unit}
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default KPICard;
