import React, {useState, useEffect} from "react";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";
import "./forecastList.css";

const ForecastList = ({coords}) => {
    const [loading, setLoading] = useState(true);
    const [forecastData, setForecastData] = useState(null);
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
    const apiKey = "99b8f9330a1bfba3a85e523fd3c2e528";

    useEffect(() => {
        setLoading(true);
        const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then((response) => {
            setForecastData(response.data.daily);
            setLoading(false);
        });
    }, [coords]);

    const getDay = (dayDate) => {
        const date = new Date(dayDate * 1000);
        const day = date.getDay();
        return daysOfWeek[day];
    };

    return (
        <div className="forecast-list">
            {!loading && forecastData.map((day, index) => {
                if (index < 5) {
                    return (
                        <div className="forecast-card" key={index}>
                            <div className="forecast-day">{getDay(day.dt)}</div>
                            <ReactAnimatedWeather icon={weatherIconMapping[day.weather[0].icon]}
                                                  color={'#E6A916'}
                                                  size={32}
                                                  animate={true}/>
                            <div className="forecast-temp">
                                <span className="max-temp">{Math.round(day.temp.max)}°</span>
                                <span className="min-temp">{Math.round(day.temp.min)}°</span>
                            </div>
                        </div>
                    );
                } else {
                    return null;
                }
            })}
        </div>
    );
};

export default ForecastList;