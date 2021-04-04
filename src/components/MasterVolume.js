import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Slider,
  Typography,
} from "@material-ui/core";

export default function MasterVolume(props) {
  const { handleSlide } = props;

  return (
    <Card className="card">
      <CardContent>
        <Typography>
          <h3>Master Volume</h3>
          <p>Overrides all other sound settings in this application.</p>
        </Typography>
      </CardContent>

      <CardActions>
        <Slider
          onChange={handleSlide}
          defaultValue={20}
          step={10}
          marks
          min={0}
          max={100}
        ></Slider>
      </CardActions>
    </Card>
  );
}
