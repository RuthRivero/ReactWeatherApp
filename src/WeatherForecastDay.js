import React from "react";
import ForecastIcon from "./ForecastIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="day">{day()}</div>
      <ForecastIcon code={props.data.weather[0].icon} />
      <div className="high">{maxTemperature()}</div>
      <div className="low">{minTemperature()}</div>
    </div>
  );
}
