import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Forecast() {
  return (
    <div className="forecast">
      <div class="row">
        <div class="col-sm-2">
          <div class="day">Sun</div>
          <span class="emoji">
            <img src="☀️" alt="arial-label" />
          </span>
          <div class="temp">12</div>
        </div>
        <div class="col-sm-2">
          <div class="day">Mon</div>
          <div class="temp">12</div>
        </div>
        <div class="col-sm-2">
          <div class="day">Tue</div>
          <div class="temp">12</div>
        </div>
        <div class="col-sm-2">
          <div class="day">Wed</div>
          <div class="temp">12</div>
        </div>
      </div>
    </div>
  );
}
