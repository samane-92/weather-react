import React, { useState } from "react";
import axios from "axios";
import WeatherDaily from "./WeatherDaily";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);
  const [ready, setReady] = useState(false);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {/* No need for eslint-disable-next-line */}
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherDaily data={dailyForecast} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
