import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {

function MinTemp(){
    let minTemp = Math.round(props.data.temperature.minimum);
    return `${minTemp}°`;

}

function MaxTemp(){
    let maxTemp = Math.round(props.data.temperature.maximum);
    return `${maxTemp}°`;
}

function day(){
  // eslint-disable-next-line
  let date = new Date(props.data.time * 1000);
  let day = date.getDay();

   let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "sat"];
  
   return days[day];
}
  return (
    <div className="WeatherForecastDay">
      <div className="weatherForcast-day"> {day()}</div>
      <div>
        {" "}
        <WeatherIcon code={props.data.condition.icon} size={36} />
      </div>
      <div className="weatherForecast-temperature">
        <span className="weatherForecast-temperature-max">
          {MaxTemp()}
        </span>
        <span className="weatherForecast-temperature-min">
          {" "}
          {MinTemp()}
        </span>
      </div>
    </div>
  );
}
