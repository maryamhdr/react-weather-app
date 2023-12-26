import React from "react";
import "./weatherForecastView.css";
import CurrentWeatherCard from "../currentWeatherCard/CurrentWeatherCard";
import CurrentWindBox from "../currentWindBox/CurrentWindBox";
import CurrentHumidityBox from "../currentHumidityBox/CurrentHumidityBox";
import CurrentPlaceBox from "../currentPlaceBox/CurrentPlaceBox";

const WeatherForecastView = () => {
    return (
        <div className="weather-result-container" id="weather-result-container">
            <div className="city-info-container">
                <CurrentWeatherCard />
                <div className="row-container">
                    <CurrentWindBox />
                    <CurrentHumidityBox />
                    <CurrentPlaceBox />
                </div>
            </div>
        </div>
    );
};

export default WeatherForecastView;