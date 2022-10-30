import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";
import WeatherTemperature from "./WeatherTemperature";
import Forecast from "./Forecast";

export default function SearchWeather(props) {
  let [city, setCity] = useState("Madrid");
  let [weather, setWeather] = useState({ icon: "", description: "" });
  let [celsius, setCelsius] = useState(0);
  let [icon, setIcon] = useState({});
  let [wind, setWind] = useState();
  let [humidity, setHumidity] = useState();
  let [today, setToday] = useState(new Date());
  let [coords, setCoords] = useState({});
  let [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setLoaded(false);
  }, [city]);

  function handleSubmit(event) {
    event.preventDefault();
    setCity(event.target.children.item(0).value);
    search();
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bb0d4750adbaf8dd371419162d9174d1&units=metric`;
    axios.get(url).then(showWeather);
  }

  function showWeather(response) {
    setWeather({
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
    setToday(new Date(response.data.dt * 1000));
    setCelsius(Math.round(response.data.main.temp));
    setWind(`Wind: ${Math.round(response.data.wind.speed)}km/h`);
    setHumidity(`Humidity: ${response.data.main.humidity}%`);
    setCoords(response.data.coord);
    setIcon(
      "http://openweathermap.org/img/wn/" +
        response.data.weather[0].icon +
        "@2x.png"
    );
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="search" placeholder="Type city..." />
          <button type="submit">Search</button>
        </form>
        <CurrentDate date={today} />
        <WeatherTemperature celsius={celsius} />
        <div className="icon">
          <img src={icon} alt={weather.description} />
        </div>
        <span>
          <h3>{wind}</h3>
          <h4>{humidity}</h4>
        </span>
        <Forecast coordinates={coords} />
      </div>
    );
  } else {
    search();
  }
}
