import React, { useState } from "react";
import { Card, Switch, Typography } from "@material-ui/core";

export default function OnlineMode() {
  const [isConnected, setIsConnected] = useState(false);

  const handleChange = (e) => {
    setIsConnected(!isConnected);
  };

  return (
    <Card className="card">
      <Typography>
        <h3>Online Mode</h3>
        <p>Is this application connected to the internet?</p>
      </Typography>

      <Switch onChange={handleChange}></Switch>
      {!isConnected && (
        <Typography>
          <p>
            Your application is offline. You won't be able to share or stream
            music to other devices.
          </p>
        </Typography>
      )}
    </Card>
  );
}
