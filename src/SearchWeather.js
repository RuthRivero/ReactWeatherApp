import React, { useState } from "react";
import axios from "axios";

export default function SearchWeather() {
  let [city, setCity] = useState();
  let [weather, setWeather] = useState({});
  let [message, setMessage] = useState();
  let [icon, setIcon] = useState();

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
    setMessage(
      `It is ${Math.round(response.data.main.temp)} °C | Wind: ${Math.round(
        response.data.wind.speed
      )}k/s | Humidity: ${response.data.main.humidity}%`
    );
    setIcon(showWeather.icon);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type city..." onChange={newCity} />
        <button type="submit">Search</button>
      </form>
      <p>{message}</p>
      <div className="icon">
        <img src={weather.icon} alt={weather.description} />
      </div>
    </div>
  );
}
