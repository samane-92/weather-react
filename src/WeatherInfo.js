import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnits from "./WeatherUnits";

export default function WeatherInfo(props){

    return (
      <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormatDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6 d-flex">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={52}/>
            </div>
            <div className="float-left">
              <div>
                <WeatherUnits unit={props.data.temperature} />
              </div>
            </div>
          </div>
          <div className="col-6 quality">
            <ul>
              <li>Humidity:{props.data.humidity}%</li>
              <li>Wind:{props.data.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );

}