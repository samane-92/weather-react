import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";


export default function WeatherForecast(props){
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="weatherForcast-day"> Thu</div>
            <div>
              {" "}
              <WeatherIcon code="clear-sky-day" size={36} />
            </div>
            <div className="weatherForecast-temperature">
              <span className="weatherForecast-temperature-max"> 19°</span>
              <span className="weatherForecast-temperature-min"> 12°</span>
            </div>
          </div>
        </div>
      </div>
    );
}