import React from "react";
import "./currentWeatherCard.css";

const CurrentWeatherCard = ({weatherData}) => {
    return (
        <div className="current-weather-card">
            <img className="current-weather-icon" src={weatherData.iconUrl} alt={weatherData.description}/>
            <div className="current-temp-wrapper">
                <span className="current-temp">
                    <span>{weatherData.temperature}° </span>
                    <button className="temp-unit" title="Change unit">C</button>
                </span>
                <span className="current-weather-desc">, {weatherData.description}</span>
            </div>
            <div className="current-date-time">
                <span id="current-day-of-week">Sunday, </span>
                <span className="current-time">15:59</span>
            </div>
        </div>
    );
};

export default CurrentWeatherCard;