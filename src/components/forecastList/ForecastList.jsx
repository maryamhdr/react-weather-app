import React from "react";
import "./forecastList.css";

const ForecastList = () => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
        <div className="forecast-list">
            {daysOfWeek.map((day, index) => {
                return (
                    <div class="forecast-card" key={index}>
                        <div class="forecast-day">{day}</div>
                        <img
                            class="forecast-icon"
                            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
                            alt="Weahter Icon"
                        />
                        <div class="forecast-temp">
                            <span class="max-temp">15°</span>
                            <span class="min-temp">5°</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ForecastList;