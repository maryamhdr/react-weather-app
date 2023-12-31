import React from "react";
import "./currentWeatherCard.css";

const CurrentWeatherCard = ({weatherData}) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let hour = weatherData.date.getHours();
    let minutes = weatherData.date.getMinutes();
    if(hour < 10) {
        hour = `0${hour}`;
    }

    if(minutes < 10) {
        minutes = `0${minutes}`;
    }

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
                <span id="current-day-of-week">{daysOfWeek[weatherData.date.getDay()]}, </span>
                <span className="current-time">{hour}:{minutes}</span>
            </div>
        </div>
    );
};

export default CurrentWeatherCard;