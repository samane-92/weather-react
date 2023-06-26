import React from "react";
import "./Weather.css";


export default function Weather(){
    return (
      <div className="Weather">
        <div className="container">
          <form className="form">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control"
                  autoFocus
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>

          <h1>New York</h1>
          <ul>
            <li>Wednesday 10:00 </li>
            <li>Mostly cloudy</li>
          </ul>
          <div className="row mt-3">
            <div className="col-6 d-flex">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt=" mostly
              cloudy"
                className="float-left"
              />
             
                <span className="temperature"> 6</span>
                <span className="unit"> °C</span>
             
            </div>
            <div className="col-6">
              <ul>
                <li>Percipitation: 15%</li>
                <li>Humidity:72%</li>
                <li>Wind:15km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}