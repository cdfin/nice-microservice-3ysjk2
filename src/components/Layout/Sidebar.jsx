import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Dashboard, TrendingUp, Email } from "@mui/icons-material";

const drawerWidth = 240;

function Sidebar() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        {["Dashboard", "Analytics", "Email"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 ? (
                <Dashboard />
              ) : index === 1 ? (
                <TrendingUp />
              ) : (
                <Email />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
