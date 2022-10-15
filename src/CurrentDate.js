import React, { useState } from "react";

export default function CurrentDate(response) {
  let [date, setDate] = useState();
  setDate(response.data.dt * 1000);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[response.date.getDate()];
  let hours = response.date.getHours();
  let minutes = response.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {date} {day} {hours}:{minutes}
    </div>
  );
}
