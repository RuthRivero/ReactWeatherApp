import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Forecast() {
  return (
    <div className="row">
      <div className="col-sm-2">
        <div className="day">Sun</div>
        <div className="high">H 12</div>
        <div className="low">L 5</div>
      </div>
      <div className="col-sm-2">
        <div className="day">Mon</div>
        <div className="high">H 12</div>
        <div className="low">L 5</div>
      </div>
      <div className="col-sm-2">
        <div className="day">Tue</div>
        <div className="high">H 12</div>
        <div className="low">L 5</div>
      </div>
      <div className="col-sm-2">
        <div className="day">Wed</div>
        <div className="high">H 12</div>
        <div className="low">L 5</div>
      </div>
      <div className="col-sm-2">
        <div className="day">Thu</div>
        <div className="high">H 12</div>
        <div className="low">L 5</div>
      </div>
    </div>
  );
}
