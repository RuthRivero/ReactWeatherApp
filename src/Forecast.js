import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Forecast() {
  return (
    <div className="row">
      <div className="col-sm-2">
        <div className="day">Sun</div>
        <div className="temp">12</div>
      </div>
      <div className="col-sm-2">
        <div className="day">Mon</div>
        <div className="temp">12</div>
      </div>
    </div>
  );
}
