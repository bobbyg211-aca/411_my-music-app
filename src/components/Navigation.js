import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Navigation = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          My Music App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
