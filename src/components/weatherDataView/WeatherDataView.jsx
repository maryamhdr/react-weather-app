import React from "react";
import "./weatherDataView.css";
import CurrentWeatherCard from "../currentWeatherCard/CurrentWeatherCard";
import CurrentWindBox from "../currentWindBox/CurrentWindBox";
import CurrentHumidityBox from "../currentHumidityBox/CurrentHumidityBox";
import CurrentPlaceBox from "../currentPlaceBox/CurrentPlaceBox";

const WeatherDataView = ({weatherData}) => {
    return (
        <div className="weather-data-container">
            <div className="city-info-container">
                <CurrentWeatherCard weatherData={weatherData}/>
                <div className="row-container">
                    <CurrentWindBox wind={weatherData.wind}/>
                    <CurrentHumidityBox humidity={weatherData.humidity}/>
                    <CurrentPlaceBox city={weatherData.city} country={weatherData.country}/>
                </div>
            </div>
        </div>
    );
};

export default WeatherDataView;