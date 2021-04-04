import { Slider } from "@material-ui/core";
import React, { useState } from "react";
import MasterVolume from "./MasterVolume";
import OnlineMode from "./OnlineMode";
import SoundQuality from "./SoundQuality";
import SystemNotifications from "./SystemNotifications";

export default function Dashboard() {
  const [isConnected, setIsConnected] = useState(false);
  const [sliderValue, setSliderValue] = useState();
  const [selectValue, setSelectValue] = useState(2);

  const handleSwitch = (e) => {
    setIsConnected(!isConnected);
  };

  const handleSlide = (e, val) => {
    setSliderValue(val);
  };

  const handleSelect = (e, option) => {
    setSelectValue(option.props.value);
  };

  return (
    <div className="container dashboard">
      <h1>Welcome User!</h1>
      <div className="card-wrapper">
        <OnlineMode handleSwitch={handleSwitch} />
        <MasterVolume handleSlide={handleSlide} />
        <SoundQuality selectValue={selectValue} handleSelect={handleSelect} />
      </div>

      <SystemNotifications
        isConnected={isConnected}
        sliderValue={sliderValue}
        selectValue={selectValue}
      />
    </div>
  );
}
