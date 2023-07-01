import React, { useState } from "react";


export default function WeatherUnits(props){
    let[unit,setUnit]= useState("celsius ");

    function fahrenheit(){
      return(Math.round(props.unit * 9/5) + 32);

    }

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    if(unit==="celsius"){
      return (
        <div className="WeatherUnits">
          <span className="temperature">{props.unit}</span>
          <span className="unit">
            °C /
            <a href="/" onClick={showFahrenheit}>
              °F{" "}
            </a>
          </span>
        </div>
      );
    }else{
      return (
        <div className="WeatherUnits">
          <span className="temperature">{fahrenheit()}</span>
          <span className="unit">
            <a href="/" onClick={showCelsius}>
              °C{" "}
            </a>
            / °F
          </span>
        </div>
      );
        }
    
}