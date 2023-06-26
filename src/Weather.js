import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather(){
  const[ready, setReady] = useState(false);
  let[temperature, setTemperature] = useState(null);

    function handelResponse(response){
        setReady(true)
        setTemperature(response.data.temperature);
    }
    
    
        if (ready){
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

                <h1>New York</h1>
                <ul>
                  <li> </li>
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

                    <span className="temperature"> {temperature}</span>
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
        }else{
          let city = "New York";
        const apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
          let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
          axios.get(apiUrl).then(handelResponse());

          return("Loading...");
        }
}