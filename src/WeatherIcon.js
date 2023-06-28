import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props){
    const codeMapping = {
      " Clear-sky-day": "CLEAR_DAY",
      " Clear-sky-night": "CLEAR_NIGHT",
      " Few-clouds-day": "PARTLY_CLOUDY_DAY",
      " Few-clouds-night": "PARTLY_CLOUDY__NIGHT",
      " Scattered-clouds-day": "CLOUDY",
      " Scattered-clouds-night": "CLOUDY",
      " Broken-clouds-day": "CLOUDY",
      " Broken-clouds-night": "CLOUDY",
      " Shower-rain-day": "RAIN",
      " Shower-rain-night": "RAIN",
      " Rain-day": "RAIN",
      " Rain-night": "RAIN",
      " Thunderstorm-day": "WIND",
      " Thunderstorm-night": "WIND",
      " Mist-day": "WIND",
      " Mist-night": "WIND",
      " Snow-day": "SNOW",
      " Snow-night": "SNOW",
    };

    return (
      <ReactAnimatedWeather
        icon={codeMapping[props.code.icon]}
        color="black"
        size={64}
        animate={true}
      />
    );
}
