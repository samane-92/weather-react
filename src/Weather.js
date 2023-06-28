import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";



export default function Weather(props){
  
  const[weatherData, setWeatherData]= useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response){
    
    setWeatherData({
    ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
    });

  }
  function search(){
    const apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    

  }
  function handleSubmit(event){
    event.preventDefault();
    search();
  }
  function handleCityChange(event){
    setCity(event.target.value);

 
  }

  if (weatherData.ready){
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control"
                  autoFocus onChange={handleCityChange}
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
          <WeatherInfo data={weatherData}/>
        </div>
      </div>
    );
  } else{
    search();
    return("Loading...");
  }
}
 
          