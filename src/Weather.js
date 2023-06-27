import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather(props){
  const[weatherData, setWeatherData]= useState({ ready: false });
 

  function handelResponse(response){
    console.log(response.data);
    setWeatherData({
      
      ready: true,
      city: response.data.city,
      date:"wednesday 10:00 ",
      description: response.data.condition.description,
      icon_url: response.data.condition.icon_url,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }

  if (weatherData.ready){
    return (
      <div className="Weather">
        <div className="container">
          <form>
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

          <h1>{weatherData.city}</h1>
          <ul>
            <li>{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
          <div className="row mt-3">
            <div className="col-6 d-flex">
              <img
                src={weatherData.icon_url}
                alt={weatherData.description}
                className="float-left"
              />

              <span className="temperature">{weatherData.temperature}</span>
              <span className="unit">°C</span>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity:{weatherData.humidity}%</li>
                <li>Wind:{weatherData.wind}km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else{
  const apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handelResponse);
  
    return("Loading...");
  }

  

  
 
}
 
          