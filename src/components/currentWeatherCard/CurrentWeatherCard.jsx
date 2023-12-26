import React from "react";
import "./currentWeatherCard.css";

const CurrentWeatherCard = () => {
    return (
        <div className="current-weather-card">
            <img className="current-weahter-img" src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" alt="Weather icon"/>
            <div className="current-temp-wrapper">
        <span className="current-temp">
          <span>15° </span>
          <button className="temp-unit" id="temp-unit-btn" title="Change unit">
            C
          </button>
        </span>
                <span className="current-weather-desc">, clear sky</span>
            </div>
            <div className="current-date-time">
                <span id="current-day-of-week">Sunday,</span>
                <span className="time-txt" id="current-time">
          15:59
        </span>
            </div>
        </div>
    );
};

export default CurrentWeatherCard;