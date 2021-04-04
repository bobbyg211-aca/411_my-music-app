import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Switch,
  Typography,
} from "@material-ui/core";

export default function OnlineMode(props) {
  const { handleSwitch } = props;

  return (
    <Card className="card">
      <CardContent>
        <Typography>
          <h3>Online Mode</h3>
          <p>Is this application connected to the internet?</p>
        </Typography>
      </CardContent>

      <CardActions>
        <Switch onChange={handleSwitch}></Switch>
      </CardActions>
    </Card>
  );
}
