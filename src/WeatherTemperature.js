import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function farenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <h2>
          <span className="temperature">{props.celsius}</span>
          <span className="unit">
            {" "}
            C |
            <a href="/" onClick={showFarenheit}>
              F
            </a>
          </span>
        </h2>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <h2>
          <span className="temperature">{Math.round(farenheit())}</span>
          <span className="unit">
            {" "}
            F |
            <a href="/" onClick={showCelsius}>
              C
            </a>
          </span>
        </h2>
      </div>
    );
  }
}
