import React from "react";
import FormatDate from "./FormatDate";


export default function WeatherInfo(props){

    return(
    <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
          <ul>
            <li><FormatDate date={props.data.date} /></li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
          <div className="row mt-3">
            <div className="col-6 d-flex">
              <img
                src={props.data.icon_url}
                alt={props.data.description}
                className="float-left"
              />

              <span className="temperature">{props.data.temperature}</span>
              <span className="unit">°C</span>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity:{props.data.humidity}%</li>
                <li>Wind:{props.data.wind}km/h</li>
              </ul>
            </div>
          </div>
          </div>
        );

}