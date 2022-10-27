import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function ForecastIcon(props) {
  const defaults = {
    icon: "CLEAR_DAY",
    color: "goldenrod",
    size: 20,
    animate: true,
  };

  return (
    <ReactAnimatedWeather
      icon={defaults.icon}
      color={defaults.color}
      size={defaults.size}
      animate={defaults.animate}
    />
  );
}
