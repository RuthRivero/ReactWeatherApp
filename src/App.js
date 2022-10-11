import React from "react";
import "./App.css";
import Forecast from "./Forecast";
import SearchWeather from "./SearchWeather";

function App() {
  return (
    <div className="container">
      <h1>Weather search engine</h1>
      <SearchWeather />
      <Forecast />
      <a href="https://github.com/RuthRivero/ReactWeatherApp">
        Open source code by Ruth Rivero
      </a>
    </div>
  );
}

export default App;
