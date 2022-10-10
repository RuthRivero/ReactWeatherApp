import React from "react";

export default function Forecast() {
  return (
    <div>
      <div class="row">
        <div class="col-sm-2">
          <div class="day">Sun</div>
          <div class="day-icon">☀️</div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-2">
          <div class="day">Mon</div>
          <div class="day-icon">☀️</div>
        </div>
      </div>
      <div class="col-sm-2">
        <div class="day">Tue</div>
        <div class="day-icon">☀️</div>
      </div>
      <div class="col-sm-2">
        <div class="day">Wed</div>
        <div class="day-icon">☀️</div>
      </div>
      <div class="col-sm-2">
        <div class="day">Thu</div>
        <div class="day-icon">☀️</div>
      </div>
      <div class="col-sm-2">
        <div class="day">Fri</div>
        <div class="day-icon">☀️</div>
      </div>
      <div class="col-sm-2">
        <div class="day">Sat</div>
        <div class="day-icon">☀️</div>
      </div>
    </div>
  );
}
