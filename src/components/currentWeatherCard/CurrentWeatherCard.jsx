import React from "react";
import "./currentWeatherCard.css";
import ReactAnimatedWeather from "react-animated-weather";

const CurrentWeatherCard = ({weatherData}) => {
    const weatherIconMapping = {
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
        "02n": "PARTLY_CLOUDY_NIGHT",
        "03d": "PARTLY_CLOUDY_DAY",
        "03n": "PARTLY_CLOUDY_NIGHT",
        "04d": "CLOUDY",
        "04n": "CLOUDY",
        "09d": "RAIN",
        "09n": "RAIN",
        "10d": "RAIN",
        "10n": "RAIN",
        "11d": "RAIN",
        "11n": "RAIN",
        "13d": "SNOW",
        "13n": "SNOW",
        "50d": "FOG",
        "50n": "FOG",
    };
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let hour = weatherData.date.getHours();
    let minutes = weatherData.date.getMinutes();
    if (hour < 10) {
        hour = `0${hour}`;
    }

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return (
        <div className="current-weather-card">
            <ReactAnimatedWeather icon={weatherIconMapping[weatherData.icon]}
                                  color={'white'}
                                  size={64}
                                  animate={true}/>
            <div className="current-temp-wrapper">
                <span className="current-temp">
                    <span>{weatherData.temperature}° </span>
                    <button className="temp-unit" title="Change unit">C</button>
                </span>
                <span className="current-weather-desc">, {weatherData.description}</span>
            </div>
            <div className="current-date-time">
                <span id="current-day-of-week">{daysOfWeek[weatherData.date.getDay()]}, </span>
                <span className="current-time">{hour}:{minutes}</span>
            </div>
        </div>
    );
};

export default CurrentWeatherCard;