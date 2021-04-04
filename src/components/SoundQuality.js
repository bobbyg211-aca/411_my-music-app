import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";

export default function SoundQuality(props) {
  const { handleSelect, selectValue } = props;

  return (
    <Card className="card">
      <CardContent>
        <Typography>
          <h3>Sound Quality</h3>
          <p>Manually control the music quality in event of poor connection.</p>
        </Typography>
      </CardContent>

      <CardActions>
        <Select onChange={handleSelect} value={selectValue} fullWidth>
          <MenuItem value={1}>Low</MenuItem>
          <MenuItem value={2}>Normal</MenuItem>
          <MenuItem value={3}>High</MenuItem>
        </Select>
      </CardActions>
    </Card>
  );
}
