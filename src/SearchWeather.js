import React, { useState } from "react";
import axios from "axios";

export default function SearchWeather() {
  let [city, setCity] = useState();
  let [weather, setWeather] = useState({});
  let [message, setMessage] = useState();
  let [icon, setIcon] = useState();
  let [wind, setWind] = useState();
  let [humidity, setHumidity] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bb0d4750adbaf8dd371419162d9174d1&units=metric`;
    axios.get(url).then(showWeather);
  }

  function newCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setWeather({
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
    setMessage(`${Math.round(response.data.main.temp)} °C`);
    setWind(`Wind: ${Math.round(response.data.wind.speed)}k/s`);
    setHumidity(`Humidity: ${response.data.main.humidity}%`);
    setIcon(
      "http://openweathermap.org/img/wn/" +
        response.data.weather[0].icon +
        "@2x.png"
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type city..." onChange={newCity} />
        <button type="submit">Search</button>
      </form>
      <h2>{message}</h2>
      <h3>{wind}</h3>
      <h4>{humidity}</h4>
      <div className="icon">
        <img src={icon} alt={weather.description} />
      </div>
    </div>
  );
}
