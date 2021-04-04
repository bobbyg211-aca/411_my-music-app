import React from "react";
import { Card, Switch, Typography } from "@material-ui/core";

export default function SystemNotifications(props) {
  const { isConnected, sliderValue, selectValue } = props;

  return (
    <div>
      <h2>System Notifications:</h2>
      {!isConnected && (
        <Typography>
          <p>
            Your application is offline. You won't be able to share or stream
            music to other devices.
          </p>
        </Typography>
      )}

      {sliderValue > 80 && (
        <Typography>
          <p>
            Listening to music at a high volume could cause long-term hearing
            loss.
          </p>
        </Typography>
      )}

      {selectValue === 1 && (
        <Typography>
          <p>
            Music quality is degraded. Increase quality if your connection
            allows it.
          </p>
        </Typography>
      )}
    </div>
  );
}
