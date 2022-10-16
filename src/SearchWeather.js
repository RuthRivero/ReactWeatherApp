import React, { useState } from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";

export default function SearchWeather(props) {
  let [city, setCity] = useState();
  let [weather, setWeather] = useState({ icon: "", description: "" });
  let [message, setMessage] = useState();
  let [icon, setIcon] = useState({});
  let [wind, setWind] = useState();
  let [humidity, setHumidity] = useState();
  let [today, setToday] = useState(new Date());

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
    setToday(new Date(response.data.dt * 1000));
    setMessage(`${Math.round(response.data.main.temp)} °C`);
    setWind(`Wind: ${Math.round(response.data.wind.speed)}km/h`);
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
      <CurrentDate date={today} />
      <h2>{message}</h2>
      <h3>{wind}</h3>
      <h4>{humidity}</h4>
      <div className="icon">
        <img src={icon} alt={weather.description} />
      </div>
    </div>
  );
}
